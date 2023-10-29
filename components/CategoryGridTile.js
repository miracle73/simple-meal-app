import { View, Text, Pressable, StyleSheet, Platform } from 'react-native'
import React from 'react'

const CategoryGridTile = ({ title, color, onPress }) => {
    return (
        <View style={styles.gridItem}>
            <Pressable android_ripple={{ color: "#ccc" }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
                onPress={onPress}>
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        backgroundColor: 'white',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    buttonPressed: {
        opacity: 0.5
    },
    button: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default CategoryGridTile