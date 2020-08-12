import React from 'react';
import {StyleSheet, View, Text} from 'react-native'
import * as theme from '../constants/theme'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Experience ({ item }) {
    return(            
        <View style={styles.container}>
            <View>
                <Icon name="keyboard-arrow-right" size={20} color={theme.colors.black} />
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.primaryText}>{item.position}</Text>
                <Text style={styles.primaryText}>{item.company}</Text>
                <Text style={styles.secondText}>{item.start} - {item.end}</Text>
            </View>
        </View>
    )
}

const styles =StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    bodyContainer: {
        marginLeft: 10,
        justifyContent: 'space-between'
    },
    primaryText: {
        lineHeight: 30,
        fontSize: theme.sizes.h3,
        color: theme.colors.black
    },
    secondText: {
        lineHeight: 30,
        color: theme.colors.gray
    }
});