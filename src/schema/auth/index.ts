import { object, ref, string } from 'yup';

const signupSchema = object().shape({
  name: string()
    .min(3, 'Name must be at least 8 characters long.')
    .max(100, 'Name must be at most 100 characters long.')
    .required('Please enter your full name.'),
  email: string()
    .trim()
    .email()
    .max(100, 'Email must be at most 100 characters long.')
    .required('Please enter your email address'),
  password: string()
    .min(8, 'Password must be at least 8 characters long.')
    .max(50, 'Password must be at most 50 characters long.')
    .required('Please enter your password.'),
});

const signInSchema = object().shape({
  email: string()
    .trim()
    .email()
    .max(100, 'Email must be at most 100 characters long.')
    .required('Please enter your email address'),
  password: string()
    .min(8, 'Password must be at least 8 characters long.')
    .max(50, 'Password must be at most 50 characters long.')
    .required('Please enter your password.'),
});

const forgotPasswordSchema = object().shape({
  email: string()
    .trim()
    .email()
    .max(100, 'Email must be at most 100 characters long.')
    .required('Please enter your email address'),
});

const resetPasswordSchema = object().shape({
  newPassword: string()
    .trim()
    .min(8, 'At least 8 characters')
    .required('Please set a new password'),
  confirmPassword: string()
    .trim()
    .min(8, 'At least 8 characters')
    .oneOf([ref('newPassword'), undefined], 'Passwords must match')
    .required('Please confirm password'),
});

const changePasswordSchema = object().shape({
  current_password: string().trim().required('Please enter current password'),
  new_password: string()
    .trim()
    .required('Please set a new password')
    .min(8, 'At least 8 characters'),
  confirm_password: string()
    .trim()
    .required('Please confirm password')
    .min(8, 'At least 8 characters')
    .oneOf([ref('new_password'), ''], 'Confirm passwords must match'),
});

export {
  changePasswordSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  signInSchema,
  signupSchema,
};
