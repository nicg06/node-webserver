
const http = require('http');

http.createServer( (req, res)=>{

    //console.log( req );
    
    //res.writeHead(200, { 'Content-Type': 'application/json' });
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, { 'Content-Type': 'application/csv' });
    res.write( 'id, name\n' );
    res.write( '1, Ferenando\n' );
    res.write( '2, Pedro\n' );
    res.write( '3, Juan\n' );
    

    //res.write( JSON.stringify( persona) );
    res.end();
    
} )
.listen( 8080 );

console.log('Escuchando el puerto', 8080);
