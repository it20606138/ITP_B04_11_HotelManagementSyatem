import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Admin from "./components/Admin";
import Success from "./components/Success";
import AddSalary from "./components/AddSalary";
import Salary from "./components/Salary/Salarys";

import About from "./components/About";
import SalaryDetail from "./components/Salary/SalaryDetail";
import SalaryCalculate from "./components/SalaryCalculate";
import EditSalaryCalculate from "./components/EditSalaryCalculate";


import AddFood from "./components/AddFood";
import Foods from "./components/Food/Foods";
import FoodDetail from "./components/Food/FoodDetail";
import Cusfoods from "./components/Food/Cusfoods";
import Foodreports from "./components/Food/Foodreports";

import AddDilivary from "./components/AddDilivary";
import Dilivarys from "./components/Dilivary/Dilivarys";
import DilivaryDetail from "./components/Dilivary/DilivaryDetail";

import AddCustomer from "./components/AddCustomer";
import Customers from "./components/Customer/Customers";
import CustomerDetail from "./components/Customer/CustomerDetail";


import AddRoom from "./components/AddRoom";
import Rooms from "./components/Room/Rooms";
import Cusrooms from "./components/Room/Cusrooms";
import RoomDetail from "./components/Room/RoomDetail";

// import AddDilivary from "./components/AddDilivary";
// import Dilivarys from "./components/Dilivary/Dilivarys";
// import DilivaryDetail from "./components/Dilivary/DilivaryDetail";



function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/Admin" element={<Admin />} exact />
          <Route path="/success" element={<Success />} exact />
          <Route path="/add" element={<AddSalary />} exact />
          <Route path="/salarys" element={<Salary />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/salarys/:id" element={<SalaryDetail />} exact />
{/* <<<<<<< HEAD */}
          
{/* ======= */}
          <Route path="/calculate" element={<SalaryCalculate />} exact />
          <Route path="/allcalculate" element={<EditSalaryCalculate />} exact />
{/* <<<<<<< HEAD */}
          
=======
{/* >>>>>>> 23f9b6ce5b89e786ea1380baf4bf9f0a31dc54fa
>>>>>>> 2e6f8ecc60467b25114fa308c6c58b727076932f */}

          <Route path="/addf" element={<AddFood />} exact />
          <Route path="/foods" element={<Foods />} exact />
          <Route path="/foods/:id" element={<FoodDetail />} exact />
          <Route path="/cusfoods" element={<Cusfoods />} exact />
          <Route path="/foodr" element={<Foodreports />} exact />

          <Route path="/adddilivary" element={<AddDilivary />} exact />
          <Route path="/dilivarys" element={<Dilivarys />} exact />
          <Route path="/dilivarys/:id" element={<DilivaryDetail />} exact />
          
          <Route path="/addr" element={<AddCustomer />} exact />
          <Route path="/customers" element={<Customers />} exact />
          <Route path="/customers/:id" element={<CustomerDetail />} exact />
          


          
          <Route path="/addrr" element={<AddRoom />} exact />
          <Route path="/rooms" element={<Rooms />} exact />
          <Route path="/rooms/:id" element={<RoomDetail />} exact />
          <Route path="/cusrooms" element={<Cusrooms />} exact />



          <Route path="/adddilivary" element={<AddDilivary />} exact />
          <Route path="/dilivarys" element={<Dilivarys />} exact />
          <Route path="/dilivarys/:id" element={<DilivaryDetail />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
