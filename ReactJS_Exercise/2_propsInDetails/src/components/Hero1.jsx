

const Hero1 = (props) => {
    return (
        <div>
            <button onClick={props.childBtnClick}>Click</button>
            <button onClick={()=>{alert('Hi')}}>Submit</button>
        </div>
    );
};

export default Hero1;