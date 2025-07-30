
let client = new ClientJS();

	if( client.isMobile() ) { // Check For Mobile Device

		if( client.isMobileAndroid() ) { // Check For Android
			alert('We Got Us Some Android!');

		}else if( client.isMobileIOS() ){ // Check For iOS
			alert('We Got Us Some Apple iOS!');

		}else{
			alert('Unknown Mobile Device...');
		}
	}

window.addEventListener('load', () => {
    console.log(client.isLocalStorage());

})