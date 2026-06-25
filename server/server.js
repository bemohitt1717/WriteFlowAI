import app from "./app.js";

const PORT = proccess.env.PORT || 5006;

app.get('/', (req, res)=> {
console.log('server created succesfully');
});


app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT} `);
})