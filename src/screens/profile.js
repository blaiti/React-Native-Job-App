import React from 'react';
import {StyleSheet, View, ScrollView, TouchableOpacity, Image, Text, FlatList} from 'react-native'
import * as theme from '../constants/theme'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Experience from '../components/Experience'
import Education from '../components/Education'

const Exp = [
    {
        id: '1',
        company: 'Phone Service Center Tunisia',
        start: 'Jan 2018',
        end: 'Feb 2018',
        position: 'Intern',
    },
    {
        id: '2',
        company: '3oulti.tn',
        start: 'May 2020',
        end: 'Jul 2020',
        position: 'Web Master',
    },
    {
        id: '3',
        company: 'Etikks',
        start: 'Jun 2020',
        end: 'Present',
        position: 'Mobile Developer',
    },
]
const Edu = [
    {
        id: '1',
        institute: 'Khaled Ben Walid High School',
        start: 'Jan 2018',
        end: 'Feb 2018',
        diploma: 'Computer Sciences',
    },
    {
        id: '2',
        institute: 'ISET Charguia',
        start: 'Sep 2017',
        end: 'Jun 2020',
        diploma: 'Computer Technologies',
    },
]

export default function Profile ({ navigation }) {
    return(            
        <View style={{flex: 1}}>
            {/* Header */}
            <View  style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="keyboard-arrow-left" size={30} color={theme.colors.black} />
                </TouchableOpacity>
                <Icon name="edit" size={30} color={theme.colors.black} />
            </View>

            {/* Body */}
            <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
                {/* Company Details */}
                <View style={styles.titleContainer}>
                    <Image 
                        style={{width: 100, height: 100, borderRadius: 10}}
                        source={ require('../images/Blaiti.jpg') } />
                    <View style={styles.titleTextContainer}>
                        <Text style={styles.nameText}>Skander Blaiti</Text>
                        <Text style={styles.posText}>Front-End Developer</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon name="location-on" size={20} color={theme.colors.gray} />
                            <Text style={[styles.posText, {color: theme.colors.gray}]}>Tunis, Tunisia</Text>
                        </View>
                    </View>
                </View>

                {/* Description */}
                <Text style={styles.normalText}>I am a self-taught Web/Mobile Frontend Developer and UX/UI Designer.</Text>

                {/* Experience */}
                <Text style={styles.titleText}>Experience</Text>   
                <View>
                    <FlatList 
                        data={Exp}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                    <Experience item={item} />
                            )
                        }} />
                </View>

                {/* Education */}
                <Text style={styles.titleText}>Education</Text>   
                <View>
                    <FlatList 
                        data={Edu}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                    <Education item={item} />
                            )
                        }} />
                </View>

                {/* Languages */}
                <Text style={styles.titleText}>Languages</Text>  
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20}}>
                    <Text style={styles.normalText}>Arabic</Text>
                    <Text style={styles.normalText}>French</Text>
                    <Text style={styles.normalText}>English</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles =StyleSheet.create({
    header: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.lightWhite
    },
    body: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        backgroundColor: theme.colors.lightWhite
    },
    titleContainer: {
        flexDirection: 'row',
    },
    titleTextContainer: {
        marginLeft: 10,
        justifyContent: 'space-between'
    },
    nameText: {
        fontWeight: 'bold',
        fontSize: theme.sizes.h6,
        color: theme.colors.black
    },
    posText: {
        fontWeight: '900',
        fontSize: theme.sizes.h3,
        color: theme.colors.black
    },
    titleText: {
        paddingTop: 20,
        paddingBottom: 7,
        fontWeight: 'bold',
        fontSize: theme.sizes.h4,
        color: theme.colors.black
    },
    normalText: {
        paddingTop: 15,
        fontWeight: '900',
        fontSize: theme.sizes.h3,
        color: theme.colors.black
    }
});