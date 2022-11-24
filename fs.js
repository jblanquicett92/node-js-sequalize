//  var http = require('http');
var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('demo.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);

function leer(ruta, cb){
    fs.readFile(ruta, (err, data)=>{
        cb(data.toString())
    })
}

function escribir(ruta, contenido) {
    fs.writeFile(ruta, contenido, (err) => {
        if (err) {
            console.error('Error', err)
        } else {
            console.log('se ha escrito correctamente')
        }

    })
}

// escribir(__dirname+'/file1.txt', 'esto es un nuevo contenido')

leer(__dirname+'/file1.txt', console.log)
