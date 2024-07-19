import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="modal-box">
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Sign Up</h3>
              {/*Name */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="enter your full name"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("name", { required: true })}
                />
                      <br />
                {errors.name && (
                  <span className="text-sm text-red-600">
                    Name field is required
                  </span>
                )}
              </div>
              {/*Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                          <br />
                {errors.email && (
                  <span className="text-sm text-red-600">
                    Email field is required
                  </span>
                )}
              </div>
              {/*Password */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                          <br />
                {errors.password && (
                  <span className="text-sm text-red-600">
                    Password field is required
                  </span>
                )}
              </div>
              {/*Button */}
              <div className="mt-4">
                <button  type="submit" className="bg-green-500 hover:bg-green-700 text-white px-3 py-2 bordered rounded-md outline-none">
                  Sign Up
                </button>

                <p className="mt-2 ml-2">
                  Have account?
                  <Link
                    to="/"
                    className="underline text-green-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </Link>{" "}
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
