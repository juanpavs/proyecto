const express = require('express');
const { createPool } = require('mysql2/promise');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;
app.use(cors({
  origin: 'http://localhost:3000', 
  methods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  allowedHeaders: 'Content-Type, Authorization',
  credentials: true,
}
));

app.use(express.json());

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: '20EAClgx32*',
  database: 'proyecto',
  port: 3306,
});

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.get('/contenedores', async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT * FROM contenedor');
      res.json(rows);
    } catch (error) {
      console.error(error);
      return res.status(500).json({message: error.message});
    }
});

app.get('/contenedores/recoger/:recoger', async (req, res) =>{
  const {recoger} = req.params;

    try {
      const [rows] = await pool.query('SELECT count(*) AS data FROM contenedor WHERE recoger = ?', [recoger]);
      if(rows.length === 0){
        return res.status(404).json({message: "Recolección no encontrada"});
      }
      //console.log('Recoger:', recoger);
      res.json(rows[0]);
    } catch (error) {
      console.error(error);
      return res.status(500).json({message: error.message});
    }
});

app.get('/contenedores/:id_contenedor', async (req, res) => { 
    const { id_contenedor } = req.params; 

    try {
      const [rows] = await pool.query('SELECT * FROM contenedor WHERE id_contenedor = ?', [id_contenedor]);
      if(rows.length === 0){
        return res.status(404).json({message: "Contenedor no encontrado"});
      }
      res.json(rows[0]);
    } catch (error) {
      console.error(error);
      return res.status(500).json({message: error.message});
    }
});

app.post('/contenedores', async (req, res) => {
  const { nombre_contenedor, direccion_contenedor, id_punto, create_at } = req.body;
  
  try {
    await pool.query(
      'INSERT INTO contenedor (nombre_contenedor, direccion_contenedor, id_punto, create_at) VALUES (?, ?, ?, ?)',
      [nombre_contenedor, direccion_contenedor, id_punto, create_at]
    );
    res.send('Contenedor creado exitosamente');
  } catch (error) {
    console.error(error);
    return res.status(500).json({message: error.message});
  }
});

app.put('/contenedores/:id_contenedor', async (req, res) => {
  const {nombre_contenedor, direccion_contenedor, id_punto, create_at} = req.body;
  const {id_contenedor} = req.params;

  try {
    await pool.query(
      'UPDATE contenedor SET nombre_contenedor = ?, direccion_contenedor = ?, id_punto = ?, create_at = ?,  WHERE id_contenedor = ?',
      [nombre_contenedor, direccion_contenedor, id_punto, create_at, id_contenedor]
    )
  } catch (error) {
    console.error(error);
    return res.status(500).json({message: error.message});
  }
});

app.delete('/contenedores/:id_contenedor', async (req, res) => {
  const { id_contenedor } = req.params;
    
  try {
    const [rows] = await pool.query(
      'DELETE FROM contenedor WHERE id_contenedor = ?',
      [id_contenedor]
    );
    if(rows.affectedRows === 0){
      return res.status(404).json({message: "Contenedor no encontrado"});
    }
    return res.sendStatus(204);
    //res.send('Contenedor eliminado exitosamente');
  } catch (error) {
    console.error(error);
    return res.status(500).json({message: error.message});
  }
});

app.get('/puntos', async (req, res) => {

  try {
    const [rows] = await pool.query('SELECT * FROM punto');
    res.json(rows);
  } catch (error) {
    console.error(error);
    //res.status(500).send('Server error');
    return res.status(500).json({message: error.message});
  }
});

app.get('/puntos/:id_punto', async (req, res) => { 
    const { id_punto } = req.params; 

    try {
      const [rows] = await pool.query('SELECT * FROM punto WHERE id_punto = ?', [id_punto]);
      if(rows.length === 0){
        return res.status(404).json({message: "Punto no encontrado"});
      }
      res.json(rows[0]);
    } catch (error) {
      console.error(error);
      return res.status(500).json({message: error.message});
    }
});

app.post('/puntos', async (req, res) => {
    const { nombre_punto, barrio, direccion, correo, telefono, create_at } = req.body;
    
    try {
      await pool.query(
        'INSERT INTO punto (nombre_punto, barrio, direccion, correo, telefono, create_at) VALUES (?, ?, ?, ?, ?, ?)',
        [nombre_punto, barrio, direccion, correo, telefono, create_at]
      );
      res.send('Punto creado exitosamente');
    } catch (error) {
      console.error(error);
      return res.status(500).json({message: error.message});
    }
  });

app.put('/puntos/:id_punto', async (req, res) => {
  const { nombre_punto, barrio, direccion, correo, telefono, create_at} = req.body;
  const { id_punto } = req.params; 
  try {
    await pool.query(
      'UPDATE punto SET nombre_punto = ?, barrio = ?, direccion = ?, correo = ?, telefono = ?, create_at = ? WHERE id_punto = ?',
      [nombre_punto, barrio, direccion, correo, telefono, create_at, id_punto]
    );
    res.send('Punto actualizado exitosamente');
  } catch (error) {
    console.error(error);
    return res.status(500).json({message: error.message});
  }
});

app.delete('/puntos/:id_punto', async (req, res) => {
  const { id_punto } = req.params;   
  try {
    const [rows] = await pool.query(
      'DELETE FROM punto WHERE id_punto = ?',
      [id_punto]
    );
    if(rows.affectedRows === 0){
      return res.status(404).json({message: "Punto no encontrado"});
    }
    return res.sendStatus(204);
    //res.send('Punto eliminado exitosamente');
  } catch (error) {
    console.error(error);
    return res.status(500).json({message: error.message});
  }
});
  
app.get('/recolecciones', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM recoleccion');
    res.json(rows);
  } catch (error) {
    console.error(error);
    return res.status(500).json({message: error.message});
  }
});

app.get('/recolecciones/:id_recoleccion', async (req, res) => { 
    const { id_recoleccion } = req.params; 
    try {
      const [rows] = await pool.query('SELECT * FROM recoleccion WHERE id_recoleccion = ?', [id_recoleccion]);
      if(rows.length === 0){
        return res.status(404).json({message: "Recoleccion no encontrada"});
      }
      res.json(rows[0]);
    } catch (error) {
      console.error(error);
      return res.status(500).json({message: error.message});
    }
});
app.post('/recolecciones', async (req, res) => {
  const { id_contenedor, id_empresa, create_at, update_at } = req.body;
  try {
    await pool.query(
      'INSERT INTO recoleccion (id_contenedor, id_empresa, create_at, update_at) VALUES (?, ?, ?, ?)',
      [id_contenedor, id_empresa, create_at, update_at]
      );
    res.send('Recoleccion creada exitosamente');
    } catch (error) {
    console.error(error);
    return res.status(500).json({message: error.message});
  }
});
  
app.put('/recolecciones/:id_recoleccion', async (req, res) => {
  const { id_contenedor, id_empresa, create_at, update_at} = req.body;
  const { id_recoleccion } = req.params;
  try {
    await pool.query(
      'UPDATE recoleccion SET id_contenedor = ?, id_empresa = ?, create_at = ?, update_at = ? WHERE id_recoleccion = ?',
      [id_contenedor, id_empresa, create_at, update_at, id_recoleccion]
    );
    res.send('Recoleccion actualizada exitosamente');
  } catch (error) {
    console.error(error);
    return res.status(500).json({message: error.message});
  }
});
  
    app.delete('/recolecciones/:id_recoleccion', async (req, res) => {
      const { id_recoleccion } = req.params;
      
      try {
        const [rows] = await pool.query(
          'DELETE FROM recoleccion WHERE id_recoleccion = ?',
          [id_recoleccion]
        );
        if(rows.affectedRows === 0){
            return res.status(404).json({message: "Recolección no encontrada"});
          }
        return res.sendStatus(204);
        //res.send('Recolección eliminada exitosamente');
      } catch (error) {
        console.error(error);
        return res.status(500).json({message: error.message});
      }
    });
app.get('/empresas', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM empresa');
    res.json(rows);
  } catch (error) {
    console.error(error);
    return res.status(500).json({message: error.message});
  }
});

app.get('/empresas/:id_empresa', async (req, res) => { 
  const { id_empresa } = req.params; 
  try {
    const [rows] = await pool.query('SELECT * FROM empresa WHERE id_empresa = ?', [id_empresa]);
      if(rows.length === 0){
        return res.status(404).json({message: "Empresa no encontrada"});
      }
      res.json(rows[0]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({message: error.message});
  }
});
  app.post('/empresas', async (req, res) => {
    const { nit, nombre_empresa, contrasenia} = req.body;
      
      try {
        await pool.query(
          'INSERT INTO empresa (nit, nombre_empresa, contrasenia) VALUES (?, ?, ?)',
          [nit, nombre_empresa, contrasenia]
        );
        res.send('Empresa creada exitosamente');
      } catch (error) {
        console.error(error);
        return res.status(500).json({message: error.message});
      }
});
      
app.put('/empresas/:id_empresa', async (req, res) => {
  const { nit, nombre_empresa, contrasenia} = req.body;
  const { id_empresa } = req.params;
          
  try {
    await pool.query(
      'UPDATE empresa SET nit = ?, nombre_empresa = ?, contrasenia = ? WHERE id_empresa = ?',
      [nit, nombre_empresa, contrasenia, id_empresa]
    );
    res.send('Empresa actualizada exitosamente');
    } catch (error) {
      console.error(error);
      return res.status(500).json({message: error.message});
    }
});
      
app.delete('/empresas/:id_empresa', async (req, res) => {
  const { id_empresa } = req.params;
          
  try {
    const [rows] = await pool.query(
      'DELETE FROM empresa WHERE id_empresa = ?',
      [id_empresa]
    );
    if(rows.affectedRows === 0){
      return res.status(404).json({message: "Contenedor no encontrado"});
    }
    return res.sendStatus(204);
      //res.send('Empresa eliminada exitosamente');
    } catch (error) {
    console.error(error);
    return res.status(500).json({message: error.message});
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, 'localhost', () => {
  console.log('Server is running on http://localhost:5000');
  //console.log(`Servidor escuchando en http://172.16.25.227:${port}`);
});


