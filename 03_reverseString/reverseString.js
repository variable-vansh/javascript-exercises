const reverseString = function(string) {
    let newString="";
    for(let x=string.length-1; x>=0; x--){
        newString=newString+string[x];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
