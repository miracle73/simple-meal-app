import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { MEALS } from '../data/dummy-data'

const MealDetailScreen = ({ route, navigation }) => {
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)
    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={{
                width: '100%',
                height: 350
            }} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={{
                fontWeight: 'bold',
                fontSize: 24,
                margin: 8,
                textAlign: 'center',
                color: 'white'
            }}>{selectedMeal.title}</Text>
            <View style={{
                flexDirection: 'row',
                margin: 8,
                alignItems: 'center',
                justifyContent: 'center',

            }}>
                <Text style={styles.detailItem}>{selectedMeal.duration}m</Text>
                <Text style={styles.detailItem}>{selectedMeal.complexity.toUpperCase()}</Text>
                <Text style={styles.detailItem}>{selectedMeal.affordability.toUpperCase()}</Text>
            </View>
            <View style={{
                alignItems: 'center'
            }}>
                <View style={{
                    width: '80%',

                }}>
                    <View style={styles.subTitleContainer}>
                        <Text style={styles.subTitle}>Ingredients</Text>
                    </View>

                    {selectedMeal.ingredients.map((ingredient) => (
                        <View key={ingredient}
                            style={{
                                paddingVertical: 5,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#e2b497',
                                borderRadius: 6,
                                marginVertical: 5
                            }}>
                            <Text style={styles.inlineText}>{ingredient}</Text>
                        </View>
                    ))}
                    <View style={styles.subTitleContainer}>
                        <Text style={styles.subTitle}>Steps</Text>
                    </View>

                    {selectedMeal.steps.map((step) => (
                        <View key={step} style={{
                            paddingVertical: 5,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#e2b497',
                            borderRadius: 6,
                            marginVertical: 5
                        }}>
                            <Text style={styles.inlineText} >{step}</Text>
                        </View>))}
                </View>
            </View>


        </ScrollView>
    )
}
const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 24
    },
    subTitle: {
        color: '#e2b497',
        fontWeight: 'bold',
        fontSize: 18,

        textAlign: 'center',

    },
    subTitleContainer: {
        padding: 6,
        marginVertical: 4,
        marginHorizontal: 12,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
        color: 'white'
    },
    inlineText: {
        color: 'white',
        textAlign: 'center'
    }
})

export default MealDetailScreen