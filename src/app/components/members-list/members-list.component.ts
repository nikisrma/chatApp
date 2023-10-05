import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent implements OnInit {
  members = [
    {
      name: 'John Doe',
      avatarUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp',
      status: 'Hello, Are you there?',
      lastActivity: 'Just now',
      unreadMessages: 1
    },
    {
      name: 'John Doe',
      avatarUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp',
      status: 'Hello, Are you there?',
      lastActivity: 'Just now',
      unreadMessages: 1
    },
    {
      name: 'John Doe',
      avatarUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp',
      status: 'Hello, Are you there?',
      lastActivity: 'Just now',
      unreadMessages: 1
    },
    {
      name: 'John Doe',
      avatarUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp',
      status: 'Hello, Are you there?',
      lastActivity: 'Just now',
      unreadMessages: 1
    },
    {
      name: 'John Doe',
      avatarUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp',
      status: 'Hello, Are you there?',
      lastActivity: 'Just now',
      unreadMessages: 1
    },
    {
      name: 'John Doe',
      avatarUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp',
      status: 'Hello, Are you there?',
      lastActivity: 'Just now',
      unreadMessages: 1
    },
    {
      name: 'John Doe',
      avatarUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp',
      status: 'Hello, Are you there?',
      lastActivity: 'Just now',
      unreadMessages: 1
    },

    

    // Add more member objects as needed
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
