// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
      //  for (let i = 0; i < sentence.length; i++) {
       //     console.log (sentence[i]);
      //  }
    /*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""
    let wordCount =0;

    for (let i = 0; i < theWordArray.length; i++) {
        wordCount ++;
        if ( wordCount %3 === 0){
             buildMeUp += "!" .repeat(wordCount/3);
        }
        let currentword = theWordArray [i];

        // Concatenate the new word onto buildMeUp

        buildMeUp +=  " "  + currentword;
        // Print buildMeUp to the console
        console.log (buildMeUp)
    }

}

// Invoke the function and pass in the array
addExcitement(sentence)    

