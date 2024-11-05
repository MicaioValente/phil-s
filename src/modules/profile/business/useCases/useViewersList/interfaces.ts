export interface ProfileViewersList {
  data: ProfileViewer[];
  quantity: string;
}

export interface ProfileViewer {
  name: string;
  userImage: string;
  id: string;
}
