
function bubbleSort() {

       var array = [3, 7, 1, 9, 45, 20];
       var len = array.length;
       for (var i = (len - 1); i >= 0; i--) {
           for (var j = (len - i); j > 0; j--) {
               if (array[j] < array[j - 1]) {
                   var temp = array[j];
                   array[j] = array[j - 1];
                   array[j - 1] = temp;
               }
           }
       }
       console.log(array);
   }

/* Bubble Sort*/
/* 
arr = 5,4,8,1;
i=0                                                    i=1                                                       i=2
It1: 4,5,8,1 (compare 0,1 elements)                    It1: 4,5,1,8 (compare 0,1 elements)                       It1: 1,4,5,8 (compare 0,1 elements) arr[1] is set 
It2: 4,5,8,1 (compare 1,2 elements)                    It2: 4,1,5,8 (compare 1,2 elements) arr[2] is set
It3: 4,5,1,8 (compare 2,3 elements) arr[3] is set  
*/ 

function bubbleSort1() {

    var array = [5, 4, 3, 2, 1];

    document.getElementById("array").value = array.toString();

    var len = array.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < (len - i - 1); j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    document.getElementById("sortedarray").value = array.toString();

}

