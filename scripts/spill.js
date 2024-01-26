// setboard, og veivalg er de funksjonene som setter spillet igang, og er de eneste som er nevn globalt.
// setboard, setter svg på brikke, alt ettersom hvordan brett_id ser ut. Den kan ha annerledes verdi enn ved start ved load of page
export function setboard() {
  // ikke globale nøkler
  let lag_nytt_brett = false;
  let SVG = spillebrikke.None.Svg;
  if (!brett_id[hovednokkel].length) {
    lag_nytt_brett = true;
  } else {
    har_vunnet = { white: true, black: true };
  }
  for (let i = 0; i < 8; i++) {
    let brett_id_indre = [];
    let chr = Convert.Index.To.Tall(i);
    let boardpieceArray = [];
    for (let j = 0; j < 8; j++) {
      let letter = Convert.Index.To.UpperCase(j);
      // hvis brette trenger flere object elementer, så er det bare til å legge dem til her.
      SVG = spillebrikke.None.Svg;
      if (lag_nytt_brett) {
        switch (chr) {
          case "2":
            SVG = spillebrikke.black.Pawn.Svg;
            boardpieceArray = spillebrikke.black.Pawn.spillinfo.boardpieceArray;
            break;
          case "1":
            switch (letter) {
              case "A":
              case "H":
                SVG = spillebrikke.black.Rook.Svg;
                boardpieceArray =
                  spillebrikke.black.Rook.spillinfo.boardpieceArray;
                break;
              case "B":
              case "G":
                SVG = spillebrikke.black.Knight.Svg;
                boardpieceArray =
                  spillebrikke.black.Knight.spillinfo.boardpieceArray;
                break;
              case "C":
              case "F":
                SVG = spillebrikke.black.Bishop.Svg;
                boardpieceArray =
                  spillebrikke.black.Bishop.spillinfo.boardpieceArray;
                break;
              case "D":
                SVG = spillebrikke.black.King.Svg;
                boardpieceArray =
                  spillebrikke.black.King.spillinfo.boardpieceArray;
                break;
              case "E":
                SVG = spillebrikke.black.Queen.Svg;
                boardpieceArray =
                  spillebrikke.black.Queen.spillinfo.boardpieceArray;
                break;
            }
            break;
          case "7":
            SVG = spillebrikke.white.Pawn.Svg;
            boardpieceArray = spillebrikke.white.Pawn.spillinfo.boardpieceArray;
            break;
          case "8":
            switch (letter) {
              case "A":
              case "H":
                SVG = spillebrikke.white.Rook.Svg;
                boardpieceArray =
                  spillebrikke.white.Rook.spillinfo.boardpieceArray;
                break;
              case "B":
              case "G":
                SVG = spillebrikke.white.Knight.Svg;
                boardpieceArray =
                  spillebrikke.white.Knight.spillinfo.boardpieceArray;
                break;
              case "C":
              case "F":
                SVG = spillebrikke.white.Bishop.Svg;
                boardpieceArray =
                  spillebrikke.white.Bishop.spillinfo.boardpieceArray;
                break;
              case "D":
                SVG = spillebrikke.white.King.Svg;
                boardpieceArray =
                  spillebrikke.white.King.spillinfo.boardpieceArray;
                break;
              case "E":
                SVG = spillebrikke.white.Queen.Svg;
                boardpieceArray =
                  spillebrikke.white.Queen.spillinfo.boardpieceArray;
            }
        }
        let brett_object = {
          ID: {
            tag: letter + chr,
            bokstav: letter,
            tall: chr,
          },
          BoardInfo: {
            BoardPiece: boardpieceArray,
            Svg: SVG,
            PieceMoved: false,
            CountedMoves: 0,
            LastMoved: 0,
          },
        };
        brett_id_indre.push(brett_object);
        brett.querySelector(`#${letter + chr} .her`).innerHTML = SVG;
      } else {
        if (brett_id[hovednokkel][i][j].BoardInfo.BoardPiece[1] === "King") {
          switch (brett_id[hovednokkel][i][j].BoardInfo.BoardPiece[0]) {
            case "white":
              kongensplass[hovednokkel].white = [i, j];
              har_vunnet.black = false;
              break;
            case "black":
              kongensplass[hovednokkel].black = [i, j];
              har_vunnet.white = false;
              break;
          }
        }
        brett.querySelector(`#${letter + chr} .her`).innerHTML =
          brett_id[hovednokkel][i][j].BoardInfo.Svg;
      }
    }
    if (lag_nytt_brett) {
      brett_id[hovednokkel].push(brett_id_indre);
    }
  }
  Object.keys(har_vunnet).forEach((seier) => {
    if (har_vunnet[seier] === true) {
      console.log(`${seier} spiller har vunnet.`);
    }
  });
}
// funksjonen under beveger brikkene ved å klikke rundt på brettet.
export function veivalg() {
  let sjakke = false;
  // ikke globale nøkler
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let telle_tall = Convert.Index.To.Tall(j);
      let telle_bokstav = Convert.Index.To.UpperCase(i);
      brett
        .querySelector(`.bokstav_${telle_bokstav}.tall_${telle_tall}`)
        .addEventListener("click", () => {
          oppdaternokkel(nokkelkoe, hovednokkel);
          let aa_pushe = {
            index: [j, i],
            bokstav: telle_bokstav,
            tall: telle_tall,
          };
          if (brett_queue.length > 1) {
            brett_queue = [aa_pushe];
          } else {
            brett_queue.push(aa_pushe);
          }
          if (brett_queue.length == 1) {
            let BrettIdElFrom =
              brett_id[nokkelkoe][brett_queue[0].index[0]][
                brett_queue[0].index[1]
              ];
            if (!!BrettIdElFrom.BoardInfo.BoardPiece.length) {
              let BrettIdElTo = {};
              MoveBoardPiece(BrettIdElFrom, BrettIdElTo, nokkelkoe);
              sjekke_sjakk_sin_tur = true;
              if (
                kontroller_sjakk ? selv_sjakk(nokkelkoe, BrettIdElFrom) : false
              ) {
                console.log(
                  "Denne brikken kan ikke flyttes, da setter du deg selv i sjakk."
                );
                brett_queue = [];
              } else {
                brett
                  .querySelector(
                    `#${brett_queue[0].bokstav}${brett_queue[0].tall}`
                  )
                  .classList.add("markertbrikke");
                riktigesteg[nokkelkoe].forEach((merke) => {
                  brett
                    .querySelector(
                      `#${Convert.Index.To.UpperCase(
                        merke[1]
                      )}${Convert.Index.To.Tall(merke[0])}`
                    )
                    .classList.add("markertbrikke");
                });
              }
            } else {
              brett_queue = [];
            }
          } else if (brett_queue.length == 2) {
            brett
              .querySelector(`#${brett_queue[0].bokstav}${brett_queue[0].tall}`)
              .classList.remove("markertbrikke");
            riktigesteg[nokkelkoe].forEach((merke) => {
              brett
                .querySelector(
                  `#${Convert.Index.To.UpperCase(
                    merke[1]
                  )}${Convert.Index.To.Tall(merke[0])}`
                )
                .classList.remove("markertbrikke");
            });
            let BrettIdElFrom =
              brett_id[nokkelkoe][brett_queue[0].index[0]][
                brett_queue[0].index[1]
              ];
            let BrettIdElTo =
              brett_id[nokkelkoe][brett_queue[1].index[0]][
                brett_queue[1].index[1]
              ];
            MoveBoardPiece(BrettIdElFrom, BrettIdElTo, nokkelkoe);
            if (PieceIsMoved[nokkelkoe]) {
              oppdaternokkel(hovednokkel, nokkelkoe);
              sjekke_sjakk_sin_tur = true;
              brett_id[hovednokkel] = brett_id[nokkelkoe];
              if (kontroller_sjakk ? sjakk(nokkelkoe) : false) {
                console.log(`Du ER satt i sjakk av ${hvem_sin_tur[nokkelkoe]}`);
                if (sjakk_matt(nokkelkoe)) {
                  console.log(
                    `Det er sjakkmatt, og ${hvem_sin_tur[nokkelkoe]} har vunnet.`
                  );
                }
              } else {
                console.log(
                  `Du er IKKE satt i sjakk av ${hvem_sin_tur[nokkelkoe]}`
                );
              }
              setboard();
            }
            console.log(`Det er ${hvem_sin_tur[hovednokkel]} sin tur.`);
          }
        });
    }
  }
}
