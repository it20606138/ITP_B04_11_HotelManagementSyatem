import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router";
 
const EditSalaryCalculate = () => {
    const { id } = useParams();
  
    const [CalculateDetails, setCalculateDetails] = useState([]);
  
    const [emp_id, setEmp_Id] = useState("");
    const [noOfworkingDays, setNoOfworkingDays] = useState("");
    const [totalOtDays, setTotalOtDays] = useState("");
    const [totalLeaveDays, setTotalLeaveDays] = useState("");
    const [FixedSalary, setFixedSalary] = useState("");
    const [AdditionalPayment, setAdditionalPayment] = useState("");
    const [bonus, setBonus] = useState("");
    const [total, setTotalPayment] = useState("");
    function UpdateData(event) {
      event.preventDefault();
  
      const newApplication = {
        emp_id,
        noOfworkingDays,
        totalOtDays,
        totalLeaveDays,
        FixedSalary,
        AdditionalPayment,
        bonus,
        total
      };
  
      console.log(newApplication);
  
      axios
        .put("http://localhost:5000/employeeSalarys/update/" + id, newApplication)
        .then(() => {
          console.log(newApplication);
          alert("successfully Updated");

          
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
    // Get Payment Details To Edit Form
  
    useEffect(() => {
      function getCalculateDetails() {
        axios
          .get("http://localhost:5000/employeeSalarys/get/" + id)
          .then((res) => {
            setCalculateDetails(res.data);
            setEmp_Id(res.data.emp_Id);
            setNoOfworkingDays(res.data.noOfworkingDays);
            setTotalOtDays(res.data.toralOtDays);
            setTotalLeaveDays(res.data.totalLeaveDays);
            setFixedSalary(res.data.FixedPayment);
            setAdditionalPayment(res.data.AdditionalPayment);
            setBonus(res.data.bonus);
            setTotalPayment(res.data.total);

            
          })

        .catch((err) => {
            console.log(err);
          });
      }
  
      getCalculateDetails();
    }, []);


    //Calculate the Employee Salary
    const Calculation = (e) =>{
      e.preventDefault();

      let fixed =document.querySelector('#FixedSalary').value
      let Ot =document.querySelector('#totalOtDays').value
      let leave =document.querySelector('#totalLeaveDays').value

  
      let additional;
      let bonus;
      let total;

      
      if (parseInt(Ot) >= 20){
        additional = 5000;
    }

    else if (parseInt(Ot)  >= 15){
        additional = 3000;
    }
    else if (parseInt(Ot)  >= 5){
        additional = 1000;
    }

    else{
        additional = 0;
    }

    if (parseInt(leave)  <= 20){
        bonus = 2500;
    }
    else{
        bonus = 0;
    }

      total = (parseInt(fixed) + additional + bonus);

      setAdditionalPayment(additional);
      setBonus(bonus);
      setTotalPayment(total);
}

  /* clear function */
  const Clear=(e)=>{

    e.preventDefault();
    document.querySelector('form').reset();
}

return (

      <div style ={{paddingLeft : '100px', paddingRight: '100px', paddingBottom : '0px'}} >

        <div>
            <img 
                src ="https://thumbs.dreamstime.com/b/net-income-calculating-abstract-concept-vector-illustration-salary-calculation-formula-take-home-pay-corporate-accounting-earnings-198849587.jpg" 
                style = {{
                    alignItems:"left",
                    width: '230px',
                    height : '110px',
                    paddingTop: '20px',
                    paddingLeft : '50px',
                    paddingBottom : '0px'
                
                }}
                alt = ""
                className = "logo"
                
            />

            <h1 style={{textAlign:'center', paddingBottom: '15px', paddingTop: '0px'}}>Edit Employee Salary Calculate Details</h1>
        </div>

        {/*Add Employee Salary form*/}

        <form >
            <div class="container"  >
                <div class="row">
                        <div class="col" style ={{backgroundColor: 'black', paddingBottom:'15px', marginRight: '25px'}}>

                            <div className="form-group" style = {{marginTop : '25px'}} >
                                <label for="emp_id" style = {{color:'white'}}> Employee ID </label>

                                <input 
                                    type="text" 
                                    
                                    className="form-control" 
                                    id="emp_id" 
                                    name= "emp_id"
                                    defaultValue = {CalculateDetails.emp_id}
                                    style = {{marginTop : '10px'} } 
                                    onChange={(event)=>{
                                    setEmp_Id(event.target.value); 
                                }}
                                />

                            </div>

                            <div className="form-group">
                                <label for="noOfworkingDays" style = {{color:'white'}}> Number of Working Days </label>

                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="noOfworkingDays" 
                                    defaultValue = {CalculateDetails.noOfworkingDays}  
                                    style = {{marginTop : '10px'}}  
                                    onChange={(event)=>{
                                    setNoOfworkingDays(event.target.value); 
                                }} />

                            </div>

                            <div className="form-group">
                                <label for="totalOtDays" style = {{color:'white'}}> Total OT Days </label>

                                <input 
                                  type="text" 
                                  className="form-control" 
                                  id="totalOtDays" 
                                  defaultValue = {CalculateDetails.totalTrips}
                                  style = {{marginTop : '10px'}} 
                                  onChange={(e)=>{
                                    setTotalOtDays(e.target.value);
                                }} />

                            </div>

                            <div className="form-group">
                                <label for="totalLeaveDays" style = {{color:'white'}}> Total Leave Days </label>

                                <input 
                                  type="text" 
                                  className="form-control" 
                                  id="totalLeaveDays"
                                  defaultValue = {CalculateDetails.totalKm} 
                                  style = {{marginTop : '10px'}} 
                                  onChange={(e)=>{
                                    setTotalLeaveDays(e.target.value);
                                }} />

                            </div>

                            <div className="form-group">
                                <label for="FixedSalary" style = {{color:'white'}}> Fixed Salary </label>

                                <input 
                                  type="text" 
                                  className="form-control" 
                                  id="FixedSalary" 
                                  defaultValue = {CalculateDetails.FixedPayment} 
                                  style = {{marginTop : '10px'}} 
                                  onChange={(e)=>{
                                    setFixedSalary(e.target.value);
                                }}/>

                            </div>


                            <Button type="button" className="btn btn-primary" onClick = {Calculation} 
                                style = {{marginTop: '10px', backgroundColor: 'blue'}}
                            >Calculate</Button>

                            <Button type="button" className="btn btn-primary" onClick = {Clear} 
                                style = {{marginTop: '10px',marginLeft :'25px' ,backgroundColor: 'green', borderColor: 'green'}}
                            >Clear</Button>
                        </div>

                      {/*Calculated Employee Salary form*/}
                        
                        <div class="col" style = {{backgroundColor: 'black', marginLeft :'25px'}} >
                            <div className="form-group" style ={{marginTop : '25px'}}>
                                <label for="AdditionalPayment" style = {{color:'white'}}> Additional Payments </label>

                                <input 
                                  type="text" 
                                  className="form-control" 
                                  id="AdditionalPayment" 
                                  value = {AdditionalPayment} readOnly
                                style = {{marginTop : '10px'}}   
                                  />
                                </div>

                            <div className="form-group">
                                <label for="bonus" style = {{color:'white'}}> Bonus </label>

                                <input
                                 type="text" 
                                 className="form-control" 
                                 id = "bonus" 
                                 value = {bonus} 
                                 style = {{marginTop : '10px'}}  readOnly
                                 />

                            </div>
                            <div className="form-group">
                                <label for="total" style = {{color:'white'}}> Total Payments </label>

                                <input
                                 type="text" 
                                 className="form-control" 
                                 id="total" value = {total} 
                                 style = {{marginTop : '10px'}} readOnly 
                                  />
                            </div>
                        </div>
                    </div>
                </div>


            <Button type="submit" className="btn btn-primary" onClick = {UpdateData} 
                        style = {{
                            marginTop: '10px', 
                            marginBottom : '5px',
                            backgroundColor: 'red', 
                            
                            borderColor:'red',
                            marginLeft:'83%',
                            
                            width : '200px',
                            height : '40px'
                        }} 
                    
                    >
                        Update</Button>
            </form>
        </div>
    );
  };
  export default EditSalaryCalculate;
  