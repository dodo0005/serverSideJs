import students from '../students.json' with { type: 'json' }
console.log("date", Date.now());


export function getAllStudents() {
    if (!students || students.length === 0) {
        throw new Error("No users found");
    } else {
        return students;
    }
}




export function getStudentById(id) {
 const foundStudent = students.find((student) => student.id === id);

  if (foundStudent) {
    return foundStudent;
  } else {
    throw new Error("User not found");
  }
}

export function createStudent(newStudent) {
  if (!newStudent || !newStudent.id || !newStudent.name) {
    throw new Error("Invalid student data")
  }

  const exists = students.find(student => student.id === newStudent.id)
  if (exists) {
    throw new Error("Student with this ID already exists")
  }

  students.push(newStudent)
  return newStudent
}

export function updateStudent(id, updatedData) {
  const index = students.findIndex(s => s.id === id)

  if (index === -1) {
    throw new Error("User not found")
  }

  if (!updatedData || !updatedData.name) {
    throw new Error("Invalid updated data")
  }

  students[index] = { ...students[index], ...updatedData }
  return students[index]
}


export function deleteStudent(id) {
  const index = students.findIndex(s => s.id === id)

  if (index === -1) {
    throw new Error("User not found")
  }

  return students.splice(index, 1)[0]
}