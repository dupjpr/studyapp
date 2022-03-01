import { useSelector } from "react-redux";

const View: React.FC = () => {
  const data = useSelector((state) => state);
  console.log(data);

  return <div>this is the view component</div>;
};

export default View;
