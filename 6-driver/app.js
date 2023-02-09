let hasLicence = true;
let age = 19;
let isDrunk = false;

let check = ( age > 18) && !isDrunk && hasLicence;

let licenseToDrive = check ? console.log('Может ехать') : console.log('Вождение запрещено')


