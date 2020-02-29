"""
Author: Jim Grid and Will Brent

Purpose: This code is a stand in for the app because
it calls on the upDown class to upload and download
to and from sia
"""
import uploaderScript
from PIL import Image

##This imports the class from updown
UpDown = uploaderScript.UpDown()

##Assigns the photo
photo = "howToUseGithub.png"

##Then uploads the file and gives the link back
link = UpDown.uploadFile(photo)
merkle  = link[6:]
print(link)

##Now we pass it a link and locaiton and it will download it
location = "gitInstruction.png"
UpDown.downloadFile(location, link) 
