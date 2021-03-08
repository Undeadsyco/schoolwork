$(document).ready(function () {
    let newRequest = new XMLHttpRequest();
    newRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let myObj = JSON.parse(this.responseText);
            $("button").click(function(){
                repo1 = document.getElementById("repo1A");
                repo2 = document.getElementById("repo2A");
                repo3 = document.getElementById("repo3A");
                repo1.innerHTML = myObj[0].name;
                repo1.href = myObj[0].html_url;
                repo2.innerHTML = myObj[1].name;
                repo2.href = myObj[1].html_url;
                repo3.innerHTML = myObj[2].name;
                repo3.href = myObj[2].html_url;
            });
            $("button").dbclick(function(){});
        }
    };
    newRequest.open("GET", "https://api.github.com/users/Undeadsyco/repos", true);
    newRequest.send();

    linkedinImg();
    facebookImg();
    discordImg();
    instagramImg();
});

const linkedinImg = () => {
    $("#linkedin").hover(function(){
        $("#linkImg").attr("src", "./icons/linkedin.png").css("width", "76px");;
    }, function(){
        $("#linkImg").attr("src", "./icons/linkedin-blue.png").css("width", "64px");
    });
}

const facebookImg = () => {
    $("#facebook").hover(function(){
        $("#bookImg").attr("src", "./icons/facebook.png").css("width", "76px");;
    }, function(){
        $("#bookImg").attr("src", "./icons/facebook-blue.png").css("width", "64px");
    });
}

const discordImg = () => {
    $("#discord").hover(function(){
        $("#cordImg").attr("src", "./icons/discord.png").css("width", "76px");
    }, function(){
        $("#cordImg").attr("src", "./icons/discord-blue.png").css("width", "64px");
    });
}

const instagramImg = () => {
    $("#instagram").hover(function(){
        $("#gramImg").attr("src", "./icons/instagram.png").css("width", "76px");;
    }, function(){
        $("#gramImg").attr("src", "./icons/instagram-blue.png").css("width", "64px");
    });
}