/*
1.provider  state providing to react store
 2.store
 3.reducer implement action state logic connections
 4.action
*/

/* 
store = state
 action = button click
 reducer = state update
 provider = react
*/

// createAsyncThunk api related thunk or redux saga 44.00
import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUser = createAsyncThunk("cart/fetchUser", async (id) => {
//   const res = await axios.get(
//     `https://jsonplaceholder.typicode.com/todos/${id}`
//   );
//   console.log(res.data);
//   return res.data;
// });
const INITIAL_STATE = {
  cartList: [],
  cartCount: 0,
  userDetail: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    updateUser: (state, action) => {
      console.log(action.payload);
      state.userDetail?.push(action.payload);
    },
    increment: (state, action) => {
      const productID = action.payload;
      state.cartList.forEach((item) => {
        if (item?.id == productID) {
          item.count++;
        }
      });
    },
    decrement: (state, action) => {
      const productID = action.payload;
      state.cartList.forEach((item) => {
        if (item?.id == productID) {
          // if (item.count == 1) {
          //   state.cartList.splice(item?.id, 1);
          // } else {
          item.count--;
          // }
        }
      });
    },
    addToCart: (state, action) => {
      // state.cartCount = 1;
      const existItem = state.cartList.find(
        (item) => item.id == action.payload.id
      );
      if (existItem) {
        state.cartList.forEach((item) => {
          if (item?.id == action.payload.id) {
            item.count = 1;
          }
        });
        return;
      }

      state.cartList.push({ ...action.payload, count: 1 });
    },
  },
  // extraReducers: {
  //   [fetchUser.pending]: (state, action) => {
  //     //loading get true loader use here
  //     console.log("loading start");
  //   },
  //   [fetchUser.fulfilled]: (state, action) => {
  //     state.userDetail.push(action?.payload);

  //     console.log("success");
  //     console.log(state.userDetail);
  //   },
  //   [fetchUser.rejected]: (state, action) => {
  //     console.log("rejected");
  //   },
  // },
});

export const { increment, decrement, addToCart, updateUser } =
  cartSlice.actions;

export default cartSlice.reducer;
