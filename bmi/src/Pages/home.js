import React from 'react'

function doMath() {
  var num = 703;
  var numOne = document.getElementById('num1').value;
  var numTwo = document.getElementById('num2').value;
  var theProduct = (parseInt(numOne) * num ) / (parseInt(numTwo) * parseInt(numTwo));     console.log (theProduct);
  document.getElementById('ans').innerHTML = `Your Current BMI: <br/>${theProduct.toFixed(2)}`;
  }

const home = () => {
   
    
    
  return (
    <div className="Container-BMI">
        <div className="BMI">
          <h2>BMI Calculator</h2>
          <hr/>
            <form>
                <p>Weight (In Pounds)</p>
                <input id="num1" type="text" name="num1"/>
            <br/>
                <p>Height (In Inches)</p>
                <input id="num2" type="text" name="num2"/>
                <br></br>
              <input className='button' type="button" value="Calculate Your BMI!" onClick={doMath} /><p/>
                <h6><span id="ans"></span></h6>
            </form>
        </div>
        {/* <img src='https://www.fryemedctr.com/sites/frye/assets/uploads/BMI-Widget-Chart.png' alt=''/> */}
    </div>
  )
}

export default home