import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SignUpField,
  SignUpScheme,
  SignUpSchemeType,
} from "../../../types/auth";
import style from "./index.module.scss";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemeType>({
    resolver: zodResolver(SignUpScheme),
  });

  const onSubmit: SubmitHandler<SignUpField> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <input
        type="email"
        {...register("email", { required: true })}
        placeholder="email"
      />
      <input
        type="password"
        {...register("password", { required: true })}
        placeholder="password"
      />
      <p className={style.error_message}>
        {(errors && errors.email?.message) || errors.password?.message}
      </p>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
