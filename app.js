import { config } from 'dotenv';
import { Server } from './server.js';

config();

const server = new Server();

server.listen();