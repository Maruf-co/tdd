const splitter = (str) => {
    return str.replace(/\D/g, " ").trim().split(' ');
}

const calc = (str) => str !== '' ? splitter(str).reduce((acc, cur) => acc + parseInt(cur), 0) : 0;

export default calc;
