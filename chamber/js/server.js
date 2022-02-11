const express = require('express');
const app = express();
const fs = require('fs');
const compression = require('compression');

app.use(compression());
app.use(express.static('build'));