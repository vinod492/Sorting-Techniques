function sort() {

    var array = [3, 7, 8, 4, 2, 1, 5, 56, 450];
    document.getElementById('array').value = array;

    array = array.sort(function (a, b) { return a - b; });
    
    /*
     * array.sort() sorts array in alphabetical order. Works best for sorting strings
     * When sorting numbers write a function which compares two values and returns +ve, 0 or -ve.
     * Ex: a=3,b=7, a-b = -4 . Sort function will sort 3 as lower than 7 
     */
    
    document.getElementById('sortedarray').value = array;

}

