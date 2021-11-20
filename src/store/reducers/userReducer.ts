import { User, UserAction, UserState } from "../../types/userTypes";

const initialState: UserState = {
  data: {} as User,
  loading: false,
  error: "",
};

const userReducer = (state: UserState = initialState, action: UserAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
