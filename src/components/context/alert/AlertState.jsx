/* eslint-disable react/prop-types */
import { useReducer } from "react";
import { REMOVE_ALERT, SET_ALERT } from "../types";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";

const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //Show search validation alert message
  const setAlert = (message, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { message, type },
    });

    //Make the alert go away after 6sec
    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, 6000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
