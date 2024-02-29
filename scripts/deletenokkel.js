export default function deletenokkel(Elements,nokkel) { // Elements = deletenokkel(Elements,nokkel)
    delete Elements.brett_id[nokkel];
    delete Elements.hvem_sin_tur[nokkel];
    delete Elements.riktig_spiller[nokkel];
    delete Elements.PieceIsMoved[nokkel];
    delete Elements.sjekk_valid_move[nokkel];
    delete Elements.riktigesteg[nokkel];
    delete Elements.kongensplass[nokkel];
    delete Elements.counted_moves[nokkel];
    return Elements
  }