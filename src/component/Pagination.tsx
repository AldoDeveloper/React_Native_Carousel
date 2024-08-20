import React from 'react';
import { Animated, StyleSheet, View, Dimensions } from 'react-native';
import Slides from '../data/data';

const { width } = Dimensions.get("screen");

const Pagination = ({ data, scroolX, index } : { data: typeof Slides, scroolX: Animated.Value, index: number }) => {
    return (
        <View style={styles.container}>
            {
                data.map((__, idx) => {
                    const inputRange = [(idx - 1 ) * width,  idx * width, (idx + 1) * width];
                    const dotWidth   = scroolX.interpolate({
                        inputRange,
                        outputRange : [12, 30, 12],
                        extrapolate : 'clamp'
                    });
                    return <Animated.View 
                        key={idx.toString()} 
                        style={ [styles.dot, {width: dotWidth}, idx === index ? styles.dotActivate : undefined ]} />
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    dot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: "#ccc",
        marginHorizontal: 4,
    },
    container: {
        position: "absolute",
        bottom: 35,
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    dotActivate: {
        backgroundColor: "#2f40d3",
    }
})

export default Pagination;
