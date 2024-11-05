import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    input: {
        //borderWidth: 0,
        marginBottom: 12
    },

    containerInput: {
        width: '100%', 
        borderRadius: 8, 
        borderWidth: 0, 
        borderColor: 'transparent'
    },

    inputContainer: {
        backgroundColor: '#454545', 
        paddingHorizontal: 12, 
        borderRadius: 8, 
        borderBottomWidth: 0
    },

    button: {
        borderRadius: 8,
        width: '70%',
        height: 40,
        alignSelf: 'center'
    },

    buttonSocial: {
        borderRadius: 8,
        height: 40,
        marginBottom: 10,
        width: '70%',
        alignSelf: 'center',
        backgroundColor: 'white',
        color: '#242424',
        textAlign: 'left'
    },

    row: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    line: {
        height: 1,
        backgroundColor: '#e7e8ef',
        flex: 1,
        padding: 0,
        margin: 0
    },

    textActionsAfterInputs: { 
        color: 'white',
        marginLeft: 8, 
        paddingBottom: 1,
        fontSize: 14
    }
})

export default Styles