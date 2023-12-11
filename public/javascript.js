

/*******************************************************/
//                   MAIN FUNCTION
/*******************************************************/
/**
 * Onload Method.
 */
window.onload = function(){

    /* Actions associated to events */
    // console.log("on load limpio");

    /* Actions associated to events */
    gigya.accounts.addEventHandlers({
        // onAfterSubmit: onAfterSubmit,
        // onAfterScreenLoad: onAfterScreenLoad,
       }
    );
}
/*******************************************************/


function loginWithRaaS() {

    console.log('loggining...');

    // Redirects directly using URL
    gigya.accounts.showScreenSet({
        screenSet:'Default-RegistrationLogin',
        // screenSet:'simple-screen-set',
        startScreen:'gigya-login-screen',

        // Attached events (Will override the ones on the UI Builder!!! )
        // onAfterScreenLoad: onAfterScreenLoad,
        //
        // redirectURL: "http://localhost/nestle-minimal/target.html"

    });

    /* Actions associated to events */
    gigya.accounts.addEventHandlers({
        onLogin: onLogin,
        onLogout: onLogout
       }
    );
    return false;
}


function registerWithRaaS() {

    console.log('registering...');

    // Redirects directly using URL
    gigya.accounts.showScreenSet({
        screenSet:'Default-RegistrationLogin',
        // screenSet:'simple-screen-set',
        startScreen:'gigya-register-screen',

        // Attached events (Will override the ones on the UI Builder!!! )
        // onAfterScreenLoad: onAfterScreenLoad,
    });

    /* Actions associated to events */
    gigya.accounts.addEventHandlers({
        onLogin: onLogin,
        onLogout: onLogout,
       }
    );
    return false;
}

function updateProfile() {

    console.log('updating...');

    // Redirects directly using URL
    gigya.accounts.showScreenSet({
        screenSet:'Default-ProfileUpdate',
        startScreen:'gigya-update-profile-screen',
    });

    /* Actions associated to events */
    gigya.accounts.addEventHandlers({
        onLogin: onLogin,
        onLogout: onLogout,
       }
    );
    return false;
}

// Handle logout response (implemented also inside the Javascript section in screensets)
function myOnAfterSubmit(response) {
    console.log('On after Submit');

    if ( response.screen === 'gigya-login-screen' || response.screen === 'gigya-complete-registration-screen') {

        // Ask for relevant data (find out if registration completion must be shown)
        if ( typeof(response.data.externalApplication) !== "undefined" && response.data.externalApplication !== "") {
            // User Logged
            console.log('Redirect user to target page');

            // Explicity redirect if onLogin was called.
            window.location.href="http://localhost/nestle-minimal/target.html";
        }
    }
}


// Handle logout response
function onLogin(response) {
    if ( response.screen !== null && response.profile !== null) {

        // User Logged
        console.log('User has logged in');

        // Applying jQuery
        $('.message').addClass( "logged" );
        $('.message').text( "Logged!" );

        // Explicity redirect if onLogin was called.
        // window.location.href="";
    }
        else {
        alert('Error :');
    }
}

// Handle logout response
function onLogout(response) {

    if ( response.eventName === 'logout' ) {
        console.log('User has logged out');

        // Applying jQuery
        $('.message').removeClass( "logged" );
        $('.message').text( "Not Logged" );
    }
    else {
        alert('Error :' + response.errorMessage);
    }
}

// Handle onAfterScreenLoad
function onAfterScreenLoad (response) {
    console.log("on After Screen Loadsss. Changing background to whitesmoke...");

    // Applying jQuery
    $("body").css({"background": "whitesmoke"});
}
