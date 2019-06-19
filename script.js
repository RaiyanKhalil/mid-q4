/* Add your script here */
var words = ["education", "technology", "mathematics", "science", "engineering", "arithmetic"]

$(document).ready(function(){
    $('#pBtn').click(function(){
        console.log("WEWWEWEWE")
        var num2 = $('#num1').val()
        for(var i = 0; i < words.length; i++){
            //console.log(words[i])
            if(num2 == i){
                console.log(words[i])
                $('#corrAns2').text(words[i])
                
            }
        }
    })
})