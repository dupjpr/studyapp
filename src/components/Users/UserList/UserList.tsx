import { useAppSelector } from "../../../redux/hooks";

const UserList = () => {
  const dataList = useAppSelector((state: any) => state.rootReducer.users.list);

  return (
    <div>
      {dataList &&
        dataList.map((item: any) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <img src={item.image} alt="character" />
            <p>{item.species}</p>
            <p>{item.status}</p>
          </div>
        ))}
    </div>
  );
};

export default UserList;
