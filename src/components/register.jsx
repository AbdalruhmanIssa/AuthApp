import axios from 'axios';
import { useFormik } from 'formik'


export default function Register() {
  const formik=useFormik({
    initialValues:{
      userName:'',
      email:'',
      password:''
    },
    onSubmit:RegisterUser, 
    validate:values=>{
      let errors= {};
      if(values.userName.length<=5){
        errors.userName="username is requird";
      }
      if(values.email.length<=10){
        errors.email="email is requird";
      }
      if(values.password.length<=7){
        errors.password="password is requird";
      }
      return errors;
          }
  });
 async function RegisterUser(){
 const {data}=  await axios.post(`https://ecommerce-node4.onrender.com/auth/signup`,formik.values);
 console.log(data);
  }

  return (
    <div>
  <h1>Register</h1>
  <form onSubmit={formik.handleSubmit}>
    <div className="form-floating mb-3">
      <input type="text" className="form-control" onChange={formik.handleChange} name='userName' value={formik.userName}
         onBlur={formik.handleBlur}
      id="name" placeholder="" />
      <label  htmlFor="name">UserName</label>
      {formik.touched.userName && formik.errors.userName?  <div className='alert alert-danger'>   {formik.errors.userName}</div> :null} 

    </div>
    <div className="form-floating mb-3">
      <input type="email" className="form-control" onChange={formik.handleChange} name='email' value={formik.email}
         onBlur={formik.handleBlur}
      id="email" placeholder="" />
      <label  htmlFor="email">Email</label>.
      {formik.touched.email && formik.errors.email?  <div className='alert alert-danger'>   {formik.errors.email}</div> :null} 
    </div>
    <div className="form-floating mb-3">
      <input type="password" className="form-control" onChange={formik.handleChange} name='password' value={formik.password}
         onBlur={formik.handleBlur}
      id="pass" placeholder="" />
      <label  htmlFor="pass">Password</label>
      {formik.touched.password && formik.errors.password?  <div className='alert alert-danger'>   {formik.errors.password}</div> :null} 
    </div>
    <button type='submit' className='btn btn-outline-info'>Register</button>
  </form>
</div>

  )
}
