/////gets the input vaule and add its to the h2 tag user section and adds display none to the button and input 

$("#myBtn").click(function () {


    var inputText = $("input[type= 'text'").val()
    $("#user").text = inputText;
    $("#user").text(inputText)
    console.log(inputText)
    $("input[type= 'text'").val("")
    $("input[type= 'text'").css("display", " none")
    $("#myBtn").css("display", " none")
    $("h5").css("display", " none")

})

///check if the user entered thir name 
$('#Play').prop('disabled', true);

$("#myBtn").click(function () {
    $('#Play').prop('disabled', false);


})


function checkUserName(txt) {
    var addUser = document.getElementById('myBtn');
    if (txt.value != '') {
        addUser.disabled = false;
    } else {
        addUser.disabled = true;
    }
}

////if the user clicks on the paper
$("#scissors").click(function () {

    var paper = $("img#paper").attr("alt");
    var rock = $("img#rock").attr("alt");
    var scissors = $("img#scissors").attr("alt");



    var months = [rock, paper, scissors];


    var randomhoce = months[Math.floor(Math.random() * months.length)];
    console.log(randomhoce)
    if (randomhoce === paper) {





        $("#who_wins").text(
            "YOU WIN!!!")
        console.log(scoreUser)
        console.log(scoreComputer)
        scoreUser++

        scoreFuncUser()
        $("#user_score").text(scoreUser)
    }
    if (randomhoce === rock) {
        $("#who_wins").text("YOU LOST!!!")
        console.log(scoreUser)
        console.log(scoreComputer)
        scoreComputer++
        scoreFunccomputer()

        $("#computer_score").text(scoreComputer)


    }
    if (randomhoce === scissors) {




        $("#who_wins").text(
            "IT'S A DRAW!!!")
        console.log(scoreUser)
        console.log(scoreComputer)
    }

})




////if the user clicks on the paper


$("#paper").click(function () {
    var paper = $("img#paper").attr("alt");
    var rock = $("img#rock").attr("alt");
    var scissors = $("img#scissors").attr("alt");



    var tools = [rock, paper, scissors];


    var randomTools = tools[Math.floor(Math.random() * tools.length)];
    console.log(randomTools)


    if (randomTools === paper) {
        $("#who_wins").text(
            "IT'S A DRAW!!!")
        console.log(scoreUser)
        console.log(scoreComputer)
    }
    if (randomTools === rock) {
        console.log(scoreUser)
        console.log(scoreComputer)

        $("#who_wins").text(
            "YOU WIN!!!")

        scoreUser++
        console.log(scoreUser)
        console.log(scoreComputer)
        scoreFuncUser()
        $("#user_score").text(scoreUser)

    }
    if (randomTools === scissors) {

        $("#who_wins").text("YOU LOST!!!")
        console.log(scoreUser)
        console.log(scoreComputer)
        scoreComputer++
        scoreFunccomputer()

        $("#computer_score").text(scoreComputer)
    }

})



$("#rock").click(function () {
    var paper = $("img#paper").attr("alt");
    var rock = $("img#rock").attr("alt");
    var scissors = $("img#scissors").attr("alt");



    var tools = [rock, paper, scissors];


    var randomTools = tools[Math.floor(Math.random() * tools.length)];
    console.log(randomTools)


    if (randomTools === paper) {
        $("#who_wins").text("YOU LOST!!!")
        console.log(scoreUser)
        console.log(scoreComputer)
        scoreComputer++
        scoreFunccomputer()

        $("#computer_score").text(scoreComputer)
    }
    if (randomTools === rock) {

        $("#who_wins").text("IT'S A DRAW!!!")

        console.log(scoreUser)
        console.log(scoreComputer)

    }


    if (randomTools === scissors) {

        console.log(scoreUser)
        console.log(scoreComputer)

        $("#who_wins").text(
            "YOU WIN!!!")

        scoreUser++

        scoreFuncUser()
        $("#user_score").text(scoreUser)

    }

})

var scoreUser = 0;
var scoreComputer = 0;
var userNameWon = $("#user")

function scoreFuncUser() {
    if (scoreUser === 4 || scoreComputer === 4) {
        playAgin()
        scoreUser = 0;
        scoreComputer = 0;
        $("#final_results").text("YOU WON!!!!")


        $("#who_wins").text(
            "")
        $("#computer_score").text(0)

    }
}




function scoreFunccomputer() {
    if (scoreUser === 4 || scoreComputer === 4) {
        playAgin()
        $("#final_results").text(
            "YOU LOST !!!")
        scoreComputer = 0;
        scoreUser = 0;
        $("#who_wins").text(
            "")

        $("#user_score").text(0)

    }
}





function playAgin() {

    $(".game_over").css("opacity", "0.4")
    $("#gameOver").css("display", " block")
    $(".img_class").css("pointer-events", "none")


    $("#gameOver").click(function () {
        $(".img_class").css("pointer-events", "auto")
        $(".game_over").css("opacity", "1")
        $("#gameOver").css("display", "none")
        $("#final_results").text("")
        console.log(scoreUser)
        console.log(scoreComputer)
    })

}
