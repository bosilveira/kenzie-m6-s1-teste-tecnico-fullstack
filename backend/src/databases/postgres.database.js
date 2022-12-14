import { Client } from "pg"

export const postgresDB = new Client({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
    })

export const startPostgres = async () => {
    await postgresDB.connect()
}
