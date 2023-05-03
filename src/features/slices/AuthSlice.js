import {
    createSlice,
    createAsyncThunk,
  } from "@reduxjs/toolkit";


  export const authRegister = createAsyncThunk(
    "auth/register",
    
    async (initialPost) => {
   
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST", 
        accept:"*/*",
      
        headers: {
          "Content-Type": "application/json",
         
        },
       
        body: JSON.stringify(initialPost.data), 
      })
        .then((json) => json.json())
        .then(function (data) {
          
          return data;
        })
        .catch(function (error) {
          console.log("Request failed", error);
          return error;
        });
      return response; 
    }
  );

  export const userAuthLogin = createAsyncThunk(
    "auth/userlogin",
    // The payload creator receives the partial `{title, content, user}` object
    async (initialPost) => {
      var body = { ...initialPost.data, grant_type: "password" };
      console.log(body);
  
      const response = await fetch("http://localhost:5000/api/userlogin", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        accept:"*/*",
        headers: {
          "Content-Type": "application/json",
        },
       // redirect: "follow", // manual, *follow, error
       // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(body), // body data type must match "Content-Type" header
        //body: body, // body data type must match "Content-Type" header
      })
        .then((json) => json.json())
        .then(function (data) {
          //console.log('Request succeeded with JSON response', data);
          //console.log(data);
          return data;
        })
        .catch(function (error) {
          console.log("Request failed", error);
          return error;
        });
  
      return response; // parses JSON response into native JavaScript objects
    }
  );
  

  const initialState = {


    registered: {
      email: "",
      firstname: "",
      _id: "",
      lastname: "",
    },
    status: "idle",
    language: "",
  };

  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      updateLanguage(state, action) {
        state.language = action.payload;
      },
      
    },
    extraReducers: {
      [userAuthLogin.fulfilled]: (state, action) => {
        if (action.payload !== null){
          console.log(action.payload);
          if(action.payload.length)
          {
            const { email, firstname, _id, lastname } = action.payload[0];
            state.registered.email = email;
            state.registered.firstname = firstname;
            state.registered._id = _id;
            state.registered.lastname = lastname;
          }
        }
        
      },
      [userAuthLogin.rejected]: (state, action) => {
        console.log("authPass.rejected");
      },
  

      [authRegister.pending]: (state, action) => {
        state.status = "registering";
        state.registered.id = null;
        console.log(state.status);
      },
      [authRegister.fulfilled]: (state, action) => {
        state.status = "register completed";
        console.log(state.status);
        if (action.payload !== null) {
          console.log(action.payload)
          if (action.payload._id) {
            const { email, firstname, _id, lastname } = action.payload;
            state.registered.email = email;
            state.registered.firstname = firstname;
            state.registered._id = _id;
            state.registered.lastname = lastname;
          }
        }
      },
      [authRegister.rejected]: (state, action) => {
        state.status = "register error";
        state.registered.id = null;
        console.log(state.status);
        console.log(action.payload);
      },
    },
  });


  export const getUserLogingIn = (state) => state.auth.registered;

  export const {
    updateLanguage,
  } = authSlice.actions;

  export default authSlice.reducer;