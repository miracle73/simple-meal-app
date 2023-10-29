import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile';



const CategoriesScreen = ({ navigation }) => {
    const renderCategoryItem = ({ item }) => {
        const handlePress = () => {
            navigation.navigate('MealsOverview', {
                categoryId: item.id
            })
        }
        return <CategoryGridTile title={item.title}
            color={item.color} onPress={handlePress} />;
    }
    return (
        <FlatList
            data={CATEGORIES}
            renderItem={renderCategoryItem}
            KeyExtractor={(item) => { item.id }}
            numColumns={2} />
        // <View>
        //   <Text>CategoriesScreen</Text>
        // </View>
    )
}

export default CategoriesScreen