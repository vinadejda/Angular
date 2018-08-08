import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];

  constructor(
    private photoService: PhotoService,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    const userName = this.activedRoute.snapshot.params.userName;

    this.photoService
      .listFromUser(userName)
      .subscribe(
        photos => this.photos = photos,
        err => console.log(err.message)
      );
  }

}