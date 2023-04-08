const splitter = (str) => {
    const arr = str.replace(/\D/g, " ").trim().split(' ');
    let ans = false
    arr.forEach(el => {
        if(el === '') {
            throw 'negatives not allowed'
        }
    })
    return arr.reduce((acc, el) => acc + parseInt(el), 0)
}



const calc = (str) =>  str !== '' ? splitter(str) : 0;

// const str = ''
// console.log(calc(str))

export default calc;
