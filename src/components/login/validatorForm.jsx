import * as yup from 'yup';
export const validationsForm = yup.object().shape({

    name: yup.string().typeError('').matches().required('Required').min(2, 'So short').max(20, 'So long'),
    //  password: yup.string().typeError('').matches( "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
    //      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character").required('Required').min(5).max(25),
    email: yup.string().email("Please enter a valid email").required(),

});