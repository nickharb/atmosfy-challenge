import {
    StyleSheet,
    View,
    Image
} from 'react-native';
import IMAGES from '../images/index.js';

// width of main preview element
const imageWidth = 200;

// main image preview element
const ImagePreview = (props) => {
    return (
        // viewport displays one image at a time
        <View style={styles.imagePreviewViewport}>
            {/* as the slider updates, translate preview list */}
            <View style={[styles.imagePreviewList, {
                transform: [
                    { translateX: -props.sliderValue*imageWidth }
                ]
            }]}>
                {/* load all images in a row */}
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



