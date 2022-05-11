import React, { useRef } from "react";
import { render } from "react-dom";
import {  useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";


const Foodreport = (props) => {
    const history = useNavigate();
    const { _id,name, description, price, image } = props.food;
  
    

  class Foodreport extends React.Component {
  









  render() {
    return (
      <div>
        
        <table border="1px">
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
          
          
          
              <tr>
            <td>
              <img src={image} alt={name} />
           </td>
    
            <td>{name}</td>
            <td>{description}</td>
            <td>Rs {price}</td>
          </tr>
              
  
               
        </table> 
        
      </div>
    );
    }
  }


  const Example = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
     content: () => componentRef.current,
      });

    return (
     <div>
        <Foodreport ref={componentRef} />
        <button onClick={handlePrint}>Print this out!</button>
      </div>
      );
  };

  render(<Example />, document.querySelector("#root"));
};
export default Foodreport;
