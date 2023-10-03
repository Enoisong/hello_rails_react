import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    const response = await axios.get('http://127.0.0.1:3000/api/v1/random_greeting');
    return response.data.text;
  }
)

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    text: 'Hello',
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      state.text = action.payload;
    })
  },
})

export default greetingSlice.reducer;