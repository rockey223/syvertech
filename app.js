function validate() {
  const username = document.getElementById("floatingInput").value;
  const Email = document.getElementById("floatingemail").value;
  const Phone = document.getElementById("floatingphone").value;

  var insert = /^[0-9]+$/;

  if (username == "" || username.length < 3 || username.match(insert)) {
    alert("Enter Your proper name.");
  } else {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (Email.match(mailformat)) {
      if (isNaN(Phone)) {
        alert("Enter number properly");
      } else {
        if (Phone.length < 10) {
          alert("Number must be of 10 degit");
        } else {
          alert("Done");
        }
      }
    } else {
      alert("You have entered an invalid email address!");
    }
  }
}
