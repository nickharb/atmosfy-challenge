# Cheers! The coding test is complete.

## Here's how I made it
- Rather than using a video for the preview element, the program scrubs through a series of still frames, which drastically improves performance.
- The program pulls still frames from a video file on the frontend in realtime.
- The main components include the main preview image and the image slider with preview handle and thumbnail images.
- Dependencies include the slider component from the React Native Elements library and react-native-create-thumbnail.
- Tested on iOS and iOS simulator.

## Future iterations
- Improve the load time by determining a better way to cache generated images.
- As the program evolves in functionality, I would further break the program into smaller components for efficiency and maintainability.
- Preload preview images dynamically rather than all at once. This would improve performance, especially for longer videos.
- Potentially write a custom script for the slider component to avoid dependencies and improve performance.
