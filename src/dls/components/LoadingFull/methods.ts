import EventEmitter from '@core/eventEmitter';

export function showLoadingFull() {
  EventEmitter.emit('showLoadingFull');
}

export function hideLoadingFull() {
  EventEmitter.emit('hideLoadingFull');
}
