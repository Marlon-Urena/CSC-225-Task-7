$('.btn').on('click',function() {
    var input = $('#input').val();
    if (input.trim().length > 0){
        var paragraph = "<p>"+input+"</p>";
        $('#tasks').append(paragraph);    
        return;
    }
    alert("Input is not valid!");
})