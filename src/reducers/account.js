const instiaiState = {
  user: localStorage.getItem("user"),
  role: localStorage.getItem("role"),
  token: localStorage.getItem("token"),
};

const account = (state = instiaiState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      const { user, role, token } = payload;
      localStorage.setItem("user", user);
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      return { user, role, token };
    case "LOGOUT":
      localStorage.clear();
      return payload;
    default:
      return state;
  }
};

export default account;

export const login = (data) => {
  return {
    type: "LOGIN",
    payload: data,
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
    payload: { user: "", role: "", token: "" },
  };
};
