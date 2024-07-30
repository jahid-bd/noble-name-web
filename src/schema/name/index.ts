import { array, object, string } from 'yup';

const createNameSchema = object().shape({
  english_name: string()
    .min(2, 'English name must be at least 2 characters long.')
    .max(15, 'English name must be at most 15 characters long.')
    .required('Please enter english name.'),
  arabic_name: string()
    .min(1, 'Arabic name must be at least 1 characters long.')
    .max(15, 'Arabic name must be at most 15 characters long.')
    .required('Please enter Arabic name.'),
  gender: string().required('Please select gender.'),
  origin: string().required('Please select origin.'),
  meanings: array()
    .min(1, 'Meaning must be at least 1 add.')
    .required('Please enter name meaning.'),
});

export { createNameSchema };
