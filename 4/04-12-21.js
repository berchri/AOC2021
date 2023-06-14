import { getJSON } from "../getJSON.js";
getJSON( './data.json' ).then( res => day4( res ), rej => console.error( rej ) )

function day4( data ) {
    let selected = Array.from( data.selectedNumbers )
    let bingoBoards = Array.from( data.bingoBoards )

    let boardColums = []

    for ( const board of bingoBoards ) {
        let colums = []
        for ( let i = 0; i < 5; i++ ) {
            let col = []
            for ( const row of board ) {
                col.push( row[ i ] )
            }
            colums.push( col )
        }
        boardColums.push( colums )
    }

    let firstBingo = null
    let firstBingoNumbers = null
    let lastBingo;
    let lastBingoNumbers;

    let search = true
    while ( search ) {
        search = searchBingo()
    }

    let solution1 = getScore( firstBingo, firstBingoNumbers )
    let solution2 = getScore( lastBingo, lastBingoNumbers )

    console.log( 'solution puzzle 1: ', solution1 )
    console.log( 'solution puzzle 2: ', solution2 )
    // console.log( 'firstBingo', firstBingo )
    // console.log( 'firstBingoNumbers', firstBingoNumbers )
    // console.log( 'lastBingo', lastBingo )
    // console.log( 'lastBingo', firstBingoNumbers )


    function searchBingo() {
        let bingoIndex = null
        let searchNumbers;
        for ( let i = 4; i < selected.length; i++ ) {
            searchNumbers = selected.slice( 0, i + 1 )
            bingoIndex = getBingoBoard( bingoBoards, boardColums, searchNumbers )
            if ( bingoIndex !== null ) break
        }
        if ( !firstBingo ) {
            firstBingo = bingoBoards[ bingoIndex ]
            firstBingoNumbers = searchNumbers
        }
        if ( bingoIndex !== null ) {
            lastBingo = bingoBoards[ bingoIndex ]
            lastBingoNumbers = searchNumbers
            bingoBoards.splice( bingoIndex, 1 )
            boardColums.splice( bingoIndex, 1 )
            return true
        }
        return false
    }

    function getBingoBoard( boardRows, boardCols, searchNumbers ) {
        for ( let i = 0; i < boardRows.length; i++ ) {
            let rows = bingoRows( boardRows[ i ], searchNumbers )
            let cols = bingoRows( boardCols[ i ], searchNumbers )
            if ( rows === true || cols === true ) {
                return i
            }
        }
        return null
    }

    function bingoRows( boardRows, searchNumbers ) {
        for ( const row of boardRows ) {
            let hit = 0
            for ( const nr of row ) {
                if ( searchNumbers.includes( nr ) ) {
                    hit++
                    if ( hit === 5 ) return true
                }
            }
        }
        return false
    }

    function getScore( board, searchNumbers ) {
        let sum = 0
        for ( const row of board ) {
            for ( const nr of row ) {
                if ( !searchNumbers.includes( nr ) ) {
                    sum = sum + nr
                }
            }
        }
        let score = sum * searchNumbers.at( -1 )
        return score
    }
}