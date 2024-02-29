export default function oppdaternokkel(Elements,til, fra) {
    Elements.brett_id[til] = JSON.parse(JSON.stringify(Elements.brett_id[fra]));
    Elements.hvem_sin_tur[til] = JSON.parse(JSON.stringify(Elements.hvem_sin_tur[fra]));
    Elements.riktig_spiller[til] = JSON.parse(JSON.stringify(Elements.riktig_spiller[fra]));
    Elements.PieceIsMoved[til] = JSON.parse(JSON.stringify(Elements.PieceIsMoved[fra]));
    Elements.sjekk_valid_move[til] = JSON.parse(JSON.stringify(Elements.sjekk_valid_move[fra]));
    Elements.kongensplass[til] = JSON.parse(JSON.stringify(Elements.kongensplass[fra]));
    Elements.counted_moves[til] = JSON.parse(JSON.stringify(Elements.counted_moves[fra]));
    return Elements
  }