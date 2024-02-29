export default function setboard(Elements) { // Elements = setboard(Elements)
    // ikke globale nøkler
    let lag_nytt_brett = false;
    let SVG = spillebrikke.None.Svg;
    if (!Elements.brett_id[hovednokkel].length) {
      lag_nytt_brett = true;
    } else {
      Elements.har_vunnet = { white: true, black: true };
    }
    for (let i = 0; i < 8; i++) {
      let brett_id_indre = [];
      let chr = Elements.Convert.Index.To.Tall(i);
      let boardpieceArray = [];
      for (let j = 0; j < 8; j++) {
        let letter = Elements.Convert.Index.To.UpperCase(j);
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
          Elements.brett.querySelector(`#${letter + chr} .her`).innerHTML = SVG;
        } else {
          if (Elements.brett_id[hovednokkel][i][j].BoardInfo.BoardPiece[1] === "King") {
            switch (Elements.brett_id[hovednokkel][i][j].BoardInfo.BoardPiece[0]) {
              case "white":
                Elements.kongensplass[hovednokkel].white = [i, j];
                Elements.har_vunnet.black = false;
                break;
              case "black":
                Elements.kongensplass[hovednokkel].black = [i, j];
                Elements.har_vunnet.white = false;
                break;
            }
          }
          Elements.brett.querySelector(`#${letter + chr} .her`).innerHTML =
            Elements.brett_id[hovednokkel][i][j].BoardInfo.Svg;
        }
      }
      if (lag_nytt_brett) {
        Elements.brett_id[hovednokkel].push(brett_id_indre);
      }
    }
    Object.keys(Elements.har_vunnet).forEach(function (seier) {
      if (Elements.har_vunnet[seier] === true) {
        console.log(`${seier} spiller har vunnet.`);
      }
    });
    return Elements
  }