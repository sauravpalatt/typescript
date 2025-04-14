import { Request, Response } from 'express';
import {Student} from '../models/student.model'; // ✅ Check this path

export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const students = await Student.find(); // ✅ Fetch from MongoDB
    res.render('students', { students });  // ✅ Pass it to EJS
  } catch (error) {
    console.error("ERROR LOADING STUDENTS", error);
    res.status(500).send("Internal Server Error");
  }
};

export const createStudents = async (req: Request, res: Response):Promise<void> => {
  try {
    const { name, age, job } = req.body;

    if (!name || !age || !job) {
      res.status(400).json({ message: 'All fields are required.' });
      return 
    }

    const newStudent = await Student.create({ name, age, job });

    res.status(201).json(newStudent); 
    return
  } catch (error) {
    console.error('Error creating student:', error);
    res.status(500).json({ message: 'Server error', error });
    return
  }
};

export const createStudentInfo = async (req:Request,res:Response) =>{
  try {
      res.render("addStudent")
  } catch (error) {
    console.error("ERROR OCCURED IN CREATESTUDENT INFO FN",error)
  }
}

export const updateStudent = async (req:Request,res:Response)=>{
  const {id} = req.params
  const {name,age,job} = req.body

  try {
    await Student.findByIdAndUpdate(id,{name,age,job});
    res.status(200).json({message: 'Student Updated'})  
  } catch (error) {
    console.error("ERROR IN UPDATING STUDENT",error)
    res.status(500).json({error: 'Failed to update student'})
  }
}

export const deleteStudent = async (req: Request, res: Response): Promise<void> => {
  
  const { id } = req.params;
  try {
    await Student.findByIdAndDelete(id);
    res.status(200).json({ message: 'Student deleted' });
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ error: 'Failed to delete student' });
  }
};



