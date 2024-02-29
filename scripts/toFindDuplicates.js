export default function toFindDuplicates(arr, boolean) { // toFindDuplicates(arr, boolean) --> boolean
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
      to_keys.forEach(function (keys) {
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