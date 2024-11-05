import * as Contacts from 'expo-contacts';

import type { ContactApi } from '@core/contact/interfaces';

const fields = [
  Contacts.Fields.Name,
  Contacts.Fields.Emails,
  Contacts.Fields.PhoneNumbers,
];

async function requestPermission() {
  const { granted } = await Contacts.requestPermissionsAsync();

  return granted;
}

async function getContacts() {
  const { data } = await Contacts.getContactsAsync({
    fields,
  });

  return data;
}

async function getContactById(id: string) {
  const { data } = await Contacts.getContactsAsync({
    id,
    fields,
  });

  return data;
}

async function getStatus() {
  const { status } = await Contacts.getPermissionsAsync();

  return status;
}

const Contact: ContactApi = {
  requestPermission,
  getContacts,
  getContactById,
  getStatus,
};

export default Contact;
