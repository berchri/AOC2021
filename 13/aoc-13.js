import { getTXT } from '../getTXT.js'
getTXT( './data.txt' ).then( res => day13( res ), rej => console.error( rej ) )

function day13( rows ) {
    rows = rows.split( '\r\n' )
    let coords = rows.splice( 0, rows.indexOf( '' ) )
    let folds = rows.splice( rows.indexOf( '' ) + 1 ).map( e => e.replace( 'fold along ', '' ).split( '=' ) )

    folds = folds.map( e => [ e[ 0 ], Number( e[ 1 ] ) ] )
    coords = coords.map( e => e.split( ',' ).map( n => Number( n ) ) )

    for ( const fold of folds ) {
        foldPaper( fold[ 0 ], fold[ 1 ] )
    }

    for ( let i = 0; i < 6; i++ ) {
        createLine( i )
    }

    function foldPaper( foldDir, foldPos ) {
        let prim = []
        let sec = []
        let iCoord = foldDir === 'y' ? 1 : 0

        for ( const coord of coords ) {
            if ( coord[ iCoord ] * 1 < foldPos ) prim.push( coord )
            if ( coord[ iCoord ] * 1 > foldPos ) sec.push( coord )
        }

        sec.forEach( ( e, i, a ) => a[ i ][ iCoord ] = Math.abs( e[ iCoord ] - foldPos * 2 ) )

        coords = [ ...prim, ...sec ]

        let coordStr = coords.map( e => e.toString() )
        // Unique Values in Array with reduce.
        coordStr = coordStr.reduce( ( a, b ) => {
            if ( a.indexOf( b ) < 0 ) a.push( b )
            return a
        }, [] )

        coords = coordStr.map( e => e.split( ',' ).map( n => Number( n ) ) )
    }

    function createLine( lineNr ) {
        let line = ''
        for ( let i = 0; i < 40; i++ ) {
            if ( coords.find( ( e ) => { return e[ 0 ] === i && e[ 1 ] === lineNr } ) ) {
                line = line + '#'
            } else {
                line = line + ' '
            }
        }
        console.log( line )
    }
}