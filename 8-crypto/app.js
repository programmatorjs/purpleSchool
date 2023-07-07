function crypto(password) {
    let arr = password.split('').reverse();
    arr.unshift(arr.splice(arr.length / 2).join(''));
    return arr.join('');
};

console.log(crypto('password11'));




function check(deCripto, passoword) {
    let arr = passoword.split('').reverse();
    let elem = arr.splice(0, arr.length / 2).join('');
    arr.push(elem);
    return arr.join('') === deCripto;
};


console.log(check('wssap11dro', 'password11'));







