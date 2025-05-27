import express from "express";
import client from "../db/client.js";
//import {getEmployees} from "./db/employees.js";
const router = express.Router();
export default router;


//#region // GET / sends the message "Welcome to the Fullstack Employees API."
router.get("/", (req, res) => {
    res.send("Welcome to the Fullstack Employees API")
});
//#endregion

//#region // GET /employees sends array of all employees
router.get("/employees", async (req, res) => {
    //const employees = await getEmployees()
    const employees = await client.query('SELECT * FROM employees;')
    res.send(employees)
});
//#endregion

//#region // POST /employees
router.post("/employees", async (req, res) => {
    if (!req.body) {
        return res.status(400).send('Request body is required.');
    }

    if (!req.body.required) {
        return res.status(400).send('Missing required information.')
    }

    const newEmployee = { id: name, birthday, salary }
    employees.push(newEmployee);
    res.status(201).json(newEmployee);
});
//#endregion

//#region // GET /employees/:id 
router.get("/employees/:id", async (req, res) => {
    const id = parseInt(req.params.id, 10)

    if (isNaN(id) || id <= 0) {
        return res.status(400).send('ID must be a positive integer.')
    }

    const employee = employees.find(emp => emp.id === id)
    if (!employee) {
        return res.status(404).send('Employee not found.')
    }

    res.json(employee)
});
//#endregion

//#region // DELETE /employees/:id 
router.delete("/employees/:id", async (req, res) => {
    const id = parseInt(req.params.id, 10)

    if (isNaN(id) || id <= 0) {
        return res.status(400).send('ID must be a positive integer.')
    }

    const index = employees.findIndex(emp => emp.id === id)
    if (index === -1) {
        return res.status(404).send('Employee not found.')
    }

    employees.splice(index, 1)
    res.status(204).send()
});
//#endregion

//#region // PUT /employees/:id updates employee with specified ID with provided data 
router.put("/employees/:id", async (req, res) => {
    const id = parseInt(req.params.id, 10)
    const { name, position } = req.body

    if (!req.body) {
        return res.status(400).send('Request body is required.')
    }
    if (!name || !postion) {
        return res.status(400).send('Missing required information.')
    }
    if (isNaN(id) || id <= 0) {
        return res.status(400).send('ID must be a positive integer.')
    }

    const employee = employees.find(emp => emp.id === id)
    if (!employee) {
        return res.status(404).send('Employee not found.')
    }

    employee.name = name
    employee.position = position
    res.json(employee)
});
//#endregion