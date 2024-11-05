declare interface PromiseObject<T> {
  resolve: (value: T) => void;
  reject: (reason: T) => void;
}
