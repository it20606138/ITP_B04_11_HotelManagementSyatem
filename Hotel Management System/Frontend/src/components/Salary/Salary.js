import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Salary.css";
const Salary = (props) => {
  const history = useNavigate();
  const { _id, emp_id, years, months,loans,OT,EPF,basic_salary, image } = props.salary;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/salarys/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/salarys"));
  };

  return (
    <div className="card1">
      <img src={image} alt={emp_id} />
    
      <h3>{emp_id}</h3>
      <h3>Years: {years}</h3>
      <h3>Months: {months}</h3>
      <h3>Loans: {loans}</h3>
      <h3>OT (Days): {OT}</h3>
      <h3>EPF: {EPF}</h3>
      <h3>Basic_salary: {basic_salary}</h3>
      <h3>Finalized Basic Salary Rs:{basic_salary}</h3>
      <Button LinkComponent={Link} to={`/salarys/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
};

export default Salary;
