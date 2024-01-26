// nøkkel håndtering

export function oppdaternokkel(til, fra) {
  brett_id[til] = JSON.parse(JSON.stringify(brett_id[fra]));
  hvem_sin_tur[til] = JSON.parse(JSON.stringify(hvem_sin_tur[fra]));
  riktig_spiller[til] = JSON.parse(JSON.stringify(riktig_spiller[fra]));
  PieceIsMoved[til] = JSON.parse(JSON.stringify(PieceIsMoved[fra]));
  sjekk_valid_move[til] = JSON.parse(JSON.stringify(sjekk_valid_move[fra]));
  kongensplass[til] = JSON.parse(JSON.stringify(kongensplass[fra]));
  counted_moves[til] = JSON.parse(JSON.stringify(counted_moves[fra]));
}
export function deletenokkel(nokkel) {
  delete brett_id[nokkel];
  delete hvem_sin_tur[nokkel];
  delete riktig_spiller[nokkel];
  delete PieceIsMoved[nokkel];
  delete sjekk_valid_move[nokkel];
  delete riktigesteg[nokkel];
  delete kongensplass[nokkel];
  delete counted_moves[nokkel];
}
// Funksjoner
// Små hjelpefunksjoner
export function rett_opp_riktige_steg(nokkel) {
  // sette globale nøkler
  riktigesteg[nokkel] = toFindDuplicates(riktigesteg[nokkel], false);
}
export function dupliatearrboolean(arr) {
  return toFindDuplicates(arr, true);
}
export function toFindDuplicates(arr, boolean) {
  let toMap = {};
  let resultToReturn = false;
  for (let i = 0; i < arr.length; i++) {
    if (toMap[arr[i]]) {
      resultToReturn = true;
    }
    toMap[arr[i]] = true;
  }
  if (resultToReturn) {
    let to_return = [];
    let key = [];
    let to_keys = Object.keys(toMap);
    to_keys.forEach((keys) => {
      key = keys.split(",");
      to_return.push([Number(key[0]), Number(key[1])]);
    });
    if (boolean) {
      return resultToReturn;
    } else {
      return to_return;
    }
  }
}
export function IndexOnBoard(x) {
  return x >= 0 && x <= 7;
}
export function Splitkoordinattilarray(string) {
  let svar = string.split("");
  return [
    Convert.Index.From.Tall(svar[1]),
    Convert.Index.From.UpperCase(svar[0]),
  ];
}
