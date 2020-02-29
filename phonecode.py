"""
Author: Jim Grid & Will Brent

Purpose: A basic google photo's comptetitor built
on the Sia network
"""
import kivy
from kivy.app import App
from kivy.uix.label import Label

##Initaites the basic app
class BasicApp(App):
    def build(self):
        return Label(text="Hello world")


##Initiates if this is the running file
if __name__ == "__main__":
    BasicApp = BasicApp()
    BasicApp.run()
