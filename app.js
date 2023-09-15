import http from 'node:http';

http.createServer( (req, res) => {

    res.write(' hola mundo!!')
    
})

.listen( 8080 )

console.log('Escuchando el puerto', 8080)

