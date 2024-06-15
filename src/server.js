import express from "express"
import { env } from "./utils/env.js"

export const setupServer = () => {

    const app = express();

    const PORT = Number(env('PORT', '3000'));

    

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })



}
