import { State } from "state";

export const fetchAction = async (state: State, updatedState: any) => {
  const newState = Object.assign({}, state);

  newState.emails = [...newState.emails, ...updatedState];
  return newState;
};
