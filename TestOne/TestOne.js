//--------------------CHICKEN BIRTH-------------------//
//Given the following set of data about chicken birth rates, 
//you need to filter out the objects where the birth rate value
//is greater than 15 per 1000 chickens for that year. 
//Store the good years in a new array named `bestYears`.
//  const bestyears = [];
//  const birthRates = [
//     { year: 1969, birthRate: 13}, 
//     { year: 1970, birthRate: 16}, 
//     { year: 1971, birthRate: 15}, 
//     { year: 1972, birthRate: 11}, 
//     { year: 1973, birthRate: 18}, 
//     { year: 1974, birthRate: 17}, 
//     { year: 1975, birthRate: 9}
//  ]

//     for (let i=0; i<birthRates.length; i++)
//     {
//     const currentYear = birthRates[i];
//     if (currentYear.birthRate>15)
//     {
//     bestyears.push(currentYear);
//     }
//     }

// birthRates.forEach(function(currentYear)
//{
//if (currentYear.birthRate>15)
//{
//  bestyears.push(currentYear)
//}
//})

//for(const currentYear of birthRates)
//{
//  if (currentYear.birthRate>15)
// {
//bestyears.push(currentYear)
//}
//}
// console.log(bestyears);


//---------------POLITICIAN---------------//
// const politician =
// {
//     plateform :{
//         money: ["i like it","i have lots of it","i dont want other people to have it"],
//         health: "i m against it"
//     },
//     district: "Michigan 13"
//     }
// for(const policy of politician.plateform.money)
// {
//     console.log(policy);
// }
// ----------------------------------------car speed example-----------------------------------------
// function go(direction,speed){

//     if(speed > 75){
//         console.log( "The car is moving in " + direction +" at "+ speed + " mph "+ "slow down");
//     }
//     else{
//         console.log( "The car is moving in " + direction +" at "+ speed + " mph "+ " you are good");
//     }


//     }
//     go("forward", 80);
//     go("forward, 70");


// ---------------------------------------------band Example----------------------------------------------------------


//     var  bandNumber = 0 ;

// const takeNumber = function (bandName) {
//     bandNumber += 1 ;
//    return (bandNumber +". " + bandName);

// }

// const scum = takeNumber("Galactic Scum")
// console.log(scum);  // This should print "1. Galactic Scum" in the console

// const under = takeNumber("Underdogs")
// console.log(under);  // This should print "2. Underdogs" in the console

// const rock = takeNumber("rockband")
// console.log(rock); 


// ---------------------------------------------------------------------------------------------------------------

// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement(theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""
    
    ;

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
     buildMeUp = buildMeUp +" " + theWordArray[i]

     if (theWordArray[i]  % 3 === 0){
         buildMeUp += theWordArray[i] + "!";
         console.log(buildMeUp);
    }

     
        // console.log(buildMeUp);
        // // Print buildMeUp to the console
    }
    


}

// Invoke the function and pass in the array
addExcitement(sentence);

