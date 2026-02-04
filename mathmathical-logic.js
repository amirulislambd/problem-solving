const students = [
  { name: "Abir", marks: [80, 90, 85] },
  { name: "Sifat", marks: [60, 70, 65] },
];

function averageMarks(students) {
  let marksArr = [];
  for (let student of students) {
    let newObj = {};
    for (let key in student) {
      newObj[key] = student[key];
    }
    let sum = 0;
    for (let mark of student.marks) {
      sum += mark;}
      const avg = sum /  student.marks.length;
      if (avg > 80) {
          newObj.fullMarks = sum;
          newObj.average = avg;
          newObj.Grade = "A+";
    } else {
        newObj.fullMarks = sum;
        newObj.average = avg;
        newObj.grade = "Regular";
      }
    
    marksArr.push(newObj);

}
return marksArr;
}
const result = averageMarks(students);
console.log(result);
