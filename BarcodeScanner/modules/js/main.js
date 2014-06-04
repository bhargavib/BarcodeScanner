function scanVINBarcode()
{
	PlatformName=kony.os.deviceInfo().name
	kony.print("###################"+PlatformName);
	if(kony.string.startsWith(PlatformName, "android", true) == true)
	{		//frmScanned.show();
		jsBarCodeAndroid();
	}else if(kony.string.startsWith(PlatformName, "iphone", true) == true||kony.string.startsWith(PlatformName, "ipad", true) == true)
	{
		jsBarCodeiPhone();
	}else if(kony.os.deviceInfo().name=="WindowsPhone")
			{
				jsBarCodeWindows();
			}
	else{
		kony.print("This platform is not supported");
	}
}

/** 
 * 
 * ============== Android Barcode Scanner ===========================
 * 
 */
 
function jsBarCodeAndroid(  ){
	scanbarcodeffi.getBarCodeAndroid(onBarcodeScan);
}

function onBarcodeScan(a, b){
	kony.print("\n\n:--in onBarcodeScan-->\n");
	kony.print("value of scanned data for Android-----"+b);
	gScannedText = b;
	if (gScannedText == "" || gScannedText == null)
	{
		var infoAlert =  kony.ui.Alert({message:"Scanning Failed",alertType: constants.ALERT_TYPE_INFO,alertTitle: "CUB",yesLabel:"OK",noLabel: "Cancel", alertHandler: null},{});
	}
	else{
	
		kony.print("\n\n:--in onBarcodeScan2-->\n");
		try{
  				kony.timer.schedule("timerid", executeTimer, 1, false);
  			}
  			catch(err){
     			kony.print("Timer already exists!!");
  			}
		
		
	}
}
function executeTimer()
{
	frmScndCntnt.lblScannedText.text="The scanned text is - " + gScannedText;
	frmScndCntnt.show();
}

/**
 * 
 * ============================= IOS Barcode Scanner =================================
 * 
 */
 
function jsBarCodeiPhone(dummy){
	gScannedText = scanbarcodeffi.getBarCodeiPhone();
	kony.print("gScannedText..........."+gScannedText);
	if(gScannedText == "" || gScannedText == null){
    	alert("Scanning failed, please scan again.")
    	return false;
    }else{
    	kony.print("The text of the scanned barcode is: \n"+ gScannedText);
		frmScndCntnt.lblScannedText.text = "The scanned text is - " + gScannedText;
		frmScndCntnt.show();
	}
}

/** 
 * 
 * ============== Windows Barcode Scanner ===========================
 * 
 */
 
 function jsBarCodeWindows()
 {
 	
 	gScannedText = scanbarcodeffi.getBarCodeWindows();
 	alert(gScannedText);
 	alert("hello");
 }
 