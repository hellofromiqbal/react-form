import { z } from 'zod';

export const signUpFormSchema = z.object({
  name: z.string({
    required_error: "Name is required.",
    invalid_type_error: "Name must be a string."
  }).min(2, {message: "Name must be at least 2 or more characters long."}).max(30, {message: "Name must be 30 or fewer characters long."}),
  email: z.string().email({message: "Email is required and must be in a correct format."}),
  password: z.string({
    required_error: "Password is required"
  }).min(6, {message: "Password at least 6 or more characters long."}).max(20, {message: "Password at least 20 or fewer characters long."}),
  confirmPassword: z.string().min(6, {message: "Confirm password at least 6 or more characters long."}).max(20, {message: "Confirm password at least 20 or fewer characters long."}),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Password do not match",
  path: ["confirmPassword"]
});