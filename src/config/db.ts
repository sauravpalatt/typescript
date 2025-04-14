import mongoose from 'mongoose';

export const connectDB = async () => {
    try{
        await mongoose.connect('mongodb://localhost:27017/studentdb')
        console.log('MongoDB connected !!!')
    }catch(error){
        console.error('MongoDB Connection failed:',error)
        process.exit(1);
    }
}