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
        let currentword = theWordArray[i]
        // Concatenate the new word onto buildMeUp
        buildMeUp += currentword += " "
     
     if ([i]  % 3 === 2){

         buildMeUp += "!";
        //  console.log(buildMeUp);
    }

     
        console.log(buildMeUp);
        // // Print buildMeUp to the console
    }
    


}

// Invoke the function and pass in the array
addExcitement(sentence);


// -----------------------------------------------another solution for overly excitement----------------------------------


let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];


function addExcitement (theWordArray, symb) {

    let buildMeUp = "";
    let wordCount = 0;

    for (let i = 0; i < theWordArray.length; i++) {
        wordCount ++;
        let currentWord = theWordArray[i];
        buildMeUp += " " + currentWord;

        if(wordCount % 3 === 0){
            buildMeUp = buildMeUp + symb.repeat(wordCount/3);
        }
        console.log(buildMeUp);
    }

}

addExcitement(sentence, " SO GREAT ");