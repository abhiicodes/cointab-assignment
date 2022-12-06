import { LOGIN, LOGOUT, UPDATE_USERS } from "./actions";

const initState = {
  token: null,

  users: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state, token: payload };
    case LOGOUT:
      return { ...state, token: null };
    case UPDATE_USERS:
      return { ...state, users: payload };

    default:
      return state;
  }
};

export default reducer;
