import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactMeService {
  messages = [];

  constructor(private httpClient: HttpClient) { }

  notifyMe(msg) {
    this.messages.push(msg);
    this.httpClient.post("", msg)
  }
}
