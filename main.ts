
import { Course } from './course.js';
import { dataCourses } from './dataCourses.js';
import { Student } from './Student.js';
import{dataStudent} from './dataStudent.js';

let coursesTbody: HTMLElement = document.getElementById('courses')!;
let codigoTbody : HTMLElement = document.getElementById('codigo')!;
let cedulaTbody : HTMLElement = document.getElementById('cedula')!;
let edadTbody : HTMLElement = document.getElementById('edad')!;
let direccionTbody : HTMLElement = document.getElementById('direccion')!;
let telefonoTbody : HTMLElement = document.getElementById('telefono')!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const btnfilterByCredits: HTMLElement = document.getElementById("button-FilterByCredits")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const inputSearchCredits1: HTMLInputElement = <HTMLInputElement> document.getElementById("search-credits1")!;
const inputSearchCredits2: HTMLInputElement = <HTMLInputElement> document.getElementById("search-credits2")!;
const totalCreditElm: HTMLElement = document.getElementById("total-credits")!;


btnfilterByName.onclick = () => applyFilterByName();
btnfilterByCredits.onclick = () => applyFilterByCredits();

renderCoursesInTable(dataCourses);

totalCreditElm.innerHTML = `${getTotalCredits(dataCourses)}`


function renderCoursesInTable(courses: Course[]): void {
  courses.forEach((course) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${course.name}</td>
                           <td>${course.professor}</td>
                           <td>${course.credits}</td>`;
    coursesTbody.appendChild(trElement);
  });
}
 
function rendercodigoInTable(student: Student[]):void{
  student.forEach((student) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${student.codigo}</td>`;
    codigoTbody.appendChild(trElement);
  });
}
function rendercedulaInTable(student: Student[]):void{
  student.forEach((student) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${student.cedula}</td>`;
    cedulaTbody.appendChild(trElement);
  });
}
function renderedadInTable(student: Student[]):void{
  student.forEach((student) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${student.edad}</td>`;
    edadTbody.appendChild(trElement);
  });
}
function renderdireccionInTable(student: Student[]):void{
  student.forEach((student) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${student.direccion}</td>`;
    direccionTbody.appendChild(trElement);
  });
}
function rendertelefonoInTable(student: Student[]):void{
  student.forEach((student) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${student.telefono}</td>`;
    telefonoTbody.appendChild(trElement);
  });
}
 
function applyFilterByName() { 
  let text = inputSearchBox.value;
  text = (text == null) ? '' : text;
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function applyFilterByCredits(){
  let credit1 = inputSearchCredits1.valueAsNumber;
  let credit2 = inputSearchCredits2.valueAsNumber;
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchByInterval(credit1,credit2,dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function searchByInterval(credit1:number,credit2:number, courses:Course[]){
 
 return credit1 || credit2 >= 0? dataCourses : courses.filter(m =>
   m.credits>= credit1 || m.credits <= credit2);

}

function searchCourseByName(nameKey: string, courses: Course[]) {
  return nameKey === '' ? dataCourses : courses.filter( c => 
    c.name.match(nameKey));
}


function getTotalCredits(courses: Course[]): number {
  let totalCredits: number = 0;
  courses.forEach((course) => totalCredits = totalCredits + course.credits);
  return totalCredits;
}

function clearCoursesInTable() {
  while (coursesTbody.hasChildNodes()) {
    if (coursesTbody.firstChild != null) {
      coursesTbody.removeChild(coursesTbody.firstChild);
     
    }
  }
}