"use client";
import Link from "next/link";
import EyeIcon from "@/icon/EyeIcon";
import EyeOffIcon from "@/icon/EyeOffIcon";
import { useState } from "react";

export default function Page() {
  const [show1, setShow1] = useState<boolean>(false);
  const handleClick1 = () => setShow1((prev) => !prev);
  const [show2, setShow2] = useState<boolean>(false);
  const handleClick2 = () => setShow2((prev) => !prev);

  const [showSucess, setShowSucess] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    f_name: "",
    l_name: "",
    id_user: "",
    pw_user: "",
    c_pw_user: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const rs = await response.json();

      if (rs.status === 200 || rs.status === 201) {
        setShowSucess(true);
        setFormData({
          f_name: "",
          l_name: "",
          id_user: "",
          pw_user: "",
          c_pw_user: "",
        });
      } else {
        alert(rs.message);
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <div className="body-inside h-dvh bg-slate-300 flex items-center text-black relative">
      <div
        className={`absolute h-[20%] w-[50%] bg-slate-200 top-[30%] shadow-lg rounded-md z-50 ${
          showSucess ? "" : "hidden"
        }`}
      >
        <div
          className="absolute right-0 p-4 hover:cursor-pointer"
          onClick={() => setShowSucess(false)}
        >
          X
        </div>
        <h2 className="text-center font-bold text-2xl mt-6 text-green-600">
          Sign Up Successfully!
        </h2>
        <p className="text-center mt-8 text-xl">
          Now, you can Sign In at{" "}
          <span>
            <Link
              className="text-blue-600 underline hover:text-blue-900"
              href="/user/signin"
            >
              here
            </Link>
          </span>
        </p>
      </div>
      <div className="w-[70%] my-auto p-2 flex flex-col items-center">
        <h1 className="text-2xl mb-6 font-bold pl-16 self-start">Sign Up</h1>
        <form
          action="submit"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 ssm:w-full md:w-[60%]"
        >
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col w-full">
              <label className="mr-4" htmlFor="f_name">
                First Name
              </label>
              <input
                type="text"
                name="f_name"
                id="f_name"
                value={formData.f_name}
                onChange={handleChange}
                required
                className="px-3 py-2 rounded-sm "
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="mr-4" htmlFor="l_name">
                Last Name
              </label>
              <input
                type="text"
                name="l_name"
                id="l_name"
                value={formData.l_name}
                onChange={handleChange}
                required
                className="px-3 py-2 rounded-sm "
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="mr-4" htmlFor="id_user">
                Email
              </label>
              <input
                type="text"
                name="id_user"
                id="id_user"
                value={formData.id_user}
                onChange={handleChange}
                required
                className="px-3 py-2 rounded-sm "
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="mr-4" htmlFor="pw_user">
                Password
              </label>
              <div className="flex items-center bg-white relative">
                <input
                  type={show1 ? "text" : "password"}
                  name="pw_user"
                  id="pw_user"
                  value={formData.pw_user}
                  onChange={handleChange}
                  required
                  className="px-3 py-2 pr-8 rounded-sm w-full focus:ring-0 focus:border-none"
                />
                <div
                  className="absolute hover:cursor-pointer w-[20px] right-2"
                  onClick={() => handleClick1()}
                >
                  {show1 ? (
                    <EyeOffIcon setWidth={20} setHeight={20} />
                  ) : (
                    <EyeIcon setWidth={20} setHeight={20} />
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label className="mr-4" htmlFor="pw_user">
                Confirm password
              </label>
              <div className="flex items-center bg-white relative">
                <input
                  type={show2 ? "text" : "password"}
                  name="c_pw_user"
                  id="c_pw_user"
                  value={formData.c_pw_user}
                  onChange={handleChange}
                  required
                  className="px-3 py-2 pr-8 rounded-sm w-full focus:ring-0 focus:border-none"
                />
                <div
                  className="absolute hover:cursor-pointer right-2"
                  onClick={() => handleClick2()}
                >
                  {show2 ? (
                    <EyeOffIcon setWidth={20} setHeight={20} />
                  ) : (
                    <EyeIcon setWidth={20} setHeight={20} />
                  )}
                </div>
              </div>
            </div>
            <div className="flex w-full items-start justify-start gap-2">
              <input
                type="checkbox"
                name="sub_ads"
                id="sub_ads"
                className=" h-[3em] w-[3em]"
              />
              <p className="pt-0">
                Sign up for our newsletter to stay in the loop about hot deals,
                new products, and more. Don’t worry, you can unsubscribe at any
                time.
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="p-4 text-white rounded-lg bg-headerColor ssm:mt-4 md:mt-0"
          >
            Sign up
          </button>
          <p>
            By continuing you agree to our{" "}
            <Link className="text-blue-600 hover:text-blue-900" href="#">
              Terms and Conditions
            </Link>{" "}
            and{" "}
            <Link className="text-blue-600 hover:text-blue-900" href="#">
              Privacy Policy
            </Link>
            , and confirm you have reached the age of majority (18 or 19) in
            your province or territory of residence.
          </p>
        </form>
        <hr className="border-blue-900 w-[40%] mt-5" />
        <div className="w-full text-center mt-4">
          <p className="text-xs">
            Already have account?{" "}
            <Link
              className="text-blue-600 underline hover:text-blue-900"
              href="/user/signin"
            >
              Sign in now!
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
