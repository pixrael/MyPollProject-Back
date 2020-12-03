const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/dist/my-poll-project-front`))

app.get('/*', (req, res) => {
   res.sendFile(path.join(__dirname));
});

app.listen(port, () => {
   console.log(`listening on port ${port}`);
});