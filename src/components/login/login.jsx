// import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { AuthContext } from "../../context/AuthContext";
import Swal from 'sweetalert2'

// import { Formik, useFormik } from "formik";
// import * as Yup from "yup";



const Login = ()=>{


  const [errors,setErrors] = useState(false);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');


  const navigate = useNavigate();

  const {dispatch} = useContext(AuthContext);

  const handleSubmit = (e)=>{
    e.preventDefault();
    
    signInWithEmailAndPassword (auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    dispatch({type:"Login",payload:user})
    console.log(user);
  })
  .catch((error) => {
    setErrors(true)
  });
  if(email === "dheena@gmail.com"){
    navigate("/NavbarOne")
  }
  if(email === "akashsrma@gmail.com"){
    navigate("/navbartwo")
  }
  if(email === "karthickeyan@gmail.com"){
    navigate("navbarthree")
  }
  };

  // const Users =(
  //       {
  //         "email":"dheena@gmail.com",
  //       "password":"Dheena@123"
  //     },
  //     {
  //       "email":"akash@gmail.com",
  //       "password":"Akash@123",
  //     }
  // )
//   const formik = useFormik({
//     initialValues:{
//       email:"",
//       password:""
//     },
// validationSchema:Yup.object({
//   email:Yup.string().email("Invalid email Address").required("Email is required"),
//   password:Yup.string().max(10, "Please correct password").required("password Didn't Match")
// }),
// onSubmit:(values)=>{
//   console.log(values);

//   if(Users.email === formik.values.email && Users.password===formik.values.password){
//     console.log("log in success");
//   }else{
//     console.log('user invalid');
//   }
// }

//   });

//   console.log(formik);
    return (
      <div className="w-full h-screen shadow-md flex items-center justify-center">
        <div className="w-80 bg-white rounded-lg shadow-2xl">
          <div>
            <h2 className="text-3xl font-bold">Login</h2>
          </div>
          <div className="w-full my-6">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-3">
                <div className="form-control">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    // value={formik.values.email}
                    // onChange={formik.handleChange}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-3 px-9 text-xl border-2"
                  />
                </div>
                {/* <span className="text-red-500">Email is required</span> */}
                <div className="form-control">
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    // value={formik.values.password}
                    // onChange={formik.handleChange}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-3 px-9 text-xl border-2"
                  />
                </div>
              </div>
              {/* {formik.errors.password && <span className="text-red-500">password is required</span>} */}

              <div className="p-2 flex items-center justify-center ">
                <button
                  type="submit"
                  className="w-full p-3 text-white bg-sky-400 hover:bg-sky-500 rounded-sm"
                >
                  LOGIN
                </button>
              </div>
              {errors && (
                <span className="text-lg font-bold text-red-500">
                  Wrong email or password !
                </span>
              )}

              <div className="flex border-2 border-inherit p-5 m-3 px-2 border-sm">
                <input type="checkbox" className="w-12 border-neutral-800" />
                <p className="flex px-2">I'am not a robot</p>
              </div>
              <div className="flex items-center justify-center flex-col p-2">
                <p>
                  <span className="opacity-40"> Looking to </span>
                  <Link to={"/signup"} className="text-blue-600">
                    create an account ?
                  </Link>
                </p>
                <p>
                  <a href="1" className="text-blue-600">
                    Forget Password ?
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};


export default Login;