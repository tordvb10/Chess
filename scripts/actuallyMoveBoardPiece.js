export default function actuallyMoveBoardPiece(
    Elements,
    BrettIdElFrom,
    BrettIdElTo,
    nokkel,
    extra_steg = false
  ) {
    if (!!Object.keys(BrettIdElTo).length) {
      if (BrettIdElFrom.BoardInfo.BoardPiece[1] === "King") {
        Elements.kongensplass[nokkel][BrettIdElFrom.BoardInfo.BoardPiece[0]] =
          Splitkoordinattilarray(BrettIdElTo.ID.tag);
      }
      save_move(BrettIdElFrom, BrettIdElTo, nokkel);
      Elements.sjekk_valid_move[nokkel] = true;
      Elements.PieceIsMoved[nokkel] = true;
      Elements.brett_id[nokkel][Elements.Convert.Index.From.Tall(BrettIdElTo.ID.tall)][
        Elements.Convert.Index.From.UpperCase(BrettIdElTo.ID.bokstav)
      ].BoardInfo = BrettIdElFrom.BoardInfo;
      Elements.brett_id[nokkel][Elements.Convert.Index.From.Tall(BrettIdElFrom.ID.tall)][
        Elements.Convert.Index.From.UpperCase(BrettIdElFrom.ID.bokstav)
      ].BoardInfo = spillebrikke.None;
      Elements.brett_id[nokkel][Elements.Convert.Index.From.Tall(BrettIdElTo.ID.tall)][
        Elements.Convert.Index.From.UpperCase(BrettIdElTo.ID.bokstav)
      ].BoardInfo.PieceMoved = true;
      Elements.brett_id[nokkel][Elements.Convert.Index.From.Tall(BrettIdElTo.ID.tall)][
        Elements.Convert.Index.From.UpperCase(BrettIdElTo.ID.bokstav)
      ].BoardInfo.CountedMoves += 1;
      Elements.counted_moves[nokkel] += 1;
      Elements.brett_id[nokkel][Elements.Convert.Index.From.Tall(BrettIdElTo.ID.tall)][
        Elements.Convert.Index.From.UpperCase(BrettIdElTo.ID.bokstav)
      ].BoardInfo.LastMoved = JSON.parse(JSON.stringify(Elements.counted_moves[nokkel]));
      if (extra_steg) {
        Elements.counted_moves[nokkel] -= 1;
      }
      forward_steg = [];
    }
    return Elements
  }