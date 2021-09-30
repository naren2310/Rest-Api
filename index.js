const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'telemedi',
    password: '312213@Snk',
    port: 5432,
});

client.connect();
const query = `
CREATE TABLE patient (
    id int,
    name varchar,
    age int,
    gender varchar
);
`;

client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Table is successfully created');
    client.end();
});

const insert = `
INSERT INTO patient (id,name,age,gender)
VALUES (3,'venki',21,'male')
`;
client.query(insert, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Data insert successful');
    client.end();
});