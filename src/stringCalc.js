const solve = (str) => {
    const arr = str.replace(/\D/g, " ").trim().split(' ');
    arr.forEach(el => {
        if(el === '') {
            throw 'negatives not allowed'
        }
    })
    return arr.reduce((acc, el) => { 
        const num = parseInt(el) < 10 ? parseInt(el) : 0
        return acc + num
    }, 0)
}

const calc = (str) =>  str !== '' ? solve(str) : 0;

export default calc;
