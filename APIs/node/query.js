const express = require('express');

const app = express();
app.listen('3000')

app.route('/').get( (req, res) => res.send( req.query) )

app.route('/abaout/user').get( (req, res) => res.send( req.query) )
