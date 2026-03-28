import express from 'express'
import { getAll,getOne,create,update,remove } from '../controllers/studentController.js' 
import {
  validateId,
  validateStudent
} from '../middleware/studentMiddleware.js'

const router = express.Router()


router.get('/', getAll)


router.get('/:id', validateId, getOne)


router.post('/', validateStudent, create)


router.put('/:id', validateId, validateStudent, update)


router.delete('/:id', validateId, remove)

export default router