import { getJSON } from "../getJSON.js"
getJSON( './data.json' ).then( res => day1( res.numbers ), rej => console.error( rej ) )

function day1( numbers ) {
    /*
        first Part
    */
    console.log( 'firstPart: ', countPositiveChange( numbers ) )

    function countPositiveChange( numbers ) {
        let count = 0

        for ( const i in numbers ) {
            if ( numbers[ i ] > numbers[ i - 1 ] ) count++
        }
        return count
    }

    /*
        secondPart
    */
    let windowSums = []

    for ( const i in numbers ) {
        let sum = numbers[ i ] + numbers[ i * 1 + 1 ] + numbers[ i * 1 + 2 ]
        windowSums.push( sum )
    }

    console.log( 'secondPart: ', countPositiveChange( windowSums ) )

}