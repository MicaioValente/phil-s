import { styled } from "tamagui";
import { AntDesign } from '@expo/vector-icons';

export const styleWallpaper = {
    width: '100%',
    height: 43,
    minHeight: 43,
    borderTopRightRadius: '$3',
    borderTopLeftRadius: '$3',
}

export const styleAvatar = {
    borderWidth: 4,
    backgroundColor: '#454545', 
    borderColor: '#454545',
    borderRadius: 30, 
    width: 64,
    height: 64, 
    marginTop: -32
}


export const AntDesignIcon = styled(AntDesign, {
    color: '$white1'
})

export const BtnCardContainer = {
    marginHorizontal: '$2',
    marginBottom: '$3',
    width: '100%',
    maxWidth: '45%'
}
