function selectionSort() {

    var array = [2, 7, 4, 1, 5, 3];
    document.getElementById("array").value = array.toString();

    var len = array.length;

    for (var i = 0; i < len - 1; i++) {
        var minIndex = i;
        for (var j = i + 1; j < len; j++) {

            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        var temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
    document.getElementById("sortedarray").value = array.toString();
}



