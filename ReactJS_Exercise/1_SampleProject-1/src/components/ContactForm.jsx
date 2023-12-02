
const ContactForm = () => {
    const getTimes = () =>{
        return new Date().getTime()
    }
    return (
        <div>
            {getTimes()}<br />
            <input type="text" />
            <button>Submit</button>
            <h1>Q: What is the year now?</h1>
            <h3>A: It is {new Date().getFullYear()} </h3>
            
        </div>
    );
};

export default ContactForm;