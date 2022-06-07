// Code your solution in this file!
function distanceFromHqInBlocks(noOfBlocks){
    if (noOfBlocks <42){
      return 42-noOfBlocks
    } else{
        return noOfBlocks-42
    }
}
function distanceFromHqInFeet(noOfBlocks){
    return distanceFromHqInBlocks (noOfBlocks)*264 //One block equals 264 foot
}
function distanceTravelledInFeet(start, destination){
    if (start < destination){
     return (destination-start)*264
    } else{
        return (start-destination)
    }

}
function calculateFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start,destination)
    if (dist<=400){
      return 0
    } else if (distance > 400 && dist <= 2000){
      return   .02*distance
    } else if (distance>2000 && distance <2500){
       return  25
    } else{
        return "cannot travel that far"
    }
}
