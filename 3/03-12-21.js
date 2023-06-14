import { getJSON } from "../getJSON.js";
getJSON( './data.json' ).then( res => day3( res.data ), rej => console.error( rej ) )

function day3( data ) {
    let arr = data.map( e => e = Array.from( e ) );


    let zeros = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
    let ones = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]

    for ( const row of arr ) {
        for ( const i in row ) {
            row[ i ] === '0' ? zeros[ i ]++ : ones[ i ]++
        }
    }

    let gamma = ''
    let epsilon = ''

    for ( const i in zeros ) {
        zeros[ i ] < ones[ i ] ? gamma = gamma + '1' : gamma = gamma + '0'
        zeros[ i ] > ones[ i ] ? epsilon = epsilon + '1' : epsilon = epsilon + '0'
    }

    let gammaParsed = parseInt( gamma, 2 ).toString( 10 )
    let epsilongParsed = parseInt( epsilon, 2 ).toString( 10 )


    console.log( gammaParsed * epsilongParsed )

    // puzzle 2
    let oxygenArray = arr
    let co2Array = arr
    let zerosArr = []
    let onesArr = []


    for ( let i = 0; i < arr[ 0 ].length; i++ ) {
        if ( oxygenArray.length === 1 ) break
        zerosArr = []
        onesArr = []
        for ( const row of oxygenArray ) {
            row[ i ] === '0' ? zerosArr.push( row ) : onesArr.push( row )
        }
        zerosArr.length > onesArr.length ? oxygenArray = zerosArr : oxygenArray = onesArr
    }
    // console.log( oxygenArray )

    for ( let i = 0; i < arr[ 0 ].length; i++ ) {
        if ( co2Array.length === 1 ) break
        zerosArr = []
        onesArr = []
        for ( const row of co2Array ) {
            row[ i ] === '0' ? zerosArr.push( row ) : onesArr.push( row )
        }
        zerosArr.length <= onesArr.length ? co2Array = zerosArr : co2Array = onesArr
    }
    // console.log( co2Array )

    let oxy = parseInt( oxygenArray[ 0 ].join( '' ), 2 ).toString( 10 )
    let co2 = parseInt( co2Array[ 0 ].join( '' ), 2 ).toString( 10 )

    console.log( oxy * co2 )
}




