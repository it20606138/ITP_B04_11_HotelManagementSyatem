import React, {useState, useEffect} from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import  GenerateSalaryReport from "./ReportGenerate";



//Creating the basic component
export default function AllSalarys(){

    const [AllSalaryss, setAllSalarys] = useState([]);   //Payment array
    const [Id, setId] = useState("");
    const [emp_id, setEmp_Id] = useState("");
    const [noOfworkingDays, setNoOfworkingDays] = useState("");
    const [totalOtDays, setTotalOtDays] = useState("");
    const [totalLeaveDays, setTotalLeaveDays] = useState("");
    const [FixedSalary, setFixedSalary] = useState("");
    const [AdditionalPayment, setAdditionalPayment] = useState("");
    const [bonus, setBonus] = useState("");
    const [total, setTotalPayment] = useState("");



    //show all salarys
    useEffect(() => {
        function AllSalarys(){
            axios.get("http://localhost:5000/EmployeeSalary").then((res) =>{
                setAllSalarys(res.data);
                
            }).catch((err) =>{
                alert(err.message);
            })
        }
        AllSalarys();

    }, []);

    //Delete salary function

    function DeleteSalary(e,_id) {
        const conf = window.confirm("Do You Want to Delete this employee salary?");
        if (conf == true) {
          axios
            .delete("http://localhost:5000/EmployeeSalary/delete/" + _id)
            .then((res) => {
              alert("deleted");
              window.location.reload();
            })
            .catch((err) => {
              alert(err.message);
            });
        }
      }
    
      console.log(AllSalarys);     

      //Generate report function
      function GenerateReport() {
        GenerateSalaryReport(AllSalarys);
      }

    return (

        <div className = "container">

        <div>

            {/*logo*/}
            <img 
            
                src ="https://thumbs.dreamstime.com/b/net-income-calculating-abstract-concept-vector-illustration-salary-calculation-formula-take-home-pay-corporate-accounting-earnings-198849587.jpg"  
                style = {{
                    alignItems:"left",
                    width: '200px',
                    height : '120px',
                    paddingTop: '20px',
                    paddingLeft : '10px',
                    paddingBottom : '5px'
                
                }}
                alt = ""
                className = "logo"
                
            />

            <h1 style={{textAlign:'center', paddingBottom: '20px', paddingTop: '0px', paddingLeft: '500px', paddingRight:'100px'}}>
                ALL EMPLOYEE SALARY
                <Button
                    size="sm"
                    variant="danger"
                    style={{
                        
                        width: "200px",
                        height: "40px",
                        marginLeft: "200px",
                        marginTop: "20px",
                        marginRight: "10px",
                        backgroundColor: "green",
                        borderBlockColor: "green"
                        
                    }}
                    onClick={(e) => {
                        GenerateReport();
                    }}
                >
                Get salary Report
                </Button>
                
                
                </h1>


        </div>



            <table className="table table-dark table-striped" style = {{marginTop: '25px'}}>
                <thead>
                    <tr>
                    <th scope="col">emp_id</th>
                    <th scope="col">noOfworkingDays</th>
                    <th scope="col">totalOtDays</th>
                    <th scope="col">totalLeaveDays</th>
                    <th scope="col">FixedSalary</th>
                    <th scope="col">AdditionalPayment</th>
                    <th scope="col"> bonus</th>
                    <th scope="col">total</th>
                    <th scope="col">Decision</th>

                    </tr>
                </thead>

                <tbody>
                   
                    {AllSalarys.map((data) => {
                        return (

                             <tr>
                                <td>{data.emp_id}</td>
                                <td>{data.noOfworkingDays}</td>
                                <td>{data.totalOtDays}</td>
                                <td>{data.totalLeaveDays}</td>
                                <td>{data.FixedSalary}</td>
                                <td>{data.AdditionalPayment}</td>
                                <td>{data.bonus}</td>
                                <td>{data.total}</td> 

                                <td style={{ width: '250px', texrAlign: 'center' }}>
                                    <Link to={"/EditDetails/" + data._id}>
                                        <Button
                                            size="sm"
                                            variant="primary"
                                            style={{ width: "60px", marginLeft: "10px" }}
                                            /* onClick = {() => {
                                                setId(data._id);
                                                setDriverId(data.driverId);
                                                setNoOfworkingDays(data.noOfworkingDays);
                                                setTotalTrips(data.totalTrips);
                                                setTotalKm(data.totalKm);
                                                setFixedPayment(data.FixedPayment);
                                                setAdditionalPayment(data.AdditionalPayment);
                                                setBonus(data.bonus);
                                                setTotalPayment(data.total);

                                                EditPayment(data._id);
                                            }} */
                                        >
                                            Edit
                                        </Button>
                                    </Link>

                                    <Button
                                        size="sm"
                                        variant="danger"
                                        style={{ width: "60px", marginLeft: "10px" }}
                                        onClick={(e) => {
                                            DeleteSalary(e,data._id);
                                        } }
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
 
                                        
                            )
                    
                    })}
                    
                    

                    
                                        
                    
                </tbody>

  
            </table>


        </div>
    ); 
}