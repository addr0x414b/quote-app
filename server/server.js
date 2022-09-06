import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: '*',
    methods: '*',
    allowedHeaders: '*'
}));

app.listen(3000);
console.log("Quote backend running on port 3000");
