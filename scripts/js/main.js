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
    s.firstName = document.getElementById("first").value;
    s.lastName = document.getElementById("last").value;
    return s;
}
function displayStudent(stu) {
    alert(stu.firstName + " " + stu.lastName);
}
