import { getTXT } from '../getTXT.js'
getTXT( './data.txt' ).then( res => day14( res ), rej => console.error( rej ) )


function day14( rows ) {
    rows = rows.split( '\r\n' )
    let searchPairs = rows.map( e => e.substr( 0, 2 ) )
    let insertCharacters = rows.map( e => e.slice( -1 ) )

    console.log( 'searchPairs :>> ', searchPairs );
    console.log( 'insertCharacters :>> ', insertCharacters );



    // let string = 'NNCB'
    let string = 'CHBBKPHCPHPOKNSNCOVB'

    for ( let i = 0; i < 10; i++ ) {
        string = createString( string )
    }

    function createString( string ) {
        let newString = string[ 0 ]

        for ( let i = 0; i < string.length - 1; i++ ) {
            let pair = string.slice( i, i + 2 )
            let char = insertCharacters[ searchPairs.indexOf( pair ) ]
            newString = newString + char + pair[ 1 ]
        }
        return newString
    }

    console.log( string )

    let existingCharacters = [ ...new Set( insertCharacters ) ]
    let characterSums = []

    existingCharacters.forEach( ( e, i ) => {
        let count = 0
        for ( const char of string ) {
            if ( char === e ) count++
        }
        characterSums.push( count )
    } )

    characterSums.sort( ( a, b ) => a - b )
    const solution1 = characterSums.at( -1 ) - characterSums[ 0 ]
    console.log( solution1 )


}