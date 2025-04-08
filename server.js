const express = require('express');
const app = express();

app.use(express.json());

const userData = [];

app.get('/generate-user-data', (req, res) => {
    const name = generateRandomName();
    const email = generateRandomEmail();
    const password = generateRandomPassword();

    userData.push({ name, email, password });

    res.json({ name, email, password });
});

function generateRandomName() {
    const firstNames = ['John', 'Jane', 'Bob', 'Alice'];
    const lastNames = ['Doe', 'Smith', 'Johnson', 'Williams'];
    return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
}

function generateRandomEmail() {
    const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'aol.com'];
    return `${generateRandomName().replace(' ', '')}@${domains[Math.floor(Math.random() * domains.length)]}`;
}

function generateRandomPassword() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < 12; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
