const calc = (str) => str !== '' ? str.split(',').reduce((acc, cur) => acc + parseInt(cur), 0) : 0;

export default calc;
