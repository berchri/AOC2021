import { logArrInRows } from '../helpers.js'
import { getTXT } from '../getTXT.js'
getTXT( './data-test.txt' ).then( res => day12( res ), rej => console.error( rej ) )

function day12( rows ) {
    rows = rows.split( '\r\n' ).map( e => e.split( '-' ) )

    let startLinks = rows.filter( e => e.includes( 'start' ) )
    let endLinks = rows.filter( e => e.includes( 'end' ) )
    let caveLinks = rows.filter( e => !e.includes( 'start' ) && !e.includes( 'end' ) )

    let caveLinksRev = caveLinks.reverse()
    caveLinks.push( ...caveLinksRev )

    startLinks.forEach( ( e, i, a ) => { if ( e[ 1 ] === 'start' ) a = e.reverse() } )
    endLinks.forEach( ( e, i, a ) => { if ( e[ 0 ] === 'end' ) a = e.reverse() } )

    console.table( startLinks )
    console.table( endLinks )
    console.table( caveLinks )

    let path
    let paths = []

    function startPath() {

    }

    'graph algorythm'
    'recursive Functions'

































}