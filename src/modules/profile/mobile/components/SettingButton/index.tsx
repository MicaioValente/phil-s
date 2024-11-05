import { Button, Text } from '@dls/components';
import type { SettingsOptionProps } from '@modules/profile/mobile/components/SettingButton/interface';
import { RightIcon } from './styles';

const SettingButton = ({ title, ...rest }: SettingsOptionProps) => {
  return (
    <Button
      {...rest}
      bg="$color.background"
      h="$size.3.5"
      w={'100%'}
      fd={'row'}
      ai={'center'}
      br={'$3'}
      jc={'space-between'}
      mb={'$2'}
      px={'$3'}>
      <Text col={'$text'} fos={'$3'} fow={'bold'}>
        {title}
      </Text>
      <RightIcon name="rightcircleo" size={17} />
    </Button>
  );
};

export default SettingButton;
