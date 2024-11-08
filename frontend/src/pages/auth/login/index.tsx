import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginField, LoginScheme, LoginSchemeType } from "../../../types/auth";
import style from "./index.module.scss";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemeType>({
    resolver: zodResolver(LoginScheme),
  });

  const onSubmit: SubmitHandler<LoginField> = (data) => {
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
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
