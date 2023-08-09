function crypto(passoword) {
  const reversedPassword = [...passoword].reverse();
  reversedPassword.unshift(
    reversedPassword.splice(reversedPassword.length / 2).join('')
  );

  return reversedPassword.join('');
}

function check(decryptedPassword, originalPassword) {
  const reversedPassword = [...originalPassword].reverse();
  const elem = reversedPassword.splice(0, reversedPassword.length / 2).join('');
  reversedPassword.push(elem);

  return reversedPassword.join('') === decryptedPassword;
}

console.log(crypto('password11'));
console.log(check('wssap11dro', 'password11'));
console.log(check('ssapdorw', 'wrong'));
