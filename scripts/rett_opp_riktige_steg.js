import toFindDuplicates from "./toFindDuplicates.js";
export default function rett_opp_riktige_steg(Elements,nokkel) { // Elements = rett_opp_riktige_steg(Elements,nokkel)
    Elements.riktigesteg[nokkel] = toFindDuplicates(Elements.riktigesteg[nokkel], false);
    return Elements
}