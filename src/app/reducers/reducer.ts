import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TData, TInnerData } from '@/hooks/type';

export const initialState: TData = {
  user: {
    id: 0,
    name: '',
    age: '',
    sex: '',
    images: [],
    about: '',
    location: '',
  }
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    saveProfile: (state, action: PayloadAction<TInnerData>) => {
      state.user = action.payload;
    },
    resetProfile: state => {
      state.user = {
        id: 0,
        name: '',
        age: '',
        sex: '',
        images: [],
        about: '',
        location: '',
      };
    },
  },
});

export const profileReducer = profileSlice.reducer;
export const profileActions = profileSlice.actions;
export const { saveProfile, resetProfile } = profileActions;
