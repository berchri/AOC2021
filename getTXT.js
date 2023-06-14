import * as fs from 'fs';

function getTXT( filepath ) {
    return new Promise( ( resolve, reject ) => {
        fs.readFile( filepath, 'utf8', ( err, data ) => {
            if ( data ) {
                resolve( data )
            } else {
                reject( 'Datei nicht gefunden!' )
            }
        } )
    } )
}
export { getTXT }