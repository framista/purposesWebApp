import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
  name: yup.string().max(20, 'Name is too long').required('Name is required'),
});

export default schema;
