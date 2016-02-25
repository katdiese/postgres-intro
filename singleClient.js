var pg = require('pg');

var connectionString = 'postgres://localhost:1337/pgintro';

var client = new pg.Client(connectionString);
client.connect();