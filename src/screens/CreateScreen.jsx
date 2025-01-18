/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'
import { FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'


const CreateScreen = ({ data, setData }) => {
  const [name, setName] = useState('')
  const [stock, setStock] = useState('')
  const [isEdit,setIsEdit]=useState(false)
  const [id,setId]=useState(null)

  const handlerAddItem = () => {
    const newItem = {
      id: Date.now(),
      name: name,
      stock: stock,
      
    }
    setData([...data, newItem])
    setName('')
    setStock('')
    setIsEdit(false)
   
}
const deleteItemhandler=(id)=>{
  const updatedData=data.filter((item)=>item.id!==id)
  setData(updatedData)
}
const editItemhandler=(item)=>{
  setIsEdit(true)
  setName(item.name)
  setStock(item.stock)
  setId(item.id)
  
}

const updateItem=()=>{
  const updatedData=data.map((item)=>{
    if(item.id===isEdit){
      return {...item,name:name,stock:stock}
    }
    return item
  })
  setData(updatedData)
  setName('')
  setStock('')
  setIsEdit(false)
}

  return (
    <ScrollView style={styles.container}>
      <TextInput
        placeholder='Enter Item Name'
        placeholderTextColor={'#999'}
        style={styles.input}
        value={name}
        onChangeText={(item) => setName(item)}
       // scrollEnabled

      />

      <TextInput
        placeholder='Enter Stock Amount'
        placeholderTextColor={'#999'}
        style={styles.input}
        value={stock}
        onChangeText={(item) => setStock(item)}

      />
      <Pressable style={styles.button}onPress={() => isEdit ? updateItem() : handlerAddItem()}>
        <Text style={styles.button}>{isEdit ? 'Update Item' : 'Add Item'}</Text>
      </Pressable>
      <View style={{marginTop:10 }}>
        <Text style={styles.headingText}>All items in the Stock</Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={[styles.itemContainer, { backgroundColor: item.stock > 20 ? ' #ffcccc' : '#d7f6ff' }]}>
              <Text style={styles.ItemText}>{item.name}</Text>
              <Text style={styles.ItemText}>{item.stock}</Text>
              <View style={{flexDirection: 'row', justifyContent: 'space-between',gap: 10}}>
                <Text style={styles.ItemText}>Stock Status: {item.stock > 20 ? 'In Stock' : 'Low Stock'}</Text>
               <Pressable onPress={()=>editItemhandler(item)}>
               <Text style={styles.ItemText}>Edit Stock </Text>
               </Pressable>
              <Pressable onPress={()=>deleteItemhandler(item.id)}>
              <Text style={styles.ItemText}>Delete Item</Text>
              </Pressable>
              </View>
            </View>
          )}
          contentContainerStyle={{ gap: 10 }}
        />
      </View>

    </ScrollView>
  )
}

 export default CreateScreen

const styles = StyleSheet.create({
  container: {
    paddingVertical: '4%',
    backgroundColor: '#f0f0f0',
    gap: 10
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderColor: '#72C37AFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#72C37AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10

  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  ItemText: {
    fontSize: 13,
    fontWeight: 'bold',
  },

})