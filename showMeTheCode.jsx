#target photoshop

if(app.documents.length > 0){
    var doc = app.activeDocument
    var splashNumber = parseInt( prompt("Enter the number for this image (0 for base, 1 for first skin, etc.)", 0))
   
    //Build the filePath, fileName
    var filePath = "C:/a/path/"
    var fileName = "aFile.png"

    //Build the arguments for saveAs
    var jpgFile = new File(filePath + fileName)
    var pngSaveOptions = new PNGSaveOptions()
    pngSaveOptions.interlaced = false

    //Save it
    doc.saveAs(jpgFile, pngSaveOptions, true, Extension.LOWERCASE)
}