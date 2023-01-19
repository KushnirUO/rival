import {addUser, authUser} from "../../store/authUserSlice";

export const handleActionReg = (dispatch, values) => {
    dispatch(addUser({
        name: values.name,
        email: values.email,
        password: values.password,
    }));
}
export const handleActionLogin = (dispatch, values) => {
    dispatch(authUser({
        id: values.email,
        password: values.password,
    }));
}