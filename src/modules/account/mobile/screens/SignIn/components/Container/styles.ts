import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get('screen')

const Styles = StyleSheet.create({
    container: {     
        width: '100%',
        height,
        backgroundColor: '#242424',
        flex: 1
    },
    scroll: {
        flex: 1,
        width: '100%'
    }
   
})

export default Styles