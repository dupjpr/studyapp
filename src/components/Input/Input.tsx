import { useAppSelector } from "../../redux/hooks";

const Input: React.FC = () => {
  const data = useAppSelector((state) => state.userInput);
  console.log(data);

  // https://www.youtube.com/watch?v=c0MpQeOKc-4&ab_channel=MonkeyWit

  const { name, age, company, img } = data;
  return (
    <form>
      New User
      <label>
        Name:
        <input type="text" value={name} />
      </label>
      <label>
        Age:
        <input type="number" value={age} />
      </label>
      <label>
        Company:
        <input type="text" value={company} />
      </label>
      <label>
        Photo URL:
        <input type="text" value={img} />
      </label>
      <input type="submit" value="add" />
    </form>
  );
};

export default Input;
