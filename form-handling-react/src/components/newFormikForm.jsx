import {useFormik} from 'formik' 
import signUpSchema from './formikForm';
function NewFormikForm(){  
    { "Formik", "Form", "Field", "ErrorMessage", "initialValues"}
    const initialValues = {
        userName: '',
         email: '', 
        password: ''
    }
const {values, handleChange, handleSubmit, errors} = useFormik({
    initialValues,  
    validationSchema: signUpSchema,
    onSubmit: (values, actions) => {
        console.log(values); 
        actions.resetForm()
    }, 

})  
console.log(errors)
return(
    <form onSubmit={handleSubmit}> 
    <label>UserName</label> 
    <input type="text"  name="name"value={values.name} onChange={handleChange} /> 
    <div>
        {errors.name ? <p>{errors.name}</p> : ""};
    </div>
    
    <label>Email</label> 
    <input type="email" name="email" value={values.email} onChange={handleChange} /> 
    <div>
        {errors.email ? <p>{errors.email}</p> : ""};
    </div> 
    
    <label>Password</label> 
    <input type="text" name="password" value={values.password} onChange={handleChange} /> 
    <div>
        {errors.password ? <p>{errors.password}</p> : ""};
    </div>  
    <button type="submit">SUBMIT FORM</button>


    </form> 
) }

export default NewFormikForm;
