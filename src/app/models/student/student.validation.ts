import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required.' }).max(20),
  middleName: z.string().optional(),
  lastName: z.string().min(1, { message: 'Last name is required.' }),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().min(1, { message: 'Father name is required.' }),
  fatherOccupation: z.string().min(1, { message: 'Father occupation is required.' }),
  fatherContactNo: z.string().min(1, { message: 'Father contact number is required.' }),
  motherName: z.string().min(1, { message: 'Mother name is required.' }),
  motherOccupation: z.string().min(1, { message: 'Mother occupation is required.' }),
  motherContactNo: z.string().min(1, { message: 'Mother contact number is required.' }),
});

const localGuardianValidationSchema = z.object({
  name: z.string().min(1, { message: 'Local guardian name is required.' }),
  relation: z.string().min(1, { message: 'Relation with local guardian is required.' }),
  contactNo: z.string().min(1, { message: 'Local guardian contact number is required.' }),
  address: z.string().min(1, { message: 'Local guardian address is required.' }),
});

const studentValidationSchema = z.object({
  id: z.string(),
  name: userNameValidationSchema,
  password:z.string().min(1,{message:"Password is Required"}),
  gender: z.string().refine(isValidGender, {
    message: "Invalid value for {PATH}: {VALUE}. The gender field can only be one of the following: 'male', 'female', or 'other'.",
  }),
  dateOfBirth: z.string().min(1, { message: 'Date of birth is required.' }),
  email: z.string().min(1).email({ message: 'Email is required.' }),
  contactNo: z.string().min(1, { message: 'Contact number is required.' }),
  emergencyContactNo: z.string().min(1, { message: 'Emergency contact number is required.' }),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']),
  presentAddress: z.string().min(1, { message: 'Present address is required.' }),
  permanentAddress: z.string().min(1, { message: 'Permanent address is required.' }),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImage: z.string(),
  isActive: z.enum(['active', 'blocked']).default('active'),
});

export const StudentValidations = {
  studentValidationSchema,
};

function isValidGender(value: string): value is 'male' | 'female' | 'other' {
  return ['male', 'female', 'other'].includes(value);
}