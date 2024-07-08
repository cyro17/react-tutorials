import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");

  // Dev only !!
  await pause(10000);

  return response.data;
});

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
/* 
fetchUsers gets automatically assiged three prop:
    fetchUsers.pending === 'users/fetch/pending'
    fetchUsers.fulfilled === 'users/fetch/fulfilled'
    fetchUsers.rejected === 'users/fetch/rejected'
*/

export { fetchUsers };
