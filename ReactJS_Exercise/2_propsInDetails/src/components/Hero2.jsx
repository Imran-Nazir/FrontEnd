const Hero2 = () => {
    const PostFormData = (event)=>{
        event.preventDefault();
        alert('Form submitted');
    }
    return (
        <div>
            <form onSubmit={PostFormData} action="#">
                <input type="text" placeholder="name" />
                <button type="submit" >Submit</button>
            </form>
        </div>
    );
};

export default Hero2;