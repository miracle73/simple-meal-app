import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { MEALS } from '../data/dummy-data'
import { FlatList } from 'react-native'
import MealItem from '../components/MealItem'

const MealsOverviewScreen = ({ route }) => {
    const id = route.params.categoryId
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(id) >= 0
    })
    const handleMeal = ({ item }) => {
        mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        }
        return <MealItem  {...mealItemProps} />
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={handleMeal} />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,

    }
})

export default MealsOverviewScreen