interface Image {
  base64: string;
  path: string;
  type: string;
}

export interface ImagePickerApi {
  launchImageLibrary: () => Promise<Image | null>;
}
