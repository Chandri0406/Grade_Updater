function myFun(){

    let students = [];
    
        for(let i=0;i<1;i++){

        let fName = prompt("Please enter a name for the student")
        let assignment1 = parseInt(prompt("Please enter a mark for assignment 1"),10)
        let assignment2 = parseInt(prompt("Please enter a mark for assignment 2"),10)
        let classTest1 = parseInt(prompt("Please enter a mark for the first class test"),10)
        let classTest2 = parseInt(prompt("Please enter a mark for the second class test"),10)
        let sumTest = parseInt(prompt("Please enter a mark for the summative test"),10)

        students.push({fName,assignment1,assignment2,classTest1,classTest2,sumTest});
    }

    console.log(students);
    return students; 
}


function display(){

    let output = myFun();

    document.getElementById("demo").innerHTML = output;
}
