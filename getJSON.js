import * as fs from 'fs';

function getJSON( filepath ) {
    return new Promise( ( resolve, reject ) => {
        fs.readFile( filepath, ( err, data ) => {
            if ( data ) {
                resolve( JSON.parse( data ) )
            } else {
                reject( 'Datei nicht gefunden!' )
            }
        } )
    } )
}
export { getJSON }