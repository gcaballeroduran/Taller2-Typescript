import { dataCourses } from './dataCourses.js';
var coursesTbody = document.getElementById('courses');
var codigoTbody = document.getElementById('codigo');
var cedulaTbody = document.getElementById('cedula');
var edadTbody = document.getElementById('edad');
var direccionTbody = document.getElementById('direccion');
var telefonoTbody = document.getElementById('telefono');
var btnfilterByName = document.getElementById("button-filterByName");
var btnfilterByCredits = document.getElementById("button-FilterByCredits");
var inputSearchBox = document.getElementById("search-box");
var inputSearchCredits1 = document.getElementById("search-credits1");
var inputSearchCredits2 = document.getElementById("search-credits2");
var totalCreditElm = document.getElementById("total-credits");
btnfilterByName.onclick = function () { return applyFilterByName(); };
btnfilterByCredits.onclick = function () { return applyFilterByCredits(); };
renderCoursesInTable(dataCourses);
totalCreditElm.innerHTML = "" + getTotalCredits(dataCourses);
function renderCoursesInTable(courses) {
    courses.forEach(function (course) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + course.name + "</td>\n                           <td>" + course.professor + "</td>\n                           <td>" + course.credits + "</td>";
        coursesTbody.appendChild(trElement);
    });
}
function rendercodigoInTable(student) {
    student.forEach(function (student) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + student.codigo + "</td>";
        codigoTbody.appendChild(trElement);
    });
}
function rendercedulaInTable(student) {
    student.forEach(function (student) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + student.cedula + "</td>";
        cedulaTbody.appendChild(trElement);
    });
}
function renderedadInTable(student) {
    student.forEach(function (student) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + student.edad + "</td>";
        edadTbody.appendChild(trElement);
    });
}
function renderdireccionInTable(student) {
    student.forEach(function (student) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + student.direccion + "</td>";
        direccionTbody.appendChild(trElement);
    });
}
function rendertelefonoInTable(student) {
    student.forEach(function (student) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + student.telefono + "</td>";
        telefonoTbody.appendChild(trElement);
    });
}
function applyFilterByName() {
    var text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByName(text, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function applyFilterByCredits() {
    var credit1 = inputSearchCredits1.valueAsNumber;
    var credit2 = inputSearchCredits2.valueAsNumber;
    clearCoursesInTable();
    var coursesFiltered = searchByInterval(credit1, credit2, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function searchByInterval(credit1, credit2, courses) {
    return credit1 || credit2 >= 0 ? dataCourses : courses.filter(function (m) {
        return m.credits >= credit1 || m.credits <= credit2;
    });
}
function searchCourseByName(nameKey, courses) {
    return nameKey === '' ? dataCourses : courses.filter(function (c) {
        return c.name.match(nameKey);
    });
}
function getTotalCredits(courses) {
    var totalCredits = 0;
    courses.forEach(function (course) { return totalCredits = totalCredits + course.credits; });
    return totalCredits;
}
function clearCoursesInTable() {
    while (coursesTbody.hasChildNodes()) {
        if (coursesTbody.firstChild != null) {
            coursesTbody.removeChild(coursesTbody.firstChild);
        }
    }
}
