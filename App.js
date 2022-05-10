import React, {Component, useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    FlatList
} from 'react-native';
import Slider from '@react-native-community/slider';

const IMAGES = [
    {
        id: 'frame0',
        frame: 0,
        source: require('./python/data/frame0.jpg'),
    },
    {
        id: 'frame1',
        frame: 1,
        source: require('./python/data/frame1.jpg'),
    },
    {
        id: 'frame2',
        frame: 2,
        source: require('./python/data/frame2.jpg'),
    },
    {
        id: 'frame3',
        frame: 3,
        source: require('./python/data/frame3.jpg'),
    },
    {
        id: 'frame4',
        frame: 4,
        source: require('./python/data/frame4.jpg'),
    },
    {
        id: 'frame5',
        frame: 5,
        source: require('./python/data/frame5.jpg'),
    },
    {
        id: 'frame6',
        frame: 6,
        source: require('./python/data/frame6.jpg'),
    },
    {
        id: 'frame7',
        frame: 7,
        source: require('./python/data/frame7.jpg'),
    },
    {
        id: 'frame8',
        frame: 8,
        source: require('./python/data/frame8.jpg'),
    },
    {
        id: 'frame9',
        frame: 9,
        source: require('./python/data/frame9.jpg'),
    },
];


const App = () => {

    const [sliderValue, setSliderValue] = useState(0);

    const PreviewImage = ({ source, frame }) => {
        if (sliderValue == frame) {
            return <Image style={styles.imagePreview} source={source} />;
        } else {
            return null;
        }
    }

    const renderItem = ({ item }) => (
        <PreviewImage key={item.id} source={item.source} frame={item.frame} />
    );


    return (

        <View style={styles.coverImageSelector}>

            <FlatList
                data={IMAGES}
                renderItem={renderItem}
                keyExtractor={props => props.id}
            />

            <Text style={styles.instructionText}>To select a cover image, choose a frame from your video.</Text>

            {/*Slider with max, min, step and initial value*/}
            <Slider
                style={styles.slider}
                maximumValue={9} // TODO count the array
                minimumValue={0}
                minimumTrackTintColor='blue'
                maximumTrackTintColor='#000000'
                step={1}
                onValueChange={(value) => {
                    setSliderValue(value)
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
        width: 200,
        height: 400,
        marginTop: 40,
        marginBottom: 40,
        borderRadius: 10,
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

