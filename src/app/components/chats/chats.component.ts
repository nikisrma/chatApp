import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {
  members = [
    {
      name: 'John Doe',
      avatar: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp',
      lastActivity: 'Just now',
      messages: [
        {
          text: 'Hello, Are you there?',
          timestamp: 'Just now'
        }
        // Add more messages here
      ]
    },
    {
      name: 'Danny Smith',
      avatar: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp',
      lastActivity: '5 mins ago',
      messages: [
        {
          text: 'Lorem ipsum dolor sit.',
          timestamp: '5 mins ago'
        }
        // Add more messages here
      ]
    }
    // Add more members here
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
