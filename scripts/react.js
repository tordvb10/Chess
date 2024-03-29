import {
  Convert,
  spillebrikke,
  brett,
  hovednokkel,
  nokkelkoe,
  spille_paa_tur,
  kontroller_sjakk,
  brett_id,
  riktigesteg,
  hvem_sin_tur,
  riktig_spiller,
  PieceIsMoved,
  sjekk_valid_move,
  kongensplass,
  counted_moves,
  retrieve_recursive,
  brett_queue,
  sjekke_sjakk_sin_tur,
  har_vunnet,
  er_selv_sjakk,
  alle_steg,
  forward_steg,
} from "./global_variables.js";
import {
  oppdaternokkel,
  deletenokkel,
  rett_opp_riktige_steg,
  dupliatearrboolean,
  toFindDuplicates,
  IndexOnBoard,
  Splitkoordinattilarray,
} from "./hjelpefunksjoner.js";
import { setboard, veivalg } from "./spill.js";
import {
  MoveBoardPiece,
  actuallyMoveBoardPiece,
  validmove,
} from "./MovePiece.js";
import { find_path, find_path_med_betingelser } from "./path.js";
import {
  sjakk_farge,
  sjakk,
  selv_sjakk,
  sjakk_matt,
  sjekk_steg,
} from "./sjekke_sjakk.js";
import { save_move } from "./savedmoves.js";
export {
  Convert,
  spillebrikke,
  brett,
  hovednokkel,
  nokkelkoe,
  spille_paa_tur,
  kontroller_sjakk,
  brett_id,
  riktigesteg,
  hvem_sin_tur,
  riktig_spiller,
  PieceIsMoved,
  sjekk_valid_move,
  kongensplass,
  counted_moves,
  retrieve_recursive,
  brett_queue,
  sjekke_sjakk_sin_tur,
  har_vunnet,
  er_selv_sjakk,
  alle_steg,
  forward_steg,
  oppdaternokkel,
  deletenokkel,
  rett_opp_riktige_steg,
  dupliatearrboolean,
  toFindDuplicates,
  IndexOnBoard,
  Splitkoordinattilarray,
  setboard,
  veivalg,
  MoveBoardPiece,
  actuallyMoveBoardPiece,
  validmove,
  find_path,
  find_path_med_betingelser,
  sjakk_farge,
  sjakk,
  selv_sjakk,
  sjakk_matt,
  sjekk_steg,
  save_move,
};

setboard();
veivalg();
