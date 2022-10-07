import { Form, message } from 'antd';
import { useEffect, useState } from 'react';
import {
  useGetBookByIdQuery,
  useUpdateBookReviewMutation,
} from 'redux/RTKQuery/booksApi';

const useRatingModal = (bookId, onClose) => {
  const [rating, setRating] = useState(null);
  const [resume, setResume] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);

  const { data, isLoading, error } = useGetBookByIdQuery(bookId);

  const [updateBookReview] = useUpdateBookReviewMutation();

  const [form] = Form.useForm();

  const onFinish = async values => {
    const result = await updateBookReview({
      id: bookId,
      data: { ...values, rating: rating },
    });

    if ('error' in result) {
      message.error(result.error.data.message);
    } else {
      message.success('Резюме успішно оновлено!');
      form.resetFields();
    }

    onClose();
  };

  useEffect(() => {
    setRating(data?.book?.rating);
    setResume(data?.book?.resume);
  }, [data]);

  useEffect(() => {
    setIsDisabled(!!resume && !!rating);
  }, [rating, resume]);

  return {
    isLoading,
    error,
    form,
    onFinish,
    rating,
    setRating,
    resume,
    setResume,
    isDisabled,
  };
};

export default useRatingModal;
