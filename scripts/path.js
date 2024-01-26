// Recursive funksjon som sjekker regler hentet fra spillebrikke["farge"]["typebrikke"].spillinfo, sjekker da om steget er lovlig
export function find_path(
  nokkel,
  brikke,
  start,
  end,
  brikke_i_veien = false,
  sjekk_end_brikke_i_veien = false,
  only_attack = false,
  svar = false,
  depth = 7
) {
  let queue_start = [];
  let queue_path = [];
  let path_mx = [];
  brikke.flytte.path.forEach((element, index) => {
    let path_tall =
      (start.length == 1 ? start[0][0] : start[index][0]) + element[0];
    let path_bokstav =
      (start.length == 1 ? start[0][1] : start[index][1]) + element[1];
    if (IndexOnBoard(path_tall) && IndexOnBoard(path_bokstav)) {
      path_mx = [path_tall, path_bokstav];
      riktigesteg[nokkel].push(path_mx);
      let sjekk_brikke_i_veien =
        brikke_i_veien ==
        brett_id[nokkel][path_tall][path_bokstav].BoardInfo.BoardPiece.length;
      if (
        sjekk_brikke_i_veien &&
        (path_tall !== end[0]) | (path_bokstav !== end[1]) &&
        brikke.flytte.recursive_path
      ) {
        queue_start.push(path_mx);
        queue_path.push(element);
      } else if (
        path_tall === end[0] &&
        path_bokstav === end[1] &&
        (sjekk_end_brikke_i_veien ? sjekk_brikke_i_veien : true) &&
        (only_attack ? !sjekk_brikke_i_veien : true)
      ) {
        brikke.flytte.recursive_path = false;
        svar = true;
      }
    }
  });
  if (brikke.flytte.recursive_path && depth) {
    return find_path(
      nokkel,
      {
        flytte: {
          path: queue_path,
          recursive_path: brikke.flytte.recursive_path,
        },
      },
      queue_start,
      end,
      brikke_i_veien,
      sjekk_end_brikke_i_veien,
      only_attack,
      svar,
      depth - 1
    );
  } else {
    if (retrieve_recursive) {
      brikke.flytte.recursive_path = true;
    }
    return svar;
  }
}
// sjakk har noen regler som kun er lovlig ved visse betingelser, da sjekker han om disse betingelsene først intreffer
// så legger han til respektive lovlige steg med i find_path hvis de respektive betingelser er tilfredsstilt.
export function find_path_med_betingelser(nokkel, a, b, c) {
  let returnere_skal_dobbel = false;
  let returnereskal = false;
  if (a.flytte.recursive_path) {
    retrieve_recursive = true;
  }
  riktigesteg[nokkel] = [];
  const et_trykk = c[0] === 8 && c[1] === 8;
  if (!!a.betingelser.length) {
    a.betingelser.forEach((sjekk_betingelser) => {
      switch (sjekk_betingelser.navn) {
        case "None":
          returnereskal = find_path(nokkel, a, b, c);
          break;
        case "CannotAttack":
          let c_ny1 = [];
          let ny_path1 = false;
          c_ny1.push(
            b[0][0] + sjekk_betingelser.path[0][0],
            b[0][1] + sjekk_betingelser.path[0][1]
          );
          ny_path1 = find_path(
            nokkel,
            {
              flytte: {
                path: sjekk_betingelser.path,
                recursive_path: a.flytte.recursive_path,
              },
              boardpieceArray: a.boardpieceArray,
            },
            b,
            c_ny1,
            false,
            true,
            false
          );
          if (c_ny1[0] === c[0] && c_ny1[1] === c[1]) {
            returnereskal = ny_path1;
          }
          break;
        case "Dobblemove":
          let c_ny2 = [];
          let ny_path2 = false;
          c_ny2.push(
            b[0][0] + sjekk_betingelser.path[1][0],
            b[0][1] + sjekk_betingelser.path[1][1]
          );
          ny_path2 = find_path(
            nokkel,
            {
              flytte: {
                path: sjekk_betingelser.path,
                recursive_path: a.flytte.recursive_path,
              },
            },
            b,
            c_ny2,
            false,
            true,
            false
          );

          if (
            c[0] == c_ny2[0] &&
            c[1] == c_ny2[1] &&
            ny_path2 &&
            !brett_id[nokkel][b[0][0]][b[0][1]].BoardInfo.PieceMoved
          ) {
            let c_ny3 = [];
            c_ny3.push(
              b[0][0] + sjekk_betingelser.path[0][0],
              b[0][1] + sjekk_betingelser.path[0][1]
            );
            returnereskal = find_path(
              nokkel,
              {
                flytte: {
                  path: sjekk_betingelser.path,
                  recursive_path: a.flytte.recursive_path,
                },
              },
              b,
              c_ny3,
              false,
              true,
              false
            );
          }
          break;
        case "PawnAttacks":
          let i = NaN;
          let I = NaN;
          let PawnIsAttacking = false;
          let c_nyPawnAttack = [];
          let ny_pathPawnAttack = false;
          for (let j = 0; j < 1; j++) {
            switch (b[0][1] - c[1]) {
              case -1:
                i = 1;
                PawnIsAttacking = true;
                break;
              case 1:
                i = 0;
                PawnIsAttacking = true;
                break;
            }
          }
          if (PawnIsAttacking | et_trykk) {
            for (let k = 0; k < (et_trykk ? 2 : 1); k++) {
              I = et_trykk ? k : i;
              c_nyPawnAttack = [];
              ny_pathPawnAttack = false;
              c_nyPawnAttack.push(
                b[0][0] + sjekk_betingelser.path[I][0],
                b[0][1] + sjekk_betingelser.path[I][1]
              );
              ny_pathPawnAttack = find_path(
                nokkel,
                {
                  flytte: {
                    path: sjekk_betingelser.path,
                    recursive_path: a.flytte.recursive_path,
                  },
                },
                b,
                c_nyPawnAttack,
                false,
                false,
                true
              );
              if (c_nyPawnAttack[0] === c[0] && c_nyPawnAttack[1] === c[1]) {
                returnereskal = ny_pathPawnAttack;
              }
            }
          }
          break;
        case "Passant":
          let i2 = NaN;
          let motstander_brikke = {};
          let PawnIsAttackingCheat = false;
          let I2 = NaN;
          let c_nyPawnAttackCheat = [];
          let ny_pathPawnAttackCheat = false;
          for (let j = 0; j < 1; j++) {
            switch (b[0][1] - c[1]) {
              case -1:
                i2 = 1;
                PawnIsAttackingCheat = true;
                break;
              case 1:
                i2 = 0;
                PawnIsAttackingCheat = true;
                break;
            }
            break;
          }

          if (PawnIsAttackingCheat | et_trykk) {
            for (let k = 0; k < (et_trykk ? 2 : 1); k++) {
              I2 = et_trykk ? k : i2;
              c_nyPawnAttackCheat = [];
              ny_pathPawnAttackCheat = false;
              c_nyPawnAttackCheat.push(
                b[0][0] + sjekk_betingelser.path.utfordrer[I2][0],
                b[0][1] + sjekk_betingelser.path.utfordrer[I2][1]
              );
              ny_pathPawnAttackCheat = find_path(
                nokkel,
                {
                  flytte: {
                    path: sjekk_betingelser.path.utfordrer,
                    recursive_path: a.flytte.recursive_path,
                  },
                },
                b,
                c_nyPawnAttackCheat,
                false,
                true,
                false
              );
              if (
                c_nyPawnAttackCheat[0] === c[0] &&
                c_nyPawnAttackCheat[1] === c[1]
              ) {
                motstander_brikke =
                  brett_id[nokkel][
                    b[0][0] + sjekk_betingelser.path.motstander[I2][0]
                  ][b[0][1] + sjekk_betingelser.path.motstander[I2][1]];
                if (
                  motstander_brikke.BoardInfo.LastMoved ===
                    counted_moves[nokkel] &&
                  motstander_brikke.BoardInfo.BoardPiece[1] === "Pawn" &&
                  motstander_brikke.BoardInfo.CountedMoves === 1 &&
                  Convert.Index.From.Tall(motstander_brikke.ID.tall) ===
                    sjekk_betingelser.path.tall
                ) {
                  actuallyMoveBoardPiece(
                    motstander_brikke,
                    brett_id[nokkel][
                      b[0][0] + sjekk_betingelser.path.utfordrer[I2][0]
                    ][b[0][1] + sjekk_betingelser.path.utfordrer[I2][1]],
                    nokkel,
                    true
                  );
                  returnereskal = true;
                }
              }
            }
          }
          rett_opp_riktige_steg(nokkel);
          break;
        case "BeskyttKonge":
          if (!brett_id[nokkel][b[0][0]][b[0][1]].BoardInfo.PieceMoved) {
            let i = NaN;
            let I = NaN;
            let flytte_king = false;
            let c_rookclear = [];
            let rookclear = false;
            for (let j = 0; j < 1; j++) {
              switch (c[1] - b[0][1]) {
                case 2:
                  i = 1;
                  flytte_king = true;
                  break;
                case -2:
                  i = 0;
                  flytte_king = true;
                  break;
              }
            }
            if (flytte_king | et_trykk) {
              for (let k = 0; k < (et_trykk ? 2 : 1); k++) {
                rookclear = false;
                I = et_trykk ? k : i;
                c_rookclear = [
                  sjekk_betingelser.path.rook.start[I][0] +
                    sjekk_betingelser.path.rook.move[I][0],
                  sjekk_betingelser.path.rook.start[I][1] +
                    sjekk_betingelser.path.rook.move[I][1],
                ];
                rookclear = find_path(
                  nokkel,
                  {
                    flytte: {
                      path: [sjekk_betingelser.path.rook.path[I]],
                      recursive_path: true,
                    },
                  },
                  [sjekk_betingelser.path.rook.start[I]],
                  c_rookclear,
                  false,
                  true,
                  false
                );
                if (
                  sjekk_betingelser.path.king[I][0] + b[0][0] === c[0] &&
                  sjekk_betingelser.path.king[I][1] + b[0][1] === c[1] &&
                  !brett_id[nokkel][b[0][0]][b[0][1]].BoardInfo.PieceMoved &&
                  !brett_id[nokkel][sjekk_betingelser.path.rook.start[I][0]][
                    sjekk_betingelser.path.rook.start[I][1]
                  ].BoardInfo.PieceMoved &&
                  !et_trykk
                ) {
                  actuallyMoveBoardPiece(
                    brett_id[nokkel][sjekk_betingelser.path.rook.start[I][0]][
                      sjekk_betingelser.path.rook.start[I][1]
                    ],
                    brett_id[nokkel][c_rookclear[0]][c_rookclear[1]],
                    nokkel,
                    true
                  );
                  returnere_skal_dobbel = true;
                }
              }
            }
          }
          break;
      }
    });
  }
  retrieve_recursive = false;
  return returnereskal | returnere_skal_dobbel;
}
