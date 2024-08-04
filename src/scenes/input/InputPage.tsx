import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";

const InputPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    revenue: "",
    expenses: "",
    month: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Navegar al dashboard con los datos del formulario
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
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default InputPage;
