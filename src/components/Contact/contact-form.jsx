import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import toast from "react-hot-toast";
import { postData } from "@/client";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

   const [data, setData] = useState({
     name: "",
     email: "",
     phone: "",
   });

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {

   
     setIsLoading(true);
     postData("submit", {
       name: formData.fullName,
       email: formData.email,
       phone: `${formData.phoneNumber}`,
     })
       .then((res) => {
         if (res.status == 201) {
           toast.success(res.message);
           setIsLoading(false);
           reset();
         }
       })
       .catch((err) => {
         toast.error("something went wrong!");
         setIsLoading(false);
       });

 
  };

  return (
    <section className="py-12  h-[calc(100vh-135.5px)]   bg-gray-900 ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid max-w-6xl grid-cols-1 mx-auto gap-y-12 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24">
          <div className="relative flex flex-col justify-between max-w-lg lg:py-12 lg:max-w-none">
            <div className="flex-1">
              <p className="text-sm font-normal tracking-widest uppercase">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                  Have a project in mind?
                </span>
              </p>
            </div>

            <div className="mt-6 lg:mt-auto">
              <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                We help you to grow your business faster & easier.
              </h2>
              <p className="mt-4 text-base font-normal text-gray-400 lg:max-w-xs sm:text-lg sm:mt-6">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor.
              </p>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative  bg-black rounded-xl">
              <div className="p-6 sm:py-8 sm:px-9">
                <p className="text-xl font-normal text-white">
                  Let us know about your project & we will help you grow your
                  business from scratch.
                </p>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-8 space-y-4"
                >
                  <div className="">
                    <label htmlFor="fullName" className="sr-only">
                      Full name
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="block w-full px-5 py-3 text-base border border-white text-white placeholder-gray-500 bg-black rounded-md focus:border-white focus:ring-1 focus:ring-white"
                      {...register("fullName", {
                        required: "Full Name is required",
                      })}
                    />
                    {errors.fullName && (
                      <p className="mt-2 text-red-500">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div className="">
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="Email address"
                      className="block w-full px-5 py-3 text-base border border-white text-white placeholder-gray-500 bg-black rounded-md focus:border-white focus:ring-1 focus:ring-white"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="mt-2 text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="">
                    <label htmlFor="phoneNumber" className="sr-only">
                      Phone number
                    </label>
                    <Controller
                      name="phoneNumber"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: "Phone Number is required",
                        pattern: {
                          value: /^\+?[1-9]{1,3}[0-9]{10}$/,
                          message: "Invalid phone number",
                        },
                      }}
                      render={({ field }) => (
                        <PhoneInput
                          {...field}
                          defaultCountry="in"
                          className="block w-full px-5  border border-white text-base text-white placeholder-gray-500 bg-black rounded-md focus:border-white focus:ring-1 focus:ring-white"
                          onChange={(value) => field.onChange(value)}
                        />
                      )}
                    />
                    {errors.phoneNumber && (
                      <p className="mt-2 text-red-500">
                        {errors.phoneNumber.message}
                      </p>
                    )}
                  </div>

                  <div className="flex justify-end">
                    <div className="relative inline-flex mt-2 group">
                      <div className="absolute transition-all duration-200 rounded-md -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                      <button
                        type="submit"
                        className="relative inline-flex items-center justify-center px-8 py-3  text-base font-normal text-white bg-black border border-transparent rounded-md"
                        disabled={isLoading}
                      >
                        {isLoading && (
                          <svg
                            width={24}
                            aria-hidden="true"
                            role="status"
                            className="inline w-4 h-4 me-3 text-white animate-spin"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="#E5E7EB"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentColor"
                            />
                          </svg>
                        )}
                        {isLoading ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
  