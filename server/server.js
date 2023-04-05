const express = require('express')
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser')
const port = 8000;

require('./config/mongoose.config')
require('dotenv').config();
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json(), express.urlencoded({extended: true}));
require('./routes/user.routes')(app);
require('./routes/stadium.routes')(app);
require('./routes/review.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));