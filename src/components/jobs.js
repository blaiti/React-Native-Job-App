import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native'
import * as theme from '../constants/theme'
import Icon from 'react-native-vector-icons/MaterialIcons';

const Jobs = ({item}) => {
    const id = parseInt(item.id)
    return(
        <View style={styles.container}>
            <Image
                source={item.logo}
                borderRadius={10}
                style={{width: 40, height: 40}} />
            <View style={styles.textContainer}>
                <Text style={styles.jobTitle}>{item.job}</Text>
                <Text style={styles.jobLocation}>{item.location}</Text>
            </View>
            <View style={styles.iconContainer}>
                <Icon name="more-vert" size={30} color={theme.colors.black} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 17,
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: theme.colors.white
    },
    textContainer: {
        flex: 1,
        marginLeft: 10
    },
    iconContainer: {
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    jobTitle: {
        fontWeight: 'bold',
        fontSize: theme.sizes.h3,
        color: theme.colors.black
    },
    jobLocation: {
        fontSize: theme.sizes.h2,
        color: theme.colors.silver
    },
})

export default Jobs