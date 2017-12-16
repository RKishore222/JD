import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(meta: Meta, title: Title) {

    title.setTitle('JD Photography - Professional | Studio | Candid | Blog');
    meta.addTags([
      {
        name: 'author', content:'JD'
      },
      {
        name: 'keywords', content: 'JD,Photography,PhotoStudio'
      },
      {
        name: 'description', content: 'With an experience of over 1 years, 10 weddings and a million smiles, passion is what drives Photriya. Professional Wedding Photography. Hyderabad, India'
      }
    ])
  }

  ngOnInit() {
  }

}
