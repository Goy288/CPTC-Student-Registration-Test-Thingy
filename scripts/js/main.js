var Student = (function () {
    function Student() {
    }
    return Student;
}());
var testStu = new Student();
testStu.firstName = "Cameron";
testStu.lastName = "Sherwood";
testStu.dateOfBirth = new Date(2000, 12, 14);
window.onload = function () {
    var regButton = document.querySelector("main > button");
    regButton.onclick = registerStudent;
};
function registerStudent() {
    var nextStudent = getStudent();
    displayStudent(nextStudent);
}
function getStudent() {
    var s = new Student();
    s.firstName = document.getElementById("first-name").value;
    s.lastName = document.getElementById("last-name").value;
    return s;
}
function displayStudent(stu) {
    var studentLI = document.createElement("li");
    studentLI.innerText = stu.firstName
        + " " + stu.lastName;
    var list = document.querySelector("#roster > ul");
    list.appendChild(studentLI);
}
