//--------------------CHICKEN BIRTH-------------------//
//Given the following set of data about chicken birth rates, 
//you need to filter out the objects where the birth rate value
 //is greater than 15 per 1000 chickens for that year. 
 //Store the good years in a new array named `bestYears`.
 const bestyears = [];
 const birthRates = [
    { year: 1969, birthRate: 13}, 
    { year: 1970, birthRate: 16}, 
    { year: 1971, birthRate: 15}, 
    { year: 1972, birthRate: 11}, 
    { year: 1973, birthRate: 18}, 
    { year: 1974, birthRate: 17}, 
    { year: 1975, birthRate: 9}
 ]
  
    for (let i=0; i<birthRates.length; i++)
    {
    const currentYear = birthRates[i];
    if (currentYear.birthRate>15)
    {
    bestyears.push(currentYear);
    }
    }

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
console.log(bestyears);


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