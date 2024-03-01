export default function MoveBoardPiece(Elements,BrettIdElFrom, BrettIdElTo, nokkel) { // Elements = MoveBoardPiece(Elements,BrettIdElFrom, BrettIdElTo, nokkel)
    Elements.PieceIsMoved[nokkel] = false;
    let svar_validmove
    [Elements,svar_validmove] = validmove(Elements,BrettIdElFrom, BrettIdElTo, nokkel)
    if (svar_validmove) {
      Elements = actuallyMoveBoardPiece(Elements,BrettIdElFrom, BrettIdElTo, nokkel);
    }
    return Elements
  }