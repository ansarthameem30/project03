import { useState } from "react"
import './Color.css';


const Colors = () => {

    const [colorpicker,Setcolorpicker] = useState('');

    const handle =(event)=>
    {
            Setcolorpicker(event.target.value);
    }
  return (
    <div className="container">
        <div>
            <h1 className="heading">Color Picker</h1></div>
        <span>Select the color here: 
        <input type="color" onChange={handle} value={colorpicker}/>
        </span>

           <span className="text1">
            Selected color:
        <div className="box" style={{
            height:'50px',
            width:'50px',
            backgroundColor:colorpicker,
            border: '1px solid black',
            
        }}></div> </span>

        <div className="text" style={{color:colorpicker}}>
            Text color
        </div>
        
        <div className="input">
            The color input is: {colorpicker};

        </div>
    
    
    </div>
  )
}

export default Colors