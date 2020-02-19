//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false

function isSubset(int arrA[], int arrB[]) {
    var m = arrA.Length;
    var n = arrB.Length;
    var i = 0;
    var j = 0;

    while (i < n && j < m) {


        if (arrA[i] == arrB[j]) {

            i++;
            j++;


            if (j == m)
                return true;
        }
    }
    return false;
} 