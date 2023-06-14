import { getTXT } from "../getTXT.js";
getTXT( './data.txt' ).then( res => day7( res ), rej => console.error( rej ) )

function day7( txt ) {
    // let data = [ 16, 1, 2, 0, 4, 2, 7, 1, 2, 14 ]
    let data = txt.split( ',' ).map( e => Number( e ) )


    let max = Math.max( ...data )
    let min = Math.min( ...data )

    let fuel = []
    let fuel2 = []

    for ( let i = min; i <= max; i++ ) {
        let dist = data.map( e => Math.abs( e - i ) )

        let sum = dist.reduce( ( a, b ) => a + b, 0 )
        fuel.push( sum )

        let fuelIncrease = dist.map( e => ( e * ( e + 1 ) ) / 2 )
        let sumFuelIncrease = fuelIncrease.reduce( ( a, b ) => a + b, 0 )
        fuel2.push( sumFuelIncrease )
    }

    let minFuel = Math.min( ...fuel )
    let minFuel2 = Math.min( ...fuel2 )
    console.log( minFuel )
    console.log( minFuel2 )

}