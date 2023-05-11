// import { motion } from "framer-motion";
import {AiOutlineClose} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import {BsGoogle} from "react-icons/bs"
import {FaFacebookF} from "react-icons/fa"
import { Link } from "react-router-dom";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";



const Login = ()=>{


  const formik = useFormik({
    initialValues:{
      email:"",
      password:""
    },
validationSchema:Yup.object({
  email:Yup.string().email("Invalid email Address").required("Email is required"),
  password:Yup.string().max(10, "Please correct password").required("password Didn't Match")
}),
onSubmit:(values)=>{
  console.log(values);
}

  });

  console.log(formik);
    return(
        <div className="w-full h-screen shadow-md flex items-center justify-center bg-cyan-500">
      <div
        className="w-80 bg-white rounded-lg"
      >
        <div className="flex items-center justify-between p-2">
          <span className="text-lg">Login with</span>
          <p className="cursor-progress hover:shadow:md">
            <AiOutlineClose />
          </p>
        </div>
        <div className="p-2">
          <ul className="flex justify-center items-center gap-[2rem] rounded-full ">
            <li className="p-2 text-5xl bg-grey-800 text-black rounded-full">
              <a href="Github">
                <AiFillGithub />
              </a>
            </li>
            <li className=" p-3 text-3xl bg-red-600 text-white rounded-full">
              <a href="Google">
                <BsGoogle />
              </a>
            </li>
            <li className="p-3 text-3xl bg-blue-800 text-white rounded-full">
              <a href="Facebook">
                <FaFacebookF />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex w-100 flex-row items-center p-2">
          <hr className="w-3/6" />
          <p className="text-xl p-4">or</p>
          <hr className="w-3/6" />
        </div>
        <div className="w-full">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-control">
              <input type="email"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="p-3 px-9 text-xl border-2"
              />
            </div>
           {formik.errors.email && <span className="text-red-500">Email is required</span>}
           <div className="form-control">
              <input type="password"
              name="password"
              placeholder="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              className="p-3 px-9 text-xl border-2"
              />
            </div>
            {formik.errors.password && <span className="text-red-500">password is required</span>}
           

            <div className="p-2 flex items-center justify-center ">
              <button
                type="submit"
                className="w-full p-3 text-white bg-sky-400 hover:bg-sky-500 rounded-sm"
              >
                LOGIN
              </button>
            </div>
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
<BsGoogle />;
<AiFillGithub />;

export default Login;