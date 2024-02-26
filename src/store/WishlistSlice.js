import { createSlice } from '@reduxjs/toolkit';

const initialList = [
    
];

const wishlistSlice = createSlice({
  name: 'wishlist',
    initialState: initialList,
  reducers: {
    wishlistAdd: (state, action) => {
      state.list.push(action.payload);
    }
  }
});

export const { wishlistAdd } = wishlistSlice.actions;
export default wishlistSlice.reducer;
