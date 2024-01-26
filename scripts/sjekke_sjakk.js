// Her skal jeg sjekke for sjakk
export function sjakk_farge(nokkel) {
  let annen_sjakk = "";
  let sette_sjakk = "";
  let sjakk_angrep = "";
  //let brett_id_backup = {};
  switch (hvem_sin_tur[nokkel]) {
    case "white":
      annen_sjakk = "black";
      break;
    case "black":
      annen_sjakk = "white";
      break;
  }
  switch (sjekke_sjakk_sin_tur ? hvem_sin_tur[nokkel] : annen_sjakk) {
    case "white":
      sette_sjakk = "black";
      sjakk_angrep = "white";
      break;
    case "black":
      sette_sjakk = "white";
      sjakk_angrep = "black";
      break;
  }
  return [sette_sjakk, sjakk_angrep];
}
export function sjakk(nokkel) {
  let sette_sjakk = "";
  let sjakk_angrep = "";
  let svar = false;
  let BrettIdElFrom = {};
  let sjekkstegsjakk = false;
  [sjakk_angrep, sette_sjakk] = sjakk_farge(nokkel);
  for (let i = 0; i < 8 && !svar; i++) {
    for (let j = 0; j < 8 && !svar; j++) {
      sjekkstegsjakk = false;
      BrettIdElFrom = brett_id[nokkel][i][j];
      if (!sjekk_steg([i, j], sjakk_angrep, nokkel)) {
        continue;
      }
      sjekkstegsjakk = find_path_med_betingelser(
        nokkel,
        spillebrikke[BrettIdElFrom.BoardInfo.BoardPiece[0]][
          BrettIdElFrom.BoardInfo.BoardPiece[1]
        ].spillinfo,
        [[i, j]],
        kongensplass[nokkel][sette_sjakk]
      );
      if (sjekkstegsjakk) {
        console.log(`${sette_sjakk} er i sjakk.`);
        svar = true;
        break;
      }
    }
  }
  console.log(`Om det er sjakk er ${svar}`);
  return svar;
}
export function selv_sjakk(nokkel, BrettIdElFrom = {}, tillegsnavn = "") {
  let sette_sjakk = "";
  let sjakk_angrep = "";
  let svar = false;
  let nokkelnavn = "";
  let nokkelnavn_queue = [];
  let riktigesteg_queue = [];
  [sjakk_angrep, sette_sjakk] = sjakk_farge(nokkel);
  const brettIdtagfrom =
    brett_id[nokkel][kongensplass[nokkel][sette_sjakk][0]][
      kongensplass[nokkel][sette_sjakk][1]
    ].ID.tag;
  let startsteg = [];
  for (let i = 0; i < riktigesteg[nokkel].length; i++) {
    if (sjekk_steg(riktigesteg[nokkel][i], sette_sjakk, nokkel)) {
      continue;
    }
    nokkelnavn =
      tillegsnavn +
      (!Object.keys(BrettIdElFrom).length
        ? brettIdtagfrom
        : BrettIdElFrom.ID.tag) +
      "->" +
      Convert.Index.To.UpperCase(riktigesteg[nokkel][i][1]) +
      Convert.Index.To.Tall(riktigesteg[nokkel][i][0]);
    oppdaternokkel(nokkelnavn, nokkel);
    riktigesteg[nokkelnavn] = JSON.parse(JSON.stringify(riktigesteg[nokkel]));
    startsteg = !Object.keys(BrettIdElFrom).length
      ? kongensplass[nokkelnavn][sette_sjakk]
      : Splitkoordinattilarray(BrettIdElFrom.ID.tag);
    MoveBoardPiece(
      brett_id[nokkelnavn][startsteg[0]][startsteg[1]],
      brett_id[nokkelnavn][riktigesteg[nokkel][i][0]][
        riktigesteg[nokkel][i][1]
      ],
      nokkelnavn
    );
    nokkelnavn_queue.push(nokkelnavn);
    riktigesteg_queue.push(riktigesteg[nokkel][i]);
  }
  sjekke_sjakk_sin_tur = false;
  riktigesteg[nokkel] = [];
  let sjakksteg = [];
  for (let i = 0; i < nokkelnavn_queue.length; i++) {
    if (PieceIsMoved[nokkelnavn_queue[i]]) {
      if (sjakk(nokkelnavn_queue[i])) {
        console.log(`Det er sjakk på ${nokkelnavn_queue[i]}`);
      } else {
        riktigesteg[nokkel].push(riktigesteg_queue[i]);
        sjakksteg.push(nokkelnavn_queue[i]);
      }
    }
    deletenokkel(nokkelnavn_queue[i]);
  }
  return !riktigesteg[nokkel].length;
}
export function sjakk_matt(nokkel) {
  let sjakk_angrep = "";
  let sette_sjakk = "";
  let svar = [];
  let svarsteg = false;
  [sjakk_angrep, sette_sjakk] = sjakk_farge(nokkel);
  let nokkelnavn = "";
  let BrettIdElFrom = {};
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (!sjekk_steg([i, j], sette_sjakk, nokkel)) {
        continue;
      }
      BrettIdElFrom = brett_id[nokkel][i][j];
      nokkelnavn =
        "matt-" + Convert.Index.To.UpperCase(j) + Convert.Index.To.Tall(i);
      oppdaternokkel(nokkelnavn, nokkel);
      riktigesteg[nokkelnavn] = [];
      MoveBoardPiece(BrettIdElFrom, {}, nokkelnavn);
      svarsteg = !selv_sjakk(nokkelnavn, BrettIdElFrom, nokkelnavn);
      svar.push(svarsteg);
      deletenokkel(nokkelnavn);
      if (svarsteg) {
        console.log(`Det er IKKE sjakkmatt på ${sette_sjakk}`);
        return false;
      }
    }
  }
  console.log(`Det ER sjakkmatt på ${sette_sjakk}`);
  return true;
}
export function sjekk_steg(steg, sette_sjakk, nokkel) {
  if (!!brett_id[nokkel][steg[0]][steg[1]].BoardInfo.BoardPiece.length) {
    if (
      brett_id[nokkel][steg[0]][steg[1]].BoardInfo.BoardPiece[0] === sette_sjakk
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
