import { getTXT } from '../getTXT.js'
getTXT( './data.txt' ).then( res => day10( res ), rej => console.error( rej ) )

function day10( rows ) {
    rows = rows.split( '\r\n' )
    // console.log( rows )

    let pairs = [ '()', '{}', '[]', '<>' ]
    let opening = [ '(', '[', '{', '<' ]
    let closing = [ ')', ']', '}', '>' ]

    let scores = [ 3, 57, 1197, 25137 ]
    let points = []
    let part2 = []

    for ( let row of rows ) {
        let char = false
        while ( !char ) {
            char = searchWrongClosing()
            if ( countClosing() === 0 ) {
                part2.push( row )
                break
            }
        }
        if ( char === null ) continue
        points.push( scores[ closing.indexOf( char ) ] )

        function countClosing() {
            let count = 0
            closing.forEach( e => { if ( row.includes( e ) ) count++ } )
            return count
        }

        function searchWrongClosing() {
            for ( const pair of pairs ) {
                let search = true
                while ( search ) {
                    let i = row.indexOf( pair )
                    if ( i === -1 ) {
                        search = false
                        continue
                    }
                    row = row.replace( pair, '' )
                    let match = row.slice( i - 1, i + 1 )
                    if ( match[ 0 ] === undefined || match[ 1 ] === undefined ) continue
                    if ( opening.includes( match[ 0 ] ) && opening.includes( match[ 1 ] ) ) continue
                    if ( closing.includes( match[ 0 ] ) && closing.includes( match[ 1 ] ) ) continue
                    if ( pairs.includes( match ) ) continue
                    return match[ 1 ]
                }
            }
            return null
        }
    }

    let sum = points.reduce( ( a, b ) => a + b, 0 )
    console.log( sum )

    /*
        Part 2
    */

    let toComplete = part2.map( e => e.split( '' ).reverse() )
    let completion = []

    for ( const row of toComplete ) {
        let rowReversed = []
        row.forEach( ( e, i, a ) => rowReversed.push( closing[ opening.indexOf( e ) ] ) )
        completion.push( rowReversed )
    }

    let value = [ 1, 2, 3, 4 ]
    let totals = []

    for ( const row of completion ) {
        let count = 0
        row.forEach( ( e ) => { count = count * 5 + value[ closing.indexOf( e ) ] } )
        totals.push( count )
    }

    totals.sort( ( a, b ) => a - b )
    console.log( totals[ Math.floor( totals.length / 2 ) ] )












}