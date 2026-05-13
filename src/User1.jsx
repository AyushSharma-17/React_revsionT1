function User1({ displayName, name, getUser }) {

    return (
        <div>
            <button onClick={() => displayName(name)}>display name</button>
            <button onClick={() => getUser()}>get user</button>
        </div>
    )
}
export default User1;