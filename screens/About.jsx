import { View, Text, Image, FlatList, TouchableOpacity, ScrollView, Alert } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Card } from 'react-native-paper';
import { useState } from 'react';
import { TextInput, Snackbar } from 'react-native-paper';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import * as WebBrowser from 'expo-web-browser';
import { styles } from "../Styles";

const About = () => {
    const [visible, setVisible] = useState(false);
    const onDismissSnackBar = () => setVisible(false);
    let snackMessage = "Thanks for the comment...";
    const [text, setText] = useState('');
    const onChangeText = text => setText(text);
    const [comments, setcomments] = useState([
        { key: "1", who: 'Miranda Stevens', message: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book", photo: require('../assets/girl1.jpg') }
    ]);
    const [tempKey, settempKey] = useState('');
    const commenting = () => {
        try {
            if (text.trim() == '') return;
            pKey = uuidv4();
            settempKey(pKey);
            setcomments([...comments, { key: pKey, who: 'Someone surname', message: text.trim(), photo: require('../assets/girl1.jpg') }])
            setText('');
            snackMessage = "Thanks for the comment...";
            setVisible(true);
        } catch (error) {
            snackMessage = "something went wrong...";
            setVisible(true);
            console.log(String(error));
        }
    }

    const openBrowswer = async () => {
        let resp = await WebBrowser.openBrowserAsync('https://github.com/FutureKgaphola');
        if (resp == null || resp == undefined) {
            Alert.alert('Error', 'Could not open a web browser');
        }
    }

    const renderComment = (item) => (
        <Card style={styles.renderComment}>
            <View style={styles.containerViewComments}>
                <Image style={styles.commentpic} source={item?.photo} alt=".." />
                <Text style={styles.commentWho}>{item?.who}</Text>
            </View>
            <View style={styles.commentMsgView}>
                <Text>{item?.message}</Text>
            </View>
        </Card>
    )
    return (
        <>
            <View style={styles.parentview}>
                <View style={styles.TopBar}>
                    <TouchableOpacity><MaterialCommunityIcons name="dots-grid" size={24} color="black" /></TouchableOpacity>
                    <TouchableOpacity><Ionicons name="search-outline" size={24} color="black" /></TouchableOpacity>
                </View>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}>

                <View style={styles.bannerContainer}>

                    <Text style={styles.textTop}>We give </Text>
                    <Text style={styles.textTop}>Thanks to this awsome</Text>
                    <Text style={styles.textTop}>Developer</Text>

                    <Card style={styles.cardProfile}>
                        <View style={styles.ProfileView1}>
                            <Image style={styles.profileImg} source={require('../assets/girl1.jpg')} />
                            <Text style={styles.profileText}>future Kgaphola</Text>
                        </View>
                        <View style={styles.subViewProfile}>
                            <FontAwesome5 name="github" size={20} color="black" />
                            <TouchableOpacity onPress={() => openBrowswer()}>
                                <Text>https://github.com/FutureKgaphola</Text>
                            </TouchableOpacity>
                        </View>
                    </Card>
                </View>

                <View>
                    <View style={{ flexDirection: "row", gap: 2 }}>
                        <Image style={styles.programingExperience} source={require('../assets/xamarin.png')} />
                        <Image style={styles.programingExperience} source={require('../assets/react.png')} />
                        <Image style={styles.programingExperience} source={require('../assets/nodeonly.png')} />
                        <Image style={styles.programingExperience} source={require('../assets/Typescript.png')} />
                    </View>
                </View>
                <View>
                    <Text style={styles.textBrowse}>Leave a comment below</Text>
                    <FlatList
                        data={comments}
                        renderItem={({ item }) => renderComment(item)}
                    />
                </View>
            </ScrollView>
            <View >
                <TextInput
                    placeholder="leave a comment..."
                    style={{ margin: 2 }}
                    outlineColor={'#7AA874'}
                    activeOutlineColor={'#7AA874'}
                    mode={'outlined'}
                    label="comment" value={text} onChangeText={onChangeText}
                    right={<TextInput.Icon icon={() => (<TouchableOpacity onPress={() => commenting()}><MaterialCommunityIcons name="send-circle-outline" size={24} color="black" /></TouchableOpacity>)} />}
                />
            </View>
            <Snackbar
                duration={4000}
                visible={visible}
                onDismiss={onDismissSnackBar}
                action={{
                    label: 'Undo',
                    onPress: () => {
                        setcomments(comments.filter(item => tempKey !== item.key));
                    },
                }}>
                {snackMessage}
            </Snackbar>
        </>
    );
}


export default About;