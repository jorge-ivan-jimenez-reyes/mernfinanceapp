import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";

const InputPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    month: "",
    revenue: "",
    expenses: "",
    operationalExpenses: "",
    nonOperationalExpenses: "",
    productPrice: "",
    productExpense: "",
    recentTransactions: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    navigate("/", { state: { formData } });
  };

  return (
    <Box p="2rem">
      <Typography variant="h4" mb="1rem">
        Enter Your Data
      </Typography>
      <TextField
        fullWidth
        label="Month"
        name="month"
        value={formData.month}
        onChange={handleChange}
        sx={{ mb: "1rem" }}
      />
      <TextField
        fullWidth
        label="Revenue"
        name="revenue"
        type="number"
        value={formData.revenue}
        onChange={handleChange}
        sx={{ mb: "1rem" }}
      />
      <TextField
        fullWidth
        label="Expenses"
        name="expenses"
        type="number"
        value={formData.expenses}
        onChange={handleChange}
        sx={{ mb: "1rem" }}
      />
      <TextField
        fullWidth
        label="Operational Expenses"
        name="operationalExpenses"
        type="number"
        value={formData.operationalExpenses}
        onChange={handleChange}
        sx={{ mb: "1rem" }}
      />
      <TextField
        fullWidth
        label="Non-Operational Expenses"
        name="nonOperationalExpenses"
        type="number"
        value={formData.nonOperationalExpenses}
        onChange={handleChange}
        sx={{ mb: "1rem" }}
      />
      <TextField
        fullWidth
        label="Product Price"
        name="productPrice"
        type="number"
        value={formData.productPrice}
        onChange={handleChange}
        sx={{ mb: "1rem" }}
      />
      <TextField
        fullWidth
        label="Product Expense"
        name="productExpense"
        type="number"
        value={formData.productExpense}
        onChange={handleChange}
        sx={{ mb: "1rem" }}
      />
      <TextField
        fullWidth
        label="Recent Transactions"
        name="recentTransactions"
        value={formData.recentTransactions}
        onChange={handleChange}
        sx={{ mb: "1rem" }}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default InputPage;
