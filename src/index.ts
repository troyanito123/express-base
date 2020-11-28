import Server from "./class/server";
import express from 'express';
import cors from 'cors'
import serverRoutes from './routes'

const server = Server.instance;

// Middlewares
server.app.use(cors());
server.app.use(express.urlencoded({extended: false}));
server.app.use(express.json());

// Routes
server.app.use('/api', serverRoutes);

// Database

server.start(()=>{
    console.log(`Server UP on port ${process.env.PORT}`);
});


