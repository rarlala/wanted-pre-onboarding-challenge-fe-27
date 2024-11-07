import { z } from "zod";

// Login
export type LoginField = {
  email: string;
  password: string;
};

export const LoginScheme = z.object({
  email: z
    .string()
    .min(1, "이메일을 입력해주세요")
    .email("이메일 형식을 입력해주세요."),
  password: z.string().min(1, "비밀번호를 입력해주세요"),
});

export type LoginSchemeType = z.infer<typeof LoginScheme>;

// SignUp
export type SignUpField = LoginField;

export const SignUpScheme = z.object({
  email: z
    .string()
    .min(1, "이메일을 입력해주세요")
    .email("이메일 형식을 입력해주세요."),
  password: z
    .string()
    .min(1, "비밀번호를 입력해주세요")
    .min(8, "8자 이상 비밀번호를 입력해주세요."),
});

export type SignUpSchemeType = z.infer<typeof SignUpScheme>;
