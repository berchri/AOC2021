import { getTXT } from "../getTXT.js";
getTXT( './data.txt' ).then( res => day6( res ), rej => console.error( rej ) )


function day6( data ) {
    /*
    let fish = []
    let lines = data.split( "\n" )
    lines.forEach( ( e ) => {
        let arr = e.split( ',' ).map( e => Number( e ) )
        fish.push( arr )
    } )
    console.log( fish )
    */

    // let fishRows = [ [ 3, 4, 3, 1, 2 ] ]

    let initialFish = data.split( ',' ).map( e => Number( e ) )

    let fishRows = []
    fishRows.push( initialFish )

    for ( let i = 0; i < 80; i++ ) {
        let nextRow = []
        let newFish = []
        for ( const fish of fishRows[ i ] ) {
            if ( fish > 0 ) nextRow.push( fish - 1 )
            if ( fish === 0 ) {
                newFish.push( 8 )
                nextRow.push( 6 )
            }
        }
        nextRow = nextRow.concat( newFish )
        fishRows.push( nextRow )
    }

    console.log( fishRows.at( -1 ).length )

}