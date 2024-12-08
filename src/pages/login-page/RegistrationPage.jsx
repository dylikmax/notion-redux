import { useState } from "react";
import { buttonStyle } from "../../styles/tailwind.styles";
import { z } from "zod";
import { fetchRegisterUser } from "../../redux/user/actions";
import { useDispatch } from "react-redux";
import { registerSchema } from "../../schemas/registration.schema";
import InputWithError from "../../components/InputWithError";

function RegistrationPage({ handleToLogin }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    try {
      const { email, password, confirmPassword } =
        registerSchema.parse(formData);
      setErrors({});
      if (password !== confirmPassword) {
        throw new Error("Passwords must be equal.");
      }
      const time = Date.now();

      dispatch(fetchRegisterUser(email, password, time));
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formErrors = {};
        error.errors.forEach((err) => {
          formErrors[err.path[0]] = err.message;
        });
        setErrors(formErrors);
      } else {
        setErrors([error]);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col items-center justify-center pt-24">
      <div className="flex flex-col w-1/3 items-center gap-6">
        <h1 className="text-4xl font-bold">Registration</h1>
        <form
          id="login-form"
          className="flex flex-col gap-2"
          onSubmit={handleRegister}
        >
          <InputWithError
            name="email"
            type="text"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            errors={errors}
          />
          <InputWithError
            name="password"
            type="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleChange}
            errors={errors}
          />
          <InputWithError
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            placeholder="Confirm password"
            onChange={handleChange}
            errors={errors}
          />
          <input type="submit" value="Register" className={buttonStyle} />
          <div className="h-6">
            {errors[0] && <p className="text-red-500">{errors[0].message}</p>}
          </div>
        </form>
        <div>
          Have an account?{" "}
          <input
            type="button"
            value="Sign in to it!"
            className="text-stone-500 cursor-pointer"
            onClick={handleToLogin}
          />
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
