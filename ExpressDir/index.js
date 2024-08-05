const express = require("express");
const app = express();


// console.dir(app);

let port = 8080;

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Hi! You are at root");
});

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    let htmlStr = `<h1>Hi! Welcome @${username}${id}!</h1>`;
    res.send(htmlStr);
});

app.get("/search", (req, res) => {
    let { q } = req.query;
    if(!q){
        res.send("Nothing found");
    }
    res.send(`<h1>search results for query: ${q}</h1>`);
});

// app.get("/apple", (req, res) => {
//     res.send("You are at apple");
// });

// app.get("/orange", (req, res) => {
//     res.send("You are at orange");
// });

// app.get("*", (req, res) => {
//     res.send("Page not found");
// });

// app.post("/", (req, res) => {
//     res.send("You sent a post request");
// });

// app.use((req, res)=>{
//     console.log("request received");
//     let code = "<h1>Fruits</h1> <ul> <li>Apple</li> <li>Orange</li> <li>Banana</li> </ul>";
//     res.send(code);
// });


