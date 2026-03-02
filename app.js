const http = require("http");

const server = http.createServer((req, res) => {
    res.write("Hello Friends!! I built my first Docker project1!");
    res.write("This is nice experience to share with all");
    res.end();
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});