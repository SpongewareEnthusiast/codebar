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
    var userLogin = user.login;
    var userAvatar = user.avatar_url;

    var contentOfP = this.document.body
    var all = document.getElementById("profile").innerHTML;

    parser = new DOMParser();
    doc = parser.parseFromString(all, "text/html");
    var placeWithId = doc.getElementsByTagName("2")
    console.log(placeWithId)
    var content =  placeWithId.createTextNode("tis is a new paragrep");
    //contentOfPlaceWithId = "<p> This user's name is </p>"//+ user.login + " and  id is "+ user.id +"</p>"


    //for (var i=0, max=all.length; i < max; i++) {
     // Do something with the element here

    console.log(contents);


  //  $('#profile h2').innerHTML("<p> This user's name is "+ user.login + "and  id is "+ user.id);

    //$('#profile h2').innerHTML("<p>There is no such user!</p>")
//load of rubbish to fix
};
=======
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
    var userLogin = user.login;
    var userAvatar = user.avatar_url;

    var contentOfP = this.document.body
    var all = document.getElementById("profile").innerHTML;

    parser = new DOMParser();
    doc = parser.parseFromString(all, "text/html");
    var placeWithId = doc.getElementsByTagName("2")
    console.log(placeWithId)
    var content =  placeWithId.createTextNode("tis is a new paragrep");
    //contentOfPlaceWithId = "<p> This user's name is </p>"//+ user.login + " and  id is "+ user.id +"</p>"


    //for (var i=0, max=all.length; i < max; i++) {
     // Do something with the element here

    console.log(contents);


  //  $('#profile h2').innerHTML("<p> This user's name is "+ user.login + "and  id is "+ user.id);

    //$('#profile h2').innerHTML("<p>There is no such user!</p>")

};
>>>>>>> 10f5d891bb0fe393699d230eaa811be23e109401
