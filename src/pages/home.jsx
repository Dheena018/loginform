import { Link } from "react-router-dom";
import Build from "../assests/build.png"


const Home = ()=>{
    return(
        <div className="flex flex-row">
       <div>
        <img src={Build} alt="cool" className="w-[18rem] h-[18rem] mx-[12rem] my-[12rem] animate-pulse rounded" />
       </div>
       <Link to={"/login"}><div className="mx-[9rem] my-[18rem] text-3xl text-cyan-300 hover:text-cyan-900  italic  cursor-pointer hover:font-bold hover:shadow-xl">
        LET'S START
      </div></Link>
       </div>

    )
}


export default Home;