import * as studentsService from '../services/studentServices.js'
import jwt from "jsonwebtoken";
import "dotenv/config";


export async function getAll(req, res) {
  try {
    const students = await studentsService.getAllStudents();
    const toStudentDTO = (student) => ({ // this part here ‼️
      id: student._id,      
      email: student.email,
    });
    const studentsDTO = students.map(toStudentDTO);
    res.status(200).json(studentsDTO);
  } catch (error) {
  res.status(404).json({ message: error.message });
}
}

export async function getOne(req, res) {
  try {
    const id = req.params.id;

    const student = await studentsService.getStudentById(id);

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json(student);
  } catch (error) {
  console.error(error); 
  res.status(500).json({ message: error.message });
}
}


export const create = async (req, res) => {
  try {
    const { name, email, password, gpa, major } = req.body;
    const newStudent = { name, email, password, gpa, major };
    const loggedUser = await studentsService.createStudent(newStudent);
    const token = jwt.sign({ id: loggedUser._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    }); // signed token with user's id ONLY
    const toStudentDTO = (student) => ({
      id: student._id,
      email: student.email,
    });
    res.status(201).json({ token, user: toStudentDTO(loggedUser) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}


export async function update(req, res) {
  try {
    const id = req.params.id;

    const updated = await studentsService.updateStudent(id, req.body);

    if (!updated) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json(updated);
  } catch (error) {
  console.error(error);
  res.status(500).json({ message: error.message });
}
}


export async function remove(req, res) {
  try {
    const id = req.params.id;

    const deleted = await studentsService.deleteStudent(id);

    if (!deleted) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json(deleted);
  } catch (error) {
  console.error(error); 
  res.status(500).json({ message: error.message });
}
}