import { StyleSheet,Dimensions } from "react-native";

const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
    //subHome styles
    bookIcon:{ marginLeft: 5, marginTop: 5 },
    viewAuthor:{ flexDirection: "row", alignItems: "center", paddingBottom: 2 },
    bookImgade:{ borderRadius: 90, width: 30, height: 30, objectFit: "contain" },
    booknameTxt:{ flex: 1, fontSize: 15, fontFamily: 'InclusiveSans_Regular', fontWeight: "bold", padding: 5 },
    bookratingView: { flexDirection: "row", justifyContent: "space-between", padding: 5 },
    // container: {
    //     flex: 1,
    //     backgroundColor: '#fff',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },

    //onboarding styles
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    lottie:{
        width: width*0.9,
        height: width
    },
    doneButton: {
        padding: 20
    },

    //About screeen styles
    textTop: {
        color: 'white',
        fontSize: 20,
        fontWeight: "600",
        fontFamily: 'CroissantOne'
    },
    textBrowse: {
        color: '#7AA874',
        fontSize: 20,
        fontWeight: "600",
        fontFamily: 'InclusiveSans_Regular'
    },
    renderComment:{ backgroundColor: '#9EC8B9',margin:3 },
    containerViewComments:{ flexDirection: 'row', margin: 5, alignItems: 'center', gap: 5 },
    commentpic:{ borderRadius: 90, width: 30, height: 30, objectFit: "contain" },
    commentWho:{ fontFamily: 'InclusiveSans_Regular', color: 'white' },
    commentMsgView:{ flexDirection: 'row', margin: 5, alignItems: 'center', gap: 5 },
    parentview:{ backgroundColor: '#7AA874' },
    TopBar:{ marginTop: 10, backgroundColor: '#7AA874', flexDirection: "row", justifyContent: "space-between", padding: 20 },
    bannerContainer:{ backgroundColor: '#7AA874', borderBottomLeftRadius: 15, padding: 25 },
    cardProfile:{ backgroundColor: '#9EC8B9' },
    ProfileView1:{ flexDirection: 'row', margin: 5, alignItems: 'center', gap: 5 },
    profileImg:{ borderRadius: 90, width: 30, height: 30, objectFit: "contain" },
    profileText:{ fontFamily: 'InclusiveSans_Regular', color: 'white' },
    subViewProfile:{ flexDirection: 'row', margin: 5, alignItems: 'center', gap: 5 },
    programingExperience:{ width: 20, height: 20, objectFit: "contain" }

});