function init() {
	System.Gadget.settingsUI = "settings.html";
	window.attachEvent( "onload", loaded );
}; init();

function loaded() {
	window.detachEvent( "onload", loaded );
	window.attachEvent( "onunload", unloaded );
	tweetarea.focus();
}

function unloaded() {
  window.detachEvent( "onunload", unloaded );
}

function tweetareaKeyup() {
  showtweetlength();
  
	var re = new RegExp( "\r\n|\n|\r" );
	if ( tweetarea.value.match( re ) ) {
		tweetarea.value = tweetarea.value.replace( re, "" );
    showtweetlength();
		twitinput.focus();
	}
}

function twitinputClicked() {
	if ( tweetarea.value === "" ) {
		return;
	}
	
	var path = System.Gadget.Settings.readString( NAME_INI_EXE_PATH );
	var args = "/t \"" + tweetarea.value + "\"";
	
	System.Shell.execute( path, args );
	tweetarea.value = "";
	showtweetlength();
	tweetarea.focus();
}

function showtweetlength() {
  twitinput.value = "twit (" + tweetarea.value.length + ")"
}
