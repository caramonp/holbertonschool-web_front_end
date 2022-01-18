createClassRoom = (numbersOfStudents) => {

  studentSeat = (seat) => {
    return ( () => {return(seat)})
  }

  let students = []
  for (let i = 0; i < numbersOfStudents; i++) {
    const number = studentSeat(i + 1)
    students.push(number)
  }
  return (students)
}

let classRoom = createClassRoom(10)
