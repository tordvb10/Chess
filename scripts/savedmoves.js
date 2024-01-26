export function save_move(BrettIdElFrom, BrettIdElTo, nokkel) {
  let nytur = "";
  switch (hvem_sin_tur[nokkel]) {
    case "white":
      nytur = "black";
      break;
    case "black":
      nytur = "white";
      break;
  }

  alle_steg.push({
    trekknr: counted_moves[nokkel],
    fra: Splitkoordinattilarray(BrettIdElFrom.ID.tag),
    til: Splitkoordinattilarray(BrettIdElTo.ID.tag),
    nytur: nytur,
    brikketatt: BrettIdElTo.BoardInfo,
  });
}
