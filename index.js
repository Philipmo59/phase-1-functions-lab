const hq = 42
const blocksToFeet = 264

let distanceFromHqInBlocks = function(pickup_location){
    return Math.abs(pickup_location - hq)
}
function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance) * blocksToFeet
}

function distanceTravelledInFeet(start, destination){
    return Math.abs(start - destination) * 264
}

function calculatesFarePrice(start, destination){
    let feet = distanceTravelledInFeet(start, destination)

    if (feet > 2500){
        return "cannot travel that far"
    }
    else if (feet > 2000){
        return 25
    }
    else if (feet > 400){
        return (feet - 400) * 0.02
    }
    else{
        return 0
    }
}


calculatesFarePrice(10,13); 