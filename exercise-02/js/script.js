let students = [
  {
    name: "John",
    grade1: 7,
    grade2: 8
  },
  {
    name: "Paul",
    grade1: 6,
    grade2: 5
  },
  {
    name: "George",
    grade1: 9,
    grade2: 8
  },
  {
    name: "Ringo",
    grade1: 5,
    grade2: 6
  },
  {
    name: "Yoko",
    grade1: 4,
    grade2: 3
  },
  {
    name: "Brian",
    grade1: 8,
    grade2: 9
  }
];

function averagegradeByStudent(student){
  return (student.grade1 + student.grade2) / 2;
}

for (const student of students) {
  console.log(`The average grade of ${student.name} is ${averagegradeByStudent(student)}`);
}

function populateOlElement(){
  let olElement = document.getElementById('listStudents')
  let numberOfElement = 0;
  for (const student of students) {
    let liElement = document.createElement('li')
    liElement.setAttribute('id', `student${numberOfElement}`)
    liElement.textContent = `Student ${student.name}`

    olElement.appendChild(liElement)
    
    let olElementStudent = document.createElement('ol')
    olElementStudent.setAttribute('id', `olElementStudent${numberOfElement}`)

    let liEmentGrade1 = document.createElement('li')
    liEmentGrade1.textContent = `Grade 1: ${student.grade1}`
    olElementStudent.appendChild(liEmentGrade1)

    let liEmentGrade2 = document.createElement('li')
    liEmentGrade2.textContent = `Grade 2: ${student.grade2}`
    olElementStudent.appendChild(liEmentGrade2)

    let liEmentAverage = document.createElement('li')
    liEmentAverage.textContent = `Average: ${averagegradeByStudent(student)}`
    olElementStudent.appendChild(liEmentAverage)

    let liSelectiveProcess = document.createElement('li')
    if(averagegradeByStudent(student) >= 7){
      liSelectiveProcess.textContent = 'Approved'
    }else{
      liSelectiveProcess.textContent = 'Disapproved'
    }

    olElementStudent.appendChild(liSelectiveProcess)

    liElement.appendChild(olElementStudent)
    numberOfElement++
  }
}

populateOlElement()