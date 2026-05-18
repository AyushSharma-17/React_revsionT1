function AddUser({ setUser }) {
    return (
        <div>
            <h3>
                user Add
                <input typr="text" onChange={(e) => setUser(e.target.value)} placeholder="enter user name" />
            </h3>
        </div>
    );
}
export default AddUser;