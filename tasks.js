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

function even_or_odd(number) {
    if(number % 2 == 0) {
        return "Even"
    } else { return "Odd"}
}
even_or_odd(25)
even_or_odd(20)