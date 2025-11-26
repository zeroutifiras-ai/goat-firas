const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generatePassword(length) {
    let pass = '';
    for (let i = 0; i < length; i++) {
        pass += chars[Math.floor(Math.random() * chars.length)];
    }
    return pass;
}

readline.question('Enter password length: ', len => {
    console.log('Generated Password:', generatePassword(Number(len)));
    readline.close();
});
