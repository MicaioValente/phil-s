import React, { useEffect, useMemo, useRef, useState } from 'react';
import {  Dimensions, FlatList } from 'react-native';
import { MODAL_STORY_PROPS, TYPE_CHANGE_STORY_MODAL } from '@modules/feed/mobile/components/ModalStory/interfaces';
import { inicialSelectedStory, useStories } from '@modules/feed/business/stores';
import { If, YStack } from '@dls/components';
import { Modal} from '@modules/feed/mobile/components/ModalStory/styles';
import ItemStory from '@modules/feed/mobile/components/ModalStory/itemStory';
const { width, height } = Dimensions.get('window')

const ModalStory: React.FC<MODAL_STORY_PROPS> = ({  }) =>  {
    const { data, selectedStory: { person, personId, story, image } , selectStory } = useStories()
    const [currentIndexStory, setCurrentIndexStory] = useState<number>(0)

    const carouselRef = useRef<FlatList<any> | null>(null);

    const storiesOfEachPerson = useMemo( () => {
        return data.filter( d => d.personId != "1")
    }, [data]);

    const currentDataIndexStory:number = useMemo( () => {
        return storiesOfEachPerson.findIndex( d => d.personId === personId) || 0
    },[personId])

    const closeStory = () => {
        setCurrentIndexStory(0)
        selectStory(inicialSelectedStory)
    }

    const changePersonStory = (type: TYPE_CHANGE_STORY_MODAL) => {
        let indexPersonStory = currentDataIndexStory
        switch(type){
            case 'PREV':
                indexPersonStory -= 1;
                if(indexPersonStory < 0)
                    closeStory()
                else
                    selectStory(storiesOfEachPerson[indexPersonStory])
                break;
            case 'PROX':
                indexPersonStory += 1
                if(storiesOfEachPerson[indexPersonStory]) 
                    selectStory(storiesOfEachPerson[indexPersonStory])
                else
                    closeStory()
                break;
        }
    }

    const viewableItemsChanged = ({ viewableItems }: any) => {
        if(viewableItems?.[0]?.index != undefined && viewableItems?.[0]?.index != currentIndexStory){
            setCurrentIndexStory(viewableItems?.[0]?.index)
            selectStory(viewableItems?.[0]?.item)
        }           
    };
    
    useEffect( () => {
        carouselRef?.current?.scrollToIndex({ animated: true, index: currentDataIndexStory })
    }, [personId])

    return (
        <Modal visible={!!personId} animationType="fade" >
            <YStack f={1} backgroundColor="$background">
                <If
                    condition={!!personId}
                >
                    <FlatList 
                        ref={carouselRef}
                        data={storiesOfEachPerson}
                        renderItem={ ({ item, index }) => {
                            return <YStack w={width} height={height} backgroundColor={"$background"}>
                                <If condition={index === currentIndexStory}>
                                    <ItemStory changePersonStory={changePersonStory} item={item} close={closeStory}  />
                                </If>
                            </YStack>
                        }}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        pagingEnabled
                        scrollEventThrottle={0}
                        onViewableItemsChanged={viewableItemsChanged}
                        viewabilityConfig={{ viewAreaCoveragePercentThreshold: width }}
                        onScrollToIndexFailed={(info) => {
                            const wait = new Promise(resolve => setTimeout(resolve, 0));
                            wait.then(() => {
                                carouselRef?.current?.scrollToIndex({ index: info.index, animated: false });
                            });
                        }}
                    />

                </If>
            </YStack>
        </Modal>         
    )
};

export default ModalStory;