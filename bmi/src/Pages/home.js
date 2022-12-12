import React from 'react'

function BMI(){
    var wieght = document.getElementsByClassName("weight").value;
    var height = document.getElementsByClassName("height").value;
    let awnser = wieght * height;
    document.write(awnser)
    
}

const home = () => {
   
    
    
  return (
    <div>
        <h2>BMI Calculator</h2>

        <div>
            <input className="weight" type="text" placeholder="weight"></input>
            <input className="height" type="text" placeholder="height"></input>
            <br/>
            <button onClick={BMI} >Submit</button>
            {/* <input  className="solution" type="button" placeholder="solution"></input> */}
        </div>
    </div>
  )
}

export default home