import * as yup from 'yup'

const Email= yup.object().shape(
    {
        email: yup.string().email(),
    }
);

const Password= yup.object().shape(
    {
        password: yup.string().min(4).max(10),
    }
);

const Name= yup.object().shape(
    {
        name: yup.string(),
    }
);

const Address= yup.object().shape(
    {
        name: yup.string(),
    }
);

const ConfirmPassword= yup.object().shape(
    {
        ConfirmPassword: yup.string().oneOf([yup.ref('Password'),null],'Password must match'),
    }
);

export {Email,Password,Name,Address,ConfirmPassword}