const repeatString = function(string, num) {
    if(num<0){
        return 'ERROR';
    }
    let newString="";
    for(let x=1;x<=num; x++){
        newString=newString+string;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
