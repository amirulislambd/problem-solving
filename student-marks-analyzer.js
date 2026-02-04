// Return total marks, average marks, highest scoring subject, and lowest scoring subject.

function analyzeMarks(marksObj) {
  let highestMark = -Infinity;
  let lowestMark = Infinity;
  let highestSubject = null
  let lowestSubject = null
  let total = 0;
  for (let subject in marksObj) {
    let mark = marksObj[subject];
    total += mark;
    if(mark>highestMark){
        highestMark=mark
        highestSubject=subject
    }
    if(mark<lowestMark){
        lowestMark = mark
        lowestSubject= subject
    }
    
  }
  let average = total / Object.keys(marksObj).length;
console.log(highestMark)
  return {
    total,
    average,
    highestSubject,
    lowestSubject,
  };
}

const result = analyzeMarks({ math: 78, english: 65, physics: 88, bangla: 55 });
console.log(result);
