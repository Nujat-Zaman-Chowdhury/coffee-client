import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const loadedCoffee = useLoaderData()
    console.log(loadedCoffee);
    const {_id,name,quantity,supplier,taste,photo,category,details} = loadedCoffee;

    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = {name,quantity,supplier,taste,category,details,photo}
        
       
        fetch(`http://localhost:5000/coffees/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: "Success!",
                    text: "Coffee Updated Successfully!",
                    icon: "success"
                  });
            }
        })
    }
    return (
        <div>
            <h2>Update data of {loadedCoffee.name}</h2>
            <div className="bg-[#F4F3F0] p-20">
      <h2 className="text-3xl font-extrabold">Update a Coffee : {name}</h2>
      <form onSubmit={handleUpdate}>
        {/* from row */}
        <div className="md:flex  mb-6">
        <div className="form-control md:w-1/2">
            <label className="label">
                <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
                <input type="text" name="name" id="" 
                defaultValue={name}
                className="input input-bordered w-full" placeholder="Coffee Name"/>
            </label>
        </div>
        <div className="form-control md:w-1/2 ml-4">
            <label className="label">
                <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
                <input type="text" name="quantity" id="" className="input input-bordered w-full"
                defaultValue={quantity}
                placeholder="Available Quantity"/>
            </label>
        </div>
        </div>
        {/* from row supplier and taste */}
        <div className="md:flex ">
        <div className="form-control md:w-1/2">
            <label className="label">
                <span className="label-text">Supplier Name</span>
            </label>
            <label className="input-group">
                <input type="text" name="supplier" id="" className="input input-bordered w-full" 
                defaultValue={supplier}
                placeholder="Supplier Name"/>
            </label>
        </div>
        <div className="form-control md:w-1/2 ml-4">
            <label className="label">
                <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
                <input type="text" name="taste" id=""
                defaultValue={taste}
                className="input input-bordered w-full" placeholder="Taste"/>
            </label>
        </div>
        </div>
        {/* from row */}
        <div className="md:flex  mb-6">
        <div className="form-control md:w-1/2">
            <label className="label">
                <span className="label-text">Category</span>
            </label>
            <label className="input-group">
                <input type="text" name="category" id="" className="input input-bordered w-full" 
                defaultValue={category}
                placeholder="Category"/>
            </label>
        </div>
        <div className="form-control md:w-1/2 ml-4">
            <label className="label">
                <span className="label-text">Details</span>
            </label>
            <label className="input-group">
                <input type="text" name="details" id="" className="input input-bordered w-full"
                defaultValue={details}
                placeholder="Details"/>
            </label>
        </div>
        </div>
        {/*photo url */}
        <div className=" mb-6">
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
                <input type="text" name="photo" id="" 
                defaultValue={photo}
                className="input input-bordered w-full" placeholder="Photo URL"/>
            </label>
        </div>
        </div>
        
        <input type="submit" value="Update Coffee" className="btn btn-block bg-[#D2B48C] border border-[#331A15]"/>
      </form>
    </div>
        </div>
    );
};

export default UpdateCoffee;