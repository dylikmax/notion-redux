import { inputStyle } from "../styles/tailwind.styles";

function InputWithError({ name, type, value, onChange, placeholder, errors }) {
  return (
    <div>
      <input
        type={type}
        name={name}
        className={inputStyle}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <div className="h-6">
        {errors[name] && <p className="text-red-500">{errors[name]}</p>}
      </div>
    </div>
  );
}

export default InputWithError;
