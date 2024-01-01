import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudentIntoDB = async (payload: TStudent) => {
  // const result= await Student.create(payload);
  const student = new Student(payload);

  if (await student.isUserExists(payload.id)) {
    throw new Error('User Already Exists');
  }
  const result = await student.save();

  return result;
};
const getAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};
const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findById(id);
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
