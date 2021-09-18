import { createSlice } from "@reduxjs/toolkit";
import data from './data';
import { createSelector } from "reselect";


const slice = createSlice({
  name: 'students',
  initialState: data,
  reducers: {
    // action => action handler
    studentAdded: (students, action) => {
      students.push(action.payload);
    }
  }
});

export const { studentAdded } = slice.actions;

export default slice.reducer;

 export const getAllStudents = createSelector(state => state);