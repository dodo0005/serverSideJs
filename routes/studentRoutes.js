import express from 'express'
import { getAll,getOne,create,update,remove } from '../controllers/studentController.js' 
import {
  validateId,
  validateStudent
} from '../middleware/studentMiddleware.js'
import upload from "../middleware/uploadMiddleware.js";
import { authCheck } from '../middleware/autMiddleware.js';


const router = express.Router()

// studentRouter.post("/signup", multerConfig, (req, res) => {
//   console.log("req.file:", req.file);
//   console.log("req.body:", req.body);

//   res.send("login");
// });
router.get('/',authCheck,getAll)


router.get('/:id',authCheck, validateId, getOne)


router.post(
  '/',
  upload.single('file'), 
  validateStudent,
  create
);

router.put('/:id', authCheck, validateId, validateStudent, update)
router.delete('/:id', authCheck, validateId, remove)

export default router