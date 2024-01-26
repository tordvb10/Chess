// flytte brikker etter å ha sjekkt regler, blir kalt fra veivalg. Denne funksjonen er kort, men samler alle funksjoner
export function MoveBoardPiece(BrettIdElFrom, BrettIdElTo, nokkel) {
  PieceIsMoved[nokkel] = false;
  if (validmove(BrettIdElFrom, BrettIdElTo, nokkel)) {
    actuallyMoveBoardPiece(BrettIdElFrom, BrettIdElTo, nokkel);
  }
}
// flytte bare brikke
export function actuallyMoveBoardPiece(
  BrettIdElFrom,
  BrettIdElTo,
  nokkel,
  extra_steg = false
) {
  if (!!Object.keys(BrettIdElTo).length) {
    if (BrettIdElFrom.BoardInfo.BoardPiece[1] === "King") {
      kongensplass[nokkel][BrettIdElFrom.BoardInfo.BoardPiece[0]] =
        Splitkoordinattilarray(BrettIdElTo.ID.tag);
    }
    save_move(BrettIdElFrom, BrettIdElTo, nokkel);
    sjekk_valid_move[nokkel] = true;
    PieceIsMoved[nokkel] = true;
    brett_id[nokkel][Convert.Index.From.Tall(BrettIdElTo.ID.tall)][
      Convert.Index.From.UpperCase(BrettIdElTo.ID.bokstav)
    ].BoardInfo = BrettIdElFrom.BoardInfo;
    brett_id[nokkel][Convert.Index.From.Tall(BrettIdElFrom.ID.tall)][
      Convert.Index.From.UpperCase(BrettIdElFrom.ID.bokstav)
    ].BoardInfo = spillebrikke.None;
    brett_id[nokkel][Convert.Index.From.Tall(BrettIdElTo.ID.tall)][
      Convert.Index.From.UpperCase(BrettIdElTo.ID.bokstav)
    ].BoardInfo.PieceMoved = true;
    brett_id[nokkel][Convert.Index.From.Tall(BrettIdElTo.ID.tall)][
      Convert.Index.From.UpperCase(BrettIdElTo.ID.bokstav)
    ].BoardInfo.CountedMoves += 1;
    counted_moves[nokkel] += 1;
    brett_id[nokkel][Convert.Index.From.Tall(BrettIdElTo.ID.tall)][
      Convert.Index.From.UpperCase(BrettIdElTo.ID.bokstav)
    ].BoardInfo.LastMoved = JSON.parse(JSON.stringify(counted_moves[nokkel]));
    if (extra_steg) {
      counted_moves[nokkel] -= 1;
    }
    forward_steg = [];
  }
}
// sjekker regler fra find_path. Kort funksjon som definerer variabler som man skal bruke til å sjekke regler v.h.a find_path
export function validmove(BrettIdElFrom, BrettIdElTo, nokkel) {
  let er_andre_trekk = !!Object.keys(BrettIdElTo).length;
  if (spille_paa_tur && er_andre_trekk && sjekk_valid_move) {
    riktig_spiller[nokkel] = false;
    if (BrettIdElFrom.BoardInfo.BoardPiece[0] == hvem_sin_tur[nokkel]) {
      sjekk_valid_move[nokkel] = false;
      switch (hvem_sin_tur[nokkel]) {
        case "white":
          hvem_sin_tur[nokkel] = "black";
          riktig_spiller[nokkel] = true;
          break;
        case "black":
          hvem_sin_tur[nokkel] = "white";
          riktig_spiller[nokkel] = true;
          break;
      }
    }
  }
  if (
    BrettIdElFrom.BoardInfo.BoardPiece.length > 0 &&
    riktig_spiller[nokkel] &&
    (er_andre_trekk
      ? !(
          BrettIdElFrom.BoardInfo.BoardPiece[0] ===
          BrettIdElTo.BoardInfo.BoardPiece[0]
        )
      : true)
  ) {
    riktig_spiller[nokkel] = true;
    let lets_move = false;
    if (er_andre_trekk) {
      if (
        dupliatearrboolean(
          riktigesteg[nokkel].concat([
            Splitkoordinattilarray(BrettIdElTo.ID.tag),
          ])
        )
      ) {
        lets_move = true;
      }
    }
    if (er_andre_trekk ? lets_move : true) {
      return find_path_med_betingelser(
        nokkel,
        spillebrikke[BrettIdElFrom.BoardInfo.BoardPiece[0]][
          BrettIdElFrom.BoardInfo.BoardPiece[1]
        ].spillinfo,
        [Splitkoordinattilarray(BrettIdElFrom.ID.tag)],
        er_andre_trekk ? Splitkoordinattilarray(BrettIdElTo.ID.tag) : [8, 8]
      );
    }
  } else {
    riktig_spiller[nokkel] = true;
    return false;
  }
}
