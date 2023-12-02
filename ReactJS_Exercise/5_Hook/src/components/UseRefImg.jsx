import React, {useRef} from 'react';
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';

const UseRefImg = () => {
    let myImg = useRef()
    const change = ()=>{
        myImg.current.src = img2
        myImg.current.setAttribute('height', '500px');
        myImg.current.setAttribute('width', '500px');
    }
    return (
        <div >
            <h1>useRef() image</h1>
            <img ref={myImg} src={img1} alt="Flower" width="500px" height="500px"/><br />
            <button onClick={change}>Click/Img</button>

        </div>
    );
};

export default UseRefImg;