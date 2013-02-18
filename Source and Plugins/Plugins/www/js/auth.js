

var user = [];

//Detect when Facebook tells us that the user's session has been returned
function authUser() {
  FB.Event.subscribe('auth.statusChange', handleStatusChange);
}

function handleStatusChange(session) {
    console.log('Got the user\'s session: ', session);
    
    if (session.authResponse) {
        document.body.className = 'connected';
        
        //Fetch user's id, name, and picture
        FB.api('/me', {
          fields: 'name, picture, id, email, location, gender '
        },
        function(response) {
          if (!response.error) {
            user = response;
            
            console.log('Got the user\'s name and picture: ');
            console.log(response);
            
            //Update display of user name and picture
            if (document.getElementById('user-name')) {
              document.getElementById('user-name').innerHTML = user.name;
			  document.getElementById('user-id').innerHTML = 'id ='+user.id;
			  document.getElementById('user-location').innerHTML = 'location ='+user.location['name'];
			  document.getElementById('user-gender').innerHTML = 'gender ='+user.gender;
			  document.getElementById('user-email').innerHTML = 'email ='+user.email;
			  
			  
		
            }
            if (document.getElementById('user-picture')) {
              if (user.picture.data) {
                  document.getElementById('user-picture').src = user.picture.data.url;
              } else {
                  document.getElementById('user-picture').src = user.picture;
              }
            }
          }
          
          clearAction();
        });
    } else {
      document.body.className = 'not_connected';
      
      clearAction();
    }
}

//Prompt the user to login and ask for the 'email' permission
function promptLogin() {
  FB.login(null, {scope: 'email'});
}



//See https://developers.facebook.com/docs/reference/javascript/FB.logout/
function logout() {
  FB.logout(function(response) {
    window.location.reload();
  });
}