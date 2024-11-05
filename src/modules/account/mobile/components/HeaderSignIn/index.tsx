import { View, Text, ImageBackground } from 'react-native';
import Styles from './styles';
import { HEADER_SIGN_PROPS } from './types';
import LinearGradientText from '@dls/components/LinearGradientText';
import SignBack from '../SignBack';
import { If } from '@dls/components';

const HeaderSignIn: React.FC<HEADER_SIGN_PROPS> = ({ title, subTitle, imgBackground, styleImage, visibleIconBack = false }) =>  {
    return (
       <View style={Styles.container}>
            <If condition={!!imgBackground}>
                <ImageBackground source={imgBackground} style={{...Styles.backgroundImg, ...styleImage }}  />
            </If>
            
            <If condition={visibleIconBack}>
                <SignBack />
            </If>
            <View style={Styles.containerText}>
                <LinearGradientText fow="bold" style={Styles.title}>{title}</LinearGradientText>  
                <Text style={Styles.subTitle}>{subTitle}</Text>    
            </View>
       </View>
    )
};

export default HeaderSignIn;