
const Hero = (props) => {
    return (
        <div>
            <h1>{props.title}<br/>{props.dis}</h1>
            <ul>
                <li>Name: {props.item['name']}</li>
                <li>Age: {props.item['age']}</li>
                <li>Designation: {props.item['designation']}</li>
            </ul>
        </div>
    );
};

export default Hero;