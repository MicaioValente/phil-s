import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { FlatList } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Button, If, Image, YStack } from '@dls/components'
import { getPhotos } from '@core/cameraRoll'
import { BackgroundCamera, RoundIcon, RoundSelectedIcon, StandartIcon } from '@modules/feed/mobile/assets'

import type { GalleryListProps } from '@modules/feed/mobile/components/GalleryList/interfaces'
import { PhotoIdentifier, PhotoIdentifiersPage } from '@core/cameraRoll/interfaces';

const takepicktureItem = { 
    node: {
        id: 'takePicture',
        type: 'photo',
        image: {
            uri: ''
        }
    }
}

function GalleryList({ selectedItem }: GalleryListProps) {
    const [selectedPhoto, setSelectedPhoto] = useState<PhotoIdentifier>()
    const [photos, setPhotos] = useState<PhotoIdentifiersPage>()

    const getList = async () => {
        const res = await getPhotos({ first: 20, assetType: 'All' })
        setPhotos(res)
    }

    const setPhoto = useCallback( (item: PhotoIdentifier) => setSelectedPhoto(item), [])

    const imagesGallary = useMemo( () => {
        const edges = photos?.edges ? photos.edges : []
        return [takepicktureItem,...edges]
    }, [photos])

    const selectItem = useCallback( (item: PhotoIdentifier) => {
        setPhoto(item as PhotoIdentifier)
        selectedItem(item)
    }, [])

    useEffect( () => {
        getList()
    }, [])

    return  <YStack px={"$2"} w={'100%'}>
                <FlatList
                    numColumns={3}
                    renderItem={ ({ item }) => (
                        <If
                            condition={item.node.id != 'takePicture'}
                            elseRender={
                                <Button p={'$1'} width={'33%'} onPress={() => selectItem(item as PhotoIdentifier)} ai={'center'} jc={'center'} >
                                    <BackgroundCamera  style={{ maxWidth: '100%', overflow: 'hidden' }} />
                                    <AntDesign name='camerao' size={36} color={'white'} style={{ position: 'absolute' }} />
                                </Button>
                            }
                        >
                            <Button p={'$1'} width={'33%'} borderRadius={5} onPress={() => selectItem(item as PhotoIdentifier)}>   
                                <Image 
                                    source={{ uri: item.node.image.uri }} 
                                    w={'100%'} 
                                    borderRadius={5} 
                                    aspectRatio={0.7} 
                                />
                                <YStack pos={'absolute'} top={8} r={8} elevation={2}>
                                    <If
                                        condition={!(selectedPhoto?.node?.id === item.node.id) }
                                        elseRender={<RoundSelectedIcon />}
                                    >
                                        <RoundIcon />
                                    </If>
                                </YStack>
                                <If condition={item.node.type.includes('video')}>
                                    <StandartIcon size={13} style={{ position: 'absolute', bottom: 8, right: 8 }} color={'blue'} />
                                </If>
                            </Button>
                        </If>
                    )}
                    data={imagesGallary}
                />
            </YStack>
}

export default GalleryList