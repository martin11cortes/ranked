import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title?: string;
  original_name?: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date?: string;
  first_air_date?: string;
  title?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  media_type: 'movie' | 'tv';
  name?: string;
  origin_country?: string[];
  favorite?: boolean; //FIXME:temporarly
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

  getCatalog(searchTerm?: string): Observable<TrendingMoviesResponse> {
    const options = searchTerm
      ? { params: new HttpParams().set('searchTerm', searchTerm) }
      : {};
    return this.httpClient.get<TrendingMoviesResponse>(
      'http://localhost:3000/catalog',
      options
    );
  }

  getCatalogMock(searchTerm?: string): Observable<TrendingMoviesResponse> {
    // Replace with your mock data
    const mockData: TrendingMoviesResponse = {
      page: 1,
      results: [
        {
          adult: false,
          backdrop_path: '/xVMtv55caCEvBaV83DofmuZybmI.jpg',
          id: 724209,
          title: 'Heart of Stone',
          original_language: 'en',
          original_title: 'Heart of Stone',
          overview:
            'An intelligence operative for a shadowy global peacekeeping agency races to stop a hacker from stealing its most valuable — and dangerous — weapon.',
          poster_path: '/vB8o2p4ETnrfiWEgVxHmHWP9yRl.jpg',
          media_type: 'movie',
          genre_ids: [53, 28],
          popularity: 344.333,
          release_date: '2023-08-09',
          video: false,
          vote_average: 7.106,
          vote_count: 325,
        },
        {
          favorite: true,
          adult: false,
          backdrop_path: '/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg',
          id: 569094,
          title: 'Spider-Man: Across the Spider-Verse',
          original_language: 'en',
          original_title: 'Spider-Man: Across the Spider-Verse',
          overview:
            'After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.',
          poster_path: '/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
          media_type: 'movie',
          genre_ids: [16, 28, 12, 878],
          popularity: 4838.672,
          release_date: '2023-05-31',
          video: false,
          vote_average: 8.457,
          vote_count: 3324,
        },
        {
          adult: false,
          backdrop_path: '/rRcNmiH55Tz0ugUsDUGmj8Bsa4V.jpg',
          id: 884605,
          title: 'No Hard Feelings',
          original_language: 'en',
          original_title: 'No Hard Feelings',
          overview:
            'On the brink of losing her childhood home, Maddie discovers an intriguing job listing: wealthy helicopter parents looking for someone to “date” their introverted 19-year-old son, Percy, before he leaves for college. To her surprise, Maddie soon discovers the awkward Percy is no sure thing.',
          poster_path: '/gD72DhJ7NbfxvtxGiAzLaa0xaoj.jpg',
          media_type: 'movie',
          genre_ids: [35, 10749],
          popularity: 1085.924,
          release_date: '2023-06-15',
          video: false,
          vote_average: 7.02,
          vote_count: 512,
        },
        {
          adult: false,
          backdrop_path: '/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg',
          id: 976573,
          title: 'Elemental',
          original_language: 'en',
          original_title: 'Elemental',
          overview:
            'In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.',
          poster_path: '/8riWcADI1ekEiBguVB9vkilhiQm.jpg',
          media_type: 'movie',
          genre_ids: [16, 35, 10751, 14, 10749],
          popularity: 873.249,
          release_date: '2023-06-14',
          video: false,
          vote_average: 7.634,
          vote_count: 789,
        },
        {
          adult: false,
          backdrop_path: '/csz3oWxd04wgXUzenXgenIVwXGl.jpg',
          id: 930094,
          title: 'Red, White & Royal Blue',
          original_language: 'en',
          original_title: 'Red, White & Royal Blue',
          overview:
            "After an altercation between Alex, the president's son, and Britain's Prince Henry at a royal event becomes tabloid fodder, their long-running feud now threatens to drive a wedge in U.S./British relations. When the rivals are forced into a staged truce, their icy relationship begins to thaw and the friction between them sparks something deeper than they ever expected.",
          poster_path: '/vM1HzW1zA8QQ5Cw9g2tWdAxlbOQ.jpg',
          media_type: 'movie',
          genre_ids: [35, 10749],
          popularity: 308.057,
          release_date: '2023-07-27',
          video: false,
          vote_average: 8.457,
          vote_count: 314,
        },
        {
          adult: false,
          backdrop_path: '/WyGsyzSwGN4ZY9ZG2SJzGM4UPe.jpg',
          id: 885331,
          title: 'Gadar 2',
          original_language: 'hi',
          original_title: 'गदर २',
          overview:
            'During the Indo-Pakistani War of 1971, Tara Singh returns to Pakistan to bring his son, Charanjeet, back home.',
          poster_path: '/ipoUI3FzVTczg2r8mYxNlE5SsMh.jpg',
          media_type: 'movie',
          genre_ids: [28, 18, 53],
          popularity: 124.517,
          release_date: '2023-08-11',
          video: false,
          vote_average: 7.1,
          vote_count: 15,
        },
        {
          adult: false,
          backdrop_path: '/nYDPmxvl0if5vHBBp7pDYGkTFc7.jpg',
          id: 709631,
          title: 'Cobweb',
          original_language: 'en',
          original_title: 'Cobweb',
          overview:
            "Eight year old Peter is plagued by a mysterious, constant tapping from inside his bedroom wall—one that his parents insist is all in his imagination. As Peter's fear intensifies, he believes that his parents could be hiding a terrible, dangerous secret and questions their trust.",
          poster_path: '/cGXFosYUHYjjdKrOmA0bbjvzhKz.jpg',
          media_type: 'movie',
          genre_ids: [27],
          popularity: 89.769,
          release_date: '2023-07-19',
          video: false,
          vote_average: 6.788,
          vote_count: 104,
        },
        {
          adult: false,
          backdrop_path: '/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg',
          id: 872585,
          title: 'Oppenheimer',
          original_language: 'en',
          original_title: 'Oppenheimer',
          overview:
            'The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.',
          poster_path: '/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
          media_type: 'movie',
          genre_ids: [18, 36],
          popularity: 919.049,
          release_date: '2023-07-19',
          video: false,
          vote_average: 8.283,
          vote_count: 1891,
        },
        {
          adult: false,
          backdrop_path: '/tTfnd2VrlaZJSBD9HUbtSF3CqPJ.jpg',
          id: 346698,
          title: 'Barbie',
          original_language: 'en',
          original_title: 'Barbie',
          overview:
            'Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.',
          poster_path: '/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg',
          media_type: 'movie',
          genre_ids: [35, 12, 14],
          popularity: 2588.653,
          release_date: '2023-07-19',
          video: false,
          vote_average: 7.461,
          vote_count: 2975,
        },
        {
          adult: false,
          backdrop_path: '/zN41DPmPhwmgJjHwezALdrdvD0h.jpg',
          id: 615656,
          title: 'Meg 2: The Trench',
          original_language: 'en',
          original_title: 'Meg 2: The Trench',
          overview:
            'An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.',
          poster_path: '/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg',
          media_type: 'movie',
          genre_ids: [28, 878, 27],
          popularity: 2246.537,
          release_date: '2023-08-02',
          video: false,
          vote_average: 7.048,
          vote_count: 428,
        },
        {
          adult: false,
          backdrop_path: '/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg',
          id: 447365,
          title: 'Guardians of the Galaxy Vol. 3',
          original_language: 'en',
          original_title: 'Guardians of the Galaxy Vol. 3',
          overview:
            'Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.',
          poster_path: '/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg',
          media_type: 'movie',
          genre_ids: [878, 12, 28],
          popularity: 1414.586,
          release_date: '2023-05-03',
          video: false,
          vote_average: 8.058,
          vote_count: 4259,
        },
        {
          adult: false,
          backdrop_path: '/a6ptrTUH1c5OdWanjyYtAkOuYD0.jpg',
          id: 37854,
          name: 'One Piece',
          original_language: 'ja',
          original_name: 'ワンピース',
          overview:
            'Years ago, the fearsome Pirate King, Gol D. Roger was executed leaving a huge pile of treasure and the famous "One Piece" behind. Whoever claims the "One Piece" will be named the new King of the Pirates.\n\nMonkey D. Luffy, a boy who consumed a "Devil Fruit," decides to follow in the footsteps of his idol, the pirate Shanks, and find the One Piece. It helps, of course, that his body has the properties of rubber and that he\'s surrounded by a bevy of skilled fighters and thieves to help him along the way.\n\nLuffy will do anything to get the One Piece and become King of the Pirates!',
          poster_path: '/fcXdJlbSdUEeMSJFsXKsznGwwok.jpg',
          media_type: 'tv',
          genre_ids: [10759, 35, 16],
          popularity: 372.652,
          first_air_date: '1999-10-20',
          vote_average: 8.719,
          vote_count: 3911,
          origin_country: ['JP'],
        },
        {
          adult: false,
          backdrop_path: '/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg',
          id: 385687,
          title: 'Fast X',
          original_language: 'en',
          original_title: 'Fast X',
          overview:
            "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
          poster_path: '/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
          media_type: 'movie',
          genre_ids: [28, 80, 53],
          popularity: 1680.175,
          release_date: '2023-05-17',
          video: false,
          vote_average: 7.315,
          vote_count: 3319,
        },
        {
          adult: false,
          backdrop_path: '/yF1eOkaYvwiORauRCPWznV9xVvi.jpg',
          id: 298618,
          title: 'The Flash',
          original_language: 'en',
          original_title: 'The Flash',
          overview:
            "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
          poster_path: '/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg',
          media_type: 'movie',
          genre_ids: [28, 12, 878],
          popularity: 2721.556,
          release_date: '2023-06-13',
          video: false,
          vote_average: 6.969,
          vote_count: 2286,
        },
        {
          adult: false,
          backdrop_path: '/gXs6po9ARYYDhYhj3eD34afd5kW.jpg',
          id: 158083,
          name: 'Painkiller',
          original_language: 'en',
          original_name: 'Painkiller',
          overview:
            "The causes and consequences of America's opioid epidemic unfold in this drama following its perpetrators, victims and an investigator seeking the truth.",
          poster_path: '/dLZLXUIx8t9uvJKy2n1YkUu8ffY.jpg',
          media_type: 'tv',
          genre_ids: [18],
          popularity: 165.553,
          first_air_date: '2023-08-10',
          vote_average: 7.6,
          vote_count: 20,
          origin_country: ['US'],
        },
        {
          adult: false,
          backdrop_path: '/H6j5smdpRqP9a8UnhWp6zfl0SC.jpg',
          id: 565770,
          title: 'Blue Beetle',
          original_language: 'en',
          original_title: 'Blue Beetle',
          overview:
            'Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.',
          poster_path: '/vNfL4DYnonltukBrrgMmw94zMYL.jpg',
          media_type: 'movie',
          genre_ids: [28, 878],
          popularity: 161.419,
          release_date: '2023-08-16',
          video: false,
          vote_average: 8.133,
          vote_count: 15,
        },
        {
          adult: false,
          backdrop_path: '/sa9vB0xb3OMU6iSMkig8RBbdESq.jpg',
          id: 113962,
          name: 'Special Ops: Lioness',
          original_language: 'en',
          original_name: 'Special Ops: Lioness',
          overview:
            'Cruz Manuelos, a rough-around-the-edges but passionate young Marine, is recruited to join the CIA’s Lioness Engagement Team to help bring down a terrorist organization from within. Joe, the station chief of the Lioness program, is tasked with training, managing and leading her female undercover operatives.',
          poster_path: '/rXCzevakJoAN1qnZY0nAQPSLVRv.jpg',
          media_type: 'tv',
          genre_ids: [18],
          popularity: 1190.701,
          first_air_date: '2023-07-23',
          vote_average: 8.253,
          vote_count: 152,
          origin_country: ['US'],
        },
        {
          adult: false,
          backdrop_path: '/8KtphbDARuisrYYr7DVELnJLRWA.jpg',
          id: 126485,
          name: 'Moving',
          original_language: 'ko',
          original_name: '무빙',
          overview:
            'Children who live in hiding with superpowers, along with their parents who live with painful secrets of the past, face enormous dangers together',
          poster_path: '/vf9SNXNAFqzKBGksFwrXhkg9cb7.jpg',
          media_type: 'tv',
          genre_ids: [10759, 9648, 18, 10765],
          popularity: 259.461,
          first_air_date: '2023-08-09',
          vote_average: 8.3,
          vote_count: 6,
          origin_country: ['KR'],
        },
        {
          adult: false,
          backdrop_path: '/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg',
          id: 667538,
          title: 'Transformers: Rise of the Beasts',
          original_language: 'en',
          original_title: 'Transformers: Rise of the Beasts',
          overview:
            'When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.',
          poster_path: '/gPbM0MK8CP8A174rmUwGsADNYKD.jpg',
          media_type: 'movie',
          genre_ids: [28, 12, 878],
          popularity: 3137.108,
          release_date: '2023-06-06',
          video: false,
          vote_average: 7.498,
          vote_count: 2713,
        },
        {
          adult: false,
          backdrop_path: '/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg',
          id: 614930,
          title: 'Teenage Mutant Ninja Turtles: Mutant Mayhem',
          original_language: 'en',
          original_title: 'Teenage Mutant Ninja Turtles: Mutant Mayhem',
          overview:
            "After years of being sheltered from the human world, the Turtle brothers set out to win the hearts of New Yorkers and be accepted as normal teenagers through heroic acts. Their new friend April O'Neil helps them take on a mysterious crime syndicate, but they soon get in over their heads when an army of mutants is unleashed upon them.",
          poster_path: '/ueO9MYIOHO7M1PiMUeX74uf8fB9.jpg',
          media_type: 'movie',
          genre_ids: [16, 35, 28],
          popularity: 235.82,
          release_date: '2023-07-31',
          video: false,
          vote_average: 7.3,
          vote_count: 162,
        },
      ],
      total_pages: 1000,
      total_results: 20000,
    };
    return of(mockData);
  }
}
