import { getTXT } from "../getTXT.js";
getTXT( './data.txt' ).then( res => day8( res ), rej => console.error( rej ) )

function day8( data ) {
    data = data.split( '\r\n' )
    let output = []
    data.forEach( ( e, i, a ) => {
        a[ i ] = e.split( '|' )
        a[ i ][ 1 ] = a[ i ][ 1 ].trim().split( ' ' )
        output.push( a[ i ].splice( 1 )[ 0 ] )
        a[ i ] = a[ i ][ 0 ].split( ' ' )
        a[ i ].pop()
        a[ i ].sort( ( a, b ) => a.length - b.length )
    } )

    // console.log( data[ 0 ] )
    // console.log( output[ 0 ] )

    let pattern = {}
    let lineResults = []

    for ( let i = 0; i < data.length; i++ ) {
        let line = data[ i ]

        let p = [ 1, 7, 4 ]
        p.forEach( e => pattern[ e ] = line.splice( 0, 1 )[ 0 ] )
        pattern[ 8 ] = line.splice( -1, 1 )[ 0 ]

        // 235
        let patL5 = line.filter( e => e.length === 5 )
        pattern[ 3 ] = patL5.filter( e => includesAllChar( e, pattern[ 1 ] ) )[ 0 ]
        line.splice( line.indexOf( pattern[ 3 ] ), 1 )
        patL5 = line.filter( e => e.length === 5 )

        // 069
        let patL6 = line.filter( e => e.length === 6 )
        pattern[ 9 ] = patL6.filter( e => includesAllChar( e, pattern[ 3 ] ) )[ 0 ]
        line.splice( line.indexOf( pattern[ 9 ] ), 1 )

        patL6 = line.filter( e => e.length === 6 )
        pattern[ 0 ] = patL6.filter( e => includesAllChar( e, pattern[ 7 ] ) )[ 0 ]
        line.splice( line.indexOf( pattern[ 0 ] ), 1 )

        pattern[ 6 ] = line.filter( e => e.length === 6 )[ 0 ]
        line.splice( line.indexOf( pattern[ 6 ] ), 1 )

        pattern[ 5 ] = line.filter( e => includesAllChar( pattern[ 6 ], e ) )[ 0 ]
        line.splice( line.indexOf( pattern[ 5 ] ), 1 )

        pattern[ 2 ] = line[ 0 ]

        // console.log( pattern )
        let knownPatterns = Object.values( pattern )

        let digits = []
        for ( const digit of output[ i ] ) {
            let l = digit.length
            for ( const p of knownPatterns ) {
                if ( p.length === l ) {
                    if ( isEqual( p, digit ) ) digits.push( knownPatterns.indexOf( p ) )
                }
            }
        }

        lineResults.push( Number( digits.join( '' ) ) )
    }

    function includesAllChar( arr, searchValues ) {
        let count = 0
        searchValues.split( '' ).forEach( ( e, i, a ) => { if ( arr.split( '' ).includes( e ) ) count++ } )
        if ( count === searchValues.length ) return true
        return false
    }

    function isEqual( a, b ) {
        a = a.split( '' ).sort().join( '' )
        b = b.split( '' ).sort().join( '' )
        if ( a === b ) return true
        return false
    }

    // console.log( lineResults )
    let result = 0
    lineResults.forEach( e => result = result + e )
    console.log( result )

}