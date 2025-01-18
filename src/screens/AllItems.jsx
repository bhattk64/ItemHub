/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import { FlatList, StyleSheet, Text, View } from 'react-native';


const AllItems = ({ data }) => {
    return (
        <View>
            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>Items</Text>
                <Text style={styles.headingText}>Quantity </Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.itemContainer,{backgroundColor: item.stock >20 ? ' #ffcccc' : '#d7f6ff'}]}>
                        <Text style={styles.ItemText}>{item.name}</Text>
                        <Text style={styles.ItemText}>{item.stock}</Text>
                    </View>
                )}
                contentContainerStyle={{gap: 10}}
            />
        </View>
    );
};

export default AllItems;

const styles = StyleSheet.create({
    headingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical:10
    },
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',

    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical:10,
        borderRadius: 5,
    },
    ItemText: {
        fontSize: 13,
        fontWeight: 'bold',
    },
});
