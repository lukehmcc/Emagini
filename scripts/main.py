"""
Author: Jim Grid & Will Brent
Purpose: A basic google photo's comptetitor built
on the Sia network
"""
import kivy
from kivy.app import App
from kivy.uix.label import Label
from android.permissions import request_permissions, Permission
from android.storage import primary_external_storage_path

##Initaites the basic app
class BasicApp(App):
    def build(self):
        request_permissions([Permission.WRITE_EXTERNAL_STORAGE,
                     Permission.READ_EXTERNAL_STORAGE])
        self.SD_CARD = primary_external_storage_path()
        return Button(text='sup weeb') 


##Initiates if this is the running file
if __name__ == "__main__":
    BasicApp = BasicApp()
    BasicApp.run()
