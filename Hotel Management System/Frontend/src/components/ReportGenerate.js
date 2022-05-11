import jsPDF from "jspdf";
import "jspdf-autotable";

const GenerateSalaryReport = (payments) => {
  const doc = new jsPDF();

  const tableColumn = [
    "emp_id",
    "noOfworkingDays",
    "totalOtDays",
    "totalLeaveDays",
    "FixedSalary",
    "AdditionalPayment",
    "bonus",
    "total",
  ];
  const tableRows = [];

  payments.forEach((data) => {
    const calculateDetails = [
      data.emp_id,
      data.noOfworkingDays,
      data.totalOtDays,
      data.totalLeaveDays,
      data.FixedSalary,
      data.AdditionalPaymentS,
      data.bonus,
      data.total,
    ];
    tableRows.push(calculateDetails)
  });

  doc.text("Employee salary Details Report",14,15)
  doc.autoTable(tableColumn,tableRows,{startY:20})
  doc.save("Employee salary Report.pdf")
};

export default GenerateSalaryReport;