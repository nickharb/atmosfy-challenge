import cv2
import os

# read video from specified path
cam = cv2.VideoCapture("./test.mp4")

try:
    # create a folder named data 
    if not os.path.exists('data'):
        os.makedirs('data')

# if not created, throw an error
except OSError: 
    print ('Error: Creating directory of data')

# set current frame
currentframe = 0

while(True): 

    # read from frame 
    ret,frame = cam.read() 

    if ret: 
        # if video is still left continue creating images
        name = './data/frame' + str(currentframe) + '.jpg'
        print ('Creating...' + name) 

        # write the extracted images 
        cv2.imwrite(name, frame) 

        # increase counter to show how many frames are created
        currentframe += 1
    else: 
        break

# Release all space and windows when complete
cam.release() 
cv2.destroyAllWindows()