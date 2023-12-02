

const ConditionalRendering = () => {
    let status = true
    let btnLogOut = <button>Logout</button>
    let btnLogIn = <button>Login</button>
    return(
        <div>
            <h1>Login status</h1>
            {status===true ? (btnLogOut) : (btnLogIn)}
            
        </div>
    ) ;
};

export default ConditionalRendering;