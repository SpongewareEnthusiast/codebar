<<<<<<< HEAD
$(document).ready(function() {
  $(document).on('keypress', '#username', function(event) {
    if (event.which === 13) { // check the key was <enter>
      var input = $(this);
      var username = input.val();


       var  x = getGithubInfo(username);
      showUser(x);
    }
  });
});
function getGithubInfo(username) {
  var url = 'https://api.github.com/users/codebar'


  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', url, false);
  xmlhttp.send();

  var data = null;
  data = xmlhttp.responseText;

  return data
//  console.log(data);
}
/***console.log(getGithubInfo(username))// github user finder example***/
function showUser(xmlhttp) {


    var user = JSON.parse(xmlhttp);
    var userID =  user.id;
    if(userID == undefined){
      $("#profile h2").append("There is no user with this name!");
    }
    else{
      var userLogin = user.login
      var userBio = user.bio
      if (userBio == null){
        $(".information").append("there is no story!")
      }
      else{
        var placeForBio = $(".information").append("The story: "+userBio);
      }
      var userAvatar = user.avatar_url;
      var placeForProfile = $("#profile h2").append("The user's login is " +userLogin + " and the id numer is " + userID);
      var placeForAvatar = $(".avatar").append("<img src = "+ userAvatar +"></img>")

      }
    };


  //  $('#profile h2').innerHTML("<p> This user's name is "+ user.login + "and  id is "+ user.id);

    //$('#profile h2').innerHTML("<p>There is no such user!</p>")
//load of rubbish to fix
};
=======

};
>>>>>>> 10f5d891bb0fe393699d230eaa811be23e109401
