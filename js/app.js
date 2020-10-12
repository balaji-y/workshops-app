function formatDate( isoDate ) {
    const date = new Date( isoDate );
    return date.toDateString();
}

const dates = document.querySelectorAll( '.date' );
for( let i = 0; i < dates.length; i++ ) {
    dates[i].innerText = formatDate( dates[i].innerText );
}