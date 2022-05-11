# Cheers! The coding test is complete.

## Here's how I made it
- Rather than using a video for the preview element, the program scrubs through a series of still frames, which drastically improves performance.
- I wrote a small Python script to export the video as a series of still frames.
- The main components include the main preview image and the image slider with preview handle and thumbnail images.
- Dependencies include the slider component from the React Native Elements library.
- Tested on iOS and iOS simulator

## Assumptions
- For this program, I'm assuming that the still frame data would be served from a backend API. I simulated this in the IMAGES data object found in `./image/index.js`.

## Future iterations
- As the program evolves in functionality, I would further break the program into smaller components for efficiency and maintainability.
- Preload preview images dynamically rather than all at once. This would improve performance, especially for longer videos.
- Potentially write a custom script for the slider component to avoid dependencies and improve performance.
