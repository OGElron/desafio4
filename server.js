const fs = require ('fs');
const express = require('express');
const app = express();
const {Router} = express;
app.use(express.static('public'));

/*??????'*/
/*
class Contenedor {
    
    constructor (archivo){
       this.archivo = archivo
    }
    async save(object) {
        try {
            
            const atexto =  JSON.stringify(object, null, 2);
            await fs.promises.writeFile(this.archivo, atexto, (error)=> {
                if (error) {
                    throw new Error ('Error en la escritura');
                }
                console.log('escritura exitosa')}
        )
        } catch (error) {
            
        }
    }

    async verProd() {
        try {
            const mostrarProds = await fs.promises.readFile(this.archivo, 'utf-8');
            const mostrarProds2 = JSON.parse(mostrarProds);
            return mostrarProds2;
        } catch (error) {
            console.error('error')
        }
    }
    
};

arrayFull();
*/
const rutaProductos = new Router()

rutaProductos.use(express.json())
rutaProductos.use(express.urlencoded({ extended: true }))

const productos = []

rutaProductos.get('/', (req, res) => {
    res.json(productos)
})

rutaProductos.post('/', (req, res) => {
    console.log('ingresa al post');
    productos.push(req.body)
    res.json(req.body)
});

app.use('/productos', rutaProductos)

/* -----------api?----------*/
async function rutas () {
    
    app.get('/', (req, res) => {
        res.send('<h1 style="color:red;">Desafio Express! acceda a /productos y /productoRandom</h1>')
    });

    app.get('/productos', (req, res) => {
        
        res.send(`${JSON.stringify(todoElArray, null, 2)}`)
    })

    app.get('/api/productos/:id', (req, res) => {
        console.log('ruta 1');
        res.send({});
    });
    
    app.post('/api/productos', (req, res) => {
        console.log('ruta 1');
    });
    
    app.put('/api/productos/:id', (req, res) => {
        res.send({});
    });
    
    app.delete('/api/productos/:id', (req, res) => {
        res.send({});
    });
}

rutas ();

/* ------------------------------------------------------ */
/* Server Listen */
const server = app.listen(8080, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on('error', error => console.log(`Error en servidor ${error}`));
