import EventEmitter from '@core/eventEmitter';
import { BottomSheetOptions } from './interfaces';

export function showBottomSheet(options: BottomSheetOptions) {
  EventEmitter.emit('showBottomSheet', options);
}

export function hideBottomSheet() {
  EventEmitter.emit('hideBottomSheet');
}
