import dotenv from 'dotenv';
import { dbConfig } from './config/dbConfig.js';

dotenv.config();

console.log("🔍 DEBUG config object:");
console.log(JSON.stringify(dbConfig, null, 2));
