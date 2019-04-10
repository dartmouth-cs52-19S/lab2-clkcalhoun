var numq = 5;
var hammond = 0;
var clarkson = 0;
var may = 0;

$('#rh').hide();
$('#rc').hide();
$('#rm').hide();
$('#scroll').hide();
$('#error').hide();

$("#answer1").click(function(){
    $( "#answer1" ).fadeTo( "slow" , 1, function() { });
    $( "#answer2" ).fadeTo( "slow" , 0.3, function() { });
    $( "#answer3" ).fadeTo( "slow" , 0.3, function() { });
});
$("#answer2").click(function(){
    $( "#answer2" ).fadeTo( "slow" , 1, function() { });
    $( "#answer1" ).fadeTo( "slow" , 0.3, function() { });
    $( "#answer3" ).fadeTo( "slow" , 0.3, function() { });
});
$("#answer3").click(function(){
    $( "#answer3" ).fadeTo( "slow" , 1, function() { });
    $( "#answer2" ).fadeTo( "slow" , 0.3, function() { });
    $( "#answer1" ).fadeTo( "slow" , 0.3, function() { });
});
$("#answer4").click(function(){
    $( "#answer4" ).fadeTo( "slow" , 1, function() { });
    $( "#answer5" ).fadeTo( "slow" , 0.3, function() { });
    $( "#answer6" ).fadeTo( "slow" , 0.3, function() { });
});
$("#answer5").click(function(){
    $( "#answer5" ).fadeTo( "slow" , 1, function() { });
    $( "#answer4" ).fadeTo( "slow" , 0.3, function() { });
    $( "#answer6" ).fadeTo( "slow" , 0.3, function() { });
});
$("#answer6").click(function(){
    $( "#answer6" ).fadeTo( "slow" , 1, function() { });
    $( "#answer4" ).fadeTo( "slow" , 0.3, function() { });
    $( "#answer5" ).fadeTo( "slow" , 0.3, function() { });
});
$("#answer7").click(function(){
    $( "#answer7" ).fadeTo( "slow" , 1, function() { });
    $( "#answer8" ).fadeTo( "slow" , 0.3, function() { });
    $( "#answer9" ).fadeTo( "slow" , 0.3, function() { });
});
$("#answer8").click(function(){
    $( "#answer8" ).fadeTo( "slow" , 1, function() { });
    $( "#answer7" ).fadeTo( "slow" , 0.3, function() { });
    $( "#answer9" ).fadeTo( "slow" , 0.3, function() { });
});
$("#answer9").click(function(){
    $( "#answer9" ).fadeTo( "slow" , 1, function() { });
    $( "#answer7" ).fadeTo( "slow" , 0.3, function() { });
    $( "#answer8" ).fadeTo( "slow" , 0.3, function() { });
});
$("#answer10").click(function(){
    $( "#answer10" ).fadeTo( "slow" , 1, function() { });
    $( "#answer11" ).fadeTo( "slow" , 0.3, function() { });
    $( "#answer12" ).fadeTo( "slow" , 0.3, function() { });
});
$("#answer11").click(function(){
    $( "#answer11" ).fadeTo( "slow" , 1, function() { });
    $( "#answer10" ).fadeTo( "slow" , 0.3, function() { });
    $( "#answer12" ).fadeTo( "slow" , 0.3, function() { });
});
$("#answer12").click(function(){
    $( "#answer12" ).fadeTo( "slow" , 1, function() { });
    $( "#answer10" ).fadeTo( "slow" , 0.3, function() { });
    $( "#answer11" ).fadeTo( "slow" , 0.3, function() { });
});
$("#answer13").click(function(){
    $( "#answer13" ).fadeTo( "slow" , 1, function() { });
    $( "#answer14" ).fadeTo( "slow" , 0.3, function() { });
    $( "#answer15" ).fadeTo( "slow" , 0.3, function() { });
});
$("#answer14").click(function(){
    $( "#answer14" ).fadeTo( "slow" , 1, function() { });
    $( "#answer13" ).fadeTo( "slow" , 0.3, function() { });
    $( "#answer15" ).fadeTo( "slow" , 0.3, function() { });
});
$("#answer15").click(function(){
    $( "#answer15" ).fadeTo( "slow" , 1, function() { });
    $( "#answer13" ).fadeTo( "slow" , 0.3, function() { });
    $( "#answer14" ).fadeTo( "slow" , 0.3, function() { });
});


$('#submit').on('click', function(e) {
    hammond = 0;
    clarkson = 0;
    may = 0;
    var choices = $("input[type='radio']:checked").map(function(i, radio) {
        return $(radio).val();
    }).toArray();
    choices.forEach(check);

    // console.log("hammond " + hammond);
    // console.log("clarkson " +clarkson);
    // console.log("may " +may);

    if(choices.length < 5){
        $('#error').show();
    }
    else if (hammond == clarkson && clarkson == may && may == hammond){
        $('#rh').hide();
        $('#rc').hide();
        $('#rm').hide();
        $('#scroll').hide();
    }else{
        if (hammond >= clarkson && hammond >= may){
            $('#rh').show();
            $('#scroll').show();
            $('#error').hide();
        }else{
            $('#rh').hide();
        }
        if (clarkson > hammond && clarkson >= may){
            $('#rc').show();
            $('#scroll').show();
            $('#error').hide();
        }else{
            $('#rc').hide();
        }
        if (may > clarkson && may > hammond){
            $('#rm').show();
            $('#scroll').show();
            $('#error').hide();
        }else{
            $('#rm').hide();
        }
    }
});

function check(value, index, array) {
    // console.log("value " + value);
    if (value === "hammond"){
        // console.log("increasing hammond");
        hammond++;
    }
    else if (value === "clarkson"){
        // console.log("increasing clarkson");
        clarkson++;
    }else if (value === "may"){
        // console.log("increasing may");
        may++;
    }
}

