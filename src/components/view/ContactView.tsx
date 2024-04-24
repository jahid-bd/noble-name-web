'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Button from '../buttons/Button';
import InputField from '../form/InputField';

const ContactView = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  return (
    <main>
      <div className="max-w-[1280px] mx-auto md:px-2 px-10 0 min-h-screen pt-[64px] pb-[96px]">
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

            <div className="flex items-center justify-between gap-8 mb-6 mt-[48px]">
              <div>
                <InputField
                  type="text"
                  label="First Name"
                  name="name"
                  placeholder="First name"
                  onChange={handleChange}
                  value={formState.firstName}
                />
              </div>
              <div>
                <InputField
                  type="text"
                  label="Last Name"
                  name="name"
                  placeholder="Last name"
                  onChange={handleChange}
                  value={formState.lastName}
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
                value={formState.email}
              />
            </div>

            <div className="mb-6">
              <InputField
                type="text"
                label="Phone Number"
                name="phoneNumber"
                placeholder="+1 (555) 000-0000"
                onChange={handleChange}
                value={formState.phoneNumber}
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
                name="message"
                className="w-full h-[134px] outline-none border border-border-primary px-[14px] py-[10px] rounded-md shadow-sm placeholder:text-text-placeholder resize-none"
                onChange={handleChange}
                value={formState.message}
              />
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
              <Button>Send message</Button>
            </div>
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
