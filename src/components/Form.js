import { Data } from "../Data";
import { useContext } from "react";


export const Form = () => {
  const { handleSubmit, handleValue, value } = useContext(Data);

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a city.."
        onChange={handleValue}
        value={value}
      />
    </form>
  );
};
