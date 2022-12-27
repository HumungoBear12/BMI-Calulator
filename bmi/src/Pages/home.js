import React from 'react'

function doMath() {
  var num = 703;
  var numOne = document.getElementById('num1').value;
  var numTwo = document.getElementById('num2').value;
  var theProduct = (parseInt(numOne) * num ) / (parseInt(numTwo) * parseInt(numTwo));     console.log (theProduct);
  document.getElementById('ans').innerHTML = theProduct;
  }

const home = () => {
   
    
    
  return (
    <div className="Container-BMI">
        <div className="BMI">
          <h2>BMI Calculator</h2>
          <hr/>
            <form>
                Weight (In Pounds)<br/>
                <input id="num1" type="text" name="num1"/>
            <br/>
                Height (In Inches)<br/>
                <input id="num2" type="text" name="num2"/>
                <br></br>
              <input className='button' type="button" value="Calculate Your BMI!" onClick={doMath} /><p/>
                Your Current BMI: <span id="ans"></span>
            </form>
        </div>
        <img src='https://www.fryemedctr.com/sites/frye/assets/uploads/BMI-Widget-Chart.png' alt=''/>
    </div>
  )
}

export default home