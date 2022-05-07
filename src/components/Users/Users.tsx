import { useAppSelector } from "../../redux/hooks";
import Loading from "../uiLibrary/Loading/Loading";
import UserList from "./UserList/UserList";

import "./users.style.scss";

const Users = () => {
  const data = useAppSelector((state) => state.rootReducer.users);

  const { loading } = data;

  return (
    <div className="usersContainer">
      {loading ? <Loading /> : <UserList />}
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
    </div>
  );
};

export default Users;
