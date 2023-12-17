import { View, Text, Image, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome, FontAwesome5, Foundation, MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Card,Chip, Button,Modal } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import { useState } from 'react';
import { Dimensions } from "react-native";
import { styles } from "../Styles";

const SubHome = () => {
    const [visible, setVisible] = useState(false);
    const [modaldata,setModaldata]=useState({});
  const showModal = (info) => {
    setModaldata(info);
    setVisible(true);}
  const hideModal = () => setVisible(false);
  
  const containerStyle = {backgroundColor: 'white', padding: 20,margin:10};
    const [data, setbooks] = useState([
        { key: 1, author: 'Future Kgpaphola', authorimg: require('../assets/girl1.jpg'), bookname: `The psycology of \n monkey`, photo: require('../assets/book5.jpg') },
        { key: 2, author: 'Elizaberth Andrews', authorimg: require('../assets/girl4.jpg'), bookname: `The Company \n of one\n 2nd Edition`, photo: require('../assets/book3.jpg') }]);

    const itemsArray = [{ key: 1, bookname: `The Company \n of one\n 2nd Edition`, photo: require('../assets/book3.jpg') },
    { key: 2, bookname: `The Company \n of one\n 3rd Edition`, photo: require('../assets/book1.jpg') },
    { key: 3, bookname: `How innovation \n works`, photo: require('../assets/book4.jpg') },
    { key: 4, bookname: `The psycology of \n monkey`, photo: require('../assets/book5.jpg') }];

    const renderItem = (item) => (
        <View style={{ margin: 10 }}>
            <Card onPress={()=>showModal(item)}>
                <FontAwesome5 style={styles.bookIcon} name="book-open" size={15} color="#7AA874" />
                <Card.Title title={item?.bookname} />
                <Card.Content>
                    <View style={styles.viewAuthor}>
                        <Image style={styles.bookImgade} source={item?.authorimg} />
                        <Text>Author: {item?.author}</Text></View>
                </Card.Content>
                <Card.Cover resizeMode='contain' source={item?.photo} />
                <Card.Actions>
                    <Button
                        rippleColor={'#7AA874'}
                        style={{ borderColor: '#7AA874' }}
                        textColor='#7AA874'
                    >read more</Button>
                    <Button rippleColor='white' style={{ backgroundColor: '#7AA874' }}>share</Button>
                </Card.Actions>
            </Card>
        </View>
    );
    const renderItems = (item) => (
        <Card style={{ overflow: "hidden", padding: 0, margin: 2 }} onPress={()=>showModal(item)}>
            <View style={{ flexDirection: "row" }}>
                <Image
                    source={item.photo}
                    style={{ aspectRatio: 3 / 4, objectFit: "cover", width: 90, height: 90 }}
                />

                <View style={{ alignItems: "stretch", flex: 1 }}>
                    <Text style={styles.booknameTxt}>
                        {item.bookname}
                    </Text>
                    <View style={styles.bookratingView}>
                        <Text>⭐4.5</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Foundation name="eye" size={24} color="black" />
                            <Text>2.1k</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Card>
    )
    return (
        <>
            <View style={{ backgroundColor: '#7AA874' }}>
                <View style={styles.TopBar}>
                    <TouchableOpacity><MaterialCommunityIcons name="dots-grid" size={24} color="black" /></TouchableOpacity>
                    <TouchableOpacity><Ionicons name="search-outline" size={24} color="black" /></TouchableOpacity>
                </View>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <View style={styles.bannerContainer}>
                    <Text style={styles.textTop}>What do </Text>
                    <Text style={styles.textTop}>you want to Read?</Text>
                    <Text>Recommended({itemsArray.length})</Text>

                    <FlatList
                        data={itemsArray}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => renderItems(item)}
                    />
                </View>

                <View>
                    <Text>New release({itemsArray.length})</Text>
                    <FlatList
                        data={itemsArray}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => renderItems(item)}
                    />
                </View>

                <View>

                    <Text style={styles.textBrowse}>Featured books</Text>
                    <Carousel
                        data={data}
                        renderItem={({ item }) => renderItem(item)}
                        sliderWidth={Dimensions.get('window').width - 20}
                        itemWidth={300}
                        autoplay={true}
                        autoplayInterval={5000}
                        loop={true}
                    />
                </View>

                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <Text style={{fontSize:16,fontWeight:'bold'}}>Book Store</Text>
                    <View style={{flexDirection:"row"}}>
                    <Image
                    source={modaldata?.photo}
                    style={{ aspectRatio: 3 / 4, objectFit: "cover", width: 190, height: 190 }}

                    />
                    <View style={{padding:3,gap:2}}>
                        <Text>{modaldata?.bookname}</Text>
                        
                        <View style={{flexDirection:"row"}}>
                            <Chip style={{backgroundColor:'#7AA874'}} icon={()=>(<FontAwesome name="money" size={20} color="black" />)} onPress={() => console.log('Pressed')}>Purchase</Chip></View>
                    </View>

                    </View>
                </Modal>

            </ScrollView>
        </>

    );
}

export default SubHome;