import {createSlice} from '@reduxjs/toolkit'

const addUserSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        auth: false,
        authDataUser: {},
    },
    reducers: {
        addUser(state, action) {
            console.log(action)
            state.users.push({
                id: action.payload.email,
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password,
            });

        },
        authUser(state, action) {
            state.users.map(user => {
                if(user.id === action.payload.id && user.password===action.payload.password){
                    state.auth=true;
                    state.authDataUser=user;
                }
            })
        },
        logOutUser(state) {
            state.auth=false;
            state.authDataUser={};
        },
    }

})


export const {addUser, authUser, logOutUser} = addUserSlice.actions
export default addUserSlice.reducer
// export const userSelector = (state) => state.auth=true;
