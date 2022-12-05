import * as yup from 'yup';

export const validationsForm = yup.object().shape({

            name: yup.string().typeError('').min(2, 'So short').max(20, 'So long'),

            password: yup.string()
                .required('Required')
                .when('validForm', {
                        is: true,
                        then: yup
                            .string()
                            .min(6, 'Password is short')
                            .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
                }),
            email: yup.string()
                .required('Required')
                .when('validForm', {
                        is: true,
                        then: yup
                            .string()
                            .email("Please enter a valid email"),
                }),
    });