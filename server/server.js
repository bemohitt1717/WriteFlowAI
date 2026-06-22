import app from "./app.js";

const PORT = 5006;

app.get('/', (req, res)=> {
console.log('server created succesfully');
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT} `);
})