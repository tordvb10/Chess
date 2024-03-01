export default function validmove(Elements, BrettIdElFrom, BrettIdElTo, nokkel) {
    let Elements.er_andre_trekk = !!Object.keys(BrettIdElTo).length;
    if (Elements.spille_paa_tur && Elements.er_andre_trekk && Elements.sjekk_valid_move) {
      Elements.riktig_spiller[nokkel] = false;
      if (BrettIdElFrom.BoardInfo.BoardPiece[0] == Elements.hvem_sin_tur[nokkel]) {
        Elements.sjekk_valid_move[nokkel] = false;
        switch (Elements.hvem_sin_tur[nokkel]) {
          case "white":
            Elements.hvem_sin_tur[nokkel] = "black";
            Elements.riktig_spiller[nokkel] = true;
            break;
          case "black":
            Elements.hvem_sin_tur[nokkel] = "white";
            Elements.riktig_spiller[nokkel] = true;
            break;
        }
      }
    }
    if (
      BrettIdElFrom.BoardInfo.BoardPiece.length > 0 &&
      Elements.riktig_spiller[nokkel] &&
      (Elements.er_andre_trekk
        ? !(
            BrettIdElFrom.BoardInfo.BoardPiece[0] ===
            BrettIdElTo.BoardInfo.BoardPiece[0]
          )
        : true)
    ) {
      Elements.riktig_spiller[nokkel] = true;
      let lets_move = false;
      if (Elements.er_andre_trekk) {
        if (
          dupliatearrboolean(
            Elements.riktigesteg[nokkel].concat([
              Splitkoordinattilarray(BrettIdElTo.ID.tag),
            ])
          )
        ) {
          lets_move = true;
        }
      }
      if (Elements.er_andre_trekk ? lets_move : true) {
        let svar_find_path_med_betingelser
        svar_find_path_med_betingelser =  find_path_med_betingelser( // fikse funksjon
          nokkel,
          Elements.spillebrikke[BrettIdElFrom.BoardInfo.BoardPiece[0]][
            BrettIdElFrom.BoardInfo.BoardPiece[1]
          ].spillinfo,
          [Splitkoordinattilarray(Elements,BrettIdElFrom.ID.tag)], // fikse funksjon
          Elements.er_andre_trekk ? Splitkoordinattilarray(Elements,BrettIdElTo.ID.tag) : [8, 8] // fikse funksjon
        );
        return [Elements,svar_find_path_med_betingelser]
      }

    } else {
      Elements.riktig_spiller[nokkel] = true;
      return [Elements,false];
    }
  }