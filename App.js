// import react and react native components
import React, { Component, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

// import slider, image data and image preview component
import { Slider } from '@rneui/themed';
import IMAGES from './images/index.js';
import ImagePreview from './components/ImagePreview';


const App = () => {

    // store the current frame from the slider
    const [sliderValue, setSliderValue] = useState(0);

    // choose the slider thumbnail images
    const chooseThumbnails = (thumbnails) => {
        let chosenThumbs = [];
        let targetNum = 5; // number of thumbnail images
        let ceiling = Math.ceil(IMAGES.length/targetNum);
        for (let i =0; i<IMAGES.length && chosenThumbs.length<targetNum; i+=ceiling) {
            chosenThumbs.push(IMAGES[i]);
        }
        return chosenThumbs;
    }

    return (

        <View style={styles.coverImageSelector}>

            {/* main image preview element */}
            <ImagePreview sliderValue={sliderValue} />

            <Text style={styles.instructionText}>To select a cover image, choose a frame from your video.</Text>
            
            {/* image slider element with preview image handle */}
            <View style={styles.imageSlider}>
                <View style={styles.thumbnailContainer}>
                    {chooseThumbnails(IMAGES).map((thumb) => (
                        <Image style={styles.imageSliderThumbnail} key={thumb.id} source={thumb.source} />
                    ))}
                </View>

                {/* react native elements slider component */}
                <Slider
                    maximumValue={IMAGES.length-1}
                    minimumValue={0}
                    step={1}
                    trackStyle={{ height: 0, backgroundColor: 'transparent' }}
                    thumbStyle={{ height: 96, width: 54 }}
                    thumbProps={{
                        children: (
                            // update the slider handle image source
                            <Image style={styles.imageSliderHandle} source={IMAGES[sliderValue].source} />
                        ),
                    }}
                    onValueChange={(value) => {
                        // set current frame from slider value
                        setSliderValue(value)
                    }}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    coverImageSelector: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#111',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    instructionText: {
        color: 'white',
        textAlign: 'center',
        width: '80%',
        marginBottom: 40
    },
    imageSlider: {
        width: '90%',
        marginBottom: 40
    },
    thumbnailContainer: {
        position: 'absolute',
        top: -15,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden'
    },
    imageSliderHandle: {
        height: 96,
        width: 54,
        borderColor: '#ccc',
        borderWidth: 3,
        borderRadius: 10
    },
    imageSliderThumbnail: {
        flexDirection: 'row',
        flex: 1,
        height: 70,
        opacity: 0.5
    }
});

export default App;

