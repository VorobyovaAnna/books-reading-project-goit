import { Form, message } from 'antd';
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
      .required("Обов'язкове поле")
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
      await schema.validateSyncAt(field, { [field]: value });
    },
  };

  const onFinish = values => {
    message.success('Submit success!');
    console.log(values);
  };

  return { form, onFinish, Fields, yupSync };
};

export default useForm;