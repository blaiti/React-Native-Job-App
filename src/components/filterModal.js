import React, {useState} from 'react';
import { 
    View,  
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as theme from '../constants/theme'
import {Picker} from '@react-native-community/picker';
import Slider from '@react-native-community/slider';

const FilterModal = (props) => {
    const [category, setCategory] = useState('UX/UI Design')
    const [distance, setDistance] = useState(0)

    const Reset = () => {
        setCategory('UX/UI Design')
        setDistance(0)
    }

    return (
        <View style={styles.container}>
            {/* Header */}
            <View  style={styles.header}>
                <TouchableOpacity onPress={props.closeModal}>
                    <Icon name="keyboard-arrow-left" size={30} color={theme.colors.black} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Filter</Text>
                <TouchableOpacity onPress={() => Reset()}>
                    <Text style={{color: theme.colors.gray}}>Reset</Text>
                </TouchableOpacity>
            </View>

            {/* Body */}
            <View style={styles.body}>
                <Text style={styles.title}>Category</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        value={distance}
                        selectedValue={category}
                        onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}>
                        <Picker.Item label="UX/UI Design" value="UX/UI Design" />
                        <Picker.Item label="Graphic Design" value="Graphic Design" />
                        <Picker.Item label="Digital Marketing" value="Digital Marketing" />
                        <Picker.Item label="Computer Technologies" value="Computer Technologies" />
                    </Picker>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.title}>Distance</Text>
                    <Text style={styles.title}>{distance} km</Text>
                </View>
                <Slider
                    step={1}
                    style={{height: 50}}
                    minimumValue={0}
                    maximumValue={100}
                    minimumTrackTintColor={theme.colors.gray}
                    maximumTrackTintColor={theme.colors.black}
                    onValueChange={value => setDistance(value)}
                />

                {/* Location */}
                <Text style={styles.title}>Location</Text>
                <View style={styles.locationInputContainer}>
                    <Icon name="my-location" size={30} color={theme.colors.silver} />
                    <TextInput 
                        style={{marginLeft: 10}}
                        placeholder='Location..' />
                </View>
            </View>

            {/* Footer */}
            <View style={{padding: 20, backgroundColor: theme.colors.white}}>
                <TouchableOpacity style={styles.btnContainer}  onPress={props.closeModal}>
                    <Text style={styles.btnText}>Apply Filter</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: theme.colors.lightWhite
    },
    header: {
        height: 70,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.lightWhite
    },
    headerTitle: {
        fontWeight: 'bold',
        alignItems: 'center',
        fontSize: theme.sizes.h4
    },
    body: {
        flex: 1, 
        padding : 20,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: theme.colors.white
    },
    title: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: theme.sizes.h4
    },
    pickerContainer: {
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: theme.colors.black
    },
    normalText: {
        fontWeight: '900',
        fontSize: theme.sizes.h3,
        color: theme.colors.black
    },
    locationInputContainer: {
        marginTop: 10,
        paddingLeft: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: theme.colors.black,
        alignItems: 'center',
        flexDirection: 'row',
    },
    btnContainer: {
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.black
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: theme.sizes.h4,
        color: theme.colors.white
    }
});

export default FilterModal;