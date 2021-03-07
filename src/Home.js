import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>HELLO</h2>
        <p>The password manager should allow the users to save login details for any website/application at one place. 
          The passwords should be well protected in an encrypted database, so that only a master password can unlock them. 
          Users can add new entries, edit existing entries, and change the master password of the application. 
          Whenever the user needs to fetch any login details, he/she can unlock the password manager, 
          select the required credentials, and with one tap/click,the password will be copied to the system clipboard. 
          There should be no need to type the complex password.
        </p>
        <p>
        Benefits of the proposed system:</p>
        <ol>
        <li>Users have to memorize just one password - the master password of their password manager app.</li>
 	
        <li>They can have very-long and complex passwords. 	
	            For example: ZnEk$tycF68uzC[B6&X</li>
 	
        <li>They can have a unique password for every website/application.</li>
        </ol>
  
      </div>
    );
  }
}
 
export default Home;