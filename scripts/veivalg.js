export default function veivalg(Elements) { // veivalg(Elements)
    let sjakke = false;
    // ikke globale nøkler
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        let telle_tall = Elements.Convert.Index.To.Tall(j);
        let telle_bokstav = Elements.Convert.Index.To.UpperCase(i);
        Elements.brett
          .querySelector(`.bokstav_${telle_bokstav}.tall_${telle_tall}`)
          .addEventListener("click", function () {
            Elements = oppdaternokkel(Elements,Elements.nokkelkoe, Elements.hovednokkel); 
            let aa_pushe = {
              index: [j, i],
              bokstav: telle_bokstav,
              tall: telle_tall,
            };
            if (Elements.brett_queue.length > 1) {
              Elements.brett_queue = [aa_pushe];
            } else {
              Elements.brett_queue.push(aa_pushe);
            }
            if (Elements.brett_queue.length == 1) {
              let BrettIdElFrom =
                Elements.brett_id[nokkelkoe][brett_queue[0].index[0]][
                  brett_queue[0].index[1]
                ];
              if (!!BrettIdElFrom.BoardInfo.BoardPiece.length) {
                let BrettIdElTo = {};
                MoveBoardPiece(BrettIdElFrom, BrettIdElTo, nokkelkoe); // oppdater funksjon
                Elements.sjekke_sjakk_sin_tur = true;
                if (
                  Elements.kontroller_sjakk ? selv_sjakk(nokkelkoe, BrettIdElFrom) : false // oppdater funksjon
                ) {
                  console.log(
                    "Denne brikken kan ikke flyttes, da setter du deg selv i sjakk."
                  );
                  Elements.brett_queue = [];
                } else {
                  Elements.brett
                    .querySelector(
                      `#${Elements.brett_queue[0].bokstav}${Elements.brett_queue[0].tall}`
                    )
                    .classList.add("markertbrikke");
                  Elements.riktigesteg[nokkelkoe].forEach(function (merke) {
                    Elements.brett
                      .querySelector(
                        `#${Elements.Convert.Index.To.UpperCase(
                          merke[1]
                        )}${Elements.Convert.Index.To.Tall(merke[0])}`
                      )
                      .classList.add("markertbrikke");
                  });
                }
              } else {
                Elements.brett_queue = [];
              }
            } else if (Elements.brett_queue.length == 2) {
              Elements.brett
                .querySelector(`#${Elements.brett_queue[0].bokstav}${Elements.brett_queue[0].tall}`)
                .classList.remove("markertbrikke");
              Elements.riktigesteg[nokkelkoe].forEach(function (merke) {
                Elements.brett
                  .querySelector(
                    `#${Elements.Convert.Index.To.UpperCase(
                      merke[1]
                    )}${Elements.Convert.Index.To.Tall(merke[0])}`
                  )
                  .classList.remove("markertbrikke");
              });
              let BrettIdElFrom =
                Elements.brett_id[Elements.nokkelkoe][Elements.brett_queue[0].index[0]][
                  Elements.brett_queue[0].index[1]
                ];
              let BrettIdElTo =
                Elements.brett_id[Elements.nokkelkoe][Elements.brett_queue[1].index[0]][
                  Elements.brett_queue[1].index[1]
                ];
              MoveBoardPiece(BrettIdElFrom, BrettIdElTo, nokkelkoe); // oppdater funksjon
              if (PieceIsMoved[nokkelkoe]) {
                Elements = oppdaternokkel(Elements,Elements.hovednokkel, Elements.nokkelkoe);
                Elements.sjekke_sjakk_sin_tur = true;
                Elements.brett_id[Elements.hovednokkel] = Elements.brett_id[Elements.nokkelkoe];
                if (Elements.kontroller_sjakk ? sjakk(nokkelkoe) : false) { // oppdater funksjon
                  console.log(`Du ER satt i sjakk av ${Elements.hvem_sin_tur[Elements.nokkelkoe]}`);
                  if (sjakk_matt(Elements.nokkelkoe)) { // Oppdater funksjon
                    console.log(
                      `Det er sjakkmatt, og ${Elements.hvem_sin_tur[Elements.nokkelkoe]} har vunnet.`
                    );
                  }
                } else {
                  console.log(
                    `Du er IKKE satt i sjakk av ${Elements.hvem_sin_tur[Elements.nokkelkoe]}`
                  );
                }
                Elements = setboard(Elements);
              }
              console.log(`Det er ${Elements.hvem_sin_tur[Elements.hovednokkel]} sin tur.`);
            }
          });
      }
    }
  }