// Could we determine if a certain value was present?

function isPresent2d(arr2d, value){
    for (var i = 0; i < arr2d.length; i++){
        for (var j = 0; j < arr2d[i].length; j++){
            if(arr2d[i][j] == value){
               return true 
            }
              
        }
    }
    return false
}

console.log(isPresent2d([ [1,2,3],
              [3,7,8],
              [9,8,5,4]], 6));

// complete the following function
function flatten(arr2d) {
    var flat = [];
    for (var i = 0; i < arr2d.length; i++){
        for (var j = 0; j < arr2d[i].length; j++){
            flat.push(arr2d[i][j]);
        }
    }
    return flat;
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]


    
              

                

