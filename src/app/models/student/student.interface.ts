import { Model } from "mongoose";

/* eslint-disable no-unused-vars */
export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};
export type TLocalGuardian = {
  name: string;
  relation: string;
  contactNo: string;
  address: string;
};
export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};
export type TStudent = {
  id: string;
  name: TUserName;
  gender: 'male' | 'female' | 'other';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImage: string;
  isActive: 'active' | 'blocked';
};

// export type TStudentMethods={
//   isUserExists(id:string):Promise<TStudent | null>
// }

// export type StudentModel=Model<TStudent,Record<string, never>,TStudentMethods>

export interface  TStudentModel  extends Model<TStudent>{
  isUserExists(id:string):Promise<TStudent | null>

}


