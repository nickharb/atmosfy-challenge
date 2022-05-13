// import react and react native components
import React, { Component, useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';
import { createThumbnail } from "react-native-create-thumbnail";
import FastImage from 'react-native-fast-image';

// main image preview element
const ImagePreview = (props) => {
    const filePath = '/Users/nickharb/code/sandbox/2022/atmosfy-challenge/assets/test.mp4';
    const [imagePath, setImagePath] = useState('');

    // conditional style based on component type
    const getStyle = () => {
        if (props.type == 'thumbnail') {
            return {
                flexDirection: 'row',
                flex: 1,
                height: 70,
                opacity: 0.5
            };
        } else if (props.type == 'handle') {
            return {
                height: 96,
                width: 54,
                borderColor: '#ccc',
                borderWidth: 3,
                borderRadius: 10
            };
        } else {
            return {
                width: 200,
                height: 300
            };
        }
    }

    // generate thumbnails from video
    const onScreenLoad = () => {
        createThumbnail({
                url: filePath,
                timeStamp: props.timeStamp,
                dirSize: 1000
            })
            .then(function(response) {
                setImagePath(response.path)
            })
            .catch(err => console.log({ err }));
    }

    // wait for mount before rendering
    useEffect(() => {
        onScreenLoad();
    }, [])

    return (
        <Image style={getStyle()} key={imagePath} source={{ uri: imagePath }} />
    );
}

export default ImagePreview;





