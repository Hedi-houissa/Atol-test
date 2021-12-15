import {
  USERLOAD,
  USERSUCC,
  LOGINUSERSUCC,
  LOGINUSERFAIL,
} from "../ActionType/UserActionType";

const initState = {
  user: [],
  load: false,
  error: "",
  edit: false,
};

export const UserReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case USERLOAD:
      return { ...state, load: true };
    case USERSUCC:
      return { ...state, load: false, user: payload };
    case LOGINUSERSUCC:
      return { ...state, load: false, user: payload , error:""};
    case LOGINUSERFAIL:
      return { ...state, load: false, error: payload };

    default:
      return { ...state };
  }
};

export default UserReducer;
