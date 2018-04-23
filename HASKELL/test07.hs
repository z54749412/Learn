quicksort :: (Ord a) => [a] -> [a]

quicksort [] = []

quicksort (x:xs) =

    let smallerSorted = quicksort [a | a <- xs, a <= x]

        biggerSorted = quicksort [a | a <- xs, a > x]

    in smallerSorted ++ [x] ++ biggerSorted


{-
    js 快排
    var quickSort = function(arr) {
    　　if (arr.length <= 1) { return arr; }
    　　var pivotIndex = Math.floor(arr.length / 2);
    　　var pivot = arr.splice(pivotIndex, 1)[0];
    　　var left = [];
    　　var right = [];
    　　for (var i = 0; i < arr.length; i++){
    　　　　if (arr[i] < pivot) {
    　　　　　　left.push(arr[i]);
    　　　　} else {
    　　　　　　right.push(arr[i]);
    　　　　}
    　　}
    　　return quickSort(left).concat([pivot], quickSort(right));
    };
-}