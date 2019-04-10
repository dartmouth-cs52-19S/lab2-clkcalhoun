var numq = 5;
var hammond = 0;
var clarkson = 0;
var may = 0;

$('#rh').hide();
$('#rc').hide();
$('#rm').hide();
$('#scroll').hide();

$('#submit').on('click', function(e) {
    // gather all checked radio-button values
    hammond = 0;
    clarkson = 0;
    may = 0;
    var choices = $("input[type='radio']:checked").map(function(i, radio) {
        return $(radio).val();
    }).toArray();
    // now you have an array of choices = ["valueofradiobox1", "valueofradiobox2", "valueofradiobox2"]
    // you'll need to do some calculations with this
    // a naive approach would be to just choose the most common option - seems reasonable
    choices.forEach(check);

    // console.log("hammond " + hammond);
    // console.log("clarkson " +clarkson);
    // console.log("may " +may);

    if (hammond == clarkson && clarkson == may && may == hammond){
        $('#rh').hide();
        $('#rc').hide();
        $('#rm').hide();
        $('#scroll').hide();
    }else{
        if (hammond >= clarkson && hammond >= may){
            $('#rh').show();
            $('#scroll').show();
        }else{
            $('#rh').hide();
        }
        if (clarkson > hammond && clarkson >= may){
            $('#rc').show();
            $('#scroll').show();
        }else{
            $('#rc').hide();
        }
        if (may > clarkson && may > hammond){
            $('#rm').show();
            $('#scroll').show();
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

