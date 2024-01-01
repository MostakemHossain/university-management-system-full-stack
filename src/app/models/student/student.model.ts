import { Schema, model } from 'mongoose';
import {
  StudentModel,
  TGuardian,
  TLocalGuardian,
  TStudent,
  TStudentMethods,
  TUserName,
} from './student.interface';

const userNameSchema = new Schema<TUserName,StudentModel,TStudentMethods>({
  firstName: {
    type: String,
    required: [true, 'First name is required.'],
    trim: true,
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required.'],
    trim: true,
  },
});

const guardianNameSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    required: [true, 'Father name is required.'],
    trim: true,
  },
  fatherOccupation: {
    type: String,
    required: [true, 'Father occupation is required.'],
    trim: true,
  },
  fatherContactNo: {
    type: String,
    required: [true, 'Father contact number is required.'],
    trim: true,
  },
  motherName: {
    type: String,
    required: [true, 'Mother name is required.'],
    trim: true,
  },
  motherOccupation: {
    type: String,
    required: [true, 'Mother occupation is required.'],
    trim: true,
  },
  motherContactNo: {
    type: String,
    required: [true, 'Mother contact number is required.'],
    trim: true,
  },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    required: [true, 'Local guardian name is required.'],
    trim: true,
  },
  relation: {
    type: String,
    required: [true, 'Relation with local guardian is required.'],
    trim: true,
  },
  contactNo: {
    type: String,
    required: [true, 'Local guardian contact number is required.'],
    trim: true,
  },
  address: {
    type: String,
    required: [true, 'Local guardian address is required.'],
    trim: true,
  },
});

const studentSchema = new Schema<TStudent>({
  id: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  name: {
    type: userNameSchema,
    required: true,
  },
  gender: {
    type: String,
    enum: {
      values: ['female', 'male', 'other'],
      message: "Invalid value for {PATH}: {VALUE}. The gender field can only be one of the following: 'male', 'female', or 'other'.",
    },
    required:true,
  },
  dateOfBirth: {
    type: String,
    required: [true, 'Date of birth is required.'],
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, 'Email is required.'],
    trim: true,
  },
  contactNo: {
    type: String,
    required: [true, 'Contact number is required.'],
    trim: true,
  },
  emergencyContactNo: {
    type: String,
    required: [true, 'Emergency contact number is required.'],
    trim: true,
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'],
    message: "Invalid value for {PATH}: {VALUE}. The blood group field can only be one of the following: 'A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', or 'O-'.",
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is required.'],
    trim: true,
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent address is required.'],
    trim: true,
  },
  guardian: {
    type: guardianNameSchema,
    required: [true, 'Guardian information is required.'],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local Guardian information is required.'],
  },
  profileImage: {
    type: String,
    required: [true, 'Profile image is required.'],
    trim: true,
  },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
  },
});

studentSchema.methods.isUserExists= async function(id:string){
  const existingUser= await Student.findOne({id});
  return existingUser;
}

export const Student = model<TStudent,StudentModel>('Student', studentSchema);
