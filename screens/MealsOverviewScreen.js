import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { MEALS, CATEGORIES } from '../data/dummy-data'
import { FlatList } from 'react-native'
import MealItem from '../components/MealItem'

const MealsOverviewScreen = ({ route, navigation }) => {
    const id = route.params.categoryId
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(id) >= 0
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === id).title
        navigation.setOptions({
            title: categoryTitle
        })
    }, [id, navigation])
    const handleMeal = ({ item }) => {
        mealItemProps = {
            id: item.id,
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