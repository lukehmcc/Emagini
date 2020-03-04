"""
03/03/2020 @ 7:30 pm EST ~ finished first iteration. Test script completed
Author: Jim Grid and Will Brent

Purpose: This code is in place to encrpyt photos

"""

import nacl.utils
from nacl.public import PrivateKey, SealedBox

class encrypted_photo:
    def __init__(self, photo_file):
        self.photo_file = photo_file
        self.private_key = PrivateKey.generate()
        self.public_key = self.private_key.public_key
    
        self.keypair = (self.private_key, self.public_key)
    
    def returnPublicKey(self):
        return self.public_key

    def getEncryptedFile(self):
        sealed_photo = SealedBox(self.public_key)
        encrypted_photo = sealed_photo.encrypt(self.photo_file)     

        return encrypted_photo
    
    def testDec(self, encrypted_photo):
        unsealed_photo = SealedBox(self.private_key)
        decrypted_photo = unsealed_photo.decrypt(encrypted_photo)
        return decrypted_photo.decode('utf-8')

x = encrypted_photo(b"hello world!")
enc = x.getEncryptedFile()
dec = x.testDec(enc)
print(dec)