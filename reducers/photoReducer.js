import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const CLIENT_ID = "GHpFcDouO1QK8JR2t-3273Fnp6hulrmonfdh5nwfm_8";

export const fetchPhotos = createAsyncThunk(
  'photos/fetchPhotos',
  async () => {
    const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}&count=15`);
    const data = await response.json();
    return data;
  }
);

const initialState = {
  photosList: [],
  isLoading: false,
  error: null,
};

const photoSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.photosList = action.payload;
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default photoSlice.reducer;