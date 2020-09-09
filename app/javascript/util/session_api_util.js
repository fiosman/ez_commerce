import { $CombinedState } from "redux";

export const signUpUser = (user) => {
  return $.ajax({
    url: "/api/user",
    method: "POST",
    data: { user },
  });
};

export const updateUser = (user) => {
  return $.ajax({
    url: "/api/user",
    method: "PATCH",
    data: { user },
  });
};
