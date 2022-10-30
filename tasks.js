'user strict'

function highAndLow(numbers){
    function highAndLow(numbers){
        let array = numbers.split(" ");
        let arraySort = array.sort((a, b) => a - b)   
        let res = `${arraySort[arraySort.length-1]}`+ ' ' + `${arraySort[0]}`
        return res
    }
}
highAndLow('1 2 8 -2 9 25')