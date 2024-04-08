function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
    print("we got here in onSignIn");
    // You can use this information to authenticate the user on your server.

    // Update the content of the HTML element with id "userEmail"
    document.getElementById("userEmail").innerText = "Email: " + profile.getEmail();
}



// function signOut(){
//     print("I am inside of signOut")
//     const button = document.getElementById('signout_button');
//     button.onclick = () => {
//         google.accounts.id.disableAutoSelect();
//         google.accounts.id.prompt();
//         document.getElementById('signout_button').style.display="none   "
//     }
// }

function signOut(){
    google.accounts.id.disableAutoSelect();
    google.accounts.id.prompt();
    // document.getElementById('profile').innerHTML=""
    document.getElementById('signout-button').style.display="none";
}