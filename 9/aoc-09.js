import { getTXT } from '../getTXT.js'
getTXT( './data.txt' ).then( res => day9( res ), rej => console.error( rej ) )

function day9( rows ) {
    rows = rows.split( '\r\n' )
    rows.forEach( ( e, i, a ) => a[ i ] = e.split( '' ).map( e => Number( e ) ) )

    let h = rows[ 0 ].length
    let v = rows.length
    let rFirst = 0
    let rLast = rows.length - 1
    let cFirst = 0
    let cLast = rows[ 0 ].length - 1
    /*
        rows[ iv ][ ih ]            // Original
        rows[ iv - 1 ][ ih ]        // upper
        rows[ iv ][ ih + 1 ]        // right
        rows[ iv + 1 ][ ih ]        // lower
        rows[ iv ][ ih - 1 ]        // left
    */
    let mins = []
    let minsPos = []

    for ( let iv = 0; iv < v; iv++ ) {
        for ( let ih = 0; ih < h; ih++ ) {
            let e = rows[ iv ][ ih ]
            if ( iv !== rFirst ) { if ( rows[ iv - 1 ][ ih ] <= e ) continue }
            if ( ih !== cLast ) { if ( rows[ iv ][ ih + 1 ] <= e ) continue }
            if ( iv !== rLast ) { if ( rows[ iv + 1 ][ ih ] <= e ) continue }
            if ( ih !== cFirst ) { if ( rows[ iv ][ ih - 1 ] <= e ) continue }
            mins.push( e )
            minsPos.push( [ iv, ih ] )
        }
    }

    console.log( mins.reduce( ( a, b ) => ( a + 1 ) + b, 0 ) )

    /*
        Part Two
    */

    let sizes = []

    for ( const minXY of minsPos ) {
        let checkXY = [ minXY ]
        let checked = []
        while ( checkXY.length > 0 ) {
            let xy = checkXY.splice( 0, 1 )[ 0 ]
            if ( checked.includes( xy.join( '' ) ) ) continue
            checked.push( xy.join( '' ) )
            let x = xy[ 0 ]
            let y = xy[ 1 ]

            if ( x > 0 ) {
                if ( rows[ x - 1 ][ y ] < 9 ) {
                    checkXY.push( [ x - 1, y ] )
                }
            }
            if ( x < rLast ) {
                if ( rows[ x + 1 ][ y ] < 9 ) {
                    checkXY.push( [ x + 1, y ] )
                }
            }
            if ( y > 0 ) {
                if ( rows[ x ][ y - 1 ] < 9 ) {
                    checkXY.push( [ x, ( y - 1 ) ] )
                }
            }
            if ( y < cLast ) {
                if ( rows[ x ][ y + 1 ] < 9 ) {
                    checkXY.push( [ x, y + 1 ] )
                }
            }
        }
        sizes.push( checked.length )
    }

    let solution = sizes.sort( ( a, b ) => a - b ).splice( -3, 3 ).reduce( ( a, b ) => a * b, 1 )
    console.log( solution )
}







