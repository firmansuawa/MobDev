import React from 'react';
import { View, Text, Image } from 'react-native';

const ImageDetail = ({imageSource, title, price}) => {
    return(
        <View>
            <Image 
                style={{width: 225, height: 200}}
                source={imageSource}
            />
            <Text style={{textAlign: 'center', marginBottom: 20}}>{title}   {price}</Text>
        </View>
    )
};

export default ImageDetail;