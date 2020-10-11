export const signupUser = (user) => {
  return $.ajax({
    url: "/api/users",
    method: "POST",
    data: { user },
  });
};

export const updateUser = (user) => {
  return $.ajax({
    url: `/api/users/${user.id}`,
    method: "PATCH",
    data: { user },
  });
};

export const loginUser = (user) => {
  return $.ajax({
    url: "/api/session",
    method: "POST",
    data: { user },
  });
};

export const logoutUser = () => {
  return $.ajax({
    url: "api/session",
    method: "DELETE",
  });
};
