import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signUpSchema, signInSchema } from "../validations/userValidation";
import { useModal } from "../contexts/ModalContext";
import { Input } from "..";

interface SignUpValues {
  nickname: string;
  username: string;
  email: string;
  password: string;
}

interface SignInValues {
  usernameOrEmail: string;
  password: string;
}

function SignInUp() {
  const { openModal } = useModal();
  const [isSignUp, setIsSignUp] = useState(false);

  const signUpInputsMap = [
    // { name: "nickname", placeholder: "Nickname" },
    { name: "username", placeholder: "Username" },
    { name: "email", placeholder: "Email", type: "email" },
    { name: "password", placeholder: "Password", type: "password" },
  ];

  const signInInputsMap = [
    { name: "email", placeholder: "Email" },
    { name: "password", placeholder: "Password", type: "password" },
  ];

  const signUpInitialValues: SignUpValues = {
    nickname: "",
    username: "",
    email: "",
    password: "",
  };

  const signInInitialValues: SignInValues = {
    usernameOrEmail: "",
    password: "",
  };

  if (localStorage.getItem("username")) return <Navigate to="/" />;

  return (
    <div className="flex flex-col items-center justify-center text-black h-screen sign">
      <h1>{!isSignUp ? "Welcome!" : "Welcome back!"}</h1>

      <div className="p-10 gap-4 shadow-2xl border-2 border-black rounded-xl flex flex-col items-center justify-center ">
        {!isSignUp ? (
          <Formik
            key="signup"
            initialValues={signUpInitialValues}
            validationSchema={signUpSchema}
            validateOnBlur={true}
            validateOnChange={true}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                console.log("Sign Up Info:", values);
                openModal("You signed up successfully.");
              } catch (error) {
                openModal("Error");
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="flex flex-col gap-1 w-full max-w-md items-center">
                {signUpInputsMap.map((input) => (
                  <div
                    key={input.name}
                    className="w-full flex flex-col items-center justify-center "
                  >
                    <Input placeholder={input.placeholder}>
                      <Field
                        placeholder={input.placeholder}
                        type={input.type || "text"}
                        name={input.name}
                        className={`w-full ${
                          errors[input.name] && touched[input.name]
                            ? "bg-red-200"
                            : "bg-gray-100"
                        }`}
                      />
                    </Input>

                    <div className="h-3 flex items-center justify-center">
                      <ErrorMessage
                        name={input.name}
                        render={(msg) => (
                          <span className="text-sm text-red-500">{msg}</span>
                        )}
                      />
                    </div>
                  </div>
                ))}

                <div className="flex flex-col items-center gap-2 mt-3">
                  <button type="submit" disabled={isSubmitting}>
                    Sign Up
                  </button>
                  <span
                    className="cursor-pointer"
                    onClick={() => setIsSignUp(true)}
                  >
                    Already have an account?
                  </span>
                </div>
              </Form>
            )}
          </Formik>
        ) : (
          <Formik
            key="signin"
            initialValues={signInInitialValues}
            validationSchema={signInSchema}
            validateOnBlur={true}
            validateOnChange={true}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                console.log("Sign In Info:", values);
                openModal("You signed in successfully.");
              } catch (error) {
                openModal("Error");
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="flex flex-col gap-1 w-full max-w-md items-center">
                {signInInputsMap.map((input) => (
                  <div
                    key={input.name}
                    className="w-full flex flex-col items-center"
                  >
                    <Input placeholder={input.placeholder}>
                      <Field
                        placeholder={input.placeholder}
                        type={input.type || "text"}
                        name={input.name}
                        className={`${
                          errors[input.name] && touched[input.name]
                            ? "bg-red-200"
                            : "bg-gray-100"
                        } w-full`}
                      />
                    </Input>

                    <div className="h-3 flex items-center justify-center">
                      <ErrorMessage
                        name={input.name}
                        render={(msg) => (
                          <span className="text-sm text-red-500">{msg}</span>
                        )}
                      />
                    </div>
                  </div>
                ))}

                <div className="flex flex-col items-center gap-2 mt-3">
                  <button type="submit" disabled={isSubmitting}>
                    Sign in
                  </button>
                  <span
                    className="cursor-pointer"
                    onClick={() => setIsSignUp(false)}
                  >
                    Have no account?
                  </span>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
}

export default SignInUp;
