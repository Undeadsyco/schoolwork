import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts: Contact[];
  contactDataService: ContactsService;

  constructor(private contactsService: ContactsService) {
    this.contactDataService = contactsService;
  }

  ngOnInit() {
    this.contacts = this.contactDataService.contacts
  }

}
