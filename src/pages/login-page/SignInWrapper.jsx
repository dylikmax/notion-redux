import { useState } from "react";
import RegistrationPage from "./RegistrationPage";
import LoginPage from "./LoginPage";

function SignInWrapper() {
  const [isReg, setIsReg] = useState(false);

  const handleToReg = (e) => {
    setIsReg((prev) => !prev);
  };

  return isReg ? (
    <RegistrationPage handleToLogin={handleToReg} />
  ) : (
    <LoginPage handleToReg={handleToReg} />
  );
}

export default SignInWrapper;
