'user strict'

let a = ["a", "a", "c", "b"];
let b = ["a", "a", "b",  ""];
let ar1 = ["a", "a", "b", "c"];
let ar2 = ["a", "a", "b", "c"];
let res = 0;

function checkExam(array1, array2) {
    for (let i=0; i<array1.length; i++) {
        if (array1[i] == array2[i]) {
            res += 4
        } else if(array2[i] == ''){
            res += 0
        } else {
            res -=1
        }
    }
    if (res < 0){
        return 0
    } else {
        return res
    }
}
checkExam(ar1, ar2)
console.log(checkExam(a, b))