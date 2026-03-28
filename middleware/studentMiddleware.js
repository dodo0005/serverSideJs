
export function validateId(req, res, next) {
  const id = parseInt(req.params.id)

  if (isNaN(id)) {
    return res.status(400).json({ message: 'Invalid ID format' })
  }

  next()
}

export function validateStudent(req, res, next) {
  const { id, name } = req.body

  if (!id || !name) {
    return res.status(400).json({
      message: 'Student must have id and name'
    })
  }

  next()
}