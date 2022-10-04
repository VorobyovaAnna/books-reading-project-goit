import { Form, message } from 'antd';
import { useAddBookMutation } from 'redux/RTKQuery/booksApi';
import * as yup from 'yup';

const Fields = {
  title: {
    name: 'title',
    label: 'Назва книги',
  },
  author: {
    name: 'author',
    label: 'Автор книги',
  },
  publication: {
    name: 'publication',
    label: 'Рік випуску',
  },
  pages: {
    name: 'pages',
    label: 'Кількість сторінок',
  },
};

const useForm = () => {
  const [addBook, { isLoading }] = useAddBookMutation();

  const [form] = Form.useForm();

  const date = new Date();
  const year = date.getFullYear();

  let schema = yup.object().shape({
    title: yup
      .string()
      .required("Обов'язкове поле")
      .max(50, 'Поле не може містити більше 50-ти символів'),
    author: yup.string().required("Обов'язкове поле"),
    publication: yup
      .number()
      .typeError('Поле може містити тільки числа')
      .max(year, `Рік публікації не може бути більшим ${year}`)
      .positive('Поле може містити тільки додатні числа'),
    pages: yup
      .number()
      .typeError('Поле може містити тільки числа')
      .required("Обов'язкове поле")
      .max(9999, 'Кількість сторінок може бути меншою або рівною 9999')
      .positive('Поле може містити тільки додатні числа'),
  });

  const yupSync = {
    async validator({ field }, value) {
      if (value?.[0] === '-') {
        return Promise.reject('Поле не може починатись з дефісу');
      }

      if (value?.[0] === ' ') {
        return Promise.reject('Поле не може починатись з пробілу');
      }

      return await schema.validateSyncAt(field, { [field]: value });
    },
  };

  const onFinish = async values => {
    if (values.title[0] === '-') {
      console.log(values.title[0]);
      return message.error('Поле "Назва книги" не може починатись з дефісу');
    }

    if (values.title[0] === ' ') {
      console.log(values.title[0]);
      return message.error('Поле "Назва книги" не може починатись з пробілу');
    }
    const result = await addBook(values);

    if ('error' in result) {
      message.error(result.error.data.message);
    } else {
      message.success('Книгу успішно додано!');
      form.resetFields();
    }
  };

  return { form, onFinish, Fields, yupSync, isLoading };
};

export default useForm;
