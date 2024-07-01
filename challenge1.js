//Challenge 1: Student Grade Generator (Toy Problem)Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 
//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

function getGrade(marks){
    if (marks >79 && marks <=100){
        return 'A';
    } else if (marks >= 60 && marks<=79){
        return 'B';
    } else if (marks>=49 && marks<=59){
        return 'C';
    } else if (marks>=40 && marks>=0){
        return 'D';
    } else {
        return 'E';
    }
}
console.log(getGrade(79))