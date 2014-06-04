package com.konylabs.ffi;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.Vector;
import com.konylabs.api.TableLib;
import com.konylabs.vm.LuaTable;



import com.konydemo.thirdparty.intent.ScanAnyBarcode;
import com.konylabs.libintf.Library;
import com.konylabs.libintf.JSLibrary;
import com.konylabs.vm.LuaError;
import com.konylabs.vm.LuaNil;


public class N_scanbarcodeffi extends JSLibrary {

 
 
	public static final String getBarCodeAndroid = "getBarCodeAndroid";
 
	String[] methods = { getBarCodeAndroid };


 Library libs[] = null;
 public Library[] getClasses() {
 libs = new Library[0];
 return libs;
 }



	public N_scanbarcodeffi(){
	}

	public Object[] execute(int index, Object[] params) {
		// TODO Auto-generated method stub
		Object[] ret = null;
 try {
		int paramLen = params.length;
 int inc = 1;
		switch (index) {
 		case 0:
 if (paramLen != 1){ return new Object[] {new Double(100),"Invalid Params"}; }
 com.konylabs.vm.Function callbackFunction0 = null;
 if(params[0] != null && params[0] != LuaNil.nil) {
 callbackFunction0 = (com.konylabs.vm.Function)params[0];
 }
 ret = this.getBarCodeAndroid( callbackFunction0 );
 
 			break;
 		default:
			break;
		}
 }catch (Exception e){
			ret = new Object[]{e.getMessage(), new Double(101), e.getMessage()};
		}
		return ret;
	}

	public String[] getMethods() {
		// TODO Auto-generated method stub
		return methods;
	}
	public String getNameSpace() {
		// TODO Auto-generated method stub
		return "scanbarcodeffi";
	}


	/*
	 * return should be status(0 and !0),address
	 */
 
 
 	public final Object[] getBarCodeAndroid( com.konylabs.vm.Function inputKey0 ){
 
		Object[] ret = null;
 com.konydemo.thirdparty.intent.ScanAnyBarcode.scanBarcode( (com.konylabs.vm.Function)inputKey0
 );
 
 ret = new Object[]{LuaNil.nil, new Double(0)};
 		return ret;
	}
 
};
