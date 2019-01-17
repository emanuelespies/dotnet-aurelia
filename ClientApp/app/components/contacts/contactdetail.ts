import {inject} from 'aurelia-framework';
import {WebAPI} from './web-api';
import {areEqual} from './utility';
import { Router } from 'aurelia-router';

interface Contact {
  firstName: string;
  lastName: string;
  email: string;
  id: number;
}

@inject(WebAPI, Router)
export class ContactDetail {
  //@ts-ignore
  routeConfig: {
      navModel: {
          setTitle: {
              (arg0: string): void;
              (arg0: string): void;
          };
      };
  };
  //@ts-ignore
  contact: Contact;
  //@ts-ignore
  originalContact: Contact;
  router: Router;


  constructor(private api: WebAPI, router: Router) { 
    this.router = router;
  }

  activate(params: { id: number; }, routeConfig: { navModel: { setTitle: { (arg0: string): void; (arg0: string): void; }; }; }) {
    this.routeConfig = routeConfig;

    return this.api.getContactDetails(params.id).then(contact => {
      this.contact = <Contact>contact;
      this.routeConfig.navModel.setTitle(this.contact.firstName);
      this.originalContact = JSON.parse(JSON.stringify(this.contact));
    });
  }

  get canSave() {
    return this.contact.firstName && this.contact.lastName && !this.api.isRequesting;
  }

  save() {
    this.api.saveContact(this.contact).then(contact => {
      this.contact = <Contact>contact;
      this.routeConfig.navModel.setTitle(this.contact.firstName);
      this.originalContact = JSON.parse(JSON.stringify(this.contact));
      window.history.back();
    });
  }

  cancel() {
    this.router.navigateToRoute('contacts');
  }

  canDeactivate() {
    if (!areEqual(this.originalContact, this.contact)) {
      return confirm('You have unsaved changes. Are you sure you wish to leave?');
    }

    return true;
  }
}


