const sumAll = function(startNum, endNum) {

    if(startNum>endNum){
        let temp=startNum;
        startNum=endNum;
        endNum=temp;
    }

    if(startNum<0 || endNum<0 || !Number.isInteger(startNum) ||  !Number.isInteger(endNum)){
        return 'ERROR';
    }

    let sum=0;
    for(let x=startNum; x<=endNum; x++){
        sum+=x;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
