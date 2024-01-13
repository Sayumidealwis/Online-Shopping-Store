var bPasswordConsistLowerCase = false;
var bPasswordConsistUpperCase = false;
var bPasswordConsistNumbers = false;
var bPasswordConsistMinlength = false;


function ValidatePassword() {
    let bIsValid = true;
    let password_input = document.getElementById("password");
    const password = password_input.value;

    if ( password === '' ) {
        bIsValid = false;
        password_input.style.borderBottomColor = 'black';
        return bIsValid;
    }

    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;

    if ( password.match( lowerCaseLetters ) ) {
        bPasswordConsistLowerCase = true;
    }
    else {
        bPasswordConsistLowerCase = false;
        bIsValid = false;
    }
  
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;

    if ( password.match( upperCaseLetters ) ) {  
        bPasswordConsistUpperCase = true;
    }
    else {
        bPasswordConsistUpperCase = false;
        bIsValid = false;
    }

    // Validate numbers
    var numbers = /[0-9]/g;

    if ( password.match( numbers ) ) {  
        bPasswordConsistNumbers = true;
    }
    else {
        bPasswordConsistNumbers = false;
        bIsValid = false;
    }
  
    // Validate length
    if( password.length >= 8 ) {
        bPasswordConsistMinlength = true;
    }
    else {
        bPasswordConsistMinlength = false;
        bIsValid = false;
    }

    if ( bIsValid === false ) {
        password_input.style.borderBottomColor = 'red';
    } 
    else {
        password_input.style.borderBottomColor = 'green';
    }

    return bIsValid;
}


function ConfirmPassword() {
    
    let confirm_password = document.getElementById("confirm-password");
    let password = document.getElementById("password");

    if ( confirm_password.value === '' ) {
        confirm_password.style.borderBottomColor = 'black';
        return false;
        
    }

    if ( !( confirm_password.value === password.value ) ) {
        confirm_password.style.borderBottomColor = 'red';
        return false;
    }

    confirm_password.style.borderBottomColor = 'green';
    return true;
}

function IsEmpty( str ) {
    return str.replace(/\s+/g, '').length === 0;
}

function IsPhoneNumberValid( phone_number ) {
    let bIsValid = false;
    const phonenumber = String( phone_number );

    if ( phonenumber === null ) return bIsValid;

    let sLastNineDigits = '';

    if ( phonenumber.startsWith('+94') ) {  
        sLastNineDigits = phonenumber.substring(3);
    }
    else if ( phonenumber.startsWith( '0' ) ) {
        sLastNineDigits = phonenumber.substring(1);
    }
    else {
        sLastNineDigits = phonenumber;
    }

    bIsValid = ( /^\d+$/.test( sLastNineDigits ) ) && sLastNineDigits.length === 9;
    return bIsValid;
}

function IsPostcodeValid( post_code ) {
    const postcode = parseInt( post_code );
    if ( postcode === NaN ) return false;
    return post_code >= 10000 && post_code <= 99999; 
}

function IsDOBValid( dob ) {
    const now = new Date();
    const _dob = new Date( String( dob ) );
    
    if ( _dob === null ) return false;

    if ( ( ( new Date( now - _dob ) ).getFullYear() - 1970 ) < 18 ) return false;

    return true;
}

function ValidateForm() {
    
    var bIsFirstNameValid = !( IsEmpty( document.getElementById('fname').value ) );
    var bIsLastNameValid = !( IsEmpty( document.getElementById('lname').value ) );
    var bIsAddressL1Valid = !( IsEmpty( document.getElementById('address-l01').value ) );
    var bIsCityValid = !( IsEmpty( document.getElementById('city').value ) );
    
    var bIsDistrictValid = !( IsEmpty( document.getElementById('district').value ) );
    var bIsGenderValid = !( IsEmpty( document.getElementById('gender').value ) );
    
    var bIsPostcodeValid = IsPostcodeValid( document.getElementById('postcode').value );
    var bIsPhoneValid = IsPhoneNumberValid( document.getElementById('phone').value );
    var bIsDOBValid = IsDOBValid( document.getElementById('date-of-birth').value );

    var bIsPasswordValid = ValidatePassword();
    var bDoesPasswordMatch = ConfirmPassword();

    var bAgreeWithTC = document.getElementById('terms-and-conditions').value === 'y';

    if ( !bIsFirstNameValid ) {
        alert( 'Please enter a valid first name' );
    }
    
    if ( !bIsLastNameValid ) {
        alert( 'Please enter a valid last name' );
    }

    if ( !bIsAddressL1Valid ) {
        alert( 'Please enter a valid address' );
    }

    if ( !bIsCityValid ) {
        alert( 'Please enter a valid city name' );
    }

    if ( !bIsDistrictValid ) {
        alert( 'Please choose a district' );
    }
 
    if ( !bIsGenderValid ) {
        alert( 'Please choose a gender' );
    }

    if ( !bIsPostcodeValid ) {
        alert( 'Please enter a valid post code' );
    }

    if ( !bIsPhoneValid ) {
        alert( 'Please enter a valid phone number' );
    }
    
    if ( !bIsDOBValid ) {
        alert( 'You have to be older than 18 years to register' );
    }

    if ( !bIsPasswordValid ) {
        msg = 
        'Please enter a valid password. The password must contain at least\n' +
        '\t-One capital letter\n' +
        '\t-One simple letter\n' +
        '\t-One number\n'+
        '\t-8 characters\n';
        if ( !bPasswordConsistLowerCase ) {
            msg += '\nYour password does not contain a lower case letter'
        }
        if ( !bPasswordConsistUpperCase ) {
            msg += '\nYour password does not contain a upper case letter'
        }        
        if ( !bPasswordConsistNumbers ) {
            msg += '\nYour password does not contain a number'
        }        
        if ( !bPasswordConsistNumbers ) {
            msg += '\nYour password does not contain a number'
        }      
        if ( !bPasswordConsistMinlength ) {
            msg += '\nYour password is lesser than 8 characters'
        }

        alert( msg );
    }

    if ( !bDoesPasswordMatch ) {
        alert( 'Passwords don\'t match' );
    }

    if ( !bAgreeWithTC ) {
        alert( 'You have to agree with our Terms and Conditions' );
    }

    const bIsValid = bIsFirstNameValid && bIsLastNameValid && bIsAddressL1Valid && bIsCityValid && bIsDistrictValid && bIsGenderValid && bIsPostcodeValid && bIsPhoneValid && bIsDOBValid && bIsPasswordValid && bDoesPasswordMatch && bAgreeWithTC;

    return bIsValid;
}


function TogglePassword( password_input, show_hide_button ) {
    const type = password_input.getAttribute('type') === 'password' ? 'text' : 'password';
    password_input.setAttribute('type', type);
    
    const btn_text = show_hide_button.innerText === 'Show' ? 'Hide' : 'Show';
    show_hide_button.innerText = btn_text;
    
}
