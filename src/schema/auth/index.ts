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
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter.')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter.')
    .matches(/\d/, 'Password must contain at least one number.')
    .matches(
      /[@$!%*?&]/,
      'Password must contain at least one special character.',
    )
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
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter.')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter.')
    .matches(/\d/, 'Password must contain at least one number.')
    .matches(
      /[@$!%*?&]/,
      'Password must contain at least one special character.',
    )
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
    .min(8, 'Password must be at least 8 characters long.')
    .max(50, 'Password must be at most 50 characters long.')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter.')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter.')
    .matches(/\d/, 'Password must contain at least one number.')
    .matches(
      /[@$!%*?&]/,
      'Password must contain at least one special character.',
    )
    .required('Please enter your password.'),
  confirmPassword: string()
    .trim()
    .min(8, 'Password must be at least 8 characters long.')
    .max(50, 'Password must be at most 50 characters long.')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter.')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter.')
    .matches(/\d/, 'Password must contain at least one number.')
    .matches(
      /[@$!%*?&]/,
      'Password must contain at least one special character.',
    )
    .required('Please enter your password.'),
});

const changePasswordSchema = object().shape({
  current_password: string()
    .trim()
    .min(8, 'Password must be at least 8 characters long.')
    .max(50, 'Password must be at most 50 characters long.')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter.')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter.')
    .matches(/\d/, 'Password must contain at least one number.')
    .matches(
      /[@$!%*?&]/,
      'Password must contain at least one special character.',
    )
    .required('Please enter current password'),
  new_password: string()
    .trim()
    .min(8, 'Password must be at least 8 characters long.')
    .max(50, 'Password must be at most 50 characters long.')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter.')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter.')
    .matches(/\d/, 'Password must contain at least one number.')
    .matches(
      /[@$!%*?&]/,
      'Password must contain at least one special character.',
    )
    .required('Please set a new password'),
  confirm_password: string()
    .trim()
    .min(8, 'Password must be at least 8 characters long.')
    .max(50, 'Password must be at most 50 characters long.')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter.')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter.')
    .matches(/\d/, 'Password must contain at least one number.')
    .matches(
      /[@$!%*?&]/,
      'Password must contain at least one special character.',
    )
    .required('Please confirm password')
    .oneOf([ref('new_password'), ''], 'Confirm passwords must match'),
});

export {
  changePasswordSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  signInSchema,
  signupSchema,
};
