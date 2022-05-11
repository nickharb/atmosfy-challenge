import React, {Component, useState, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import { Slider } from '@rneui/themed';
import IMAGES from './images/index.js';
import ImagePreview from './components/ImagePreview';


const App = () => {

    const [sliderValue, setSliderValue] = useState(0);

    const chooseThumbnails = (thumbnails) => {
        let chosenThumbs = [];
        let targetNum = 5;
        let ceiling = Math.ceil(IMAGES.length/targetNum);
        for (let i =0; i<IMAGES.length && chosenThumbs.length<targetNum; i+=ceiling) {
            chosenThumbs.push(IMAGES[i]);
        }
        return chosenThumbs;
    }

    return (

        <View style={styles.coverImageSelector}>

            <ImagePreview sliderValue={sliderValue} />

            <Text style={styles.instructionText}>To select a cover image, choose a frame from your video.</Text>
            
            <View style={styles.imageSlider}>
                <View style={styles.thumbnailContainer}>
                    {chooseThumbnails(IMAGES).map((thumb) => (
                        <Image style={styles.imageSliderThumbnail} key={thumb.id} source={thumb.source} />
                    ))}
                </View>

                <Slider
                    maximumValue={IMAGES.length-1}
                    minimumValue={0}
                    step={1}
                    trackStyle={{ height: 0, backgroundColor: 'transparent' }}
                    thumbStyle={{ height: 96, width: 54 }}
                    thumbProps={{
                        children: (
                            <Image style={styles.imageSliderHandle} source={IMAGES[sliderValue].source} />
                        ),
                    }}
                    onValueChange={(value) => {
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
        borderColor: 'black',
        borderWidth: 1,
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

