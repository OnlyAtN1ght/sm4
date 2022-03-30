Usage :
- Add the file to the project
- Import the module :
```import {encryptText,decryptText} from "./sm4.js"```
- Use the functions : 
```var encryptedText = encryptText("This is the text to be encrypted")
var decryptedText = decryptText(encryptedText)```


Info on the implementation : https://eprint.iacr.org/2008/329.pdf


TODO : 
- Generation de la clef 
- Fichier qui stocke la clef 
- README sur l'utilisation 