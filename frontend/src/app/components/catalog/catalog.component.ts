import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';
import {
  TmbdService,
  TrendingMoviesResponse,
} from 'src/app/services/tmdb.service';

const tmdbImageBaseUrl = 'https://image.tmdb.org/t/p/';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  standalone: true,
  imports: [CommonModule, MatCardModule],
})
export class CatalogComponent implements OnInit {
  catalog!: TrendingMoviesResponse;
  selectedImageSize = 'w500';

  constructor(private tmdb: TmbdService) {}

  ngOnInit() {
    this.tmdb.getCatalog().subscribe({
      next: (value) => {
        this.catalog = value;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  constructImageUrl(posterPath: string | null): string {
    return `${tmdbImageBaseUrl}${this.selectedImageSize}${posterPath}`;
  }
}
