import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
  name: yup.string().max(20, 'Name is too long').required('Name is required'),
  categoryName: yup
    .string()
    .max(30, 'Name of category is too long')
    .required('Name of category is required'),
  description: yup.string().max(200, 'Description is too long'),
  taskName: yup
    .string()
    .max(30, 'Name of task is too long')
    .required('Name of task is required'),
  category: yup
    .object()
    .shape({ _id: yup.string().required('Category is required') })
    .required('Category is required'),
});

export default schema;
