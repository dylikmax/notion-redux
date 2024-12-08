import { useState } from "react";
import { inputStyle, buttonStyle } from "../../styles/tailwind.styles";
import { z } from "zod";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoginUser } from "../../redux/user/actions";
import { loginSchema } from "../../schemas/login.schema";

function LoginPage({ handleToReg }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const fetchingError = useSelector((state) => state.user.error);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      const validatedData = loginSchema.parse(formData);
      setErrors({});

      dispatch(fetchLoginUser(validatedData.email, validatedData.password));
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
        <h1 className="text-4xl font-bold">Login</h1>
        <form
          id="login-form"
          className="flex flex-col gap-2"
          onSubmit={handleLogin}
        >
          <div>
            <input
              type="text"
              name="email"
              className={inputStyle}
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <div className="h-6">
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
          </div>
          <div>
            <input
              type="password"
              name="password"
              className={inputStyle}
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <div className="h-6">
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
            </div>
          </div>
          <input type="submit" value="Login" className={buttonStyle} />
          <div className="h-6">
            {fetchingError && <p className="text-red-500">{fetchingError.message}</p>}
          </div>
        </form>
        <div>
          Have no account?{" "}
          <input
            type="button"
            value="Create it!"
            className="text-stone-500 cursor-pointer"
            onClick={handleToReg}
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
