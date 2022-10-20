function createParagraph() {
    console.log("create paragraph has been logged")
    var wordOne = document.getElementById("wordOne").value;
    var wordTwo = document.getElementById("wordTwo").value;
    var wordThree = document.getElementById("wordThree").value;
    var wordFour = document.getElementById("wordFour").value;
    var wordFive = document.getElementById("wordFive").value;
    var wordSix = document.getElementById("wordSix").value;
    var wordSeven = document.getElementById("wordSeven").value;
    var wordEight = document.getElementById("wordEight").value;
    var wordNine = document.getElementById("wordNine").value;
    var wordTen = document.getElementById("wordTen").value;
    var wordEleven = document.getElementById("wordEleven").value;
    var wordTwelve = document.getElementById("wordTwelve").value;
    var wordThirteen = document.getElementById("wordThirteen").value;
    var wordFourteen = document.getElementById("wordFourteen").value;
    var wordFifthteen = document.getElementById("wordFifthteen").value;
    var wordSixteen = document.getElementById("wordSixteen").value;
    var wordSeventeen = document.getElementById("wordSeventeenth").value;
    var wordEightteen = document.getElementById("wordEighteenth").value;
    var wordNineteen = document.getElementById("wordNineteenth").value;

    // console.log(wordOne, wordTwo, wordThree, wordFour, wordFive, wordSix, wordSeven, wordEight, wordNine, wordTen, wordEleven, wordTwelve, wordThirteen, wordFourteen, wordFifthteen, wordSixteen, wordSeventeen, wordEightteen, wordnineteen)


var paragraph = "<p>  One of the most " + wordOne + " things about graduating is that my " + wordTwo + " are " + wordThree + " a huge party! I decided to have a backyard barbecue for all of my family and " + wordFour + " . Ive invited my best friends" + wordFive + " , " + wordSix + " , and of course my teacher Mrs. " + wordSeven + ". My dad is going to " + wordEight + " hamburgers and " + wordNine + " on his shiny new " + wordTen + " . He always thinks his " + wordEleven + " taste really " + wordTwelve + ", but i think they taste like " + wordThirteen + " , " + wordFourteen + ". My mom is going to make her famous " + wordFifthteen + " salad, which is my favorite " + wordSixteen + " ever! Mom said after we finish " + wordSeventeen + " , we can go swimming in our new " + wordEightteen + ", " + wordNineteen + "!"

console.log(paragraph);


document.getElementById("answer").innerHTML = paragraph;
}