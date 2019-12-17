import fastify from 'fastify';
// import staticPlugin from 'fastify-static';
// import path from 'path';

const app = fastify();
const port =  3333;

// app.register(staticPlugin, {
//     root: path.join(process.cwd(), '/temp'),
//     // prefix: '/public/', // optional: default '/'
// });

app.get('/', (_req, res) => {
    res.send('fuck yeah!');
});

app.get('/healthcheck', (_req, res) => {
    res.send('Ok!');
});

app.listen({port, host: '0.0.0.0'}, (error, address) => {
// app.listen(port, (error, address) => {
    if (error) {
        console.error(error);
        process.exit(1);
    }
    console.info(`fastify server listening at ${address}`);
});
