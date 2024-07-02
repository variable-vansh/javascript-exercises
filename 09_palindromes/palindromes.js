const palindromes = function (string) {
    let checkThis = string.toLowerCase()
        .replace(/ /g, "")
        .replace(/,/g, "")
        .replace(/[^\w]/g, "")

    let see = ""
    for (let x = checkThis.length - 1; x >= 0; x--) {
        see = see + checkThis.charAt(x);
    }

    if (see === checkThis) {
        return true;
    } else {
        return false;
    }

    // // return checkThis === checkThis.split("").reverse().join("");

    // // let see = ""
    // // for (let x = checkThis.length - 1; x >= 0; x--) {
    // //     see = see + checkThis.charAt(x);
    // // }

    // return see === checkThis;
};

// Do not edit below this line
module.exports = palindromes;
