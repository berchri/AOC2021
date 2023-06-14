import { getTXT } from '../getTXT.js'
getTXT( './data-test.txt' ).then( res => day14( res ), rej => console.error( rej ) )

function day14( rows ) {
    rows = rows.split( '\r\n' )
    let searchPairs = rows.map( e => e.substr( 0, 2 ) )
    let insertCharacters = rows.map( e => e.slice( -1 ) )

    console.log( 'searchPairs :>> ', searchPairs );
    console.log( 'insertCharacters :>> ', insertCharacters );

    // for ( let i = 0; i < 4; i++ ) {
    //     string = createString( string )
    // }






}