import {WebAPI} from './web-api';
import {inject} from 'aurelia-framework';

@inject(WebAPI)
export class Contacts {
  contacts: {} | undefined;
  selectedId = 0;

  constructor(private api: WebAPI) { }

  created() {
    this.api.getContactList().then(contacts => this.contacts = contacts);
  }

  select(contact: { id: number; }) {
    this.selectedId = contact.id;
    return true;
  }
}



