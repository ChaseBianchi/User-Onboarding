import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string().required('Name required.'),
    email: yup.string().required('Email required.').email('Email must be valid.'),
    password: yup.string().required('Password required.'),
    tos: yup.boolean(),
})

