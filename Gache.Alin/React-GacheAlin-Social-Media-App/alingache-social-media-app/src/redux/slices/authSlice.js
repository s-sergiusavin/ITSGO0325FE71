import authService from "../../services/authService";
import { createAsyncTank, createSlice } from "@reduxjs/toolkit";

const userTokern = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const initialState = {
  isAuthenticated: false,
  status: "idle",
  loading: false,
  email: null,
  error: null,
  succes: false,
};

export const loginUser = createAsyncTank("auth/login", async (payload) => {
  const { data } = await authService.login(payload);
  localStorage.setItem("token", data.accessToken);
  return data;
});

export const registerUser = createAsyncTank(
  "auth/register",
  async (payload) => {
    const { data } = await authService.register(payload);
    return data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state, actions) {
      state.isAuthenticated = false;
    },
    toggleLogin(state, actions) {
      state.isAuthenticated = !state.isAuthenticated;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.peding, (state, action) => {
        state.status = "loading";
        state.loading = true;
        state.error = null;
        state.isAuthenticated = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loading = false;
        state.error = null;
        state.isAuthenticated = true;
        state.email = action.payload.user.email;
        state.userTokern = action.payload.accessToken;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.error = action.error.message;
        state.isAuthenticated = false;
      })

      .addCase(registerUser.peding, (state, action) => {
        state.status = "loading";
        state.loading = true;
        state.error = null;
        state.isAuthenticated = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loading = false;
        state.error = null;
        state.isAuthenticated = true;
        state.email = action.payload.user.email;
        state.userTokern = action.payload.accessToken;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.error = action.error.message;
        state.isAuthenticated = false;
      });
  },
});

export const { toggleLogin } = authSlice.actions;

export const authReducer = authSlice.reducer;
