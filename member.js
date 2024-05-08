function skillsMember() {
  var member = document.getElementById("member");
  var memberValue = member.options[member.selectedIndex].value;
  var memberText = member.options[member.selectedIndex].text;

  if (memberValue == "member") {
    document.getElementById("skillsMember").style.display = "block";
    document.getElementById("skillsMember").innerHTML = "Please select a member";
  } else {
    document.getElementById("skillsMember").style.display = "block";
    document.getElementById("skillsMember").innerHTML = "You have selected: " + memberText;
  }
}