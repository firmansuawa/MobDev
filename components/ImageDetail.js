import React from 'react';
import { View, Text, Image } from 'react-native';

const ImageDetail = ({imageSource, title, price}) => {
    return(
        <View>
            <Image 
                style={{width: 327, height: 230, flex: 1, alignItems: 'center'}}
                source={imageSource}
            />
            <Text style={{marginBottom: 2, fontSize: 18, fontWeight: 'bold'}}>{title}</Text>
            <Text style={{marginBottom: 15, fontSize: 15}}>{price}</Text>
        </View>
    )
};

export default ImageDetail;