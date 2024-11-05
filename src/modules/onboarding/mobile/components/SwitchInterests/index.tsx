import React from 'react';
import { XStack, Switch } from '@dls/components';
import { SwitchInterestsProps } from './interfaces';

const SwitchInterests: React.FC<SwitchInterestsProps> = ({
  check,
  checkedChange,
}) => {
  return (
    <XStack jc="center" ai="center">
      <Switch
        size="$1.5"
        bg={check ? '#0cA700' : '#565656'}
        borderColor={check ? '#0cA700' : '#565656'}
        onCheckedChange={c => checkedChange(c)}>
        <Switch.Thumb animation="bouncy" bg={'white'} />
      </Switch>
    </XStack>
  );
};

export default SwitchInterests;
