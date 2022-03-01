import { useAppSelector } from "../../redux/hooks";

const View: React.FC = () => {
  const data = useAppSelector((state) => state.users.list);
  console.log(data);

  return <div>this is the view component</div>;
};

export default View;
