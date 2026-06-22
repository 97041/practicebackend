import { Pool } from "pg";

const pool = new Pool({
    connectionString: "postgresql://neondb_owner:npg_isJQWB9HgaI2@ep-noisy-sound-ahwb0v9u-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";
})


export const initDB = async()=>{
    try{
        await pool.query(`
            CREATE TABLE IF NOT EXISTS midfielders(
             id SERIAL PRIMARY KEY,
             name VARCHAR(255) NOT NULL,
             jerseyno INT NOT NULL,
             created_at TIMESTAMP DEFAULT NOW(),
             updated_at TIMESTAMP DEFAULT NOW()
            
            )
            `);
    }
    catch(error){
        console.error("kedjfjdf");
        throw error;
    }
}