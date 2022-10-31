// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation){
return Math.abs(42 - pickUpLocation);
}
console.log(distanceFromHqInBlocks(50));

function distanceFromHqInFeet(byBlocks) {
    return distanceFromHqInBlocks(byBlocks)*264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((destination - start))*264;
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        return 0
      } else if (distance >= 401 && distance <= 2000) {
        return .02*((distance-400))
      } else if (distance >= 2001 && distance <= 2500) {
        return 25
      } else return ('cannot travel that far')
}
