import React, { useRef } from 'react';
import { Animated, FlatList, StyleSheet, View } from 'react-native';
import Slides from '../data/data';
import SlideItem from './SlideItem';
import Pagination from './Pagination';

const Slider = () => {

    const [index, setIndex] = React.useState<number>(0);
    const scroolX = React.useRef(new Animated.Value(0)).current;

    const handleOnScrool = (ev: any) => {
        Animated.event([
            {
                nativeEvent: {
                    contentOffset:{
                        x: scroolX
                    }
                }
            }
        ], 
        { useNativeDriver: false })(ev)
    };

    const handleViewableChange = useRef(({ viewableItems } : any) => {
        setIndex(viewableItems[0].index);
    }).current;

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50,
    }).current;
    
    return (
        <View>
            <FlatList 
                data={Slides} 
                renderItem={(item) => <SlideItem item={item}/> }
                horizontal
                pagingEnabled
                keyExtractor={item => item.id as any}
                snapToAlignment='center'
                showsHorizontalScrollIndicator={false}
                onScroll={handleOnScrool} 
                onViewableItemsChanged={handleViewableChange}
                viewabilityConfig={ viewabilityConfig }/>
            <Pagination data={Slides} scroolX={scroolX} index={index}/>
        </View>
    );
};

const styles = StyleSheet.create({})
export default Slider;
