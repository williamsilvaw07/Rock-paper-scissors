var playButton = document.getElementById("Play")
var container = document.querySelector(".container")
var nameInput = document.getElementById("username").Value


function fadeOut() {
    playButton.addEventListener("click", function () {

        container.classList.add("fadein");

        playButton.style.display = "none"
    })
}

/***$("input[type= 'text'").keypress(function (event) {



    var inputText = $("input[type= 'text'").val()

    $("#user").text = inputText
    $(this).val("")
    console.log(this)
    $("#user").text
}
})

**/
