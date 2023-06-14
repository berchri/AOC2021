import { getTXT } from '../getTXT.js'
getTXT( './data.txt' ).then( res => day11( res ), rej => console.error( rej ) )

function day11( rows ) {
    rows = rows.split( '\r\n' ).map( e => e.split( '' ).map( ( e ) => Number( e ) ) )

    /*
        rows[x-1][y]        // top
        rows[x-1][y+1]      // top-right
        rows[x][y+1]        // right
        rows[x+1][y+1]      // bottom-right
        rows[x+1][y]        // bottom
        rows[x+1][y-1]      // bottom-left
        rows[x][y-1]        // left
        rows[x-1][y-1]      // top-left
    */

    let xFirst = 0
    let xLast = rows.length - 1
    let yFirst = 0
    let yLast = rows[ 0 ].length - 1
    let count = 0
    let sync
    let reps = 1

    // for ( let i = 0; i < 100; i++ ) {
    for ( let i = 0; i < reps; i++ ) {
        step()
        if ( checkSync() ) {
            sync = i + 1
            break
        } else {
            reps++
        }
    }

    // console.log('part 1: ', count )
    console.log( 'part 2', sync )

    function step() {
        let flashed = []
        increaseAll()
        flashed = getTens()
        while ( flashed.length > 0 ) {
            let xy = flashed.shift()
            increaseSurrounding( xy[ 0 ], xy[ 1 ] )
            getTens().forEach( e => flashed.push( e ) )
        }
    }

    function increaseAll() {
        for ( const row of rows ) {
            row.forEach( ( e, i, a ) => { a[ i ] = e + 1 } )
        }
    }

    function getTens() {
        let tensXY = []
        for ( let x = 0; x < rows.length; x++ ) {
            rows[ x ].forEach( ( e, y ) => {
                if ( e === 10 ) {
                    rows[ x ][ y ] = 0
                    tensXY.push( [ x, y ] )
                    count++
                }
            } )
        }
        return tensXY
    }

    function increaseSurrounding( x, y ) {
        // straight
        if ( x > xFirst ) if ( rows[ x - 1 ][ y ] > 0 ) rows[ x - 1 ][ y ]++
        if ( x < xLast ) if ( rows[ x + 1 ][ y ] > 0 ) rows[ x + 1 ][ y ]++
        if ( y < yLast ) if ( rows[ x ][ y + 1 ] > 0 ) rows[ x ][ y + 1 ]++
        if ( y > yFirst ) if ( rows[ x ][ y - 1 ] > 0 ) rows[ x ][ y - 1 ]++
        // diagonal
        if ( x > xFirst && y < yLast ) if ( rows[ x - 1 ][ y + 1 ] > 0 ) rows[ x - 1 ][ y + 1 ]++
        if ( x < xLast && y > yFirst ) if ( rows[ x + 1 ][ y - 1 ] > 0 ) rows[ x + 1 ][ y - 1 ]++
        if ( x < xLast && y < yLast ) if ( rows[ x + 1 ][ y + 1 ] > 0 ) rows[ x + 1 ][ y + 1 ]++
        if ( x > xFirst && y > yFirst ) if ( rows[ x - 1 ][ y - 1 ] > 0 ) rows[ x - 1 ][ y - 1 ]++
    }

    function checkSync() {
        let zerosOnly = true
        for ( const row of rows ) {
            row.forEach( e => { if ( e !== 0 ) zerosOnly = false } )
        }
        return zerosOnly
    }



















}