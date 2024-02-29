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
export default Convert