//Z{e_2} is the set of e-bit vectors.

//Entry X = (X0, X1, X2, X3) ∈ (Z32_2)^4

const KEYDATA = [[1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0], [1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0], [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1], [0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0], [1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1], [0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1], [0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1], [1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0], [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0], [0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], [1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0], [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0], [0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0], [0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1], [0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1], [0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1], [1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0], [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1], [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1], [0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0], [1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0], [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1], [1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0], [1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1], [0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1]]


// Args a list of 32 elements each is a list of 32 bits
function generateKeyFromData(keydata){
	var KEY = []
	for (var i=0;i<keydata.length;i++){
		// keydata[i] : list of 32 bits
		var Z32Key = new Z32(keydata[i])
		KEY.push(Z32Key)
	}

	return KEY;
}



const SBoxTable = [['d6', '90', 'e9', 'fe', 'cc', 'e1', '3d', 'b7', '16', 'b6', '14', 'c2', '28', 'fb', '2c', '05'], ['2b', '67', '9a', '76', '2a', 'be', '04', 'c3', 'aa', '44', '13', '26', '49', '86', '06', '99'], ['9c', '42', '50', 'f4', '91', 'ef', '98', '7a', '33', '54', '0b', '43', 'ed', 'cf', 'ac', '62'], ['e4', 'b3', '1c', 'a9', 'c9', '08', 'e8', '95', '80', 'df', '94', 'fa', '75', '8f', '3f', 'a6'], ['47', '07', 'a7', 'fc', 'f3', '73', '17', 'ba', '83', '59', '3c', '19', 'e6', '85', '4f', 'a8'], ['68', '6b', '81', 'b2', '71', '64', 'da', '8b', 'f8', 'eb', '0f', '4b', '70', '56', '9d', '35'], ['1e', '24', '0e', '5e', '63', '58', 'd1', 'a2', '25', '22', '7c', '3b', '01', '21', '78', '87'], ['d4', '00', '46', '57', '9f', 'd3', '27', '52', '4c', '36', '02', 'e7', 'a0', 'c4', 'c8', '9e'], ['ea', 'bf', '8a', 'd2', '40', 'c7', '38', 'b5', 'a3', 'f7', 'f2', 'ce', 'f9', '61', '15', 'a1'], ['e0', 'ae', '5d', 'a4', '9b', '34', '1a', '55', 'ad', '93', '32', '30', 'f5', '8c', 'b1', 'e3'], ['1d', 'f6', 'e2', '2e', '82', '66', 'ca', '60', 'c0', '29', '23', 'ab', '0d', '53', '4e', '6f'], ['d5', 'db', '37', '45', 'de', 'fd', '8e', '2f', '03', 'ff', '6a', '72', '6d', '6c', '5b', '51'], ['8d', '1b', 'af', '92', 'bb', 'dd', 'bc', '7f', '11', 'd9', '5c', '41', '1f', '10', '5a', 'd8'], ['0a', 'c1', '31', '88', 'a5', 'cd', '7b', 'bd', '2d', '74', 'd0', '12', 'b8', 'e5', 'b4', 'b0'], ['89', '69', '97', '4a', '0c', '96', '77', '7e', '65', 'b9', 'f1', '09', 'c5', '6e', 'c6', '84'], ['18', 'f0', '7d', 'ec', '3a', 'dc', '4d', '20', '79', 'ee', '5f', '3e', 'd7', 'cb', '39', '48']]


// F : Z{4_2} -> int x:(0<x<15)
function convertBitsToHexa(arrayBits){
	var value = 0;
	// On iterere sur l'array en partant de la fin
	for (var i = arrayBits.length; i > 0; i--) {
	    if (arrayBits[i-1] === 1){
	    	value += 2** (arrayBits.length - i)
	    }
	}
	return value;
}

function hex_to_ascii(str1){
	var hex  = str1.toString();
	var str = '';
	for (var n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return str;
}


// Convert a string of 2 caracters into a list of bits
// 2 hexa carac = 2 octets => 16 bits 
function convertHexaStringToArray(hexaString){
	var list = parseInt(hexaString.substr(0, 2), 16).toString(2).split("")
	if (list.length != 8){
		var lengthdiff = 8 - list.length;
		var result = [];
		for (var i = 0; i < lengthdiff; i++) {
			result.push(0);
		}
		list = result.concat(list)
	}
	return list
}

function rotateArray(array){
	var result = []
	var n = array.length
	for (var i = 0; i < n; i++) {
		result[i] = array[n-i-1]
	}
	return result
}


// XOR : Z{32_2}^2 -> Z{32_2}
function XOR(X,Y){
	var bits1 = X.getBits();
	var bits2 = Y.getBits();

	var result = []

	for (var i = 0;i < bits1.length;i++){
		if (bits1[i] == bits2[i]){
			result[i] = 0
		} else {
			result[i] = 1
		}
	}

	return new Z32(result)
}

// SBox : Z{8_2} -> Z{8_2}
function SBox(X){
	// Check type of X ( it needs to be of Z8 type)

	// La premiere valeur correspond à la ligne du tableau
	// La seconde valeur correspond à la colonne du tableau
	var firstHex = X.getBits().slice(0,4);
	var secondHex = X.getBits().slice(4,8);




	var firstInt = convertBitsToHexa(firstHex)
	var secondInt = convertBitsToHexa(secondHex)


	var result = SBoxTable[firstInt][secondInt]

	return new Z8(result)
}

// tau : Z{32_2} -> Z{32_2}
function tau(X){
	var Z8array = X.convertToZ8();
	var result = [];
	for (var i=0; i < Z8array.length; i++){
		//console.log(result)
		var transformation = SBox(Z8array[i])
		var bits = transformation.getBits();

		for (var j=0; j < bits.length;j++){
			result.push(bits[j])
		}
	}

	return new Z32(result)
}


// circularShift: (Z{32_2},int) -> Z{32_2}
// B << e : Circular shift to the left by e bits
function circularShift(X,index){
	var result = []
	var bits = X.getBits()
	for (var i = index;i< bits.length;i++){
		result.push(bits[i])
	}
	result = result.concat(bits.slice(0,index))

	return new Z32(result)
}

// L: Z{32_2} -> Z{32_2}
function L(X) {
	var c2 = circularShift(X,2)
	var c10 = circularShift(X,10)
	var c18 = circularShift(X,18)
	var c24 = circularShift(X,24)

	var xor1 = XOR(X,c2)
	var xor2 = XOR(xor1,c10)
	var xor3 = XOR(xor2,c18)
	var xor4 = XOR(xor3,c24)

	return xor4
}

// T: Z{32_2} -> Z{32_2}
function T(X){
	var t = tau(X)
	var l = L(t)
	return l
}


// F : (Z{32_2}) ^ 5 -> Z{32_2}
function F(X0,X1,X2,X3,rk){
	var xor1 = XOR(X1,X2)
	var xor2 = XOR(xor1,X3)
	var xor2 = XOR(xor2,rk)

	var t = T(xor2)

	var xor3 = XOR(X0,t)

	return xor3
}


// Function encrypt a string
function encryptText(string){
	// We need to convert the string to Z{32_2} = 4 octects
	// Carac ascci : 2 carac hexa => 1 octets
	// Z{32_2} = 4 carac
	// Each encryption round takes 4 Z{32_2} => 8 caracteres

	var list_Z32 = []

	// Generate the Z32 object
	// TODO : case in which the length of the string is odd : because we process the caracters 2 by 2 and if its odd the last caracters processed
	for (var i = 0 ; i < string.length-3; i+=4) {
		let asciiCode1 = string[i].charCodeAt(0);
		let asciiCode2 = string[i+1].charCodeAt(0);
		let asciiCode3 = string[i+2].charCodeAt(0);
		let asciiCode4 = string[i+3].charCodeAt(0);

		// typeof hexValue : string 
		// hexValue : 2 caracteres hexa => 1 octets
	    let hexValue1 = asciiCode1.toString(16);
	    let hexValue2 = asciiCode2.toString(16);
	    let hexValue3 = asciiCode3.toString(16);
	    let hexValue4 = asciiCode4.toString(16);
	    
	    // bits1 : list of length 8
	    var bits1 = convertHexaStringToArray(hexValue1)
	    var bits2 = convertHexaStringToArray(hexValue2)
	    var bits3 = convertHexaStringToArray(hexValue3)
	    var bits4 = convertHexaStringToArray(hexValue4)

	    var bits_combines = bits1.concat(bits2, bits3,bits4);

	    var Z32_obj = new Z32(bits_combines)
	    list_Z32.push(Z32_obj)
	}


	// Procedd to encryption of by blocks 
	// We need at least 4 Z32
	var encryptedBlocks = []
	for (var i = 0 ; i < list_Z32.length-3; i+=4) {
		var resultEncryption = encryptBlock(list_Z32[i],list_Z32[i+1],list_Z32[i+2],list_Z32[i+3])
		encryptedBlocks = encryptedBlocks.concat(resultEncryption)
	}
	var encodedString = ""
	// convert back to a string
	for (var i = 0 ; i < encryptedBlocks.length; i++) {
		// var hex : string of 8 caracters
		var hex = encryptedBlocks[i].getHexaValue()
		for (var j = 0 ; j < hex.length; j++){
			var hex_sliced = hex.slice(j,j+1)
			encodedString += hex_sliced
		}
	}

	return encodedString;
}

function decryptText(string){
	// the strng is i string of hexa caracteres
	// Conver the string to Z{32_2}

	var encodedBlock = []
	// First we convert the hexa to an array of Z32
	for (var i = 0 ; i < string.length-7; i+=8) {
		// 8 caracters
		var hex_sliced = string.slice(i,i+8)

		var bits_array = []
		for (var j = 0;j < hex_sliced.length-1;j+=2){
			var hex_sliced_2 = hex_sliced.slice(j,j+2)
			var bits_array_part = convertHexaStringToArray(hex_sliced_2)
			bits_array = bits_array.concat(bits_array_part)
		}
		
		var Y = new Z32(bits_array)

		encodedBlock.push(Y)
	}



	// Decrypt by blocks
	var decryptedBlocks = []
	for (var i = 0 ; i < encodedBlock.length-3; i+=4) {
		var decryptedBlock_part = decryptBlock(encodedBlock[i],encodedBlock[i+1],encodedBlock[i+2],encodedBlock[i+3])
		
		for (var j = 0; j < decryptedBlock_part.length;j++){
			
			decryptedBlocks.push(decryptedBlock_part[j])
		}
	}
	//console.log(decryptedBlocks)

	// Now we convert the Z32 to ascii
	var decodedString = ""
	for (var i = 0;i<decryptedBlocks.length;i++){
		decodedString += decryptedBlocks[i].getAsciiValue()
	}

	return decodedString

}
//console.log(convertHexaStringToArray("ABCD"))

// encryptBlock : (Z{32_2}) ^ 4 -> (Z{32_2}) ^ 4
function encryptBlock(X0,X1,X2,X3){
	// Key : K ∈ (Z{32_2}) ^ 32
	var KEY = generateKeyFromData(KEYDATA)

	// Xi : i ∈ [0:35]
	// The first 3 are already defined
	var all_Xs = [X0,X1,X2,X3]

	for (var i=0;i < 32; i++){
		// Xi+4 = F(Xi, Xi+1, Xi+2, Xi+3, rki) 
		Xi4 = F(all_Xs[i], all_Xs[i+1], all_Xs[i+2], all_Xs[i+3], KEY[i]) 
		all_Xs.push(Xi4)
	}

	//output : Y= (X35, X34, X33, X32).

	return [all_Xs[35], all_Xs[34], all_Xs[33], all_Xs[32]]

}


// decryptBlock : (Z{32_2}) ^ 4 -> (Z{32_2}) ^ 4
function decryptBlock(Y0,Y1,Y2,Y3){
	// Key : K ∈ (Z{32_2}) ^ 32
	var KEY = generateKeyFromData(KEYDATA)
	var rotatedKey = rotateArray(KEY)
	var all_Ys = [Y0,Y1,Y2,Y3]

	for (var i=0;i < 32; i++){
		// Xi+4 = F(Xi, Xi+1, Xi+2, Xi+3, rki) 
		Yi4 = F(all_Ys[i], all_Ys[i+1], all_Ys[i+2], all_Ys[i+3], rotatedKey[i]) 
		all_Ys.push(Yi4)
	}

	//output : X = (Y35, Y34, Y33, Y32).
	return [all_Ys[35], all_Ys[34], all_Ys[33], all_Ys[32]]
}


class Z32 {
	// Classe representant un element de l'espace vectorielle Z{32_2}
	// C.a.d une liste de 32 bits ou 4 octets 
	constructor(bits) {
		if (bits.length != 32){
			console.log("La taille de la liste de bits n'est pas 32")
		} else {
			this.bits = bits
		}
	}

	getBits() {
        return this.bits;
    }

    convertToZ8(){
    	// On veut convertir un element de Z32 en 4 elements de Z8
    	var a0 = new Z8(this.bits.slice(0,8));
    	var a1 = new Z8(this.bits.slice(8,16));
    	var a2 = new Z8(this.bits.slice(16,24));
    	var a3 = new Z8(this.bits.slice(24,32));
    	return new Array(a0,a1,a2,a3);
    }

    getHexaValue(){
    	// convertBitsToHexa : convert 4 bits into a int 0< x < 15
    	var result = ""
    	for (var i = 0;i < 32; i+=4){
    		var slices_bits = this.bits.slice(i,i+4)
    		//console.log(slices_bits)
    		var intValueOfHex = convertBitsToHexa(slices_bits)
    		var hex = intValueOfHex.toString(16);
    		result += hex
    	}
    	return result
    }

    getAsciiValue(){
    	var hex = this.getHexaValue()
    	return hex_to_ascii(hex)
    }
}


class Z8 {
	// Classe representant un element de l'espace vectorielle Z{32_2}
	// C.a.d une liste de 32 bits ou 8 octets 
	constructor(args) {
		// L'argument est une liste
		if (typeof args == "object"){
			if (args.length != 8){
				console.log("La taille de la liste de bits n'est pas 8")
			} else {
				this.bits = args
			}

		} else if (typeof args == "string") {
			// L'argument est une string de caractères Hexa (ex:d7)
			// Convert to an array of bits
			this.bits = convertHexaStringToArray(args);

			// La liste commece par 0 qui n'est pas reprente
			if (this.bits.length != 8){
				var lengthdiff = 8 - this.bits.length;
				var result = [];
				for (var i = 0; i < lengthdiff; i++) {
					result.push(0);
				}
				this.bits = result.concat(this.bits)
			}
		}
		
	}

	getBits() {
        return this.bits;
    }
}


var exempleBits = [1, 1, 1, 1, 1, 0, 1, 1,1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0]
var Zex = new Z32(exempleBits);

var Zex2 = new Z32(exempleBits)
var Z8Arrayex = Zex.convertToZ8();
var Z8ex = Z8Arrayex[0]

//console.log(F(Zex,Zex2,Zex2,Zex2,Zex2))

//var a = Zex.getBits()

//console.log(generateKeyFromData(KEYDATA).length)
//console.log(Zex)
var encrypt = encryptBlock(Zex,Zex,Zex,Zex)
var decrypt = decryptBlock(encrypt[0],encrypt[1],encrypt[2],encrypt[3])
//console.log(decrypt[0])




var testZ8 = new Z8([1, 1, 1, 1,1, 0, 1, 0])
//console.log(SBox(testZ8))

var encryptedText = encryptText("ABCDABCDABCDABCD")
var decryptText = decryptText(encryptedText)
console.log(decryptText)
