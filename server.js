const path = require('path');
const http = require('http');
const express = require('express');


const app = express();
const server = http.createServer(app);



// static folder 

app.use(express.static(path.join(__dirname, 'public')));


const PORT = 3000 || process.env.PORT; 

// Listenner Server 

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
