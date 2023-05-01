function distanceFromHqInBlocks(customerLocation) {
    const hqLocation = 42;
    return Math.abs(customerLocation - hqLocation);
} //Math.abs is used to make sure the value is a positive number
console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(34));

function distanceFromHqInFeet(customerLocation) {
    distanceFromHqInBlocks(customerLocation);
    const feetInBlock = 264;
    return distanceFromHqInBlocks(customerLocation) * feetInBlock;
}
console.log(distanceFromHqInFeet(43));
console.log(distanceFromHqInFeet(50));

function distanceTravelledInFeet(start, destination) {
    const feetInBlock = 264;
    return Math.abs((start - destination) * feetInBlock);
}
console.log(distanceTravelledInFeet(43, 48));
console.log(distanceTravelledInFeet(50, 60));
console.log(distanceTravelledInFeet(34, 60));

function calculatesFarePrice(start, destination) {
    let farePrice = 0;
    const distance = distanceTravelledInFeet(start, destination);
    if(distance <= 400) {
        return farePrice = 0;
    }
    else if(distance > 400 && distance <= 2000) {
        return farePrice = 2.56; 
    }
    else if(distance > 2000 && distance <= 2500) {
        return farePrice = 25;
    }
    else (distance > 2500) 
        return 'cannot travel that far' 
} 


