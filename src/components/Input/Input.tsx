import { ChangeEvent } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { addInfo } from "../../redux/slices/inputSlice";
import { addUser } from "../../redux/slices/viewSlice";

const Input: React.FC = () => {
  const data = useAppSelector((state) => state.userInput.formInput);
  const dispatch = useAppDispatch();

  // https://www.youtube.com/watch?v=c0MpQeOKc-4&ab_channel=MonkeyWit

  const { name, age, company, img } = data;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const name = target.name;
    dispatch(
      addInfo({
        [name]: target.value,
      })
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      addUser({
        name: name,
        age: age,
        img: img,
        company: company,
        id: 674747,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      New User
      <label>
        Name:
        <input name="name" type="text" value={name} onChange={handleChange} />
      </label>
      <label>
        Age:
        <input name="age" type="number" value={age} onChange={handleChange} />
      </label>
      <label>
        Company:
        <input
          name="company"
          type="text"
          value={company}
          onChange={handleChange}
        />
      </label>
      <label>
        Photo URL:
        <input name="img" type="text" value={img} onChange={handleChange} />
      </label>
      <input type="submit" value="add" />
    </form>
  );
};

export default Input;
