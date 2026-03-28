import * as studentsService from '../services/studentServices.js'


export function getAll(req, res) {
  try {
    const students = studentsService.getAllStudents()
    res.json(students)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}


export function getOne(req, res) {
  try {
    const id = parseInt(req.params.id)
    const student = studentsService.getStudentById(id)

    if (!student) {
      return res.status(404).json({ message: 'Student not found' })
    }

    res.json(student)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}


export function create(req, res) {
  try {
    const newStudent = req.body

    if (!newStudent || !newStudent.id || !newStudent.name) {
      return res.status(400).json({ message: 'Invalid student data' })
    }

    const created = studentsService.createStudent(newStudent)
    res.status(201).json(created)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}


export function update(req, res) {
  try {
    const id = parseInt(req.params.id)

    const updated = studentsService.updateStudent(id, req.body)

    if (!updated) {
      return res.status(404).json({ message: 'Student not found' })
    }

    res.json(updated)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}


export function remove(req, res) {
  try {
    const id = parseInt(req.params.id)

    const deleted = studentsService.deleteStudent(id)

    if (!deleted) {
      return res.status(404).json({ message: 'Student not found' })
    }

    res.json(deleted)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}