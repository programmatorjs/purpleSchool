const adressLat = 100;     //X0
const adressLong = 110;    //Y0
const positionLat = 120;   //X1
const positionLong =130;   //Y1


const distanceX = (positionLat - adressLat)
const distanceY = (positionLong - adressLong)
const point = Math.hypot(distanceX, distanceY)

console.log(point)

