"""
03/03/2020 @ 7:30 pm EST ~ finished first iteration. Test script completed
Author: Jim Grid and Will Brent

Purpose: This code is in place to encrpyt photos

"""

import nacl.utils
from nacl.public import PrivateKey, SealedBox
import base64

import timeit
start = timeit.default_timer()

class encrypted_photo:
    def __init__(self, photo_file):
        self.photo_file = photo_file

        self.private_key = PrivateKey.generate() #Generate a private key for encryption
        self.public_key = self.private_key.public_key #Generate a private key for encryption
    
        self.keypair = (self.private_key, self.public_key) #Optional use: public / private key list
    
    def returnPublicKey(self):
        return self.public_key

    def getEncryptedFile(self): #Returns the encrypted photo as a Base64
        with open(self.photo_file,'rb') as photo_file:
            photo_string = base64.b64encode(photo_file.read())

        sealed_photo = SealedBox(self.public_key)
        encrypted_photo = sealed_photo.encrypt(photo_string)
        
        return encrypted_photo
    
    def getDecryptedFile(self, encrypted_string):
        unsealed_photo = SealedBox(self.private_key)
        decrypted_photo = unsealed_photo.decrypt(encrypted_string)
        return decrypted_photo.decode('utf-8')

    def stringToImage(self, decrypted_string):
        imgdata = base64.b64decode(decrypted_string)
        with open('output.jpg', 'wb') as f:
            f.write(imgdata)

<<<<<<< HEAD
=======

>>>>>>> encryption
