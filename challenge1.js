//Challenge 1: Student Grade Generator (Toy Problem)Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 
//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
var prompt = require('prompt-sync')();

let marksInput= prompt('input your marks ');
let marks = parseFloat(marksInput)
function getGrade(marks){
    if (marks >79 && marks <=100){
        console.log('A')
    } else if (marks >= 60 && marks<=79){
        console.log('B')
    } else if (marks>=49 && marks<=59){
       console.log('C')
    } else if (marks>=40 && marks>=0){
        console.log('D')
    } else {
        console.log('E')
    }
}
getGrade(marks)