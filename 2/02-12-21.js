import { getJSON } from "../getJSON.js";
getJSON( './data.json' ).then( res => day2( res.data ), rej => console.error( rej ) )

function day2( data ) {
    let moves = data

    let x = 0
    let y = 0

    for ( const move of moves ) {
        let n = move.slice( -1 )
        if ( move.includes( 'forward' ) ) x = x + Number( n )
        if ( move.includes( 'down' ) ) y = y + Number( n )
        if ( move.includes( 'up' ) ) y = y - Number( n )
    }

    console.log( '--- Part One ---' )
    console.log( 'x*y: ', x * y )

    x = 0
    y = 0
    let aim = 0

    for ( const move of moves ) {
        let n = move.slice( -1 )
        if ( move.includes( 'forward' ) ) {
            x = x + Number( n )
            y = y + aim * Number( n )
        }
        if ( move.includes( 'down' ) ) {
            aim = aim + Number( n )
        }
        if ( move.includes( 'up' ) ) {
            aim = aim - Number( n )
        }
    }

    console.log( '--- Part Two ---' )
    console.log( 'x*y: ', x * y )

}


