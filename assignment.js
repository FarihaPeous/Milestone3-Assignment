//  Question 1
function feetToMile(feet){
    const mile = feet/5280;
    return mile;
}
console.log(feetToMile(120));

// Question 2
function woodCalculator(chair,table,bed){
    const woodForChair = chair * 1;
    const woodForTable = table * 3;
    const woodForBed = bed * 5;
    const totalWood = woodForChair + woodForTable + woodForBed;
    return totalWood;
}
console.log(woodCalculator(14,20,15));


//Question 3
function brickCalculator(floor) {
    var totalFloor = floor;
    var total;
    if (totalFloor <= 10) {
        var result1 = console.log(totalFloor * 15000);
    }
        else if (totalFloor <= 20) {
        var result2 = console.log(totalFloor * 12000);
        } 
        else if (totalFloor > 20) {
        var result3 = console.log(totalFloor * 10000);
        }
    else{
        console.log("Please put valid number");
    }    
    var total = result1 + result2 + result3;
    return total;
  }

  //Question 4
  function tinyFriend (friends){
    var smallName = friends[0];
    for(var i = 0; i<friends.length; i++){
        var names = friends[i];
        if(names.length< smallName.length){
            smallName = names;
        }
    }
    return smallName;
}
console.log(tinyFriend(["aka", "naeem", "soyeb", "tasnim"]));
