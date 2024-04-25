

const UpdateUser = () => {
    const handleUpdateUser = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
    }
    return (
        <div>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" id="" />
                
            </form>
        </div>
    );
};

export default UpdateUser;