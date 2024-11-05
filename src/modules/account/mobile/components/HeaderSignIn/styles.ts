import { Dimensions, StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    backgroundImg: {
        width: '100%',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        overflow: "hidden",
        aspectRatio: 1.6
    },
    container: {     
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#454545',
        justifyContent: 'space-between',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        paddingBottom: 24
    },
    containerText: {
        width:  '100%',
        alignItems: 'center',
        marginTop: 16
    },
    title: {
        fontSize: 25,
        color: '#e43606'
    },
    subTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white'
    }   
})

export default Styles