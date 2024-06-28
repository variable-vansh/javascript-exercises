const removeFromArray = function(array, ...remove) {
    let newArray=[];
    for(let x=0; x<array.length; x++){

        if(!remove.includes(array[x])){
            newArray.push(array[x])
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
