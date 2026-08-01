const express = rquire("express");
const app = express();
const path = require("path");
const PORT =3000;


app.get("/login", (req, res)=>{
    resizeBy.sendFile(path.join(__dirname, "public", "login.html"));
})


app.listen(PORT, ()=>{
    console.log(`Servidor em localhost: ${PORT}`)
})
