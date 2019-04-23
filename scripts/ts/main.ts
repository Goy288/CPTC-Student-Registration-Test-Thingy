class Student {
    firstName:string;
    lastName:string;
    dateOfBirth:Date;
}

// test code
let testStu:Student = new Student();
testStu.firstName = "Cameron";
testStu.lastName = "Sherwood";
testStu.dateOfBirth = new Date(2000, 12, 14); // December 14th 2000

window.onload = function() {
    let regButton = <HTMLButtonElement>
        document.querySelector("main > button");
    regButton.onclick = registerStudent;
}

function registerStudent() {
    let nextStudent:Student = getStudent();
    displayStudent(nextStudent);
}

function getStudent():Student {
    let s = new Student();
    s.firstName = (<HTMLInputElement>
        document.getElementById("first-name")).value;
    s.lastName = (<HTMLInputElement>
        document.getElementById("last-name")).value;
    /*
    TODO: Get date of birth
    s.dateOfBirth = (<HTMLInputElement>
        document.getElementById("dob")).value;
    */
    return s;
}

function displayStudent(stu:Student) {
    //alert(stu.firstName + " " + stu.lastName);

    //<li></li>
    let studentLI = <HTMLLIElement>
        document.createElement("li");
    studentLI.innerText = stu.firstName
                  + " " + stu.lastName;
    // Getting <ul> and appending the new <li>
    let list = <HTMLUListElement>
        document.querySelector("#roster > ul");
    list.appendChild(studentLI);
}