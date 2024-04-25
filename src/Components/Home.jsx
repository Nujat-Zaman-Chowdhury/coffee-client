import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";


const Home = () => {
    const loadedCoffees = useLoaderData();
    const [coffees,setCoffees] = useState(loadedCoffees)
    return (
        <div>
        <div className="flex justify-evenly items-center mt-10">
            <Link className="btn btn-outline" to="/">Home</Link>
            <Link className="btn btn-outline" to="/addCoffee">Add Coffee</Link>
            <Link className="btn btn-outline" to="/login">Login</Link>
            <Link className="btn btn-outline" to="/signup">Sign Up</Link>
            <Link className="btn btn-outline" to="/users">Users</Link>
        </div>
        <div>
            <h2>Coffee Collections</h2>
            <div className="grid grid-cols-2 gap-6">
                {
                    coffees.map(coffee=><CoffeeCard coffee={coffee} key={coffee._id} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
                }
            </div>
        </div>
        </div>
    );
};

export default Home;