import { useAppSelector } from "../../redux/hooks";
import Tabs from "../Tabs/Tabs";

const View: React.FC = () => {
  const data = useAppSelector((state) => state.users.list);
  // const dataCompli = useAppSelector((state) => state);

  // const defaultImageUrl =
  //   "https://rickandmortyapi.com/api/character/avatar/249.jpeg";

  console.log(data);

  return (
    <section>
      <Tabs />
      {/* {data.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <img src={item.img ? item.img : defaultImageUrl} alt="avatar" />
          <div>
            <strong>Age:</strong> {item.age}
          </div>
          <div>
            <strong>Company:</strong> {item.company}
          </div>
        </div>
      ))} */}
    </section>
  );
};

export default View;
