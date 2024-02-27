import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Country({ country }) {

    return (
        
        <View>
            
            <Text style={styles.header} >Country: {country.name.common}</Text>
            <Image
                source={{
                    uri: country.flags.png
                }}
                style={{ width: 100, height: 100 }}
            ></Image>
        </View>
    )
};
const styles = StyleSheet.create({
    header: {
        fontSize: 50,
        marginTop: 20,
        color: 'red',
    },
   
})