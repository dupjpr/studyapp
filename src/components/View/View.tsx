import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import Tabs from "../Tabs/Tabs";
import { fetchPosts } from "../../redux/slices/usersListSlice";

const View: React.FC = () => {
  const data = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="viewSectionContainer">
      <Tabs />
    </section>
  );
};

export default View;
