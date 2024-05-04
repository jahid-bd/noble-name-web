'use client';

import { sendMessage } from '@/services/api';
import { ContactParams } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Button from '../buttons/Button';
import InputField from '../form/InputField';

const ContactView = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: '',
  };
  const [formState, setFormState] = useState({ ...initialValues });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const [serverError, setserverError] = useState<string>();

  const schema = yup
    .object({
      firstName: yup
        .string()
        .trim()
        .required('Please enter a first name')
        .min(3, 'First name must be at least 3 characters'),
      lastName: yup
        .string()
        .trim()
        .required('Please enter a last name')
        .min(3, 'Last name must be at least 3 characters'),
      phone: yup
        .string()
        .trim()
        .required('Please enter a phone number')
        .min(9, 'Phone number must be at least 9 characters'),

      email: yup
        .string()
        .trim()
        .nullable()
        .email('Please enter a valid email address')
        .required('Please enter an email address'),

      message: yup
        .string()
        .trim()
        .required('Please input message')
        .min(10, 'Message must be at least 10 characters')
        .max(1000, 'You can input max 1000 characters'),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    criteriaMode: 'all',
    mode: 'onChange',
  });

  const { mutate: send, isPending } = useMutation({
    mutationFn: (data: ContactParams) => sendMessage(data),
    onError: (error: any) => {
      console.log('error', error);
      setserverError(error.response.data.message);
    },
    onSuccess: (data) => {
      console.log(data);
      reset();
    },
  });

  // firstName: '',
  // lastName: '',
  // phoneNumber: '',
  // email: '',
  // message: '',

  const onSubmit = (data: any) => {
    console.log('Called');
    setserverError('');
    send({
      email: data.email,
      phone: data.phone,
      message: data.message,
      full_name: `${data.firstName}  ${data.lastName}`,
      subject: `${data.firstName} send a contact message from Noble Name`,
    });
  };

  return (
    <main>
      <div className="container mx-auto px-1.5 min-h-screen pt-[64px] pb-[96px]">
        <div className="flex items-center justify-between">
          <div className="lg:w-1/2 w-full md:mr-[64px]">
            <div>
              <h1 className="heading-text text-[36px]">Get in touch</h1>
              <div>
                <p className="pt-4  text-text-tertiary">
                  Our friendly team would love to hear from you.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex items-center justify-between gap-8 mb-6 mt-[48px]">
                <div>
                  <InputField
                    type="text"
                    label="First Name"
                    name="firstName"
                    placeholder="First name"
                    onChange={handleChange}
                    // value={formState.firstName}
                    register={register}
                    error={errors.firstName?.message}
                    className={serverError ? 'border-red-500' : ''}
                  />
                </div>
                <div>
                  <InputField
                    type="text"
                    label="Last Name"
                    name="lastName"
                    placeholder="Last name"
                    onChange={handleChange}
                    // value={formState.lastName}
                    register={register}
                    error={errors.lastName?.message}
                    className={serverError ? 'border-red-500' : ''}
                  />
                </div>
              </div>

              <div className="mb-6">
                <InputField
                  type="email"
                  label="Email"
                  name="email"
                  placeholder="you@company.com"
                  onChange={handleChange}
                  // value={formState.email}
                  register={register}
                  error={errors.email?.message}
                  className={serverError ? 'border-red-500' : ''}
                />
              </div>

              <div className="mb-6">
                <InputField
                  type="text"
                  label="Phone Number"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  onChange={handleChange}
                  register={register}
                  error={errors.phone?.message}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="font-medium text-sm text-text-secondary pb-[6px] block"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Leave us a message..."
                  // name="message"
                  {...register('message', { value: formState.message })}
                  className={clsx(
                    'w-full h-[134px] outline-none border border-border-primary px-[14px] py-[10px] rounded-md shadow-sm placeholder:text-text-placeholder resize-none',
                    errors.message?.message && 'border-red-500',
                  )}
                />
                {errors.message?.message ? (
                  <p className="text-sm text-red-500 pt-[6px]">
                    {errors.message?.message}
                  </p>
                ) : null}
              </div>

              <div className="mb-6 flex items-center gap-3">
                <input
                  type="checkbox"
                  id="agree"
                  className="w-4 h-4 border border-border-primary "
                />
                <label htmlFor="agree" className="text text-text-tertiary">
                  You agree to our friendly{' '}
                  <Link href={'/privacy'}>privacy policy.</Link>
                </label>
              </div>

              <div>
                <Button isLoading={isPending}>Send message</Button>
              </div>
            </form>
          </div>
          <div className="lg:w-1/2 max-md:hidden">
            <div className="relative">
              <Image
                src="/images/contact.png"
                alt="Contact us page image"
                width={736}
                height={800}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactView;
