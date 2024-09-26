const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/employeeDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Define the Employee Schema
const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    department: { type: String, required: true },
    employeeId: { type: Number, required: true },
    profilePicture: { type: String }
});

// Create the Employee Model
const Employee = mongoose.model('Employee', employeeSchema);

// POST route to add a new employee
app.post('/employees', async (req, res) => {
    const { name, email, department, employeeId, profilePicture } = req.body;

    try {
        const newEmployee = new Employee({ name, email, department, employeeId, profilePicture });
        await newEmployee.save();
        res.status(201).send('Employee added successfully');
    } catch (err) {
        res.status(400).send('Error adding employee');
    }
});

// GET route to retrieve all employees
app.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (err) {
        res.status(400).send('Error fetching employees');
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(Server running on port ${PORT});
});
