import express from 'express';
import { getAllStudents,createStudents, deleteStudent,updateStudent,createStudentInfo } from '../controllers/student.controller';

const router = express.Router();

router.get("/",getAllStudents)
router.get("/addstudent",createStudentInfo)
router.post("/addStudent",createStudents)
router.patch('/editstudent/:id',updateStudent);
router.delete('/deletestudent/:id',deleteStudent);

export default router;