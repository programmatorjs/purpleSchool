let adressLat = 100;
let adressLong = 110;
let positionLat = 120;
let positionLong =130;

let distance = ((positionLat - adressLat) ** 2) + ((positionLong - adressLong) ** 2)

console.log(Math.sqrt(distance))