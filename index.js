const { MongoClient } = require('mongodb');

// Configuración de la conexión local a MongoDB
const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);

// Nombre de tu base de datos de la universidad
const dbName = 'universidad_urn';

async function main() {
    try {
        // Conectar al servidor de MongoDB
        await client.connect();
        console.log('¡Conectado con éxito al servidor de MongoDB!');
        
        const db = client.db(dbName);

        // 1. Mostrar los docentes existentes en la consola
        console.log('\n--- LISTA DE DOCENTES ---');
        const docentesCollection = db.collection('docentes');
        const listaDocentes = await docentesCollection.find({}).toArray();
        console.log(listaDocentes);

        // 2. Mostrar las carreras existentes en la consola
        console.log('\n--- LISTA DE CARRERAS ---');
        const carrerasCollection = db.collection('carreras');
        const listaCarreras = await carrerasCollection.find({}).toArray();
        console.log(listaCarreras);

        // 3. Mostrar los alumnos existentes en la consola
        console.log('\n--- LISTA DE ALUMNOS ---');
        const alumnosCollection = db.collection('alumnos');
        const listaAlumnos = await alumnosCollection.find({}).toArray();
        console.log(listaAlumnos);

    } catch (error) {
        console.error('Error al conectar o consultar la base de datos:', error);
    } finally {
        // Cerrar la conexión al terminar
        await client.close();
        console.log('\nConexión cerrada.');
    }
}

main().catch(console.error);
