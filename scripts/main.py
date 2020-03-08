"""
Author: Jim Grid & Will Brent
Purpose: A basic google photo's comptetitor built
on the Sia network
"""
import kivy
from kivy.app import App
from kivy.uix.label import Label
from kivy.uix.button import Button
from kivy.uix.gridlayout import GridLayout
from kivy.uix.textinput import TextInput
from kivy.uix.image import Image
import glob
#from android.permissions import request_permissions, Permission
#from android.storage import primary_external_storage_path


##Creates the basic gallery screen
class Gallery(GridLayout):
    def __init__(self, **kwargs):
        super(Gallery, self).__init__(**kwargs)
        thumb.bind(on_touch_down=self.callback)    # I tried on_touch property but does not work with images only buttons
            self.add_widget(thumb)

    def callback(self, obj, touch):
        # This should print only the clicked image source. 
        # (but instead is printing all images sources at once)
        print obj.sourceself.SD_CARD = primary_external_storage_path()
        images = glob.glob(self.SD_CARD) 
        self.cols = 4
        for img in self.SD_CARD:
            thumb = Image(source=img)
            thumb.bind(on_touch_down=self.callback)
            self.add_widget(thumb)

    def callback(self, obj, touch):
        print(obj.source)

##Initaites the basic app
class BasicApp(App):
    def build(self):
        request_permissions([Permission.WRITE_EXTERNAL_STORAGE,
                     Permission.READ_EXTERNAL_STORAGE])
        return Gallery() 


##Initiates if this is the running file
if __name__ == "__main__":
    BasicApp = BasicApp()
    BasicApp.run()
