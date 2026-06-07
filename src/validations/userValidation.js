import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
  nickname: Yup.string().nullable(),
  username: Yup.string()
    .required("You must enter a username.")
    .min(4, "Username length can't be less than 4.")
    .max(10, "Username length can't be more than 10."),
  email: Yup.string()
    .email("Email form isn't correct.")
    .required("You must enter your email."),
  password: Yup.string()
    .required("You must enter a password.")
    .min(6, "Password length can't be less than 6.")
    .max(12, "Please enter a shorter password."),
});

export const signInSchema = Yup.object().shape({
  usernameOrEmail: Yup.string().required(
    "You must enter your username or email.",
  ),
  password: Yup.string().required("You must enter your password."),
});
