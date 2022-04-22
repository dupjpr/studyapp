import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import Tabs from "../Tabs/Tabs";
import getInformation from "../../redux/slices/viewSlice";

const View: React.FC = () => {
  const data = useAppSelector((state) => state.users.list);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(getInformation);
  // });

  // const dataCompli = useAppSelector((state) => state);

  // const defaultImageUrl =
  //   "https://rickandmortyapi.com/api/character/avatar/249.jpeg";

  console.log(data);

  return (
    <section className="viewSectionContainer">
      <Tabs />
    </section>
  );
};

export default View;
