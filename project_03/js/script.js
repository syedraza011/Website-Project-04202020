jQuery(document).ready(function(){
    
    axios.get('http://csc225.mockable.io/books').then(function(response){
//console.log(data);
        var bookHTML=response.data.map(function(movie){
            console.log(movie)
            return '<p class="movie" data-movie="'+ movie.id +'">' + movie.title +'<p>';
           
           
        });

        $('#books').html(bookHTML);
    });
   

 $('.allbooks').html('<img class="mx- auto loading" src="https://media.giphy.com/media/XDSMr8dDUs04dvz3LV/giphy.gif" alt="loading...">');


    $('body').on('click','.movie',function(){
        $('.movie').removeClass('active');
        var id=$(this).data('movie');
        $(this).addClass('active');
       
        var url='http://csc225.mockable.io/books/' + id;
       
        $('.card').html('<img class="mx-auto loading" src="https://media.giphy.com/media/XDSMr8dDUs04dvz3LV/giphy.gif" alt="loading..">');
        axios.get(url).then(function(response){
            var aBook=response.data;
         
            var bookCover='<img class="card-img-top" src="' + aBook.cover + '">';
           
            var bookHTML ='<h4 class="card-title pt-2"> Book Title: '+ aBook.title +'</h4>';
            bookHTML += '<p class="card-text strong"> Book Author: ' + aBook.author + '</p>';
            bookHTML += '<p class="italic"> Release date: ' + aBook.year + '</p>';
            bookHTML += '<p class="card-text"> http://csc225.mockable.io/books/' + aBook.id + '</p>';
            bookHTML += '<p class="card-text">' + aBook.link + '</p>';
            bookHTML += '<p class="card-text"> Country: ' + aBook.country + '</p>';
            bookHTML += '<p class="card-text"> Book Language: ' + aBook.language + '</p>';
            bookHTML += '<p class="card-text"> Total Pages: ' + aBook.pages + '</p>';

            $('.card').html(bookCover + bookHTML);
           
        });
       
    });
    //log.console(movie);
});