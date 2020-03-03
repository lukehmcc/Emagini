"""
Authors: Jim Grid, Will Brent
Purpose: This is a basic upload/downlaod script that you pass a file
and it passes back a sia link
"""
from siaskynet import Skynet

##Initiates the updown class
class UpDown:
    def uploadFile(self, photo):
        skylink = Skynet.UploadFile(photo)      #This uploads to skylink
        return skylink
    def downloadFile(self,location, skyLink):
        Skynet.DownloadFile(location, skyLink)  #This downloads from skylink
        return
    def test(self, text):
        return(text)
