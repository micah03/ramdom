const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/ig/:username", (req, res) => {
    // const followers = ["kamari","sasha", "billie","brad"];
    // let { username } = req.params;
    // res.render("instagram.ejs", { username, followers });

    // <!-- <h2>This page belongs to @ <%= username  %></h2>
    // <button>Follow</button>
    // <button>Message</button>

    // <h3>Accounts that follow you</h3>
    // <ul>
    //     <% for(let name of followers) { %>
    //         <li><%= name %></li>
    //     <% } %>
    // </ul> -->

    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data){
        res.render("instagram.ejs", { data });
    }
    else{
        res.render("error.ejs", { username });
    }
});

app.get("/hello", (req, res) => {
    res.send("hello");
});

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random()*6) + 1;
    res.render("rolldice.ejs", { diceVal });
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

