import {
    StyleSheet,
    View,
    Image
} from 'react-native';
import IMAGES from '../images/index.js';

const imageWidth = 200;

const ImagePreview = (props) => {
    return (
        <View style={styles.imagePreviewViewport}>
            <View style={[styles.imagePreviewList, {
                transform: [
                    { translateX: -props.sliderValue*imageWidth }
                ]
            }]}>
                {IMAGES.map((thumb) => (
                    <Image style={styles.imagePreview} key={thumb.id} source={thumb.source} />
                ))}
            </View>
        </View>
    );
}

export default ImagePreview;

const styles = StyleSheet.create({
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
    imagePreview: {
        width: 200,
        height: 300
    }
});



