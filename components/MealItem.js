import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const MealItem = ({ id, title, imageUrl, duration, complexity, affordability }) => {
    const navigation = useNavigation();
    const selectMealItemHandler = () => {
        navigation.navigate('MealDetailScreen', {
            mealId: id
        })
    }


    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
                onPress={selectMealItemHandler}>
                <View style={{
                    borderRadius: 8,
                    overflow: 'hidden'
                }}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={{ height: 200, width: "100%" }} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        margin: 8,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={styles.detailItem}>{duration}m</Text>
                        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>

        </View>
    )
}
const styles = StyleSheet.create({
    buttonPressed: {
        opacity: 0.5
    },
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.35,
        shadowRadius: 16,
        backgroundColor: 'white',
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
})

export default MealItem