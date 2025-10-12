 
import * as Yup from 'yup';
{ "Formik", "Form", "Field", "ErrorMessage", "initialValues", "validationSchema"}
const signUpSchema = Yup.object({
        name: Yup.string().required("Please enter your username"), 
        email: Yup.string().required("Please enter a valid email"),
        password: Yup.string().required("Please enter a valid password")
    })
export default signUpSchema;