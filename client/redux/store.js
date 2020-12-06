import { createStore, applyMiddleware } from "redux";
import loggerMiddleware from "redux-logger";

// ACTION TYPES go here:
const GET_STUDENTS = "GET_STUDENTS";
const ADD_STUDENT = "ADD_STUDENT";

// ACTION CREATORS go here:export them?
export const gotStudents = (students) => {
  return {
    type: GET_STUDENTS,
    students,
  };
};

//need to access axios for info
export const getStudents = () => {
  // change into a thunk!!!
  return async (dispatch) => {
    const { data } = await axios.get("/students"); //need the file
    dispatch(gotStudents(data));
  };
};

// const addStudentActionCreator = (student) => {
//   return type: ADD_STUDENT,
//   newStudent = {
//     id:student.id
//   }
// }

// THUNK CREATORS go here:

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state; //need this above before alt to state:action.state;
  }
};

const store = createStore(reducer, applyMiddleware(loggerMiddleware));
store.dispatch({ type: "HELLO_WORLD" });

export default store;
