function HrHome() {
    const currentUser = JSON.parse(localStorage.getItem("currentuser"));
    
    return (
        <div>
            <h1>Welcome {currentUser.name}</h1>
            
        </div>)

}
export default HrHome