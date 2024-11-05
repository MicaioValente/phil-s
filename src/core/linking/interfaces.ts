export interface LinkingApi {
  openUrl(url: string): Promise<boolean>;
  openMail(): Promise<boolean>;
}
