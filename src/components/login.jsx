import axios from 'axios';
import { useFormik } from 'formik'


export default function Login() {
  const formik=useFormik({
    initialValues:{
      email:'',
      password:''
    },
    onSubmit:LoginUser,
    validate:values=>{
let errors= {};
if(values.email.length<=10){
  errors.email="email is requird";
}
if(values.password.length<=7){
  errors.password="password is requird";
}
return errors;
    }
  });

 async function LoginUser(){
 const {data}=  await axios.post(`https://ecommerce-node4.onrender.com/auth/signin`,formik.values);
 console.log(data);
  }

  return (
    <div>
  <h1>Login</h1>
  <form onSubmit={formik.handleSubmit}>
    <div className="form-floating mb-3">
      <input type="email" className="form-control"
       onChange={formik.handleChange}
        name='email'
         value={formik.email} 
         onBlur={formik.handleBlur}
         id="email" 
         placeholder="" />
      <label  htmlFor="email">Email</label>
      {formik.touched.email && formik.errors.email?  <div className='alert alert-danger'>   {formik.errors.email}</div> :null} 
    </div>
    <div className="form-floating mb-3">
      <input type="password" className="form-control" onChange={formik.handleChange} name='password' value={formik.password} 
         onBlur={formik.handleBlur}
      id="pass" placeholder="" />
      <label  htmlFor="pass">Password</label>
      {formik.touched.password && formik.errors.password?  <div className='alert alert-danger'>   {formik.errors.password}</div> :null} 
    </div>
    <button type='submit' className='btn btn-outline-info'>Login</button>
  </form>
</div>

  )
}
