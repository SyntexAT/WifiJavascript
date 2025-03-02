var fs = require( 'fs' );
var cp = require( 'child_process' );

var serverFile = 'server.js';

var server = cp.fork( serverFile );
console.log( 'Server Script gestartet.' );

fs.watchFile( serverFile, function( event, filename ) {
  server.kill();
  console.log( 'Server stopped.' );
  server = cp.fork( serverFile );
  console.log( 'Server restarted.' );
} );
