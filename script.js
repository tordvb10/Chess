// kompakt form av variabel-type konvertering her som objekt, enkelt å hente ut i ettertid.
const Convert = {
  Index: {
    To: {
      UpperCase(index) {
        return String.fromCharCode(65 + index);
      },
      LowerCase(index) {
        return String.fromCharCode(97 + index);
      },
      Tall(index) {
        return String(index + 1);
      },
    },
    From: {
      UpperCase(index) {
        return index.charCodeAt(0) - 65;
      },
      LowerCase(index) {
        return index.charCodeAt(0) - 97;
      },
      Tall(index) {
        return Number(index) - 1;
      },
    },
  },
};
// Setter svg for hver spillebrikke klar til uthenting her.
const spillebrikke = {
  None: {
    BoardPiece: [],
    Svg: ` <!-- Tombox -->
              <svg
                class="tombox"
                width="50"
                height="50"
                viewBox="0 0 68 67"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.666656 0.166687H67.3333V66.8334H0.666656V0.166687ZM7.33332 6.83335V20.1667H20.6667V33.5H7.33332V46.8334H20.6667V60.1667H34V46.8334H47.3333V60.1667H60.6667V46.8334H47.3333V33.5H60.6667V20.1667H47.3333V6.83335H34V20.1667H20.6667V6.83335H7.33332ZM34 33.5H20.6667V46.8334H34V33.5ZM34 20.1667V33.5H47.3333V20.1667H34Z"
                  fill="black"
                />
              </svg>`,
  },
  black: {
    Bishop: {
      Svg: ` <!-- svart løper -->
              <svg
                width="50"
                height="50"
                viewBox="0 0 45 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 0C15.5109 0 13.5 1.67578 13.5 3.75C13.5 5.63672 15.1734 7.19531 17.3531 7.46484C11.025 12.5156 1.125 22.2656 1.125 33.75C1.125 39.3047 5.45625 42.2227 9 43.6758V46.875H36V43.6758C39.5438 42.2109 43.875 39.293 43.875 33.75C43.875 29.3789 42.4406 25.2656 40.3172 21.5508L26.3391 33.1992C25.4672 33.9258 24.0328 33.9258 23.1609 33.1992C22.2891 32.4727 22.2891 31.2773 23.1609 30.5508L38.0812 18.1172C34.8187 13.6523 30.7969 9.97266 27.6469 7.46484C29.8266 7.19531 31.5 5.63672 31.5 3.75C31.5 1.67578 29.4891 0 27 0H18ZM6.75 50.625L0.928125 55.4766C0.3375 55.9688 0 56.6484 0 57.3516C0 58.8164 1.42031 60 3.17813 60H41.8219C43.5797 60 45 58.8164 45 57.3516C45 56.6484 44.6625 55.9688 44.0719 55.4766L38.25 50.625H6.75Z"
                  fill="black"
                />
              </svg>`,
      spillinfo: {
        flytte: {
          path: [
            [1, 1],
            [1, -1],
            [-1, 1],
            [-1, -1],
          ],
          recursive_path: true,
        },
        boardpieceArray: ["black", "Bishop"],
      },
    },
    King: {
      Svg: ` <!-- svart konge -->
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 0C26.9754 0 28.5714 1.39648 28.5714 3.125V4.6875H30.3571C32.3326 4.6875 33.9286 6.08398 33.9286 7.8125C33.9286 9.54102 32.3326 10.9375 30.3571 10.9375H28.5714V15.625H45.5357C48.0022 15.625 50 17.373 50 19.5312C50 20.0488 49.8884 20.5566 49.654 21.0352L41.0714 39.0625H8.92857L0.345982 21.0352C0.111607 20.5566 0 20.0488 0 19.5312C0 17.373 1.99777 15.625 4.46429 15.625H21.4286V10.9375H19.6429C17.6674 10.9375 16.0714 9.54102 16.0714 7.8125C16.0714 6.08398 17.6674 4.6875 19.6429 4.6875H21.4286V3.125C21.4286 1.39648 23.0246 0 25 0ZM4.30804 46.2305L8.92857 42.1875H41.0714L45.692 46.2305C46.1607 46.6406 46.4286 47.207 46.4286 47.793C46.4286 49.0137 45.3013 50 43.9062 50H6.09375C4.69866 50 3.57143 49.0137 3.57143 47.793C3.57143 47.207 3.83929 46.6406 4.30804 46.2305Z"
                  fill="black"
                />
              </svg>`,
      spillinfo: {
        flytte: {
          path: [
            [1, 0],
            [0, -1],
            [0, 1],
            [-1, 0],
            [1, 1],
            [1, -1],
            [-1, 1],
            [-1, -1],
          ],
          recursive_path: false,
        },
        boardpieceArray: ["black", "King"],
      },
    },
    Knight: {
      Svg: ` <!-- svart hest -->
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.61538 4.6875L8.01683 5.98633C6.57452 7.1582 5.76923 8.74023 5.76923 10.4004V23.3301C5.76923 24.375 6.40625 25.3516 7.47596 25.9277L8.75 26.6113C10.4688 27.5488 12.6803 27.6562 14.5312 26.9043L14.9159 26.748C15.2284 26.6211 15.5168 26.4746 15.7933 26.3086L21.7308 22.6953C22.524 22.207 23.6178 22.207 24.4111 22.6953C25.637 23.4473 25.601 24.9512 24.3269 25.6543L8.94231 34.1797C6.95913 35.2832 5.76923 37.1094 5.76923 39.0625H44.2308L47.7043 23.5352C47.9567 22.4316 48.0769 21.3086 48.0769 20.1855V18.75C48.0769 8.39844 37.7404 0 25 0H8.14904C6.83894 0 5.76923 0.869141 5.76923 1.93359C5.76923 2.66602 6.27404 3.33008 7.07933 3.66211L9.61538 4.6875ZM12.5 11.3281C12.5 10.8101 12.7533 10.3133 13.2041 9.94706C13.6549 9.58078 14.2663 9.375 14.9038 9.375C15.5414 9.375 16.1528 9.58078 16.6036 9.94706C17.0544 10.3133 17.3077 10.8101 17.3077 11.3281C17.3077 11.8461 17.0544 12.3429 16.6036 12.7092C16.1528 13.0755 15.5414 13.2812 14.9038 13.2812C14.2663 13.2812 13.6549 13.0755 13.2041 12.7092C12.7533 12.3429 12.5 11.8461 12.5 11.3281ZM0.793269 46.2305C0.288462 46.6406 0 47.207 0 47.793C0 49.0137 1.21394 50 2.71635 50H47.2837C48.7861 50 50 49.0137 50 47.793C50 47.207 49.7115 46.6406 49.2067 46.2305L44.2308 42.1875H5.76923L0.793269 46.2305Z"
                  fill="black"
                />
              </svg>`,
      spillinfo: {
        flytte: {
          path: [
            [1, 2],
            [2, 1],
            [-1, 2],
            [-2, 1],
            [1, -2],
            [2, -1],
            [-1, -2],
            [-2, -1],
          ],
          recursive_path: false,
        },
        boardpieceArray: ["black", "Knight"],
      },
    },
    Pawn: {
      Svg: ` <!-- svart bonde -->
              <svg
                width="50"
                height="50"
                viewBox="0 0 30 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.7812 20C23.8229 18.0833 25.8333 14.6979 25.8333 10.8333C25.8333 4.85417 20.9792 0 15 0C9.02083 0 4.16667 4.85417 4.16667 10.8333C4.16667 14.6979 6.1875 18.0833 9.21875 20H8.33333C6.48958 20 5 21.4896 5 23.3333C5 25.0521 6.30208 26.4583 7.96875 26.6458L6.66667 38.3333H23.3333L22.0312 26.6458C23.6979 26.4583 25 25.0521 25 23.3333C25 21.4896 23.5104 20 21.6667 20H20.7812ZM0.6875 45.9792C0.25 46.4167 0 47.0208 0 47.6458C0 48.9479 1.05208 50 2.35417 50H27.6458C28.9479 50 30 48.9479 30 47.6458C30 47.0208 29.75 46.4167 29.3125 45.9792L25 41.6667H5L0.6875 45.9792Z"
                  fill="black"
                />
              </svg>`,
      spillinfo: {
        flytte: {
          path: [[1, 0]],
          recursive_path: false,
        },
        boardpieceArray: ["black", "Pawn"],
      },
    },
    Queen: {
      Svg: ` <!-- svart dronning -->
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 0C26.4583 0 27.8568 0.57617 28.888 1.60176C29.9191 2.62735 30.4984 4.01835 30.4984 5.46875C30.4984 6.91915 29.9191 8.31015 28.888 9.33574C27.8568 10.3613 26.4583 10.9375 25 10.9375C23.5417 10.9375 22.1432 10.3613 21.112 9.33574C20.0809 8.31015 19.5016 6.91915 19.5016 5.46875C19.5016 4.01835 20.0809 2.62735 21.112 1.60176C22.1432 0.57617 23.5417 0 25 0ZM13.0311 14.043C13.3551 12.7734 14.5039 11.7188 15.9963 11.7188C17.204 11.7188 18.2154 12.4219 18.7161 13.3789C19.8943 15.6445 22.2704 17.1875 25 17.1875C27.7296 17.1875 30.1057 15.6445 31.2839 13.3789C31.7846 12.4219 32.796 11.7188 34.0037 11.7188C35.5059 11.7188 36.6547 12.7734 36.9689 14.043C37.6562 16.7578 40.1305 18.7598 43.0662 18.7598C44.1266 18.7598 45.1281 18.4961 45.9922 18.0371C46.8169 17.6074 47.8479 17.5977 48.7021 18.125C49.9785 18.9062 50.3811 20.5664 49.6054 21.8359L39.1093 39.0625H10.8907L0.3946 21.8359C-0.381069 20.5664 0.0214934 18.9062 1.29791 18.125C2.15213 17.6074 3.18308 17.6074 4.00784 18.0371C4.8817 18.4961 5.87338 18.7598 6.93378 18.7598C9.86954 18.7598 12.3438 16.7578 13.0311 14.043ZM10.8612 42.1875H39.1388L43.2037 46.2305C43.6161 46.6406 43.8517 47.207 43.8517 47.793C43.8517 49.0137 42.86 50 41.6327 50H8.3673C7.13997 50 6.1483 49.0137 6.1483 47.793C6.1483 47.207 6.38394 46.6406 6.79632 46.2305L10.8612 42.1875Z"
                  fill="black"
                />
              </svg>`,
      spillinfo: {
        flytte: {
          path: [
            [1, 0],
            [0, -1],
            [0, 1],
            [-1, 0],
            [1, 1],
            [1, -1],
            [-1, 1],
            [-1, -1],
          ],
          recursive_path: true,
        },
        boardpieceArray: ["black", "Queen"],
      },
    },
    Rook: {
      Svg: ` <!-- svart tårn -->
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.92308 16.6667V1.66667C1.92308 0.75 2.78846 0 3.84615 0H11.5385C12.5962 0 13.4615 0.75 13.4615 1.66667V5.83333C13.4615 6.29167 13.8942 6.66667 14.4231 6.66667H18.2692C18.7981 6.66667 19.2308 6.29167 19.2308 5.83333V1.66667C19.2308 0.75 20.0962 0 21.1538 0H28.8462C29.9038 0 30.7692 0.75 30.7692 1.66667V5.83333C30.7692 6.29167 31.2019 6.66667 31.7308 6.66667H35.5769C36.1058 6.66667 36.5385 6.29167 36.5385 5.83333V1.66667C36.5385 0.75 37.4038 0 38.4615 0H46.1538C47.2115 0 48.0769 0.75 48.0769 1.66667V16.6667C48.0769 17.7188 47.512 18.7083 46.5385 19.3333L40.3846 23.3333L42.3077 38.3333H7.69231L9.61538 23.3333L3.46154 19.3333C2.48798 18.7083 1.92308 17.7188 1.92308 16.6667ZM23.0769 26.6667H26.9231C27.9808 26.6667 28.8462 25.9167 28.8462 25V20C28.8462 18.1562 27.1274 16.6667 25 16.6667C22.8726 16.6667 21.1538 18.1562 21.1538 20V25C21.1538 25.9167 22.0192 26.6667 23.0769 26.6667ZM0.793269 45.9792L5.76923 41.6667H44.2308L49.2067 45.9792C49.7115 46.4167 50 47.0208 50 47.6458C50 48.9479 48.7861 50 47.2837 50H2.71635C1.21394 50 0 48.9479 0 47.6458C0 47.0208 0.288462 46.4167 0.793269 45.9792Z"
                  fill="black"
                />
              </svg>`,
      spillinfo: {
        flytte: {
          path: [
            [1, 0],
            [0, -1],
            [0, 1],
            [-1, 0],
          ],
          recursive_path: true,
        },
        boardpieceArray: ["black", "Rook"],
      },
    },
  },
  white: {
    Bishop: {
      Svg: ` <!-- hvit løper -->
              <svg
              width="50"
              height="50"
              viewBox="0 0 45 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
            <path
              d="M14.625 0C12.7547 0 11.25 1.25391 11.25 2.8125C11.25 4.125 12.3188 5.22656 13.7812 5.53125C12.6844 6.46875 11.5172 7.52344 10.35 8.69531C5.37187 13.6758 0 20.9531 0 29.4023C0 34.6523 3.45938 37.8633 6.75 39.6914V41.25H13.5V38.0859C13.5 37.0312 12.7969 36.0703 11.6719 35.5898C9.14062 34.5 6.75 32.6953 6.75 29.4141C6.75 22.9102 10.9406 16.8984 15.525 12.3164C17.775 10.0664 20.0391 8.23828 21.7406 6.98438C22.0078 6.78516 22.2609 6.60938 22.4859 6.44531C22.725 6.60938 22.9641 6.79688 23.2312 6.98438C24.9328 8.23828 27.1969 10.0664 29.4469 12.3164C30.1922 13.0547 30.9234 13.8398 31.6266 14.6602L22.3594 22.3828C21.0375 23.4844 21.0375 25.2656 22.3594 26.3555C23.6812 27.4453 25.8187 27.457 27.1266 26.3555L35.2547 19.582C37.0547 22.6172 38.2359 25.9453 38.2359 29.4023C38.2359 32.6836 35.8453 34.4883 33.3141 35.5781C32.1891 36.0586 31.4859 37.0195 31.4859 38.0742V41.2383H38.2359V39.6914C41.5266 37.8633 44.9859 34.6641 44.9859 29.4023C44.9859 20.9531 39.6141 13.6758 34.6359 8.69531C33.4688 7.53516 32.3016 6.46875 31.2047 5.53125C32.6531 5.21484 33.7359 4.11328 33.7359 2.8125C33.7359 1.25391 32.2313 0 30.3609 0L14.625 0ZM7.41094 54.375L9.74531 50.625H35.2687L37.6031 54.375H7.41094ZM36.6469 45H8.36719C6.67969 45 5.14687 45.7852 4.37344 47.0273L0.646875 53.0273C0.225 53.707 0 54.457 0 55.2188C0 57.8672 2.55937 60 5.7375 60H39.2625C42.4266 60 45 57.8672 45 55.2188C45 54.457 44.775 53.707 44.3531 53.0273L40.6266 47.0273C39.8531 45.7852 38.3063 45 36.6328 45H36.6469Z"
              fill="black"
            />
            </svg>`,
      spillinfo: {
        flytte: {
          path: [
            [1, 1],
            [1, -1],
            [-1, 1],
            [-1, -1],
          ],
          recursive_path: true,
        },
        boardpieceArray: ["white", "Bishop"],
      },
    },
    King: {
      Svg: ` <!-- hvit konge -->
              <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M27.6848 2.34375C27.6848 1.04492 26.4903 0 25.0056 0C23.5209 0 22.3264 1.04492 22.3264 2.34375V5.46875H18.7542C17.2695 5.46875 16.075 6.51367 16.075 7.8125C16.075 9.11133 17.2695 10.1562 18.7542 10.1562H22.3264V14.0625H6.65327C2.98058 14.0625 0 16.6699 0 19.8828C0 20.6836 0.189775 21.4746 0.546997 22.207L6.59746 34.375H12.4358L5.46997 20.332C5.40299 20.1855 5.35834 20.0391 5.35834 19.8828C5.35834 19.2578 5.93883 18.75 6.65327 18.75H43.3579C44.0723 18.75 44.6528 19.2578 44.6528 19.8828C44.6528 20.0391 44.6193 20.1953 44.5412 20.332L37.5642 34.375H43.4025L49.453 22.207C49.8214 21.4746 50 20.6836 50 19.8828C50 16.6699 47.0194 14.0625 43.3467 14.0625H27.6848V10.1562H31.257C32.7417 10.1562 33.9361 9.11133 33.9361 7.8125C33.9361 6.51367 32.7417 5.46875 31.257 5.46875H27.6848V2.34375ZM11.2972 42.1875H38.714L40.5671 45.3125H9.45524L11.3083 42.1875H11.2972ZM42.9672 39.1895C42.3532 38.1543 41.1253 37.5 39.7968 37.5H10.2143C8.87475 37.5 7.65796 38.1543 7.04398 39.1895L4.08573 44.1895C3.75084 44.7559 3.57223 45.3809 3.57223 46.0156C3.57223 48.2227 5.60393 50 8.12681 50H41.8844C44.3961 50 46.4389 48.2227 46.4389 46.0156C46.4389 45.3809 46.2603 44.7559 45.9254 44.1895L42.9672 39.1895Z"
                fill="black"
            />
            </svg>`,
      spillinfo: {
        flytte: {
          path: [
            [1, 0],
            [0, -1],
            [0, 1],
            [-1, 0],
            [1, 1],
            [1, -1],
            [-1, 1],
            [-1, -1],
          ],
          recursive_path: false,
        },
        boardpieceArray: ["white", "King"],
      },
    },
    Knight: {
      Svg: ` <!-- hvis hest -->
              <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.2902 4.6875H13.0915L15 5.9375C15.6696 6.37695 16.0714 7.07031 16.0714 7.8125C16.0714 8.55469 15.6696 9.24805 15 9.6875L14.2746 10.166C13.1585 10.8984 12.4888 12.0508 12.4888 13.2812L12.4554 22.168C12.4554 23.1641 13.0022 24.1113 13.9286 24.6875L14.1406 24.8145C15.2455 25.5078 16.7411 25.498 17.846 24.8047L23.4152 21.2598C24.6094 20.498 26.2835 20.7324 27.154 21.7773C28.0246 22.8223 27.7567 24.2871 26.5625 25.0488L20.9933 28.5937L14.9888 32.4121C14.1741 32.9297 13.538 33.6035 13.1027 34.375H7.45536C8.04688 32.2168 9.44197 30.2832 11.4621 28.877C11.317 28.7988 11.1719 28.7109 11.038 28.623L10.8259 28.4961C8.48215 27.0312 7.09822 24.668 7.10938 22.1484L7.14286 13.2617C7.15402 11.3281 7.89063 9.48242 9.21876 7.99805L9.17411 7.96875C7.89063 7.12891 7.14286 5.82031 7.14286 4.42383C7.14286 1.98242 9.40849 0 12.1987 0H25.2902C36.9643 0 46.4286 8.28125 46.4286 18.4961C46.4286 19.5801 46.317 20.6641 46.1049 21.7383L43.538 34.375H38.0915L40.8259 20.918C40.9933 20.1172 41.0714 19.3066 41.0714 18.4961C41.0714 10.8691 34.0067 4.6875 25.2902 4.6875ZM9.50893 42.1875L7.66742 45.3125H42.3326L40.4799 42.1875H9.50893ZM44.7433 39.1895L47.7009 44.1895C48.0357 44.7559 48.2143 45.3809 48.2143 46.0156C48.2143 48.2129 46.183 50 43.6607 50H6.33929C3.81697 50 1.78572 48.2227 1.78572 46.0156C1.78572 45.3809 1.96429 44.7559 2.29911 44.1895L5.2567 39.1895C5.85938 38.1543 7.08706 37.5 8.42635 37.5H41.5737C42.913 37.5 44.1295 38.1543 44.7433 39.1895ZM19.1964 12.5C19.7884 12.5 20.3562 12.7058 20.7748 13.0721C21.1934 13.4383 21.4286 13.9351 21.4286 14.4531C21.4286 14.9711 21.1934 15.4679 20.7748 15.8342C20.3562 16.2005 19.7884 16.4062 19.1964 16.4062C18.6044 16.4062 18.0367 16.2005 17.6181 15.8342C17.1995 15.4679 16.9643 14.9711 16.9643 14.4531C16.9643 13.9351 17.1995 13.4383 17.6181 13.0721C18.0367 12.7058 18.6044 12.5 19.1964 12.5Z"
              fill="black"
            />
          </svg>`,
      spillinfo: {
        flytte: {
          path: [
            [1, 2],
            [2, 1],
            [-1, 2],
            [-2, 1],
            [1, -2],
            [2, -1],
            [-1, -2],
            [-2, -1],
          ],
          recursive_path: false,
        },
        boardpieceArray: ["white", "Knight"],
      },
    },
    Pawn: {
      Svg: ` <!-- hvit bonde -->
              <svg
                width="50"
                height="50"
                viewBox="0 0 30 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.7432 12.5C21.7432 11.5151 21.5687 10.5398 21.2296 9.62987C20.8904 8.71993 20.3934 7.89314 19.7668 7.1967C19.1402 6.50026 18.3963 5.94781 17.5776 5.5709C16.7589 5.19399 15.8815 5 14.9953 5C14.1092 5 13.2317 5.19399 12.413 5.5709C11.5943 5.94781 10.8504 6.50026 10.2238 7.1967C9.59723 7.89314 9.10019 8.71993 8.76108 9.62987C8.42196 10.5398 8.24742 11.5151 8.24742 12.5C8.24742 13.4849 8.42196 14.4602 8.76108 15.3701C9.10019 16.2801 9.59723 17.1069 10.2238 17.8033C10.8504 18.4997 11.5943 19.0522 12.413 19.4291C13.2317 19.806 14.1092 20 14.9953 20C15.8815 20 16.7589 19.806 17.5776 19.4291C18.3963 19.0522 19.1402 18.4997 19.7668 17.8033C20.3934 17.1069 20.8904 16.2801 21.2296 15.3701C21.5687 14.4602 21.7432 13.4849 21.7432 12.5ZM23.9925 25H22.8116L23.8144 33.3333H19.2784L18.2755 25H11.7151L10.7123 33.3333H6.1762L7.17901 25H5.99813C4.75164 25 3.74883 23.8854 3.74883 22.5C3.74883 21.1146 4.75164 20 5.99813 20C4.58294 17.9062 3.74883 15.3125 3.74883 12.5C3.74883 5.59375 8.78163 0 14.9953 0C21.209 0 26.2418 5.59375 26.2418 12.5C26.2418 15.3125 25.4077 17.9062 23.9925 20C25.239 20 26.2418 21.1146 26.2418 22.5C26.2418 23.8854 25.239 25 23.9925 25ZM4.93908 45H25.0515L23.4958 41.6667H6.48547L4.93908 45ZM24.4236 36.6667C25.5483 36.6667 26.5698 37.3646 27.0853 38.4687L29.5689 43.8021C29.85 44.4062 30 45.0729 30 45.75C30 48.0938 28.2943 50 26.1762 50H3.8238C1.70572 50 0 48.1042 0 45.75C0 45.0729 0.149953 44.4062 0.431115 43.8021L2.91471 38.4687C3.42081 37.3646 4.45173 36.6667 5.57638 36.6667H24.4142H24.4236Z"
                  fill="black"
                />
              </svg>`,
      spillinfo: {
        flytte: {
          path: [[-1, 0]],
          recursive_path: false,
        },
        boardpieceArray: ["white", "Pawn"],
        betingelser: [
          {
            navn: "PieceNotMoved",
          },
        ],
      },
    },
    Queen: {
      Svg: ` <!-- hvit dronning -->
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 9.375C26.2448 9.375 27.4386 8.88114 28.3188 8.00206C29.199 7.12299 29.6935 5.9307 29.6935 4.6875C29.6935 3.4443 29.199 2.25201 28.3188 1.37294C27.4386 0.49386 26.2448 0 25 0C23.7552 0 22.5614 0.49386 21.6812 1.37294C20.801 2.25201 20.3065 3.4443 20.3065 4.6875C20.3065 5.9307 20.801 7.12299 21.6812 8.00206C22.5614 8.88114 23.7552 9.375 25 9.375ZM15.6911 8.59375C13.9213 8.59375 12.6306 9.84375 12.2101 11.2207C11.4278 13.7793 9.04196 15.6348 6.22584 15.6348C5.24802 15.6348 4.32886 15.4102 3.51727 15.0195C2.77413 14.6582 1.88431 14.6973 1.1705 15.1367C0.0362306 15.8301 -0.335341 17.2949 0.329577 18.4473L9.51132 34.375H14.9284L6.81253 20.3027C10.7727 20.0879 14.1755 17.7734 15.916 14.4629C18.0672 17.0801 21.3332 18.75 24.9902 18.75C28.6473 18.75 31.9132 17.0801 34.0644 14.4629C35.8049 17.7832 39.2077 20.0977 43.1679 20.3027L35.0716 34.375H40.4887L49.6704 18.4473C50.3353 17.3047 49.9638 15.8398 48.8295 15.1465C48.1157 14.707 47.2259 14.668 46.4827 15.0293C45.6614 15.4199 44.752 15.6445 43.7742 15.6445C40.958 15.6445 38.5722 13.7891 37.7899 11.2305C37.3694 9.84375 36.0787 8.59375 34.3089 8.59375C32.891 8.59375 31.7372 9.42383 31.1407 10.4785C29.9282 12.627 27.6303 14.0625 25 14.0625C22.3697 14.0625 20.0718 12.6172 18.8593 10.4785C18.2628 9.42383 17.1188 8.59375 15.6911 8.59375ZM12.9924 42.1875H37.0076L38.6308 45.3125H11.379L13.0021 42.1875H12.9924ZM40.7331 39.1895C40.1953 38.1543 39.1197 37.5 37.9561 37.5H12.0439C10.8705 37.5 9.80466 38.1543 9.26686 39.1895L6.67563 44.1895C6.38229 44.7559 6.22584 45.3809 6.22584 46.0156C6.22584 48.2129 8.00547 50 10.2153 50H39.7847C41.9848 50 43.7742 48.2227 43.7742 46.0156C43.7742 45.3809 43.6177 44.7559 43.3244 44.1895L40.7331 39.1895Z"
                  fill="black"
                />
              </svg>`,
      spillinfo: {
        flytte: {
          path: [
            [1, 0],
            [0, -1],
            [0, 1],
            [-1, 0],
            [1, 1],
            [1, -1],
            [-1, 1],
            [-1, -1],
          ],
          recursive_path: true,
        },
        boardpieceArray: ["white", "Queen"],
      },
    },
    Rook: {
      Svg: ` <!-- hvit tårn -->
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.24837 5V16.6667C6.24837 16.9271 6.40458 17.1771 6.66493 17.3333L13.3299 21.3333C14.215 21.8646 14.6837 22.7292 14.5665 23.6146L13.2127 33.3333H6.92528L8.14892 24.4792L2.91591 21.3333C1.08045 20.2292 0 18.5 0 16.6667V4.16667C0 1.86458 2.33012 0 5.20698 0H44.78C47.6569 0 49.987 1.86458 49.987 4.16667V16.6667C49.987 18.5 48.9065 20.2292 47.0711 21.3333L41.8381 24.4792L43.0617 33.3333H36.7743L35.4205 23.6146C35.3033 22.7396 35.7719 21.8646 36.6571 21.3333L43.322 17.3333C43.5824 17.1771 43.7386 16.9271 43.7386 16.6667V5H35.4074V7.5C35.4074 8.88542 34.0146 10 32.2833 10C30.5519 10 29.1591 8.88542 29.1591 7.5V5H20.8279V7.5C20.8279 8.88542 19.435 10 17.7037 10C15.9724 10 14.5795 8.88542 14.5795 7.5V5H6.24837ZM6.86019 45H43.1268L40.9659 41.6667H9.00807L6.86019 45ZM42.2546 36.6667C43.8167 36.6667 45.2356 37.3646 45.9516 38.4687L49.4012 43.8021C49.7917 44.4062 50 45.0729 50 45.75C50 48.0938 47.6308 50 44.6889 50H5.31112C2.36917 50 0 48.1042 0 45.75C0 45.0729 0.208279 44.4062 0.598802 43.8021L4.04842 38.4687C4.75137 37.3646 6.18329 36.6667 7.74538 36.6667H42.2416H42.2546ZM22.9107 26.6667C21.7652 26.6667 20.8279 25.9167 20.8279 25V20C20.8279 18.1562 22.6894 16.6667 24.9935 16.6667C27.2976 16.6667 29.1591 18.1562 29.1591 20V25C29.1591 25.9167 28.2218 26.6667 27.0763 26.6667H22.9107Z"
                  fill="black"
                />
              </svg>`,
      spillinfo: {
        flytte: {
          path: [
            [1, 0],
            [0, -1],
            [0, 1],
            [-1, 0],
          ],
          recursive_path: true,
        },
        boardpieceArray: ["white", "Rook"],
      },
    },
  },
};

// Funksjoner
// Små hjelpefunksjoner
function IndexOnBoard(x) {
  return x >= 0 && x <= 7;
}
function Splitkoordinattilarray(string) {
  let svar = string.split("");
  return [
    Convert.Index.From.Tall(svar[1]),
    Convert.Index.From.UpperCase(svar[0]),
  ];
}
// setboard, og veivalg er de funksjonene som setter spillet igang, og er de eneste som er nevn globalt.
// setboard, setter svg på brikke, alt ettersom hvordan brett_id ser ut. Den kan ha annerledes verdi enn ved start ved load of page
function setboard() {
  for (let i = 0; i < 8; i++) {
    let brett_id_indre = [];
    let chr = Convert.Index.To.Tall(i);
    let boardpieceArray = [];
    for (let j = 0; j < 8; j++) {
      let letter = Convert.Index.To.UpperCase(j);
      // hvis brette trenger flere object elementer, så er det bare til å legge dem til her.
      let SVG = spillebrikke.None.Svg;
      switch (chr) {
        case "2":
          SVG = spillebrikke.black.Pawn.Svg;
          boardpieceArray = spillebrikke.black.Pawn.spillinfo.boardpieceArray;
          break;
        case "1":
          switch (letter) {
            case "A":
            case "H":
              SVG = spillebrikke.black.Rook.Svg;
              boardpieceArray =
                spillebrikke.black.Rook.spillinfo.boardpieceArray;
              break;
            case "B":
            case "G":
              SVG = spillebrikke.black.Knight.Svg;
              boardpieceArray =
                spillebrikke.black.Knight.spillinfo.boardpieceArray;
              break;
            case "C":
            case "F":
              SVG = spillebrikke.black.Bishop.Svg;
              boardpieceArray =
                spillebrikke.black.Bishop.spillinfo.boardpieceArray;
              break;
            case "D":
              SVG = spillebrikke.black.King.Svg;
              boardpieceArray =
                spillebrikke.black.King.spillinfo.boardpieceArray;
              break;
            case "E":
              SVG = spillebrikke.black.Queen.Svg;
              boardpieceArray =
                spillebrikke.black.Queen.spillinfo.boardpieceArray;
              break;
          }
          break;
        case "7":
          SVG = spillebrikke.white.Pawn.Svg;
          boardpieceArray = spillebrikke.white.Pawn.spillinfo.boardpieceArray;
          break;
        case "8":
          switch (letter) {
            case "A":
            case "H":
              SVG = spillebrikke.white.Rook.Svg;
              boardpieceArray =
                spillebrikke.white.Rook.spillinfo.boardpieceArray;
              break;
            case "B":
            case "G":
              SVG = spillebrikke.white.Knight.Svg;
              boardpieceArray =
                spillebrikke.white.Knight.spillinfo.boardpieceArray;
              break;
            case "C":
            case "F":
              SVG = spillebrikke.white.Bishop.Svg;
              boardpieceArray =
                spillebrikke.white.Bishop.spillinfo.boardpieceArray;
              break;
            case "D":
              SVG = spillebrikke.white.King.Svg;
              boardpieceArray =
                spillebrikke.white.King.spillinfo.boardpieceArray;
              break;
            case "E":
              SVG = spillebrikke.white.Queen.Svg;
              boardpieceArray =
                spillebrikke.white.Queen.spillinfo.boardpieceArray;
          }
      }
      let brett_object = {
        ID: {
          tag: letter + chr,
          bokstav: letter,
          tall: chr,
        },
        BoardInfo: {
          BoardPiece: boardpieceArray,
          Svg: SVG,
          PieceMoved: false,
        },
      };
      brett_id_indre.push(brett_object);
      brett.querySelector(`#${letter + chr} .her`).innerHTML = SVG;
    }
    brett_id.push(brett_id_indre);
  }
}
// funksjonen under beveger brikkene ved å klikke rundt på brettet.
function veivalg() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let telle_tall = Convert.Index.To.Tall(j);
      let telle_bokstav = Convert.Index.To.UpperCase(i);
      brett
        .querySelector(`.bokstav_${telle_bokstav}.tall_${telle_tall}`)
        .addEventListener("click", function () {
          let aa_pushe = {
            index: [j, i],
            bokstav: telle_bokstav,
            tall: telle_tall,
          };
          if (brett_queue.length > 1) {
            brett_queue = [aa_pushe];
          } else {
            brett_queue.push(aa_pushe);
          }
          if (brett_queue.length == 1) {
            brett
              .querySelector(`#${brett_queue[0].bokstav}${brett_queue[0].tall}`)
              .classList.add("markertbrikke");
          } else if (brett_queue.length == 2) {
            brett
              .querySelector(`#${brett_queue[0].bokstav}${brett_queue[0].tall}`)
              .classList.remove("markertbrikke");
            let BrettIdElFrom =
              brett_id[brett_queue[0].index[0]][brett_queue[0].index[1]];
            let BrettIdElTo =
              brett_id[brett_queue[1].index[0]][brett_queue[1].index[1]];
            MoveBoardPiece(BrettIdElFrom, BrettIdElTo);
          }
        });
    }
  }
}

// flytte brikker etter å ha sjekkt regler
function MoveBoardPiece(BrettIdElFrom, BrettIdElTo) {
  if (validmove(BrettIdElFrom, BrettIdElTo)) {
    actuallyMoveBoardPiece(BrettIdElFrom, BrettIdElTo);
  }
}
// flytte bare brikke
function actuallyMoveBoardPiece(BrettIdElFrom, BrettIdElTo) {
  brett.querySelector(`#${BrettIdElTo.ID.tag} .her`).innerHTML =
    BrettIdElFrom.BoardInfo.Svg;
  brett.querySelector(`#${BrettIdElFrom.ID.tag} .her`).innerHTML =
    spillebrikke.None.Svg;
  brett_id[Convert.Index.From.Tall(BrettIdElTo.ID.tall)][
    Convert.Index.From.UpperCase(BrettIdElTo.ID.bokstav)
  ].BoardInfo = BrettIdElFrom.BoardInfo;
  brett_id[Convert.Index.From.Tall(BrettIdElFrom.ID.tall)][
    Convert.Index.From.UpperCase(BrettIdElFrom.ID.bokstav)
  ].BoardInfo = spillebrikke.None;
  brett_id[Convert.Index.From.Tall(BrettIdElTo.ID.tall)][
    Convert.Index.From.UpperCase(BrettIdElTo.ID.bokstav)
  ].BoardInfo.PieceMoved = true;
}
function validmove(BrettIdElFrom, BrettIdElTo) {
  if (BrettIdElFrom.BoardInfo.BoardPiece.length > 0) {
    return find_path_med_betingelser(
      spillebrikke[BrettIdElFrom.BoardInfo.BoardPiece[0]][
        BrettIdElFrom.BoardInfo.BoardPiece[1]
      ].spillinfo,
      [Splitkoordinattilarray(BrettIdElFrom.ID.tag)],
      Splitkoordinattilarray(BrettIdElTo.ID.tag)
    );
  } else {
    return false;
  }
}

function find_path(brikke, start, end = [], svar = false, depth = 7) {
  console.log(`depth = ${depth}`);
  let queue_start = [];
  let queue_path = [];
  let path_mx = [];
  brikke.flytte.path.forEach(function (element, index) {
    console.log(`index = ${index}`);
    console.log(element);
    let path_tall =
      (start.length == 1 ? start[0][0] : start[index][0]) + element[0];
    let path_bokstav =
      (start.length == 1 ? start[0][1] : start[index][1]) + element[1];
    if (IndexOnBoard(path_tall) && IndexOnBoard(path_bokstav)) {
      console.log("path on board"); // Path på board
      path_mx = [path_tall, path_bokstav];
      riktigesteg.push(path_mx);
      console.log(path_mx, end);
      console.log("printer brikke på path");
      console.log(brett_id[path_tall][path_bokstav].BoardInfo.BoardPiece);
      console.log(brett_id[path_tall][path_bokstav]);
      console.log(brikke.flytte.recursive_path);
      if (
        !brett_id[path_tall][path_bokstav].BoardInfo.BoardPiece.length &&
        path_tall !== end[0] &&
        path_bokstav !== end[1] &&
        brikke.flytte.recursive_path
      ) {
        queue_start.push(path_mx);
        queue_path.push(element);
        console.log("queue");
      } else if (path_tall === end[0] && path_bokstav === end[1]) {
        brikke.flytte.recursive_path = false;
        svar = true;
        console.log("Jeg har funnet riktig steg.");
      }
      console.log(brikke.flytte.recursive_path);
    } else {
      console.log("Path er utenfor brettet."); // Path utenfor board
    }
  });
  console.log("Jeg printer kø");
  console.log(queue_start);
  if (brikke.flytte.recursive_path && depth) {
    return find_path(
      {
        flytte: {
          path: queue_path,
          recursive_path: brikke.flytte.recursive_path,
        },
        boardpieceArray: brikke.boardpieceArray,
      },
      queue_start,
      end,
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

function find_path_med_betingelser(a, b, c) {
  // legg til betingelse-steg start
  console.log(a);

  // legg til betingelse-steg slutt
  if (a.flytte.recursive_path) {
    retrieve_recursive = true;
  }
  riktigesteg = [];
  // klar for find_path
  console.log(`Brikke ${a.boardpieceArray} vil gå fra ${b} til ${c}`);
  let returnereskal = find_path(a, b, c);
  console.log(riktigesteg);
  // ferdig med find_path
  retrieve_recursive = false;
  return returnereskal;
}

// globale variabler  .

let brett = document.querySelector("main #sjakkcontainer");
let brett_id = [];
let brett_queue = [];
let riktigesteg = [];
let retrieve_recursive = false;

const betingelse_navn = ["PieceNotMoved"];

setboard();
veivalg();

const klikkebrikke = [
  ["E7", "E6"],
  ["E2", "E3"],
  ["F8", "E7"],
  ["E7", "G5"],
];
klikkebrikke.forEach(function (vei) {
  vei.forEach(function (vei1) {
    brett.querySelector(`#${vei1}`).click();
  });
});
console.log(brett_id);

// TODO: Angi regler for spillets fremgang. ferdig, mangler bare for betingelsesteg.
// TODO: lagre brett_id lokalt i nettleseren, så spillprogresjonen ikke slettes.
// TODO: Angi nytt spill-knapp.
// TODO: lagre variabelen spillebrikke fil man henter info ifra. spille.None kan lagres om egen variabel i spillet.
// TODO: Angi two-player, lokalt og online.
// TODO: Angi Digital sjakkmotstandard:

// testing

console.log(!!spillebrikke.black.Bishop.spillinfo.flytte);
