import {createSlice} from '@reduxjs/toolkit'

const addUserSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        auth: false,
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
        // gdfv45$%
        authUser(state, action) {
            state.users.map(user => {
                if(user.id === action.payload.id && user.password===action.payload.password){
                    state.auth=true;
                    console.log('authorized')
                    return true
                }
            })

            // state.users.map(user => {
            //     if(user.id === action.payload.id){
            //         state.auth = true;
            //         // state.users.auth = true;
            //         console.log(state.auth)
            //     }
            // })
            // state.users = state.users.find(user => user.id === action.payload.id)
        },
    }

})


export const {addUser, authUser} = addUserSlice.actions
export default addUserSlice.reducer
// export const userSelector = (state) => state.auth=true;
