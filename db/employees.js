import client from "./client.js";

export async function getEmployees(){
    const result = await client.query('SELECT * FROM employees;')
    return result
}

export async function createEmployee(name, birthday, salary){
    const result = await client.query(
        'INSERT INTO employees (name, birthday, salary) VALUES ($1, $2, $3) RETURNING *;', [name, birthday, salary]
    )
    return result
}