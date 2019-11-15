function getRepo(username) {
    fetch(`https://api.github.com/users/:${username}/repos&all`)
    .then(response => {
        if(response.ok) {
            return response.json();
        } throw new Error(response.statusText);
    })
    .then(responseJson => renderResults(responseJson))
    .catch (showError());
}

function watchForm() {
    $('form').on('submit', function() {
        event.preventDefault();
        console.log(event);
        $('.handle').empty();
        $('.error-return').empty();
        const username = $('#handle').val();
        getRepo(username);
    })
}

function renderResults(responseJson) {
    $('.repos').empty();
    $('.repos').append(result);
    /*let result = "";
    for(let i = 0; i < responseJson.length; i++) {
        
    }*/
}

function showError() {
    getRepo();
    $('.error-return').html(`Sorry something went wrong - please check your internet connection or try again later`);
}

$(function() {
    watchForm();
    console.log('ready for handle');
})