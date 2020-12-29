import usersReducer from "../reducers/users_reducer";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

describe("Users Reducer", () => {
  test("has a default state", () => {
    expect(
      usersReducer(undefined, {
        type: "non valid action type",
      })
    ).toEqual({});
  });

  test("can handle RECEIVE_CURRENT_USER", () => {
    expect(
      usersReducer(undefined, {
        type: RECEIVE_CURRENT_USER,
        currentUser: { id: 2, username: "test", isAdmin: false },
      })
    ).toEqual({
      2: {
        id: 2,
        username: "test",
        isAdmin: false,
      },
    });
  });
});
