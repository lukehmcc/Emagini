"""
Author: Jim Grid & Will Brent
Purpose: A basic google photo's comptetitor built
on the Sia network
"""
__version__ = '.1.2'
import kivy
from kivy.app import App
from kivy.uix.label import Label
from kivy.uix.button import Button
from kivy.uix.gridlayout import GridLayout
from kivy.uix.textinput import TextInput
from kivy.uix.image import Image
import glob
import numpy
#from android.permissions import request_permissions, Permission
#from android.storage import primary_external_storage_path

class ImageMaker(Image):
    def on_touch_down(self, touch):
        if self.collide_point(*touch.pos):
            print(self.source)

##Creates the basic gallery screen
class Gallery(GridLayout):
 
    def __init__(self, **kwargs):
        super(Gallery, self).__init__(**kwargs)
        #SD_CARD = primary_external_storage_path()
        photoPath = 'home/yeet/Python/photos/' 
        images = glob.glob(photoPath + '.png') 
        self.cols = 3
        for img in images:
            thumb = ImageMaker(source = img)
            self.add_widget(thumb)   


##Initaites the basic app
class BasicApp(App):
    def build(self):
        #request_permissions([Permission.WRITE_EXTERNAL_STORAGE, Permission.READ_EXTERNAL_STORAGE])
        return Gallery() 


##Initiates if this is the running file
if __name__ == "__main__":
    BasicApp = BasicApp()
    BasicApp.run()
