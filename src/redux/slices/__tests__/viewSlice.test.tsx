import store from "../../store";
import { inputUserTypes } from "../inputSlice";
import { addUser } from "../viewSlice";

test("there is a user call Mike with id: 536291", () => {
  let state = store.getState().users;
  const userSelected = state.list.find((item) => item.id === 536291);
  expect(userSelected!.name).toBe("Mike");
  expect(userSelected!.age).toBe(30);
});

test("there is a user call Mike with age: 30", () => {
  let state = store.getState().users;
  const userSelected = state.list.find((item) => item.id === 536291);
  expect(userSelected!.age).toBe(30);
});

test("update the list of users with a new user", () => {
  store.dispatch(
    addUser({
      name: "Samanta",
      age: 18,
      img: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      company: "Autodesk",
      id: "jehshsj2312",
    })
  );
  let state = store.getState().users;
  const userSelected = state.list.find((item) => item.id === "jehshsj2312");
  expect(userSelected!.name).toBe("Samanta");
});
