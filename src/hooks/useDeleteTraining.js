import {
  useGetTrainingQuery,
  useDeleteStatisticsByIdMutation,
  useDeleteTrainingByIdMutation,
} from 'redux/RTKQuery/booksApi';
const useDeleteTraining = () => {
  const { data: trainings } = useGetTrainingQuery();
  const [deleteStatisticsById] = useDeleteStatisticsByIdMutation();
  const [deleteTrainingById] = useDeleteTrainingByIdMutation();
  const deleteTraining = async () => {
    const trainingId = trainings?.training[0]._id;
    const statisticId = trainings?.training[0].statistics;
    try {
      await deleteStatisticsById(statisticId);
      await deleteTrainingById(trainingId);
    } catch (error) {
      console.log(error.message);
    }
  };
  return { deleteTraining };
};

export default useDeleteTraining;
