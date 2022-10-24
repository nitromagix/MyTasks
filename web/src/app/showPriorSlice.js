import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value:false,
};

export const showPriorSlice = createSlice({
  name: 'showPrior',
  initialState,

  reducers: {
    changeShow: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeShow } = showPriorSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getShow = (state) => state.showPrior.value;


export default showPriorSlice.reducer;
