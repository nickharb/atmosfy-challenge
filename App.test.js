import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import Slider from '@react-native-community/slider';

import React, { Component } from 'react';
import { Text } from 'react-native';

Load_New_Image=()=>{
    this.setState({
        imageURL : 'https://reactnativecode.com/wp-content/uploads/2018/02/motorcycle.jpg'
    })
}

function constructor() {
    super();
    this.state={
        imageURL : 'https://reactnativecode.com/wp-content/uploads/2017/10/Guitar.jpg'
    }
}

const App = () => {
    const [sliderValue, setSliderValue] = useState(0);

    const [status, setStatus] = React.useState({});

    return (
        <View style={styles.coverImageSelector}>

            <Image
                style={styles.imagePreview}
                // source={require('./python/data/frame0.jpg')}
                source = {{ uri: this.state.imageURL }}
            />

            <Button title="Click Here To Load Image From Different Source" onPress={this.Load_New_Image} />

            <Text style={styles.instructionText}>To select a cover image, choose a frame from your video.</Text>

            {/*Text to show slider value*/}
            <Text style={{color: 'white'}}>
                Value of slider is : {sliderValue}
            </Text>

            {/*Slider with max, min, step and initial value*/}
            <Slider
                style={styles.slider}
                maximumValue={100}
                minimumValue={0}
                minimumTrackTintColor='blue'
                maximumTrackTintColor='#000000'
                step={1}
                value={sliderValue}
                onValueChange={(sliderValue) => {
                    setSliderValue(sliderValue)
                }}
            />
            
            <View style={styles.imageSlider}>
                <View style={styles.thumbnailContainer}>
                    <View style={styles.imageSliderThumbnail}></View>
                    <View style={styles.imageSliderThumbnail}></View>
                    <View style={styles.imageSliderThumbnail}></View>
                    <View style={styles.imageSliderThumbnail}></View>
                    <View style={styles.imageSliderThumbnail}></View>
                </View>
                <View style={styles.imageSliderHandle}></View>
            </View>
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
        flex: 1,
        width: '60%',
        backgroundColor: 'blue',
        marginTop: 40,
        marginBottom: 40,
        borderRadius: 10
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

