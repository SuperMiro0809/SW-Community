const express = require('express');
const config = require('./config/config');
const apiRouter = require('./routes')
const cors = require('cors');

const app = express();
require('./config/express')(app);

app.use(cors({
    origin: config.origin,
    credentials: true
}));

app.use('/api', apiRouter);

app.listen(config.port, () => {
    console.log(`App is listening on port ${config.port}`);
})