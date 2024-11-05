import { Carousel, If, Image, Text, XStack, YStack } from '@dls/components';
import { PostImageProps } from '@modules/feed/mobile/components/PostImage/interfaces';
import { useCarouselLayout } from '@modules/feed/mobile/components/PostImage/hooks';
import { Blur } from '@modules/feed/mobile/components/PostImage/styles';

export function PostImage({ data }: PostImageProps) {
  
  const { gap, style } = useCarouselLayout();

  const withPagination = data.length > 1;

  const renderPageNumber = (index: number) => {
    return (
      <XStack>
        <Blur intensity={10} tint="regular" experimentalBlurMethod="none">
          <Text fos={'$2'} fow={'bold'} col={'$text'} zIndex={6}>
            {index + 1}/{data.length}
          </Text>
        </Blur>
      </XStack>
    );
  };

  return (
    <Carousel<{ url: string; id: string }>
      {...{ withPagination, gap, width: style.width, data }}>
      {({ url }, index) => (
        <YStack w={style.width} h={style.height}>
          <If condition={withPagination}>{renderPageNumber(index)}</If>
          <Image src={url} w={'100%'} h={'100%'} />
        </YStack>
      )}
    </Carousel>
  );
}

export default PostImage;
