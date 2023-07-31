let firstName = prompt("Please enter a name for the student")
let assignment1 = parseInt(prompt("Please enter a mark for assignment 1"),10)
let assignment2 = parseInt(prompt("Please enter a mark for assignment 2"),10)
let classTest1 = parseInt(prompt("Please enter a mark for the first class test"),10)
let classTest2 = parseInt(prompt("Please enter a mark for the second class test"),10)
let sumTest = parseInt(prompt("Please enter a mark for the summative test"),10)

let student = {"Student Name :":firstName,"Assignment 1 :":assignment1,"Assignment 2 :":assignment2,"Class Test 1 :":classTest1,"Class Test 2:":classTest2,"Summative Test :":sumTest};

console.log(student);

for(let mark in student){
    let output = `${mark}  ${student[mark]}\n`;
    console.log(output);     
}

document.getElementById("demo").innerHTML = output; 

function avgMark(student){
    let sum = student.assignment1 + student.assignment2 + student.classTest1 + student.classTest2 + student.sumTest;
    let avg = sum/5;
    document.getElementById("demo").innerHTML = avg;
}

function grade(student){

    for(i=1;i<student.length;i++){
      switch(true){

        case mark > 79:
            console.log("A");
        break;

        case mark > 69:
            console.log("B");
        break;

        case mark > 49:
            console.log("C");
        break;

        case mark < 50:
            console.log("Fail");
        break;

        default:
            console.log("There is no mark");
        break;
        }   
     };
}

function maxMark(student){
    for(i=1;i<student.length;i++){
       Math.max(student); 
    };
    
}
    

