/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import AllItems from './AllItems'
import CreateScreen from './CreateScreen'



const HomeScreens = () => {
    const[view, setView] = useState(0)
    const[data,setData]=useState([
        { id: 1, name: 'Item 1', stock: 10,unit:'kg' },
    { id: 2, name: 'Item 2', stock: 20,unit:'kg' },
    { id: 3, name: 'Item 3', stock: 30,unit:'kg' },
    { id: 4, name: 'Item 4', stock: 10,unit:'kg' },
    { id: 5, name: 'Item 5', stock: 20,unit:'kg' },
    {id:6, name: 'Item 6', stock: 60,unit:'kg'},
    {id:7, name: 'Item 7', stock: 70,unit:'kg'},
    {id:8, name: 'Item 8', stock: 80,unit:'kg'},
    {id:9, name: 'Item 9', stock: 90,unit:'kg'},
    {id:10, name: 'Item 10', stock: 100,unit:'kg'},
    ])
  return (
    <View style={styles.container}>
      <Text style={styles.text}>DashBoard</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={[styles.button, {backgroundColor: view === 0 ? '#72C37AFF' : null}]} onPress={() => setView(0)}>
            <Text style={[styles.buttonText, {color: view === 0 ? 'white' : null}]}>All Items</Text>
        </Pressable>
        <Pressable style={[styles.button, {backgroundColor: view === 1 ? '#72C37AFF' : null}]} onPress={() => setView(1)}>
            <Text style={[styles.buttonText, {color: view === 1 ? 'white' : null}]}>Low Stock</Text>
        </Pressable>
        <Pressable style={[styles.button, {backgroundColor: view === 2 ? '#72C37AFF' : null}]} onPress={() => setView(2)}>
            <Text style={[styles.buttonText, {color: view === 2 ? 'white' : null}]}>Create</Text>
        </Pressable>
      </View>
      {view === 0 && <AllItems data={data}/>}
      {view === 1 && <AllItems data={data.filter(item => item.stock < 20)}/>}
      {view === 2 && <CreateScreen data={data} setData={setData}/>}

    </View>
  )
}

export default HomeScreens

const styles = StyleSheet.create({
    container: {
       padding:'4%',
        height:'100%',
        width:'100%',
        backgroundColor: '#fff',
       
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        
        

    },
    buttonContainer: {
        
        // height: '100%',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        // paddingHorizontal: 20,
        // marginTop: 20,
        gap: 10,
        marginVertical:10

    },
    button: {
        paddingVertical:5,
        paddingHorizontal: 10,
        //backgroundColor: '#000',
        borderRadius: 60,
        borderWidth: 0.8,
        borderColor: '#72C37AFF',
        padding:'2%'


    },
    buttonText: {
        fontSize: 15,
        color: 'green',

    },

  
})

  