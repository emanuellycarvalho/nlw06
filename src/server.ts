import express from "express";

const app = express();


app.get("/teste", (request, response) => {
    return response.send("Olá de novo");
});

app.listen(3000, () => console.log("Rodou o server e atualizou"));