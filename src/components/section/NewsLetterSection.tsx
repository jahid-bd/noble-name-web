import { newsLetterApi } from '@/services/api';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import Button from '../buttons/Button';
import InputField from '../form/InputField';

const NewsLetterSection = () => {
  const initialValues = {
    email: '',
  };

  const [formState, setFormState] = useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const { mutate: createNewsLetter, isPending } = useMutation({
    mutationFn: (data: any) => newsLetterApi(data),
    onError: (error: any) => {
      toast.error(error?.response?.data);
    },
    onSuccess: (data) => {
      toast.success('Sign up newsletter successfully');
      setFormState(initialValues);
    },
  });

  const schema = yup
    .object({
      email: yup
        .string()
        .trim()
        .nullable()
        .email('Please enter a valid email address')
        .required('Please enter your email address'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    criteriaMode: 'all',
    mode: 'onChange',
  });

  const onSubmit = (data: any) => {
    createNewsLetter(data);
  };

  return (
    <section className="bg-green-disabled py-16">
      <div className="container mx-auto px-[6px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold text-text-primary mb-3 text-center md:text-left">
              Sign up for our Newsletter
            </h3>

            <p className="text-text-tertiary text-lg md:text-xl font-normal text-center md:text-left">
              Be the first to know about Muslim Parenting and more.
            </p>
          </div>

          <form
            className="md:flex md:justify-end md:gap-4 md:items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-4 md:mb-0 md:w-[400px]">
              <InputField
                type="text"
                name="email"
                register={register}
                onChange={handleChange}
                value={formState.email}
                placeholder="Enter your email address"
                className={errors.email?.message ? 'border-red-500' : ''}
              />
            </div>

            <div>
              <Button className="text-base" isLoading={isPending}>
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetterSection;
