import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";
import { useState } from "react";
import Exponent from "./components/Exponent";



function App () {
  const [count, setCount] = useState(0);
  const num = 0
  const exponent = 0
  const label = ""
  


  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter
      count={count}
      setCount={setCount}
      decrement={decrement}
      increment = {increment}
      />

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
      <Exponent 
        num = {count}
        exponent= {2}
        count={count}
        label = "n²"
        calc = {`${count} * ${count}`}
       />

      <Exponent 
        num = {count}
        exponent= {3}
        count={count}
        label = "n³"
        calc = {`${count} * ${count}* ${count}`}

       />

      <Exponent 
        num = {count}
        exponent= {4}
        count={count}
        label = "n⁴"
        calc = {`${count} * ${count}* ${count}* ${count}`}

       />
       <Exponent 
        num = {count}
        exponent= {5}
        count={count}
        label = "n⁵"
        calc = {`${count} * ${count}* ${count}* ${count}* ${count}`}

       />

      <Exponent 
        num = {count}
        exponent= {6}
        count={count}
        label = "n⁶"
        calc = {`${count} * ${count}* ${count}* ${count}* ${count}* ${count}`}

       />


        {/* <ExponentTwo 
        count={count}
        />
        <ExponentThree 
        count={count}
        />
        <ExponentFour 
        count={count}
        />
        <ExponentFive 
        count={count}
        />
        <ExponentSix 
        count={count}
        /> */}
      </div>
    </div>
  );
}

export default App;
