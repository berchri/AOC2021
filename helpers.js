
function transpose( matrix ) {
    let [ row ] = matrix
    return row.map( ( e, i ) => matrix.map( row => row[ i ] ) )
}

function logArrInRows( string, array ) {
    if ( typeof string === 'string' && typeof array === 'object' ) {
        console.log( string )
        array.forEach( e => console.log( e ) )
    }
    if ( typeof string === 'object' && typeof array === 'undefined' ) {
        string.forEach( e => console.log( e ) )
    }
}

// Unique functions

// fast
function uniqueArray2( arr ) {
    var a = [];
    for ( var i = 0, l = arr.length; i < l; i++ )
        if ( a.indexOf( arr[ i ] ) === -1 && arr[ i ] !== '' )
            a.push( arr[ i ] );
    return a;
}

// with Set 1
function uniqueArray4( a ) {
    return [ ...new Set( a ) ];
}

// with Set 2
let uniqueItems = [ ...new Set( items ) ]

// with filter
var myArray = [ 'a', 1, 'a', 2, '1' ];
var unique = myArray.filter( ( v, i, a ) => a.indexOf( v ) === i );

export { transpose, logArrInRows }