import { useForm } from "./hooks/FormHook";
import "./Form.css";

export const Form = () => {
  const { formData, handleInputChange, handleSubmit } = useForm(
    { username: "", password: "" },
    (formData) => {
      console.log(formData);
    }
  );

  const { username, password } = formData;
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={username}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
