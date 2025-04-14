import express from 'express'
import path from 'path'
import studentRoutes from './routes/student.routes';

const app = express();

//Middleware

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

//Set EJS:
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'));

//Routes
app.use("/",studentRoutes)

export default app;


