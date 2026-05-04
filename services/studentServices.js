import Student from "../model/students.js";
console.log("date", Date.now());


export async function getAllStudents() {
  return await Student.find();
}




export async function getStudentById(id) {
  return await Student.findById(id);
}

export async function createStudent(data) {
  return await Student.create(data);
}

export async function updateStudent(id, data) {
  return await Student.findByIdAndUpdate(id, data, { new: true });
}


export async function deleteStudent(id) {
  return await Student.findByIdAndDelete(id);
}  