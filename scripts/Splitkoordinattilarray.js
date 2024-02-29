export default function Splitkoordinattilarray(Elements, string) { // Elements = Splitkoordinattilarray(Elements, string)
    let svar = string.split("");
    return [
      Elements.Convert.Index.From.Tall(svar[1]),
      Elements.Convert.Index.From.UpperCase(svar[0]),
    ];
  }