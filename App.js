// import react and react native components
import React, { Component, useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button
} from 'react-native';

// import slider and image preview component
import { Slider } from '@rneui/themed';
import ImagePreview from './components/ImagePreview';

const App = () => {

    // store the current frame from the slider
    const [sliderValue, setSliderValue] = useState(0);

    const imageWidth = 200;
    const videoDuration = 10000;
    const timeStampInterval = 1000;

    // choose timestamps to create thumbnails
    const chooseTimestamps = (duration) => {
        let timeStamps = [];
        for (let i = 0; i < duration; i+=timeStampInterval) {
            timeStamps.push(i)
        }
        return timeStamps;
    }

    // choose the slider thumbnail images
    const chooseThumbnails = (duration) => {
        let ts = [];
        let targetNum = 5; // number of thumbnail images
        let ceiling = Math.ceil(duration/targetNum);
        for (let i = 0; i<duration && ts.length<targetNum; i+=ceiling) {
            ts.push(i);
        }
        return ts;
    }

    return (

        <View style={styles.coverImageSelector}>

            {/* main image preview element */}
            <View style={styles.imagePreviewViewport}>
                {/* as the slider updates, translate preview list */}
                <View style={[styles.imagePreviewList, {
                    transform: [
                        { translateX: -sliderValue*imageWidth }
                    ]
                }]}>
                    {chooseTimestamps(videoDuration).map((time) => (
                        <ImagePreview type={'preview'} timeStamp={time} key={time} />
                    ))}
                </View>
            </View>

            <Text style={styles.instructionText}>To select a cover image, choose a frame from your video.</Text>
            
            {/* image slider element with preview image handle */}
            <View style={styles.imageSlider}>
                <View style={styles.thumbnailContainer}>
                    {chooseThumbnails(videoDuration).map((time) => (
                        <ImagePreview type={'thumbnail'} timeStamp={time} key={time} />
                    ))}
                </View>

                {/* react native elements slider component */}
                <Slider
                    maximumValue={videoDuration/timeStampInterval-1}
                    minimumValue={0}
                    step={1}
                    trackStyle={{ height: 0, backgroundColor: 'transparent' }}
                    thumbStyle={{ height: 96, width: 54, backgroundColor: 'transparent' }}
                    thumbProps={{
                        children: (
                            // update the slider handle image source
                            <ImagePreview type={'handle'} timeStamp={0} key={0} />
                        )
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
    imagePreviewViewport: {
        width: 200,
        height: 300,
        overflow: 'hidden',
        borderRadius: 10,
        marginBottom: 40
    },
    imagePreviewList: {
        flexDirection: 'row'
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
    }
});

export default App;

