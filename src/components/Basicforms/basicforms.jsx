// import { useState } from "react"
// import { useNavigate } from "react-router-dom";
// import { RegisterApi } from "../services/Api";


// const BasicForms =()=>{

//     const Navigate = useNavigate()

//     const initialStateErrors = {
//         name:{required:false},
//         email:{required:false},
//         password:{required:false}
//     };

//            const [errors,setErrors]= useState(initialStateErrors);

//             const handleSubmit = (event)=>{
//                 event.preventDefault();
//                 let errors = initialStateErrors;
//                 let hasError = false;

//                 if(input.name === ""){
//                     errors.name.required =true;
//                     hasError=true;
//                 }
//                 if(input.email === ""){
//                     errors.email.required =true;
//                     hasError=true;
//                 }
//                 if(input.password ===""){
//                     errors.password.required =true;
//                     hasError=true;
//                 }
//                 if(!hasError){
//                     RegisterApi(input).then((response)=>{
//                         console.log(response);
//                     }).catch((err)=>{
//                         console.log(err);
//                     })
//                 }

//                 setErrors(errors);

//                 Navigate('/login')
//             }

//             const [input,setInput]=useState({
//                 name:"",
//                 email:"",
//                 password:""
//             })

//             const handleInput = (event)=>{
//                 setInput({...input , [event.target.name]:[event.target.value]})
//             }


//     return(
//         <div className=" bg-cyan-500 flex justify-center items-center  flex-col">
//             <div className="bg-white w-96 p-2">
//                 <h1 className=" text-2xl font-bold text-blue-500">Register Page</h1>
//             <hr  className="w-20 divide-indigo-500 "/>
//             <div className="p-6">
//                 <form onSubmit={handleSubmit}>
//                     <div>
//                         <label htmlFor="label" className="text-gray-700 font-bold">Name</label>
//                         <input type="text" placeholder="Enter Your Name"
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         onChange={handleInput}
//                         name="name"
//                         />
                        
//                         {errors.name.required?<p className="text-red-500">Name is Required</p>:null}
//                     </div>
//                     <div>
//                         <label htmlFor="Email" className="text-gray-700 font-bold">Email</label>
//                         <input type="email" name="email" placeholder="Example@gmail.com"
//                         onChange={handleInput} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
//                         {errors.email.required?<p className="text-red-500">Email is Required</p>:null}


//                     </div>
//                     <div>
//                         <label htmlFor="password"className="text-gray-700 font-bold" >Password</label>
//                         <input type="password" name="password" placeholder="Enter your Password"
//                         onChange={handleInput}
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
//                         {errors.password.required?<p className="text-red-500">Password is Required</p>:null}

                    
//                     </div>
//                     <div>
//                         <button
//                          type="submit"
//                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-3 rounded focus:outline-none focus:shadow-outline">
//                         Register</button>
//                     </div>
//                 </form>
//             </div>
//             </div>
//         </div>
//     )
// }

// export default BasicForms;