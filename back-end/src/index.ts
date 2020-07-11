import express, { Request, Response } from 'express';

// Create a new express app instance
const app: express.Application = express();
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(5481, () => {
    console.log('App is listening on port 5481! ');
});