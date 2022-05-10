import React, {Component, useState, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    FlatList
} from 'react-native';
import { Slider } from '@rneui/themed';

// TODO
// fix image handle
// image flashing
// preload images

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

            <FlatList
                data={IMAGES}
                renderItem={renderItem}
                keyExtractor={props => props.id}
            />

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
    video: {
        alignSelf: 'center',
        width: 200,
        height: 320,
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
        height: 70
    }
});

export default App;

