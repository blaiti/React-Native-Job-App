import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Modal, View, Text, Image} from 'react-native'
import * as theme from '../constants/theme'
import JobModal from './jobModal'

const Company = ({item}) => {
    const id = parseInt(item.id)
    const [jobVisible, setJobVisible] = useState(false)

    const ToggleJobVisible = () => {
        setJobVisible(!jobVisible)
    }
    return(
        <TouchableOpacity 
            onPress={() => ToggleJobVisible()}
            style={[styles.container, id%2==0 ? {backgroundColor: theme.colors.white} : {backgroundColor: theme.colors.black} ]}>
            
            <Modal 
                animationType="slide" 
                visible={jobVisible}
                onRequestClose={() => ToggleJobVisible()}>
                    <JobModal closeModal={() => ToggleJobVisible()} item={item} />
            </Modal>
            
            <View style={styles.header}>
                <Image
                    source={item.logo}
                    borderRadius={10}
                    style={{width: 40, height: 40}} />
                <Text style={[styles.jobSalary, id%2==0 ? {color: theme.colors.black} : {color: theme.colors.white} ]}>{item.salary}</Text>
            </View>
            <Text style={[styles.jobTitle, id%2==0 ? {color: theme.colors.black} : {color: theme.colors.white} ]}>{item.job}</Text>
            <Text style={[styles.jobLocation, id%2==0 ? {color: theme.colors.black} : {color: theme.colors.white} ]}>{item.location}</Text>
            <View style={styles.tagContainer}>
                <View style={[styles.tag, {marginRight: 8}, id%2==0 ? {backgroundColor: theme.colors.lightBlack} : {backgroundColor: theme.colors.lightWhite} ]}>
                    <Text style={[styles.jobLocation, {fontWeight: 'bold'}, id%2==0 ? {color: theme.colors.lightWhite} : {color: theme.colors.lightBlack} ]}>{item.time}</Text>
                </View>
                <View style={[styles.tag, id%2==0 ? {backgroundColor: theme.colors.lightBlack} : {backgroundColor: theme.colors.lightWhite} ]}>
                    <Text style={[styles.jobLocation, {fontWeight: 'bold'}, id%2==0 ? {color: theme.colors.lightWhite} : {color: theme.colors.lightBlack} ]}>{item.loc}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 165,
        width: 220,
        padding: 20,
        marginLeft: 20,
        marginRight: 5,
        borderRadius: 15,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    jobSalary: {
        fontWeight: '900' ,
        fontSize: theme.sizes.h3
    },
    jobTitle: {
        marginTop: 10,
        fontWeight: '900' ,
        fontSize: theme.sizes.h3
    },
    jobLocation: {
        marginTop: 3,
        fontWeight: '900' ,
        fontSize: theme.sizes.h2
    },
    tagContainer: {
        flexDirection: 'row'
    },
    tag: {
        flex: 1,
        padding: 5,
        marginTop: 10,
        borderRadius: 5,
        alignItems: 'center',
    }
})

export default Company