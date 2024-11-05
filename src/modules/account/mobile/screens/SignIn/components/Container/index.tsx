import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import Styles from './styles';
import { CONTAINER_SIGNIN_PROPS } from './types';

const Container: React.FC<CONTAINER_SIGNIN_PROPS> = (props) =>  {
    return (
        props?.enabledScroll
        ?
            <KeyboardAvoidingView  {...props} style={[Styles.container, props?.style]} behavior='padding'>
                <ScrollView style={[Styles.scroll, props?.scrollProps?.style]} keyboardShouldPersistTaps='handled' {...props.scrollProps}>
                    {props?.children}
                </ScrollView>
            </KeyboardAvoidingView>
        :
            <View  {...props} style={[Styles.container, props?.style]} >{props?.children}</View>

    )
};

export default Container;