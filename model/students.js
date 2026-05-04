import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  file: {
  type: String
},
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  major: { 
    type: String, 
    required: true 
  },
  gpa: { 
    type: Number, 
    required: true 
  }
  
}, { timestamps: true });

export default mongoose.model("Student", studentSchema);