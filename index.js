
const { MongoClient } = require("mongodb");

// Reemplaza la uri de abajo con tu string de conexión a MongoDB.
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri, { useUnifiedTopology: true });

async function run() {
  try {
    await client.connect();
    const database = client.db("tiendaDepartamental");

    // Colecciones
    const damas = database.collection("damas");
    const caballeros = database.collection("caballeros");
    const ninos = database.collection("ninos");

    // ===== Insertando 5 artículos en la colección de Damas =====
    await damas.insertOne({ categoria: "Pantalones", material: "Denim", talla: "M", marca: "Levi's" });
    await damas.insertOne({ categoria: "Pantalones", material: "Algodón", talla: "S", marca: "Zara" });
    await damas.insertOne({ categoria: "Vestidos", material: "Seda", talla: "L", marca: "H&M" });
    await damas.insertOne({ categoria: "Short", material: "Lino", talla: "M", marca: "Gap" });
    await damas.insertOne({ categoria: "Zapatos", material: "Cuero", talla: "38", marca: "Nike" });

    console.log("5 artículos insertados en la colección de Damas.");

    // ===== Insertando 5 artículos en la colección de Caballeros =====
    await caballeros.insertOne({ categoria: "Pantalones", material: "Gabardina", talla: "32", marca: "Dockers" });
    await caballeros.insertOne({ categoria: "Camisetas", material: "Algodón", talla: "L", marca: "Polo" });
    await caballeros.insertOne({ categoria: "Short", material: "Poliéster", talla: "M", marca: "Adidas" });
    await caballeros.insertOne({ categoria: "Zapatos", material: "Gamusa", talla: "42", marca: "Clarks" });
    await caballeros.insertOne({ categoria: "Pantalones", material: "Denim", talla: "34", marca: "Wrangler" });

    console.log("5 artículos insertados en la colección de Caballeros.");

    // ===== Insertando 5 artículos en la colección de Niños =====
    await ninos.insertOne({ categoria: "Pantalones", material: "Algodón", talla: "8", marca: "OshKosh" });
    await ninos.insertOne({ categoria: "Vestidos", material: "Algodón", talla: "6", marca: "Carters" });
    await ninos.insertOne({ categoria: "Short", material: "Denim", talla: "10", marca: "Old Navy" });
    await ninos.insertOne({ categoria: "Zapatos", material: "Sintético", talla: "25", marca: "Vans" });
    await ninos.insertOne({ categoria: "Pantalones", material: "Pana", talla: "7", marca: "Gymboree" });

    console.log("5 artículos insertados en la colección de Niños.");

  } finally {
    // Asegura que el cliente se cerrará cuando termines/error
    await client.close();
  }
}
run().catch(console.dir);
