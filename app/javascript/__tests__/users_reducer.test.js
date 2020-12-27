import usersReducer from "../reducers/users_reducer";

describe("Users Reducer", () => {
  it("has a default state", () => {
    expect(
      usersReducer(undefined, {
        type: "non valid action type",
      })
    ).toEqual({});
  });
});
