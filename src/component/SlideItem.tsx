import React from 'react';
import { ListRenderItemInfo, StyleSheet, View, Dimensions, Text, Animated, Easing } from 'react-native';
import Slides from '../data/data';

const { width, height } = Dimensions.get("screen");

const SlideItem = ({ item: { item } }: { item : ListRenderItemInfo<typeof Slides[0]> }) => {

    const translateYImage = new Animated.Value(40);
    Animated.timing(translateYImage, {
        toValue : 0,
        duration: 1000,
        useNativeDriver : true,
        easing: Easing.bounce,
    }).start();

    return (
        <View style={styles.container}>
            <Animated.Image
                source={item.img}
                resizeMode='contain'
                style={[
                    styles.image,
                    {
                        transform: [
                            {
                                translateY: translateYImage
                            }
                        ]
                    }
                 ]
                } />

            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    
    container: {
        width,
        height,
        alignItems: "center",
    },

    content: {
        alignItems: "center",
        flex: 0.4
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333"
    },

    description: {
        fontSize: 18,
        marginVertical: 10,
        color: "#333"
    },

    price: {
        fontSize: 32,
        fontWeight: "bold",
        color: "black"
    },

    image: {
        width: "100%",
        flex: 0.6
    }
})
export default SlideItem;
