import React, {useState} from 'react';
// import * as React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Asset } from 'expo-asset';
import Slider from '@react-native-community/slider';


const App = () => {
    const [sliderValue, setSliderValue] = useState(1);

    const video = React.useRef(null);
    const source = require('./assets/test.mp4');

    const [status, setStatus] = React.useState({});

    return (
        <View style={styles.coverImageSelector}>
            <Video
                ref={video}
                style={styles.video}
                source={source}
                useNativeControls='false'
                resizeMode='contain'
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <View>
                <Button
                    title={status.isPlaying ? 'Pause' : 'Play'}
                    onPress={() =>
                        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                    }
                />
            </View>

            {/*<View style={styles.imagePreview}></View>*/}
            <Text style={styles.instructionText}>To select a cover image, choose a frame from your video.</Text>

            {/*Text to show slider value*/}
            <Text style={{color: 'white'}}>
                Value of slider is : {sliderValue}
            </Text>
            {/*Slider with max, min, step and initial value*/}
            <Slider
                style={styles.slider}
                maximumValue={1}
                minimumValue={0}
                minimumTrackTintColor='blue'
                maximumTrackTintColor='#000000'
                // step={1}
                value={sliderValue}
                onValueChange={(sliderValue) => {
                    setSliderValue(sliderValue * status.durationMillis)
                    video.current.setPositionAsync(sliderValue * status.durationMillis)
                }}
            />
            
            {/*<View style={styles.imageSlider}>
                <View style={styles.thumbnailContainer}>
                    <View style={styles.imageSliderThumbnail}></View>
                    <View style={styles.imageSliderThumbnail}></View>
                    <View style={styles.imageSliderThumbnail}></View>
                    <View style={styles.imageSliderThumbnail}></View>
                    <View style={styles.imageSliderThumbnail}></View>
                </View>
                <View style={styles.imageSliderHandle}></View>
            </View>*/}
        </View>
    );
}


const styles = StyleSheet.create({
    coverImageSelector: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#111',
        // backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    video: {
        alignSelf: 'center',
        width: 200,
        height: 320,
    },
    slider: {
        width: '90%'
    },
    imagePreview: {
        flex: 0.6,
        width: '70%',
        backgroundColor: 'blue',
        marginBottom: 40
    },
    instructionText: {
        color: 'white',
        textAlign: 'center',
        width: '80%',
        marginBottom: 40
    },
    imageSlider: {
        height: 100,
        width: '90%'
    },
    thumbnailContainer: {
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        overflow: 'hidden'
    },
    imageSliderHandle: {
        position: 'absolute',
        top: -10,
        left: 100,
        height: 120,
        width: 80,
        backgroundColor: 'blue',
        borderColor: '#ccc',
        borderWidth: 3,
        borderRadius: 10
    },
    imageSliderThumbnail: {
        flexDirection: 'row',
        flex: 1,
        height: 100,
        backgroundColor: 'black',
        borderColor: 'red',
        borderWidth: 1
    }
});

export default App;

