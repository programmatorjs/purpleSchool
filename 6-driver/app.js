const hasLicence = true;
const age = 18;
const isDrunk = false;

const check = ( age >= 18) && !isDrunk && hasLicence;

const licenseToDrive = check ? console.log('Может ехать') : console.log('Вождение запрещено')


