

const exercise = () => {
    let marks = 80
    let items = ['A','B','C','D','E','F','G']
    
    
    return (
        <div>
            <br /> 

            {/* Inline CSS */}
            <h1 style={{color: 'red'}}>Imran</h1>

            {/* Inline javascript */}
            <button onClick={() =>{alert('Hello')}}>Click</button>
            <br />

            {/* Ternary operator */}
            {marks>80 ? <h3>Brilliant Result</h3> : <h3>Average Result</h3>}
            <br />

            {/* IIF function */}
            {(()=>{
                if(marks>=80){
                    return <h3>ভালো ছাত্র</h3>
                }
                else{
                    return <h3>খারাপ ছাত্র</h3>
                }
            })()}
            <br />

            {/* Loop on an array */}
            {
                items.map((item)=>{
                    return(<li key = {item.toString()}>{item}</li>)
                })
            }

            
        </div>
        
    );
};

export default exercise;