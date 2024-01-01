import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudentIntoDB = async (payload: TStudent) => {
  if (await Student.isUserExists(payload.id)) {
    throw new Error('User Already exists');
  }
  const result = await Student.create(payload);
  return result;
};
const getAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};
const getSingleStudentFromDB = async (id: string) => {
     const result = await Student.findById(id);

//   const result = await Student.aggregate([{ $match: { id: id } }]);
//   console.log(result);
  return result;
};
const deleteStudentFromDB = async (id: string) => {
  const result = await Student.findByIdAndUpdate(
    id,
    {
      isDeleted: true,
    },
    { new: true },
  );
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
};
