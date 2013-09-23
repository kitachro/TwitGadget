function init() {
	System.Gadget.onSettingsClosed = settingsClosed; 
	window.attachEvent( "onload", loaded );
}; init();

function loaded() {
	window.detachEvent( "onload", loaded );
	window.attachEvent( "onunload", unloaded );

	exepathinput.value = System.Gadget.Settings.readString( NAME_INI_EXE_PATH );
}

function unloaded() {
    window.detachEvent( "onunload", unloaded );
}

function chooseinputClicked() {
	var shellItem = null;

	shellItem = System.Shell.chooseFile( 
		true, "TweetConsole:*.exe;*.lnk::", "", "open" );

	if ( shellItem ) {
		exepathinput.value = shellItem.path;
	}
}

function settingsClosed( event ) {
	if ( event.closeAction === event.Action.commit ) { //OK clicked
		System.Gadget.Settings.writeString( 
			NAME_INI_EXE_PATH, exepathinput.value );
	}
}
