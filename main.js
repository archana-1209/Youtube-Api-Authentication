const CLIENT_ID='870515046361-io2bae9ics8qvd1bh6b3930vj0el996s.apps.googleusercontent.com';
const DISCOVERY_DOCS='https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest';
const SCOPES='https://www.googleapis.com/auth/youtube.readonly';
const authorizeButton=document.getElementById('authorize-button');
const signoutButton=document.getElementById('signout-button');
const content=document.getElementById('content');
const channelForm=document.getElementById('channel-form');
const channelInput=document.getElementById('channel-input');
const videoContainer=document.getElementById('video-container');
//Load auth2 library
const defaultChannel='Archana Singh';
function handleClientLoad(){
	gapi.load('client:auth2',initClient);
}
function initClient(){
	gapi.client.init({
		'apiKey':'AIzaSyAfesmqb5ohtj_CJUpxnc3mmZWBVA4h38Y',
		'discoveryDocs':[DISCOVERY_DOCS],
		'clientId':CLIENT_ID,
		'scope':SCOPES
	}).then(() =>{
		gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
	updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
	authorizeButton.onclick=handleAuthClick;
	signoutButton.onclick=handleSignoutClick;
	});
}
function updateSigninStatus(isSignedIn){
	if(isSignedIn){
		authorizeButton.style.display='none';
		signoutButton.style.display='block';
		content.style.display='block';
		videoContainer.style.display='block';
		getChannel(defaultChannel);

	}else{
authorizeButton.style.display='block';
		signoutButton.style.display='none';
		content.style.display='none';
		videoContainer.style.display='none';
	}
}
function handleAuthClick(){
	gapi.auth2.getAuthInstance().signIn();
}
function handleSignoutClick(){
	gapi.auth2.getAuthInstance().signOut();

}
function getChannel(channel){
	console.log(channel);

}
