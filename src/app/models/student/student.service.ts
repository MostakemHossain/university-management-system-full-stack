import { Student } from './student.model';


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
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
};
