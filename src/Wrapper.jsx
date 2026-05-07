function Wrapper({ children, color }) {
    return (
        <>
            <div style={{ color: color || "red", border: "5px solid green", margin: "10px" }}>
                {children}
            </div>

        </>
    )
}
export default Wrapper;