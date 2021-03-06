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
    if (isValid()) {
        var nextStudent = getStudent();
        displayStudent(nextStudent);
    }
}
function isValid() {
    var reqElems = document.querySelectorAll("main > input[data-required]");
    var valid = true;
    for (var i = 0, elem = void 0; elem = reqElems[i]; i++) {
        if (elem.value == "") {
            var span = elem.nextElementSibling;
            var msg = elem.getAttribute("data-msg");
            span.innerHTML = msg;
            valid = false;
        }
    }
    return valid;
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
    studentLI.onclick = function () {
        if (confirm("Are you sure you want to delete?")) {
            this.remove();
        }
    };
}
