function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
    // You can use this information to authenticate the user on your server.

    // Update the content of the HTML element with id "userEmail"
    document.getElementById("userEmail").innerText = "Email: " + profile.getEmail();
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
        // Hide the logout button
        document.getElementById("logoutButton").style.display = "none";
        // Clear the displayed user email
        document.getElementById("userEmail").innerText = "";
    });
}