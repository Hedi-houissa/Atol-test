import {
  FARMEGETFAIL,
  FARMEGETSUCC,
  FARMELOAD,
} from "../ActionType/FarmeActionType";

const initState = {
  farms: [],
  load: false,
  error: "",
  edit: false,
};

export const FarmReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FARMELOAD:
      return { ...state, load: true };
    case FARMEGETSUCC:
      return { ...state, load: false, farms: payload };
    case FARMEGETFAIL:
      return { ...state, load: false, error: payload };

    default:
      return { ...state };
  }
};

export default FarmReducer;
