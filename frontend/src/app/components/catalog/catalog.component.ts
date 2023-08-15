import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';
import {
  TmbdService,
  TrendingMoviesResponse,
} from 'src/app/services/tmdb.service';

const tmdbImageBaseUrl = 'https://image.tmdb.org/t/p/';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
  ],
})
export class CatalogComponent implements OnInit {
  catalog!: TrendingMoviesResponse;
  selectedImageSize = 'original';
  searchTerm = '';
  private searchTerms = new Subject<string>();

  constructor(private tmdb: TmbdService) {}

  ngOnInit() {
    this.tmdb.getCatalogMock(this.searchTerm).subscribe({
      next: (value) => {
        this.catalog = value;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.searchTerms
      .pipe(
        debounceTime(3000),
        distinctUntilChanged(),
        switchMap((term: string) => this.tmdb.getCatalog(term))
      )
      .subscribe({
        next: (value) => {
          this.catalog = value;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  onSearchChange(event: any): void {
    const term = event.target.value;
    if (term.length >= 4) {
      this.searchTerms.next(term);
    } else if (term.length === 0) {
      this.searchTerms.next(''); // Clear the search term to fetch all trending movies
    }
  }

  constructImageUrl(posterPath: string | null): string {
    return `${tmdbImageBaseUrl}${this.selectedImageSize}${posterPath}`;
  }
}
