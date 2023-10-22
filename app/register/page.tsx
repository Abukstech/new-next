"use client";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import Registerschema from "../api/register/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";

type registerForm = z.infer<typeof Registerschema>;

const SignupPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<registerForm>({
    resolver: zodResolver(Registerschema),
  });

  return (
    <form
      className=" flex flex-col mx-auto  w-52"
      onSubmit={handleSubmit(async (data) => {
        try {
          await axios.post("/api/register", data);
          router.push("/api/auth/signin");
        } catch (error) {
          console.log(error);
        }
      })}
    >
      <div className="form-control">
        <label className="label">
          <span className="label-text">Your Name</span>
        </label>
        <label className="input-group input-group-vertical">
          <span>Name</span>
          <input
            type="text"
            placeholder="Enter Your Name"
            {...register("name")}
            className="input input-bordered"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Your Email</span>
        </label>
        <label className="input-group input-group-vertical">
          <span>Email</span>
          <input
            type="text"
            placeholder="Enter Your Email"
            {...register("email")}
            className="input input-bordered"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Your Password</span>
        </label>
        <label className="input-group input-group-vertical">
          <span>Password</span>
          <input
            type="text"
            placeholder="Enter Password"
            {...register("password")}
            className="input input-bordered"
          />
        </label>
      </div>
      <button className="btn btn-primary mt-5">Submit</button>
    </form>
  );
};

export default SignupPage;
