import type { EventEmitterApi } from '@core/eventEmitter/interfaces';

const events: Record<string, Function[]> = {};

function addListener<T>(eventName: string, callback: (...args: T[]) => void) {
  events[eventName] ??= [];

  events[eventName].push(callback);
}

function removeListener<T>(
  eventName: string,
  callback: (...args: T[]) => void,
) {
  const listeners = events[eventName];

  if (listeners) {
    const index = listeners.indexOf(callback);

    listeners.splice(index, 1);
  }
}

function emit<T>(eventName: string, ...args: T[]): boolean {
  if (events[eventName]) {
    events[eventName].forEach(callback => callback(...args));

    return true;
  }

  return false;
}

const EventEmitter: EventEmitterApi = {
  addListener,
  removeListener,
  emit,
};

export default EventEmitter;
