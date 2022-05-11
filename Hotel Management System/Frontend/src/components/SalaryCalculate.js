import React,{useState} from "react";
import axios from "axios";
 


const SalaryCalculate =() => {


    const [emp_id, setEmp_Id] = useState("");
    const [noOfworkingDays, setNoOfworkingDays] = useState("");
    const [totalOtDays, setTotalOtDays] = useState("");
    const [totalLeaveDays, setTotalLeaveDays] = useState("");
    const [FixedSalary, setFixedSalary] = useState("");
    const [AdditionalPayment, setAdditionalPayment] = useState("");
    const [bonus, setBonus] = useState("");
    const [total, setTotalPayment] = useState("");



    function sendData(e){
        e.preventDefault();

        const newSalaryCalculate ={
            emp_id,
            noOfworkingDays,
            totalOtDays,
            totalLeaveDays,
            FixedSalary,
            AdditionalPayment,
            bonus,
            total
        }

        axios.post("http://localhost:5000/employeeSalarys/add", newSalaryCalculate).then(() =>{
            alert("Salary Added")

            setEmp_Id(" ");
            setNoOfworkingDays(" ");
            setTotalOtDays("");
            setTotalLeaveDays("");
            setFixedSalary("");
            setAdditionalPayment(" ");
            setBonus(" ");
            setTotalPayment(" ");


        }).catch((err)=>{
            alert(err)
        })
       
        
    }

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

    return(

    <div style ={{paddingLeft : '100px', paddingRight: '100px', paddingBottom : '0px'}} >

        <div>
            <img 
            
                src ="https://thumbs.dreamstime.com/b/net-income-calculating-abstract-concept-vector-illustration-salary-calculation-formula-take-home-pay-corporate-accounting-earnings-198849587.jpg" 
                style = {{
                    alignItems:"left",
                    width: '200px',
                    height : '110px',
                    paddingTop: '20px',
                    paddingLeft : '50px',
                    paddingBottom : '0px'
                
                }}
                alt = ""
                className = "logo"
            />

            <h1 style={{textAlign:'center', paddingBottom: '15px', paddingTop: '0px'}}> Calculate Employee Salary</h1>
        </div>
        <form onSubmit = {sendData}>
        <div class="container"  >
                <div class="row">
                        <div class="col" style ={{backgroundColor: 'black', paddingBottom:'15px', marginRight: '25px'}}>

                            <div className="form-group" style = {{marginTop : '25px'}} >
                                <label for="emp_id" style = {{color:'white'}}> Employee ID </label>
                                <input 
                                    type="text" className="form-control" id="emp_id" placeholder="Enter Employee ID" required
                                    style = {{marginTop : '10px'}} onChange={(e)=>{
                                    setEmp_Id(e.target.value);
                                }}/>

                            </div>

                            <div className="form-group">
                                <label for="noOfworkingDays" style = {{color:'white'}}> Number of Working Days </label>
                                <input 
                                    type="text" className="form-control" id="noOfworkingDays" placeholder="Enter the number of working days" required
                                    style = {{marginTop : '10px'}}  onChange={(e)=>{
                                    setNoOfworkingDays(e.target.value); 
                                }} />

                            </div>

                            <div className="form-group">
                                <label for="totalOtDays" style = {{color:'white'}}> Total OT Days </label>
                                <input
                                    type="text" className="form-control" id="totalOtDays" placeholder="Enter the total OT Days" required
                                    style = {{marginTop : '10px'}} onChange={(e)=>{
                                    setTotalOtDays(e.target.value);
                                }} />

                            </div>

                            <div className="form-group">
                                <label for="totalLeaveDays" style = {{color:'white'}}> Total Leave Days </label>
                                <input 
                                    type="text" className="form-control" id="totalLeaveDays" placeholder="Enter the total Leave Days" required
                                    style = {{marginTop : '10px'}} onChange={(e)=>{
                                    setTotalLeaveDays(e.target.value);
                                }} />

                            </div>

                            <div className="form-group">
                                <label for="FixedSalary" style = {{color:'white'}}> Fixed Salary </label>
                                <input 
                                    type="text" className="form-control" id="FixedSalary" placeholder="Enter the fixed Salary" required
                                    style = {{marginTop : '10px'}} onChange={(e)=>{
                                    setFixedSalary(e.target.value);
                                }}/>

                            </div>


                            <button type="button" className="btn btn-primary" onClick = {Calculation} 
                                style = {{marginTop: '10px', backgroundColor: 'blue'}}
                            >Calculate</button>

                            <button type="button" className="btn btn-primary" onClick = {Clear} 
                                style = {{marginTop: '10px',marginLeft :'25px' ,backgroundColor: 'green', borderColor: 'green'}}
                            >Clear</button>
                        </div>


                        
                        <div class="col" style = {{backgroundColor: 'black', marginLeft :'25px'}} >
                            <div className="form-group" style ={{marginTop : '25px'}}>
                                <label for="AdditionalPayment" style = {{color:'white'}}> Additional Payments(Loans) </label>
                                <input type="text" className="form-control" id="AdditionalPayment" value = {AdditionalPayment} readOnly
                                style = {{marginTop : '10px'}}   
                                /* onChange={(e)=>{
                                    setAdditionalPayment(e.target.value);
                                }} */  />

                            </div>

                            <div className="form-group">
                                <label for="bonus" style = {{color:'white'}}> Bonus </label>
                                <input type="text" className="form-control" id = "bonus" value = {bonus} style = {{marginTop : '10px'}}  readOnly
                                /* onChange={(e)=>{
                                    setBonus(e.target.value);
                                }} */ />

                            </div>


                            <div className="form-group">
                                <label for="total" style = {{color:'white'}}> Total Payments </label>
                                <input type="text" className="form-control" id="total" value = {total} style = {{marginTop : '10px'}} readOnly 
                                /* onChange={(e)=>{
                                    setTotalPayment(e.target.value);
                                }} */  />
                            </div>
                        </div>
                    </div>
                </div>


            <button type="submit" className="btn btn-primary" onClick = {sendData} 
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
                        Submit</button>
            </form>
    </div>
)
}
export default SalaryCalculate;

