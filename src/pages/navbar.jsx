import React from 'react';
import { Link } from 'react-router-dom';
import user1 from "../../src/assests/user1.jpg"
import user2 from "../../src/assests/userr2.jpg"
import  man from "../../src/assests/man.jpg"
import number from "../../src/assests/number.jpg"
import admin from "../../src/assests/admin.avif"
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";



const data = [
  { name: "First Project", users: 12 },
  { name: "Second Project", users: 2 },
  { name: "Iintermediate Project", users: 6 },
  { name: "Complate Project", users: 10 },
];
const Navbar = () => {

  const {currentUser} = useContext(AuthContext);
  return (
    <>
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
                         <img src={user1} alt='user1' className='rounded w-[3rem] h-[3rem]' />
    
            </Link>
            <div className='flex flex-col mx-3 font-serif font-bold '>
              <div>
                <p>Dheena</p>
              </div>
              <div>
                <p>dheena@gmail.com</p>
              </div>

            </div>
          </div>
       
          <div className='flex  my-5  font-serif font-bold  '>
            <div className='mx-[3rem]'>
            <Link to="/signup" className='hover:text-green-600'>Profile</Link>
            </div>
            <div>
            <Link to="/login" className='hover:text-green-600' >Logout</Link>
            </div>
          </div>
        </div>
      </div>
      
      </nav>
      <div>
      <p className="text-black text-7xl mx-[12rem] my-[3rem] shadow-xl">Front-End Developer</p>
      </div>
     <div className="flex flex-row">
      <div className='mx-[8rem] flex my-[2rem]'>
      <div className="w-[30rem]">
        <p className="font-extrabold hover:cursor-pointer hover:text-blue-400">
        BIOGRAPHY
        </p>
        <p>
        Before we can answer this question we need to define passion. Passion, as this executive exemplifies, is energy and engagement for people and the work they do. Passion as an emotion is a valuable trait when channeled appropriately. Focused on helping others understand and doing good work is positive passion. Losing your cool when things go wrong is negative passion. The challenge is to channel the positive to ameliorate or eliminate the negative.
        </p>
        <p>Passion becomes the catalyst that galvanizes individuals to commit to their own development as well as to deliver products and services that customers need. Passion too develops when employees commit – on company time – to give back to their community as volunteers.</p>
         <p>
         Passion is a powerful driver when applied to purpose. It becomes the personal commitment to making a positive difference to achieve sustainable results.
         </p>
      
      </div>
      <div>
        <img src={man} alt="man" className="my-[5rem] mx-[5rem]  cursor-pointer hover:shadow-2xl h-[15rem] w-[18rem]" />
       
      </div>
      <div>
        <img src={number} alt="number" className="mx-3 w-[20rem] h-[25rem]"  />
      </div>
      </div>
      </div>
      {/* <nav className="bg-white shadow-lg">
      <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
                         <img src={user2} alt='user1' className='rounded w-[3rem] h-[3rem]' />
            
            </Link>
            <div className='flex flex-col mx-3 font-serif font-bold animate-pulse'>
              <div>
                <p>Akash Srma</p>
              </div>
              <div>
                <p>akashsrma@gmail.com</p>
              </div>

            </div>
          </div>
        
          <div className='flex flex-row gap-[3rem] my-5 font-serif font-bold animate-pulse '>
            <div>
            <Link to="/signup" className='hover:text-green-600'>Profile</Link>
            </div>
            <div>
            <Link to="/login" className='hover:text-green-600' >Logout</Link>
            </div>
          </div>
        </div>
      </div>
      
      </nav>
       <div className='flex mx-[3rem] my-9'>
       <p className='font-extrabold animate-pulse text-lg text-green-950'>Employee Details:</p>
       </div>
  <table className='border-2 text-center w-[50rem] mx-[12rem]'>
  <tr className='bg-green-600 '>
      <th >ID</th>
      <th>Name</th>
      <th>Department</th>
    </tr>
    <tr className='bg-green-200'>
      <th >S.No</th>
      <th>AKash Srma</th>
      <th>Front-end Developer</th>
    </tr>
    
  </table>

  <nav className="bg-white shadow-lg">
      <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
                         <img src={admin} alt='user1' className='rounded w-[3rem] h-[3rem]' />
         
            </Link>
            <div className='flex flex-col mx-3 font-serif font-bold animate-pulse'>
              <div>
                <p>Karthickeyan</p>
              </div>
              <div>
                <p>karthickeyan@gmail.com</p>
              </div>

            </div>
          </div>
       
          <div className='flex flex-row gap-[3rem] my-5 font-serif font-bold animate-pulse '>
            <div>
            <Link to="/signup" className='hover:text-green-600'>Profile</Link>
            </div>
            <div>
            <Link to="/login" className='hover:text-green-600' >Logout</Link>
            </div>
          </div>
        </div>
      </div>
      
      </nav>

      <div className="flex flex-row gap-[9rem] my-[4rem]">
        <PieChart width={500} height={500} >
          <Pie
          
            dataKey="users"
            isAnimationActive={false}
            data={data}
            cx={350}
            cy={200}
            outerRadius={100}
            fill="#37FB72"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart className='my-[4rem]'
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="users"    fill="#37FB72" background={{ fill: "#eee" }} />
        </BarChart>
      </div>

      <table className=' border-2 text-center w-[60rem] mx-[15rem]'> 
        <tr className='bg-green-500'>
        <th>Saturday/Sunday</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>wensday</th>
          <th>Thursday</th>
          <th>Friday</th>
       

        </tr>
        <tr className='bg-green-300'>
          <th>Extra Work</th>
          <th>9-6</th>
          <th>9.30-6.00</th>
          <th>9-6</th>
          <th>9-6</th>
          <th>9-6</th>

        </tr>
      </table>
        
<div className="  bg-cyan-400 w-[30rem] mx-[25rem] my-[6rem] shadow-cyan-900">
    <div className="flex flex-col gap-12 mx-[1rem]">
     <div className="flex ">
      <label for="Name" className="flex my-3 mx-3 font-semibold">Name:
       <input type="text" id="name" placeholder="Enter your name " class="name" className="mx-[6rem]  my-1  font-normal" />
              </label>
    </div>
    <div>
   <label for="number"  className="flex my-3 mx-3 font-semibold">Age: 

<input type="number" id="age" placeholder="number" class="age" className="mx-[7rem]  my-1  font-normal"  />

</label>
   </div>
    <div className="flex">
            <label htmlFor="Country" className="flex my-3 mx-2 font-semibold">Country:</label>
            <select name="Country" className="w-[11.5rem] h-[1.6rem] my-2 mx-[4.5rem]">
                <option value="	"></option>

                <option value="Argentina">Argentina</option>
                <option value="	Albania">Albania</option>
                <option value="	Australia">Australia</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="	China">China</option>
                <option value="Denmark">Denmark</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
                <option value="USA">USA</option>

            </select>
   </div> 
  
  
   <div className="flex">
   <p className="flex my-3 mx-2 font-semibold">Work Process:</p> 
    
    <select name="" id="" class="select"  className="w-[12rem] h-[1.7rem] my-3 mx-8">

      <option value=""> </option>
      <option value="job">Full-Time</option>
      <option value="learner">Part Time</option>
      <option value="PreferNo">Prefer not to say</option>

     </select>
   </div>

   <div className="flex">
   <p  className="flex my-3 mx-2 font-semibold"> your current Role:</p>

<select name="role" id="dropdown" class="role" className="w-[12rem] h-[1.7rem] my-3 mx-3"> 

   <option value="">Select current role</option>
   <option value="student">Front-End Developer</option>
   <option value="job">Back-End Developer</option>
   <option value="learner">Full Stack Web Developer</option>
   <option value="PreferNo">Testing </option>
   <option value="other">Other</option>

</select>
   </div>
   </div>
   
   <div className="mx-[1rem] my-[2rem] flex">
    <p className="flex my-3 mx-2 font-semibold">Work Module:</p>
    <div className="flex flex-col mx-10">
     <div className="flex">
 <label for=""/>
 
 <input type="radio" value="Maybe"  name="recommend" />on-Site
 
 </div>
 
 
 <div className="flex">
 <label for="" />
 
 <input type="radio" value="Not surey"   name="recommend" />Work From-Home
 
 </div>
 
 </div>
    </div>
<div>
    <button className="border-2 w-[24rem] my-5 font-serif font-bold text-white hover:text-cyan-900 hover:border-emerald-400 ">S u b m i t</button>
    </div>
 </div> */}



     </>
  );
};

export default Navbar;