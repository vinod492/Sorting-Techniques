
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

   function bubbleSort1() {

       var array = [5, 4, 3, 2, 1];
       
       document.getElementById("array").value = array.toString();
     
       var len = array.length;
       for (var i = 0; i < len; i++) {
           for (var j = 0; j < (len-i-1); j++) {
               if (array[j]>array[j+1]) {
                   var temp = array[j];
                   array[j] = array[j + 1];
                   array[j + 1] = temp;
               }
           }
       }

       document.getElementById("sortedarray").value = array.toString();
       
   }

