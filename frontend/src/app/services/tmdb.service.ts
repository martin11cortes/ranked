import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TrendingMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

@Injectable({ providedIn: 'root' })
export class TmbdService {
  constructor(private httpClient: HttpClient) {}

  getCatalog(): Observable<TrendingMoviesResponse> {
    return this.httpClient.get<TrendingMoviesResponse>(
      'http://localhost:3000/catalog'
    );
  }
}
