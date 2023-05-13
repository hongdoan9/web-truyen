import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
  userInfo: {},
 
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuth: (state) => {
      return {
        ...initialState,
      };
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    
  },
});

// sử dụng useSelector để lấy dữ liệu từ store này
export const userInfoSelector = (state) => state.auth.userInfo;
// export const { } = authSlice.actions;

export default authSlice.reducer;
