import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const IconButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
            <Ionicons size={24} color="white" name="star" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
})

export default IconButton