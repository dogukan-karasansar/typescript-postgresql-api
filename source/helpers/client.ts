import { pool } from "../database/postgres";

export const get = async (table: string, query: string, request: any, response: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: any): void; new(): any; }; }; }) => {
    await pool.query(`SELECT * FROM ${table} ${query}`, (error: any, results: { rows: any; }) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    }
    );
};

export const getById = (table: string, id: number, request: any, response: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: any): void; new(): any; }; }; }) => {
    pool.query(`SELECT * FROM ${table} WHERE id = ${id}`, (error: any, results: { rows: any; }) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    }
    );
}

export const create = (table: string, data: { [s: string]: unknown; } | ArrayLike<unknown>, request: any, response: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; }) => {    
    pool.query(`INSERT INTO ${table} (${Object.keys(data).join()}) VALUES (${Object.values(data).join()})`, (error: any, results: { insertId: any; }) => {
        if (error) {
            throw error;
        }
        response.status(201).send(`User added with ID: ${results.insertId}`);
    }
    );
}

export const update = (table: string, id: number, data: { [s: string]: unknown; } | ArrayLike<unknown>, request: any, response: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; }) => {
    pool.query(`UPDATE ${table} SET ${Object.keys(data).map((key, index) => `${key} = ${Object.values(data)[index]}`)} WHERE id = ${id}`, (error: any, results: any) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`User modified with ID: ${id}`);
    }
    );
}