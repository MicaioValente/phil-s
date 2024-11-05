import * as Contacts from 'expo-contacts';

export interface ContactApi {
  requestPermission: () => Promise<boolean>;
  getContacts: () => Promise<Contacts.Contact[] | undefined>;
  getContactById: (id: string) => Promise<Contacts.Contact[] | undefined>;
  getStatus: () => Promise<Contacts.PermissionStatus>;
}


export interface ContactProps extends Contacts.Contact{

}