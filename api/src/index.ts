import app from './app';

async function main() {
    // startConnection();
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
}

main();

