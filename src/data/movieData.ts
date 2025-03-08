export interface Movie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: { Source: string; Value: string }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  id: number;
}
export const movieData: Movie[]= [
    {
        "Title": "Demon Slayer: Mugen Train",
        "Year": "2020",
        "Rated": "R",
        "Released": "16 Oct 2020",
        "Runtime": "117 min",
        "Genre": "Animation, Action, Adventure",
        "Director": "Haruo Sotozaki",
        "Writer": "Ufotable, Koyoharu Gotouge",
        "Actors": "Natsuki Hanae, Akari Kitō, Yoshitsugu Matsuoka",
        "Plot": "After his family is brutally murdered and his sister turned into a demon, Tanjiro Kamado joins the Demon Slayer Corps in hopes of finding a cure. In this installment, Tanjiro and his comrades board the Mugen Train to investigate a series of disappearances, only to face a powerful demon that traps them in a shared dream world. The battle tests their resolve and bonds as they fight to survive and protect humanity.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "Nominated for 1 Oscar. 15 wins & 12 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODI2NjdlYWItMTE1ZC00YzI2LTlhZGQtNzE3NzA4MWM0ODYzXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "98%"
            },
            {
                "Source": "Metacritic",
                "Value": "77/100"
            }
        ],
        "Metascore": "77",
        "imdbRating": "8.2",
        "imdbVotes": "123,456",
        "imdbID": "tt11032374",
        "Type": "movie",
        "DVD": "16 Oct 2020",
        "BoxOffice": "$500,000,000",
        "id": 1
    },
    {
        "Title": "Jujutsu Kaisen 0",
        "Year": "2021",
        "Rated": "PG-13",
        "Released": "24 Dec 2021",
        "Runtime": "105 min",
        "Genre": "Animation, Action, Fantasy",
        "Director": "Sunghoo Park",
        "Writer": "Gege Akutami, Hiroshi Seko",
        "Actors": "Megumi Ogata, Kana Hanazawa, Mikako Komatsu",
        "Plot": "Yuta Okkotsu, a nervous high school student, enrolls in the Tokyo Prefectural Jujutsu High School under the guidance of Satoru Gojo. He seeks to control the immense power of the cursed spirit haunting him, Rika, and to protect his friends from the dark forces of the jujutsu world. The film explores themes of love, loss, and the burden of power.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "4 wins & 5 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzNhZTdmNDYtNTA0NC00MmNmLWIzYjUtNjg5NzNlYWQ0N2E5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "98%"
            },
            {
                "Source": "Metacritic",
                "Value": "78/100"
            }
        ],
        "Metascore": "78",
        "imdbRating": "8.1",
        "imdbVotes": "98,765",
        "imdbID": "tt14331144",
        "Type": "movie",
        "DVD": "24 Dec 2021",
        "BoxOffice": "$196,000,000",
        "id": 2
    },
    {
        "Title": "One Piece Film: Red",
        "Year": "2022",
        "Rated": "PG-13",
        "Released": "06 Aug 2022",
        "Runtime": "115 min",
        "Genre": "Animation, Action, Adventure",
        "Director": "Gorō Taniguchi",
        "Writer": "Eiichiro Oda, Tsutomu Kuroiwa",
        "Actors": "Kaori Nazuka, Mayumi Tanaka, Kazuya Nakai",
        "Plot": "The Straw Hat Pirates attend a concert by Uta, a world-famous singer and Shanks' adopted daughter. However, her dream of creating a new era of peace turns into chaos when her powers to trap people in a dream world are unleashed. Luffy and his crew must fight to save their friends and the world from Uta's unintended consequences.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "2 wins & 3 nominations",
        "Poster": "https://upload.wikimedia.org/wikipedia/en/4/44/One_Piece_Film_Red_Visual_Poster.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "95%"
            },
            {
                "Source": "Metacritic",
                "Value": "68/100"
            }
        ],
        "Metascore": "68",
        "imdbRating": "7.3",
        "imdbVotes": "87,654",
        "imdbID": "tt16183464",
        "Type": "movie",
        "DVD": "06 Aug 2022",
        "BoxOffice": "$246,000,000",
        "id": 3
    },
    {
        "Title": "Top Gun: Maverick",
        "Year": "2022",
        "Rated": "PG-13",
        "Released": "27 May 2022",
        "Runtime": "130 min",
        "Genre": "Action, Drama",
        "Director": "Joseph Kosinski",
        "Writer": "Ehren Kruger, Eric Warren Singer, Christopher McQuarrie",
        "Actors": "Tom Cruise, Jennifer Connelly, Miles Teller",
        "Plot": "After more than thirty years of service as one of the Navy's top aviators, Pete 'Maverick' Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him. When he is called back to train a group of Top Gun graduates for a specialized mission, Maverick confronts his past and faces his future.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 1 Oscar. 60 wins & 133 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "96%"
            },
            {
                "Source": "Metacritic",
                "Value": "78/100"
            }
        ],
        "Metascore": "78",
        "imdbRating": "8.3",
        "imdbVotes": "654,321",
        "imdbID": "tt1745960",
        "Type": "movie",
        "DVD": "27 May 2022",
        "BoxOffice": "$1,488,000,000",
        "id": 4
    },
    {
        "Title": "Dragon Ball Super: Super Hero",
        "Year": "2022",
        "Rated": "PG",
        "Released": "11 Aug 2022",
        "Runtime": "100 min",
        "Genre": "Animation, Action, Adventure",
        "Director": "Tetsuro Kodama",
        "Writer": "Akira Toriyama",
        "Actors": "Masako Nozawa, Toshio Furukawa, Yûko Minaguchi",
        "Plot": "The Red Ribbon Army, once defeated by Goku, has reformed with new and powerful androids, Gamma 1 and Gamma 2. Piccolo and Gohan must step up to defend Earth from this new threat. The film explores themes of heroism, family, and the enduring legacy of the Dragon Ball universe.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "1 win & 2 nominations",
        "Poster": "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/filters_quality95formatwebp.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "93%"
            },
            {
                "Source": "Metacritic",
                "Value": "70/100"
            }
        ],
        "Metascore": "70",
        "imdbRating": "7.2",
        "imdbVotes": "76,543",
        "imdbID": "tt14614892",
        "Type": "movie",
        "DVD": "11 Aug 2022",
        "BoxOffice": "$92,000,000",
        "id": 5
    },
    {
        "Title": "Oppenheimer",
        "Year": "2023",
        "Rated": "R",
        "Released": "21 Jul 2023",
        "Runtime": "180 min",
        "Genre": "Biography, Drama, History",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan, Kai Bird, Martin Sherwin",
        "Actors": "Cillian Murphy, Emily Blunt, Matt Damon",
        "Plot": "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II. The film explores his contributions to the Manhattan Project, his moral dilemmas, and the consequences of his work on the world and his personal life. It is a gripping tale of science, politics, and human ambition.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 7 Oscars. 330 wins & 385 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.5/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "93%"
            },
            {
                "Source": "Metacritic",
                "Value": "70/100"
            }
        ],
        "Metascore": "70",
        "imdbRating": "7.2",
        "imdbVotes": "76,543",
        "imdbID": "tt14614892",
        "Type": "movie",
        "DVD": "11 Aug 2022",
        "BoxOffice": "$92,000,000",
        "id": 6
    },
    {
        "Title": "Mother",
        "Year": "2009",
        "Rated": "R",
        "Released": "28 May 2009",
        "Runtime": "129 min",
        "Genre": "Crime, Drama, Mystery",
        "Director": "Bong Joon-ho",
        "Writer": "Bong Joon-ho, Park Eun-kyo",
        "Actors": "Kim Hye-ja, Won Bin, Jin Goo",
        "Plot": "A devoted mother goes to extreme lengths to prove her son's innocence after he is accused of murder. The film is a gripping and emotional thriller that explores themes of maternal love, justice, and the lengths one will go to protect family. As she uncovers the truth, she is forced to confront the dark realities of her own life and the society around her.",
        "Language": "Korean",
        "Country": "South Korea",
        "Awards": "14 wins & 18 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOGNlZTBkOTAtMGI2YS00YjhjLTkyNjAtOTQ3OGY5ZjJhMmY5XkEyXkFqcGc@._V1_.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.8/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "96%"
            },
            {
                "Source": "Metacritic",
                "Value": "79/100"
            }
        ],
        "Metascore": "79",
        "imdbRating": "7.8",
        "imdbVotes": "50,000",
        "imdbID": "tt1216496",
        "Type": "movie",
        "DVD": "28 May 2009",
        "BoxOffice": "$2,000,000",
        "id": 7
    },
    {
        "Title": "Breaking Bad",
        "Year": "2008–2013",
        "Rated": "TV-MA",
        "Released": "20 Jan 2008",
        "Runtime": "49 min",
        "Genre": "Crime, Drama, Thriller",
        "Director": "N/A",
        "Writer": "Vince Gilligan",
        "Actors": "Bryan Cranston, Aaron Paul, Anna Gunn",
        "Plot": "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future. As he descends into the criminal underworld, Walter White's transformation from a meek teacher to a ruthless drug kingpin is both gripping and tragic. The series explores themes of morality, power, and the consequences of one's choices.",
        "Language": "English, Spanish",
        "Country": "United States",
        "Awards": "Won 16 Primetime Emmys. 173 wins & 228 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "9.5/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "96%"
            },
            {
                "Source": "Metacritic",
                "Value": "96/100"
            }
        ],
        "Metascore": "96",
        "imdbRating": "9.5",
        "imdbVotes": "1,800,000",
        "imdbID": "tt0903747",
        "Type": "series",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "id": 8
    },
    {
        "Title": "Game of Thrones",
        "Year": "2011–2019",
        "Rated": "TV-MA",
        "Released": "17 Apr 2011",
        "Runtime": "57 min",
        "Genre": "Action, Adventure, Drama",
        "Director": "N/A",
        "Writer": "David Benioff, D.B. Weiss",
        "Actors": "Emilia Clarke, Peter Dinklage, Kit Harington",
        "Plot": "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia. The series is known for its complex characters, intricate political intrigue, and shocking plot twists. As alliances are forged and broken, the struggle for the Iron Throne becomes a battle for survival against the looming threat of the White Walkers.",
        "Language": "English",
        "Country": "United States, United Kingdom",
        "Awards": "Won 59 Primetime Emmys. 389 wins & 634 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "9.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "89%"
            },
            {
                "Source": "Metacritic",
                "Value": "85/100"
            }
        ],
        "Metascore": "85",
        "imdbRating": "9.2",
        "imdbVotes": "2,000,000",
        "imdbID": "tt0944947",
        "Type": "series",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "id": 9
    },
    {
        "Title": "Demon Slayer: Kimetsu no Yaiba",
        "Year": "2019–",
        "Rated": "TV-MA",
        "Released": "06 Apr 2019",
        "Runtime": "24 min",
        "Genre": "Animation, Action, Adventure",
        "Director": "N/A",
        "Writer": "Koyoharu Gotouge",
        "Actors": "Natsuki Hanae, Akari Kitō, Yoshitsugu Matsuoka",
        "Plot": "After his family is slaughtered by demons, Tanjiro Kamado joins the Demon Slayer Corps to avenge their deaths and find a cure for his sister, Nezuko, who has been turned into a demon. The series follows Tanjiro's journey as he trains to become a powerful demon slayer and battles terrifying demons while uncovering the mysteries of their existence.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "Won 10 awards & 25 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.7/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "100%"
            },
            {
                "Source": "Metacritic",
                "Value": "85/100"
            }
        ],
        "Metascore": "85",
        "imdbRating": "8.7",
        "imdbVotes": "150,000",
        "imdbID": "tt9335498",
        "Type": "series",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "id": 10
    },
    {
        "Title": "Stranger Things",
        "Year": "2016–",
        "Rated": "TV-14",
        "Released": "15 Jul 2016",
        "Runtime": "51 min",
        "Genre": "Drama, Fantasy, Horror",
        "Director": "N/A",
        "Writer": "Matt Duffer, Ross Duffer",
        "Actors": "Millie Bobby Brown, Finn Wolfhard, Winona Ryder",
        "Plot": "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces to get him back. Set in the 1980s, the series pays homage to classic sci-fi and horror films while exploring themes of friendship, bravery, and the power of love. As the group uncovers the mysteries of the Upside Down, they face unimaginable dangers.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 7 Primetime Emmys. 123 wins & 267 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.7/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "93%"
            },
            {
                "Source": "Metacritic",
                "Value": "76/100"
            }
        ],
        "Metascore": "76",
        "imdbRating": "8.7",
        "imdbVotes": "1,000,000",
        "imdbID": "tt4574334",
        "Type": "series",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "id": 11
    },
    {
        "Title": "Naruto: Shippuden",
        "Year": "2007–2017",
        "Rated": "TV-14",
        "Released": "15 Feb 2007",
        "Runtime": "24 min",
        "Genre": "Animation, Action, Adventure",
        "Director": "N/A",
        "Writer": "Masashi Kishimoto",
        "Actors": "Junko Takeuchi, Maile Flanagan, Kate Higgins",
        "Plot": "Naruto Uzumaki, a young ninja, seeks to gain recognition from his peers and dreams of becoming the Hokage, the leader of his village. After training for two and a half years, Naruto returns to his village to face new threats and uncover the mysteries of his past. The series explores themes of perseverance, friendship, and the pursuit of one's dreams.",
        "Language": "Japanese, English",
        "Country": "Japan",
        "Awards": "Nominated for 1 Primetime Emmy. 11 wins & 20 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.7/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "100%"
            },
            {
                "Source": "Metacritic",
                "Value": "85/100"
            }
        ],
        "Metascore": "85",
        "imdbRating": "8.7",
        "imdbVotes": "200,000",
        "imdbID": "tt0988824",
        "Type": "series",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "id": 12
    },
    {
        "Title": "One Piece",
        "Year": "1999–",
        "Rated": "TV-14",
        "Released": "20 Oct 1999",
        "Runtime": "24 min",
        "Genre": "Animation, Action, Adventure",
        "Director": "N/A",
        "Writer": "Eiichiro Oda",
        "Actors": "Mayumi Tanaka, Kazuya Nakai, Akemi Okamura",
        "Plot": "Monkey D. Luffy and his pirate crew embark on an epic adventure to find the legendary treasure known as One Piece and become the Pirate King. Along the way, they face powerful enemies, forge unbreakable bonds, and explore a vast world filled with mystery and danger. The series is a celebration of friendship, dreams, and the pursuit of freedom.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "Nominated for 1 Primetime Emmy. 10 wins & 20 nominations total",
        "Poster": "https://external-preview.redd.it/new-visual-for-one-piece-egg-head-arc-v0-OA3llY_KkgKUvE9cLy_CakxkhiRnaj90-TMjc6W4XNk.jpg?auto=webp&s=490419e44f6fa4b78b45df3ff3aeedc1f1bf5d5a",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.8/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "100%"
            },
            {
                "Source": "Metacritic",
                "Value": "85/100"
            }
        ],
        "Metascore": "85",
        "imdbRating": "8.8",
        "imdbVotes": "150,000",
        "imdbID": "tt0388629",
        "Type": "series",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "id": 13
    },
    {
        "Title": "The Witcher",
        "Year": "2019–",
        "Rated": "TV-MA",
        "Released": "20 Dec 2019",
        "Runtime": "60 min",
        "Genre": "Action, Adventure, Drama",
        "Director": "N/A",
        "Writer": "Lauren Schmidt Hissrich",
        "Actors": "Henry Cavill, Freya Allan, Anya Chalotra",
        "Plot": "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts. As he navigates a treacherous world of magic and political intrigue, Geralt's destiny becomes intertwined with that of a powerful sorceress and a young princess with a dangerous secret. The series explores themes of destiny, morality, and the blurred line between good and evil.",
        "Language": "English",
        "Country": "United States, Poland",
        "Awards": "Nominated for 2 Primetime Emmys. 10 wins & 35 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ5MDU5MTktMDZkMy00NDU1LWIxM2UtODg5OGFiNmRhNDBjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "81%"
            },
            {
                "Source": "Metacritic",
                "Value": "67/100"
            }
        ],
        "Metascore": "67",
        "imdbRating": "8.2",
        "imdbVotes": "500,000",
        "imdbID": "tt5180504",
        "Type": "series",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "id": 14
    },
    {
        "Title": "The Tale of the Princess Kaguya",
        "Year": "2013",
        "Rated": "PG",
        "Released": "23 Nov 2013",
        "Runtime": "137 min",
        "Genre": "Animation, Drama, Fantasy",
        "Director": "Isao Takahata",
        "Writer": "Isao Takahata, Riko Sakaguchi",
        "Actors": "Chloë Grace Moretz, James Caan, Mary Steenburgen",
        "Plot": "A tiny nymph found inside a bamboo stalk grows into a beautiful and desirable young woman, who orders her suitors to prove their worth by completing near-impossible tasks. Based on a classic Japanese folktale, the film explores themes of identity, societal expectations, and the fleeting nature of life. With its unique watercolor art style and emotional depth, 'The Tale of the Princess Kaguya' is a poignant and visually stunning masterpiece.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "Nominated for 1 Oscar. 23 wins & 38 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODY3YTZiNTYtYzllMy00Yzk0LWJiMTEtZTQxMTAzMjdkYTcxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.0/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "100%"
            },
            {
                "Source": "Metacritic",
                "Value": "89/100"
            }
        ],
        "Metascore": "89",
        "imdbRating": "8.0",
        "imdbVotes": "40,000",
        "imdbID": "tt2576852",
        "Type": "movie",
        "DVD": "23 Nov 2013",
        "BoxOffice": "$1,500,000",
        "id": 15
    },
    {
        "Title": "Only Yesterday",
        "Year": "1991",
        "Rated": "PG",
        "Released": "26 Jul 1991",
        "Runtime": "118 min",
        "Genre": "Animation, Drama, Romance",
        "Director": "Isao Takahata",
        "Writer": "Isao Takahata, Hotaru Okamoto",
        "Actors": "Miki Imai, Toshirô Yanagiba, Yoko Honna",
        "Plot": "A 27-year-old office worker travels to the countryside while reminiscing about her childhood in 1960s Tokyo. As she reflects on her past, she begins to question her present life and future aspirations. The film beautifully intertwines her memories with her current journey, exploring themes of self-discovery, nostalgia, and the passage of time. 'Only Yesterday' is a heartfelt and introspective story that resonates with anyone who has ever looked back on their life.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "1 win & 1 nomination",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTY5NjI2MjQxMl5BMl5BanBnXkFtZTgwMDA2MzM2NzE@._V1_.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.7/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "100%"
            },
            {
                "Source": "Metacritic",
                "Value": "90/100"
            }
        ],
        "Metascore": "90",
        "imdbRating": "7.7",
        "imdbVotes": "25,000",
        "imdbID": "tt0102587",
        "Type": "movie",
        "DVD": "26 Jul 1991",
        "BoxOffice": "$500,000",
        "id": 16
    },
    {
        "Title": "The Wind Rises",
        "Year": "2013",
        "Rated": "PG-13",
        "Released": "21 Feb 2014",
        "Runtime": "126 min",
        "Genre": "Animation, Biography, Drama",
        "Director": "Hayao Miyazaki",
        "Writer": "Hayao Miyazaki",
        "Actors": "Hideaki Anno, Hidetoshi Nishijima, Miori Takimoto",
        "Plot": "Jiro Horikoshi, a young boy fascinated by aviation, dreams of designing beautiful airplanes. As he grows up, he becomes one of the world's most accomplished aeronautical engineers, but his creations are used for war, leading to a moral dilemma. The film is a fictionalized biography that explores the tension between artistic passion and the consequences of one's work, set against the backdrop of Japan's pre-World War II era.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "Nominated for 1 Oscar. 23 wins & 44 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTU4NDg0MzkzNV5BMl5BanBnXkFtZTgwODA3Mzc1MDE@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.8/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "88%"
            },
            {
                "Source": "Metacritic",
                "Value": "83/100"
            }
        ],
        "Metascore": "83",
        "imdbRating": "7.8",
        "imdbVotes": "90,000",
        "imdbID": "tt2013293",
        "Type": "movie",
        "DVD": "21 Feb 2014",
        "BoxOffice": "$5,200,000",
        "id": 17
    },
    {
        "Title": "Wolf Children",
        "Year": "2012",
        "Rated": "PG",
        "Released": "21 Jul 2012",
        "Runtime": "117 min",
        "Genre": "Animation, Drama, Fantasy",
        "Director": "Mamoru Hosoda",
        "Writer": "Mamoru Hosoda, Satoko Okudera",
        "Actors": "Aoi Miyazaki, Takao Osawa, Haru Kuroki",
        "Plot": "After falling in love with a man who can transform into a wolf, Hana gives birth to two half-wolf, half-human children. When her husband dies unexpectedly, Hana moves to the countryside to raise her unique children away from prying eyes. The film is a touching exploration of motherhood, identity, and the challenges of raising children who are different from the norm.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "8 wins & 10 nominations",
        "Poster": "https://upload.wikimedia.org/wikipedia/en/9/9c/%C5%8Ckami_Kodomo_no_Ame_to_Yuki_poster.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "95%"
            },
            {
                "Source": "Metacritic",
                "Value": "71/100"
            }
        ],
        "Metascore": "71",
        "imdbRating": "8.1",
        "imdbVotes": "50,000",
        "imdbID": "tt2140203",
        "Type": "movie",
        "DVD": "21 Jul 2012",
        "BoxOffice": "$1,500,000",
        "id": 18
    },
    {
        "Title": "The Red Turtle",
        "Year": "2016",
        "Rated": "PG",
        "Released": "20 May 2016",
        "Runtime": "80 min",
        "Genre": "Animation, Adventure, Drama",
        "Director": "Michaël Dudok de Wit",
        "Writer": "Michaël Dudok de Wit, Pascale Ferran",
        "Actors": "N/A",
        "Plot": "A man shipwrecked on a deserted island encounters a giant red turtle, which changes his life in unexpected ways. With no dialogue, the film tells a universal story of survival, love, and the cycle of life through stunning visuals and emotional depth. A collaboration between Studio Ghibli and European animators, 'The Red Turtle' is a poetic and meditative masterpiece.",
        "Language": "None",
        "Country": "France, Belgium, Japan",
        "Awards": "Nominated for 1 Oscar. 14 wins & 29 nominations total",
        "Poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNj0HzoyQN--y-0-BPZSj2s1_BjdXyao6UiA&s",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.5/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "93%"
            },
            {
                "Source": "Metacritic",
                "Value": "86/100"
            }
        ],
        "Metascore": "86",
        "imdbRating": "7.5",
        "imdbVotes": "30,000",
        "imdbID": "tt3666024",
        "Type": "movie",
        "DVD": "20 May 2016",
        "BoxOffice": "$1,000,000",
        "id": 19
    },
    {
        "Title": "When Marnie Was There",
        "Year": "2014",
        "Rated": "PG",
        "Released": "19 Jul 2014",
        "Runtime": "103 min",
        "Genre": "Animation, Drama, Family",
        "Director": "Hiromasa Yonebayashi",
        "Writer": "Keiko Niwa, Masashi Ando, Hiromasa Yonebayashi",
        "Actors": "Sara Takatsuki, Kasumi Arimura, Nanako Matsushima",
        "Plot": "A young girl sent to the countryside for her health discovers an abandoned mansion and befriends a mysterious girl named Marnie. As their friendship deepens, the girl uncovers secrets about Marnie's past and her own family history. The film is a haunting and emotional exploration of loneliness, friendship, and self-discovery.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "Nominated for 1 Oscar. 6 wins & 15 nominations total",
        "Poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGG-jQdQKZW2KImNY--R5Lg7GoExWlpPyAMA&s",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.7/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "92%"
            },
            {
                "Source": "Metacritic",
                "Value": "71/100"
            }
        ],
        "Metascore": "71",
        "imdbRating": "7.7",
        "imdbVotes": "35,000",
        "imdbID": "tt3398268",
        "Type": "movie",
        "DVD": "19 Jul 2014",
        "BoxOffice": "$800,000",
        "id": 20
    },
    {
        "Title": "From Up on Poppy Hill",
        "Year": "2011",
        "Rated": "PG",
        "Released": "16 Jul 2011",
        "Runtime": "91 min",
        "Genre": "Animation, Drama, Romance",
        "Director": "Gorō Miyazaki",
        "Writer": "Hayao Miyazaki, Keiko Niwa, Tetsurō Sayama",
        "Actors": "Sarah Bolger, Anton Yelchin, Gillian Anderson",
        "Plot": "In 1960s Yokohama, a high school girl becomes involved in her school's efforts to save a historic clubhouse from demolition. Along the way, she uncovers secrets about her family and forms a bond with a fellow student. The film is a nostalgic and heartfelt story about love, tradition, and the importance of preserving history.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "1 win & 3 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMWVjMWRhMzYtOGRmMi00ODExLTk2M2YtZDhjNGY5OWQ5NDY4XkEyXkFqcGc@._V1_.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "86%"
            },
            {
                "Source": "Metacritic",
                "Value": "72/100"
            }
        ],
        "Metascore": "72",
        "imdbRating": "7.4",
        "imdbVotes": "30,000",
        "imdbID": "tt1798188",
        "Type": "movie",
        "DVD": "16 Jul 2011",
        "BoxOffice": "$1,000,000",
        "id": 21
    },
    {
        "Title": "The Secret World of Arrietty",
        "Year": "2010",
        "Rated": "G",
        "Released": "17 Jul 2010",
        "Runtime": "94 min",
        "Genre": "Animation, Adventure, Family",
        "Director": "Hiromasa Yonebayashi",
        "Writer": "Hayao Miyazaki, Keiko Niwa",
        "Actors": "Bridgit Mendler, Amy Poehler, Will Arnett",
        "Plot": "A tiny family of borrowers lives secretly in the walls of a human household, borrowing small items to survive. When a young boy discovers the family's teenage daughter, Arrietty, their peaceful existence is threatened. The film is a charming and imaginative adaptation of 'The Borrowers,' exploring themes of friendship, courage, and the clash between two worlds.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "3 wins & 10 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTAxNjk3OTYyODReQTJeQWpwZ15BbWU3MDgyODY2OTY@._V1_.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.6/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "95%"
            },
            {
                "Source": "Metacritic",
                "Value": "80/100"
            }
        ],
        "Metascore": "80",
        "imdbRating": "7.6",
        "imdbVotes": "60,000",
        "imdbID": "tt1568921",
        "Type": "movie",
        "DVD": "17 Jul 2010",
        "BoxOffice": "$19,000,000",
        "id": 22
    },
    {
        "Title": "Pom Poko",
        "Year": "1994",
        "Rated": "PG",
        "Released": "16 Jul 1994",
        "Runtime": "119 min",
        "Genre": "Animation, Comedy, Drama",
        "Director": "Isao Takahata",
        "Writer": "Isao Takahata",
        "Actors": "Shinchou Kokontei, Makoto Nonomura, Yuriko Ishida",
        "Plot": "A group of tanuki (raccoon dogs) use their shape-shifting abilities to fight against urban development threatening their forest home. The film blends humor, folklore, and environmental themes, offering a unique and thought-provoking story about the clash between nature and modernization.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "1 win & 1 nomination",
        "Poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXNHBN2QM_0Ayo26xcAuCLd8FHYJUhmdM5dg&s",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "86%"
            },
            {
                "Source": "Metacritic",
                "Value": "70/100"
            }
        ],
        "Metascore": "70",
        "imdbRating": "7.3",
        "imdbVotes": "25,000",
        "imdbID": "tt0110008",
        "Type": "movie",
        "DVD": "16 Jul 1994",
        "BoxOffice": "$1,000,000",
        "id": 23
    },
    {
        "Title": "The Boys",
        "Year": "2019–",
        "Rated": "TV-MA",
        "Released": "26 Jul 2019",
        "Runtime": "60 min",
        "Genre": "Action, Crime, Drama",
        "Director": "N/A",
        "Writer": "Eric Kripke",
        "Actors": "Karl Urban, Jack Quaid, Antony Starr",
        "Plot": "In a world where superheroes are revered as celebrities and wield immense power, a group of vigilantes known as 'The Boys' sets out to expose the corrupt and dangerous truth behind their idols. As they uncover dark secrets and face off against the powerful corporation Vought International, the line between hero and villain becomes increasingly blurred. The series explores themes of power, corruption, and the consequences of unchecked authority.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Nominated for 6 Primetime Emmys. 16 wins & 62 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTEyNDJhMDAtY2U5ZS00OTMzLTkwODktMjU3MjFkZWVlMGYyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.7/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "93%"
            },
            {
                "Source": "Metacritic",
                "Value": "84/100"
            }
        ],
        "Metascore": "84",
        "imdbRating": "8.7",
        "imdbVotes": "400,000",
        "imdbID": "tt1190634",
        "Type": "series",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "id": 24
    },
    {
        "Title": "My Hero Academia",
        "Year": "2016–",
        "Rated": "TV-14",
        "Released": "03 Apr 2016",
        "Runtime": "24 min",
        "Genre": "Animation, Action, Adventure",
        "Director": "N/A",
        "Writer": "Kōhei Horikoshi",
        "Actors": "Daiki Yamashita, Justin Briner, Nobuhiko Okamoto",
        "Plot": "In a world where most people have superpowers known as 'Quirks,' Izuku Midoriya dreams of becoming a hero despite being born powerless. After a chance encounter with his idol, All Might, Izuku inherits a powerful Quirk and enrolls in U.A. High School to train as a professional hero. The series follows his journey as he faces challenges, makes friends, and battles villains, all while striving to become the greatest hero.",
        "Language": "Japanese, English",
        "Country": "Japan",
        "Awards": "Won 6 awards & 20 nominations",
        "Poster": "https://m.media-amazon.com/images/I/81TBSC+TJkL.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.5/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "100%"
            },
            {
                "Source": "Metacritic",
                "Value": "85/100"
            }
        ],
        "Metascore": "85",
        "imdbRating": "8.5",
        "imdbVotes": "100,000",
        "imdbID": "tt5626028",
        "Type": "series",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "id": 25
    },
    {
        "Title": "The Crown",
        "Year": "2016–2023",
        "Rated": "TV-MA",
        "Released": "04 Nov 2016",
        "Runtime": "60 min",
        "Genre": "Biography, Drama, History",
        "Director": "N/A",
        "Writer": "Peter Morgan",
        "Actors": "Claire Foy, Olivia Colman, Imelda Staunton",
        "Plot": "This historical drama chronicles the reign of Queen Elizabeth II, exploring the political rivalries, romances, and personal challenges that shaped her legacy. From her early days as a young monarch to the modern era, the series delves into the complexities of the British monarchy and its impact on global events. With a focus on both public and private life, 'The Crown' offers a nuanced portrayal of power, duty, and sacrifice.",
        "Language": "English",
        "Country": "United States, United Kingdom",
        "Awards": "Won 21 Primetime Emmys. 129 wins & 284 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZTEyNjBjYmYtYWYxYi00MmQyLThlYmItY2I4NzM1Mjg1MWYxXkEyXkFqcGdeQXVyMTU3ODI3MTk2._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.7/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "90%"
            },
            {
                "Source": "Metacritic",
                "Value": "85/100"
            }
        ],
        "Metascore": "85",
        "imdbRating": "8.7",
        "imdbVotes": "200,000",
        "imdbID": "tt4786824",
        "Type": "series",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "id": 26
    },
    {
        "Title": "Death Note",
        "Year": "2006–2007",
        "Rated": "TV-14",
        "Released": "03 Oct 2006",
        "Runtime": "24 min",
        "Genre": "Animation, Crime, Drama",
        "Director": "N/A",
        "Writer": "Tsugumi Ohba, Takeshi Obata",
        "Actors": "Mamoru Miyano, Brad Swaile, Vincent Tong",
        "Plot": "When high school student Light Yagami discovers a mysterious notebook that can kill anyone whose name is written in it, he embarks on a quest to rid the world of criminals. However, his actions attract the attention of a brilliant detective known only as L, leading to a high-stakes game of cat and mouse. The series explores themes of justice, morality, and the consequences of absolute power.",
        "Language": "Japanese, English",
        "Country": "Japan",
        "Awards": "Won 1 award & 6 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODkzMjhjYTQtYmQyOS00NmZlLTg3Y2UtYjkzN2JkNmRjY2FhXkEyXkFqcGdeQXVyNTM4MDQ5MDc@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "9.0/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "100%"
            },
            {
                "Source": "Metacritic",
                "Value": "85/100"
            }
        ],
        "Metascore": "85",
        "imdbRating": "9.0",
        "imdbVotes": "300,000",
        "imdbID": "tt0877057",
        "Type": "series",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "id": 27
    },
    {
        "Title": "The Mandalorian",
        "Year": "2019–",
        "Rated": "TV-14",
        "Released": "12 Nov 2019",
        "Runtime": "40 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "N/A",
        "Writer": "Jon Favreau",
        "Actors": "Pedro Pascal, Carl Weathers, Gina Carano",
        "Plot": "A lone bounty hunter navigates the outer reaches of the galaxy, far from the authority of the New Republic. When he is tasked with capturing a mysterious asset, he discovers a child with a connection to the Force. The series explores themes of redemption, family, and the struggle between good and evil in a galaxy far, far away.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 14 Primetime Emmys. 68 wins & 155 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZDhlMzY0ZGItZTcyNS00ZTAxLWIyMmYtZGQ2ODg5OWZiYmJkXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.7/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "90%"
            },
            {
                "Source": "Metacritic",
                "Value": "70/100"
            }
        ],
        "Metascore": "70",
        "imdbRating": "8.7",
        "imdbVotes": "400,000",
        "imdbID": "tt8111088",
        "Type": "series",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "id": 28
    },
    {
        "Title": "Attack on Titan",
        "Year": "2013–2023",
        "Rated": "TV-MA",
        "Released": "07 Apr 2013",
        "Runtime": "24 min",
        "Genre": "Animation, Action, Adventure",
        "Director": "N/A",
        "Writer": "Hajime Isayama",
        "Actors": "Yûki Kaji, Marina Inoue, Yui Ishikawa",
        "Plot": "In a world where humanity lives inside cities surrounded by enormous walls to protect themselves from Titans, giant humanoid creatures who devour humans, Eren Yeager vows to eradicate the Titans after they destroy his hometown and kill his mother. As Eren and his friends join the military, they uncover dark secrets about the Titans and the true nature of their world. The series is a gripping tale of survival, betrayal, and the cost of freedom.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "Won 12 awards & 40 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTY5ODk1NzUyMl5BMl5BanBnXkFtZTgwMjUyNzEyMTE@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "9.0/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "95%"
            },
            {
                "Source": "Metacritic",
                "Value": "90/100"
            }
        ],
        "Metascore": "90",
        "imdbRating": "9.0",
        "imdbVotes": "300,000",
        "imdbID": "tt2560140",
        "Type": "series",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "id": 29
    },
    {
        "Title": "Naruto",
        "Year": "2007–2017",
        "Rated": "TV-14",
        "Released": "15 Feb 2007",
        "Runtime": "24 min",
        "Genre": "Animation, Action, Adventure",
        "Director": "N/A",
        "Writer": "Masashi Kishimoto",
        "Actors": "Junko Takeuchi, Maile Flanagan, Kate Higgins",
        "Plot": "Naruto Uzumaki, a young ninja, seeks to gain recognition from his peers and dreams of becoming the Hokage, the leader of his village. After training for two and a half years, Naruto returns to his village to face new threats and uncover the mysteries of his past. The series explores themes of perseverance, friendship, and the pursuit of one's dreams.",
        "Language": "Japanese, English",
        "Country": "Japan",
        "Awards": "Nominated for 1 Primetime Emmy. 11 wins & 20 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.7/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "100%"
            },
            {
                "Source": "Metacritic",
                "Value": "85/100"
            }
        ],
        "Metascore": "85",
        "imdbRating": "8.7",
        "imdbVotes": "200,000",
        "imdbID": "tt0988824",
        "Type": "series",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "id": 30
    },
    {
        "Title": "Oldboy",
        "Year": "2003",
        "Rated": "R",
        "Released": "21 Nov 2003",
        "Runtime": "120 min",
        "Genre": "Action, Drama, Mystery",
        "Director": "Park Chan-wook",
        "Writer": "Garon Tsuchiya, Nobuaki Minegishi, Park Chan-wook",
        "Actors": "Choi Min-sik, Yoo Ji-tae, Kang Hye-jeong",
        "Plot": "After being kidnapped and imprisoned for 15 years, Oh Dae-su is released and given five days to find his captor. As he searches for answers, he uncovers a web of conspiracy, revenge, and dark secrets. The film is a gripping tale of vengeance and psychological torment, known for its shocking twists and intense performances.",
        "Language": "Korean",
        "Country": "South Korea",
        "Awards": "Won 1 BAFTA Film Award. 23 wins & 20 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "82%"
            },
            {
                "Source": "Metacritic",
                "Value": "77/100"
            }
        ],
        "Metascore": "77",
        "imdbRating": "8.4",
        "imdbVotes": "500,000",
        "imdbID": "tt0364569",
        "Type": "movie",
        "DVD": "21 Nov 2003",
        "BoxOffice": "$15,000,000",
        "id": 31
    },
    {
        "Title": "Memories of Murder",
        "Year": "2003",
        "Rated": "R",
        "Released": "02 May 2003",
        "Runtime": "132 min",
        "Genre": "Crime, Drama, Mystery",
        "Director": "Bong Joon-ho",
        "Writer": "Bong Joon-ho, Kim Kwang-rim, Shim Sung-bo",
        "Actors": "Song Kang-ho, Kim Sang-kyung, Roe-ha Kim",
        "Plot": "Based on the true story of South Korea's first serial murders in the 1980s, two detectives struggle to solve the case as more women are found dead. The film is a haunting exploration of obsession, failure, and the limits of justice, with a chilling atmosphere and masterful storytelling.",
        "Language": "Korean",
        "Country": "South Korea",
        "Awards": "16 wins & 6 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOGViNTg4YTktYTQ2Ni00MTU0LTk2NWUtMTI4OTc1YTM0NzQ2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "95%"
            },
            {
                "Source": "Metacritic",
                "Value": "82/100"
            }
        ],
        "Metascore": "82",
        "imdbRating": "8.1",
        "imdbVotes": "150,000",
        "imdbID": "tt0353969",
        "Type": "movie",
        "DVD": "02 May 2003",
        "BoxOffice": "$12,000,000",
        "id": 32
    },
    {
        "Title": "The Chaser",
        "Year": "2008",
        "Rated": "R",
        "Released": "14 Feb 2008",
        "Runtime": "125 min",
        "Genre": "Crime, Drama, Thriller",
        "Director": "Na Hong-jin",
        "Writer": "Na Hong-jin, Lee Shin-ho, Lee Yong-jae",
        "Actors": "Kim Yoon-seok, Ha Jung-woo, Seo Young-hee",
        "Plot": "A former detective turned pimp races against time to track down a serial killer who has kidnapped one of his girls. The film is a relentless and suspenseful thriller that explores themes of desperation, morality, and the dark underbelly of society.",
        "Language": "Korean",
        "Country": "South Korea",
        "Awards": "15 wins & 12 nominations",
        "Poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfRR8WprC3TsDdi5nRNXVkCwA9C3j3IeY_2g&s",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.8/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "88%"
            },
            {
                "Source": "Metacritic",
                "Value": "76/100"
            }
        ],
        "Metascore": "76",
        "imdbRating": "7.8",
        "imdbVotes": "50,000",
        "imdbID": "tt1190539",
        "Type": "movie",
        "DVD": "14 Feb 2008",
        "BoxOffice": "$10,000,000",
        "id": 33
    },
    {
        "Title": "I Saw the Devil",
        "Year": "2010",
        "Rated": "R",
        "Released": "12 Aug 2010",
        "Runtime": "141 min",
        "Genre": "Action, Crime, Thriller",
        "Director": "Kim Jee-woon",
        "Writer": "Park Hoon-jung, Kim Jee-woon",
        "Actors": "Lee Byung-hun, Choi Min-sik, Jeon Gook-hwan",
        "Plot": "A secret agent embarks on a vengeful quest to track down the serial killer who murdered his fiancée. As the lines between justice and revenge blur, the film delves into the psychological toll of obsession and the cycle of violence. Known for its brutal intensity and moral complexity, 'I Saw the Devil' is a harrowing thriller.",
        "Language": "Korean",
        "Country": "South Korea",
        "Awards": "11 wins & 12 nominations",
        "Poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG6AhTmdLuzt045195SNGE4q97N-V8sichvw&s",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.8/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "81%"
            },
            {
                "Source": "Metacritic",
                "Value": "67/100"
            }
        ],
        "Metascore": "67",
        "imdbRating": "7.8",
        "imdbVotes": "100,000",
        "imdbID": "tt1588170",
        "Type": "movie",
        "DVD": "12 Aug 2010",
        "BoxOffice": "$8,000,000",
        "id": 34
    },
    {
        "Title": "The Wailing",
        "Year": "2016",
        "Rated": "R",
        "Released": "12 May 2016",
        "Runtime": "156 min",
        "Genre": "Drama, Horror, Mystery",
        "Director": "Na Hong-jin",
        "Writer": "Na Hong-jin",
        "Actors": "Kwak Do-won, Hwang Jung-min, Chun Woo-hee",
        "Plot": "A small village is thrown into chaos when a mysterious stranger arrives and a series of brutal murders occur. A bumbling policeman investigates, uncovering a web of supernatural terror and ancient folklore. The film is a chilling blend of horror and thriller, with a haunting atmosphere and shocking twists.",
        "Language": "Korean, Japanese",
        "Country": "South Korea",
        "Awards": "14 wins & 16 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODkwMTgxNjA2NF5BMl5BanBnXkFtZTgwMDc0OTcwOTE@._V1_.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.5/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "99%"
            },
            {
                "Source": "Metacritic",
                "Value": "81/100"
            }
        ],
        "Metascore": "81",
        "imdbRating": "7.5",
        "imdbVotes": "70,000",
        "imdbID": "tt5215952",
        "Type": "movie",
        "DVD": "12 May 2016",
        "BoxOffice": "$2,000,000",
        "id": 35
    },
    {
        "Title": "A Bittersweet Life",
        "Year": "2005",
        "Rated": "R",
        "Released": "01 Apr 2005",
        "Runtime": "120 min",
        "Genre": "Action, Crime, Drama",
        "Director": "Kim Jee-woon",
        "Writer": "Kim Jee-woon",
        "Actors": "Lee Byung-hun, Kim Young-cheol, Shin Min-ah",
        "Plot": "A loyal enforcer for a crime boss is tasked with monitoring his boss's mistress. When he spares her life, he becomes the target of a brutal vendetta. The film is a stylish and violent exploration of loyalty, betrayal, and revenge, with a standout performance by Lee Byung-hun.",
        "Language": "Korean",
        "Country": "South Korea",
        "Awards": "6 wins & 6 nominations",
        "Poster": "https://pics.filmaffinity.com/A_Bittersweet_Life-790809970-large.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.6/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "86%"
            },
            {
                "Source": "Metacritic",
                "Value": "72/100"
            }
        ],
        "Metascore": "72",
        "imdbRating": "7.6",
        "imdbVotes": "30,000",
        "imdbID": "tt0456912",
        "Type": "movie",
        "DVD": "01 Apr 2005",
        "BoxOffice": "$1,000,000",
        "id": 36
    },
    {
        "Title": "The Man from Nowhere",
        "Year": "2010",
        "Rated": "R",
        "Released": "04 Aug 2010",
        "Runtime": "119 min",
        "Genre": "Action, Crime, Thriller",
        "Director": "Lee Jeong-beom",
        "Writer": "Lee Jeong-beom",
        "Actors": "Won Bin, Kim Sae-ron, Kim Tae-hoon",
        "Plot": "A quiet pawnshop keeper with a violent past takes on a drug-and-organ trafficking ring when his young neighbor is kidnapped. The film is a gripping and emotional thriller with intense action sequences and a powerful performance by Won Bin.",
        "Language": "Korean",
        "Country": "South Korea",
        "Awards": "6 wins & 10 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTgzMTkxNjAxNV5BMl5BanBnXkFtZTgwMDU3MDE0MjE@._V1_FMjpg_UX1000_.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.8/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "88%"
            },
            {
                "Source": "Metacritic",
                "Value": "70/100"
            }
        ],
        "Metascore": "70",
        "imdbRating": "7.8",
        "imdbVotes": "60,000",
        "imdbID": "tt1527788",
        "Type": "movie",
        "DVD": "04 Aug 2010",
        "BoxOffice": "$5,000,000",
        "id": 37
    },
    {
        "Title": "The Yellow Sea",
        "Year": "2010",
        "Rated": "R",
        "Released": "22 Dec 2010",
        "Runtime": "140 min",
        "Genre": "Action, Crime, Drama",
        "Director": "Na Hong-jin",
        "Writer": "Na Hong-jin",
        "Actors": "Ha Jung-woo, Kim Yoon-seok, Jo Sung-ha",
        "Plot": "A desperate man agrees to carry out a hit in exchange for a chance to reunite with his estranged wife. However, the mission goes awry, and he becomes the target of a manhunt. The film is a gritty and intense thriller with relentless action and moral ambiguity.",
        "Language": "Korean, Mandarin",
        "Country": "South Korea",
        "Awards": "8 wins & 12 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNWZmYmYzZjItMDU0Zi00MWEyLWI5ODgtMWVkMzk5ZmU0ZGU2XkEyXkFqcGc@._V1_.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "85%"
            },
            {
                "Source": "Metacritic",
                "Value": "70/100"
            }
        ],
        "Metascore": "70",
        "imdbRating": "7.3",
        "imdbVotes": "20,000",
        "imdbID": "tt1230385",
        "Type": "movie",
        "DVD": "22 Dec 2010",
        "BoxOffice": "$2,000,000",
        "id": 38
    },
    {
        "Title": "The Spy Gone North",
        "Year": "2018",
        "Rated": "R",
        "Released": "08 Aug 2018",
        "Runtime": "137 min",
        "Genre": "Action, Drama, Thriller",
        "Director": "Yoon Jong-bin",
        "Writer": "Yoon Jong-bin, Kwon Sung-hui",
        "Actors": "Hwang Jung-min, Lee Sung-min, Cho Jin-woong",
        "Plot": "Based on a true story, a South Korean spy infiltrates North Korea's political elite to gather intelligence on its nuclear program. The film is a gripping espionage thriller that explores the complexities of loyalty, betrayal, and the human cost of political conflict.",
        "Language": "Korean",
        "Country": "South Korea",
        "Awards": "5 wins & 12 nominations",
        "Poster": "https://m.media-amazon.com/images/S/pv-target-images/a50aee13beb2ff258a06ed4b53c5908867fee4ede90d20ccb2c3135754eca508.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "89%"
            },
            {
                "Source": "Metacritic",
                "Value": "76/100"
            }
        ],
        "Metascore": "76",
        "imdbRating": "7.2",
        "imdbVotes": "10,000",
        "imdbID": "tt8290698",
        "Type": "movie",
        "DVD": "08 Aug 2018",
        "BoxOffice": "$20,000,000",
        "id": 39
    },
    {
        "Title": "The Gangster, the Cop, the Devil",
        "Year": "2019",
        "Rated": "R",
        "Released": "15 May 2019",
        "Runtime": "109 min",
        "Genre": "Action, Crime, Thriller",
        "Director": "Lee Won-tae",
        "Writer": "Lee Won-tae",
        "Actors": "Ma Dong-seok, Kim Mu-yeol, Kim Sung-kyu",
        "Plot": "A gangster teams up with a detective to catch a serial killer who nearly took his life. The unlikely partnership leads to a thrilling cat-and-mouse game filled with action, suspense, and unexpected twists.",
        "Language": "Korean",
        "Country": "South Korea",
        "Awards": "2 wins & 5 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTdjOTAzOTgtNWI1My00YzZkLWI2YWMtYjQ2MTAxOTI4YWQzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "6.9/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "88%"
            },
            {
                "Source": "Metacritic",
                "Value": "70/100"
            }
        ],
        "Metascore": "70",
        "imdbRating": "6.9",
        "imdbVotes": "15,000",
        "imdbID": "tt10550884",
        "Type": "movie",
        "DVD": "15 May 2019",
        "BoxOffice": "$10,000,000",
        "id": 40
    },
    {
        "Title": "Steins;Gate",
        "Year": "2011",
        "Rated": "TV-14",
        "Released": "06 Apr 2011",
        "Runtime": "24 min per episode",
        "Genre": "Animation, Sci-Fi, Thriller",
        "Director": "Hiroshi Hamasaki, Takuya Satō",
        "Writer": "Jukki Hanada",
        "Actors": "Mamoru Miyano, Asami Imai, Kana Hanazawa",
        "Plot": "Steins;Gate follows Rintarou Okabe, a self-proclaimed mad scientist, who accidentally invents a method of time travel through a microwave. As he and his friends experiment with altering the past, they uncover a dark conspiracy that threatens the future. The series masterfully blends science fiction with emotional depth, exploring the consequences of tampering with time and the sacrifices required to set things right.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "4 wins & 5 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjI1YjZiMDUtZTI3MC00YTA5LWIzMmMtZmQ0NTZiYWM4NTYwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.8/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "100%"
            },
            {
                "Source": "MyAnimeList",
                "Value": "9.1/10"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.8",
        "imdbVotes": "45,678",
        "imdbID": "tt1910272",
        "Type": "series",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "id": 41
    },
    {
        "Title": "Code Geass: Lelouch of the Rebellion",
        "Year": "2006",
        "Rated": "TV-14",
        "Released": "05 Oct 2006",
        "Runtime": "24 min per episode",
        "Genre": "Animation, Action, Drama",
        "Director": "Gorō Taniguchi",
        "Writer": "Ichirō Ōkouchi",
        "Actors": "Jun Fukuyama, Takahiro Sakurai, Yukana",
        "Plot": "In an alternate timeline, the Holy Britannian Empire has conquered much of the world, including Japan. Lelouch Lamperouge, an exiled prince, gains the power of Geass, which allows him to command anyone to do his bidding. Using this power, he leads a rebellion against Britannia under the alias Zero, seeking to create a better world for his sister and to exact revenge on his father, the Emperor.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "5 wins & 6 nominations",
        "Poster": "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Code_Geass_R1_box_set_cover.jpg/220px-Code_Geass_R1_box_set_cover.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.7/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "95%"
            },
            {
                "Source": "MyAnimeList",
                "Value": "8.8/10"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.7",
        "imdbVotes": "67,890",
        "imdbID": "tt0994314",
        "Type": "series",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "id": 42
    },
    {
        "Title": "Vinland Saga",
        "Year": "2019",
        "Rated": "TV-MA",
        "Released": "07 Jul 2019",
        "Runtime": "24 min per episode",
        "Genre": "Animation, Action, Adventure",
        "Director": "Shūhei Yabuta",
        "Writer": "Hiroshi Seko",
        "Actors": "Yūto Uemura, Naoya Uchida, Kensho Ono",
        "Plot": "Set in the Viking Age, Vinland Saga follows Thorfinn, a young warrior seeking revenge for his father's death at the hands of the mercenary leader Askeladd. The series explores themes of war, revenge, and the search for meaning in a brutal world. As Thorfinn grows, he begins to question the cycle of violence and dreams of a peaceful land called Vinland, free from the horrors of war.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "2 wins & 4 nominations",
        "Poster": "https://m.media-amazon.com/images/I/81NzC8aK+oL._AC_UF1000,1000_QL80_.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.8/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "100%"
            },
            {
                "Source": "MyAnimeList",
                "Value": "8.7/10"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.8",
        "imdbVotes": "34,567",
        "imdbID": "tt10233448",
        "Type": "series",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "id": 43
    },
    {
        "Title": "Fate/Zero",
        "Year": "2011",
        "Rated": "TV-MA",
        "Released": "01 Oct 2011",
        "Runtime": "24 min per episode",
        "Genre": "Animation, Action, Fantasy",
        "Director": "Ei Aoki",
        "Writer": "Gen Urobuchi",
        "Actors": "Ayako Kawasumi, Kana Ueda, Noriko Shitaya",
        "Plot": "Fate/Zero is a prequel to Fate/stay night, depicting the Fourth Holy Grail War, a deadly tournament where mages summon heroic spirits to fight for the chance to have their wishes granted. The story follows Kiritsugu Emiya, a mercenary mage, and his servant Saber, as they navigate the brutal conflict. The series delves into themes of morality, sacrifice, and the cost of pursuing one's ideals in a world filled with betrayal and tragedy.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "3 wins & 2 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTEyMjRiYjUtMzJkOC00NDBmLWI4Y2YtNDk5ZTQyMDNhMjgxXkEyXkFqcGc@._V1_.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "92%"
            },
            {
                "Source": "MyAnimeList",
                "Value": "8.3/10"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.3",
        "imdbVotes": "56,789",
        "imdbID": "tt2051178",
        "Type": "series",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "id": 44
    },
    {
        "Title": "Psycho-Pass",
        "Year": "2012",
        "Rated": "TV-MA",
        "Released": "12 Oct 2012",
        "Runtime": "24 min per episode",
        "Genre": "Animation, Crime, Sci-Fi",
        "Director": "Naoyoshi Shiotani, Katsuyuki Motohiro",
        "Writer": "Gen Urobuchi",
        "Actors": "Kana Hanazawa, Tomokazu Seki, Shizuka Itō",
        "Plot": "In a dystopian future, society is governed by the Sibyl System, which measures the mental state of citizens to determine their likelihood of committing crimes. Akane Tsunemori, a young inspector, works alongside enforcers to apprehend criminals. However, as she delves deeper into the system, she begins to question its morality and the true nature of justice. Psycho-Pass explores themes of free will, surveillance, and the ethical implications of a controlled society.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "2 wins & 3 nominations",
        "Poster": "https://upload.wikimedia.org/wikipedia/en/8/88/Psycho-Pass_key_visual.png",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "90%"
            },
            {
                "Source": "MyAnimeList",
                "Value": "8.4/10"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.3",
        "imdbVotes": "45,678",
        "imdbID": "tt2379308",
        "Type": "series",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "id": 45
    },
    {
        "Title": "Hunter x Hunter (2011)",
        "Year": "2011",
        "Rated": "TV-14",
        "Released": "02 Oct 2011",
        "Runtime": "24 min per episode",
        "Genre": "Animation, Action, Adventure",
        "Director": "Hiroshi Kōjina",
        "Writer": "Yoshihiro Togashi",
        "Actors": "Issei Futamata, Megumi Han, Mariya Ise",
        "Plot": "Gon Freecss, a young boy, discovers that his father, who he thought was dead, is actually a legendary Hunter. Determined to follow in his father's footsteps, Gon sets out on a journey to become a Hunter himself. Along the way, he befriends other aspiring Hunters, including the enigmatic Killua, and faces numerous challenges that test his strength, courage, and resolve. The series explores themes of friendship, perseverance, and the pursuit of one's dreams.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "3 wins & 2 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjNmZDhkN2QtNDYyZC00YzJmLTg0ODUtN2FjNjhhMzE3ZmUxXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "9.0/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "100%"
            },
            {
                "Source": "MyAnimeList",
                "Value": "9.1/10"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "9.0",
        "imdbVotes": "78,901",
        "imdbID": "tt2098220",
        "Type": "series",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "id": 46
    },
    {
        "Title": "Made in Abyss",
        "Year": "2017",
        "Rated": "TV-MA",
        "Released": "07 Jul 2017",
        "Runtime": "24 min per episode",
        "Genre": "Animation, Adventure, Drama",
        "Director": "Masayuki Kojima",
        "Writer": "Akihito Tsukushi",
        "Actors": "Miyu Tomita, Mariya Ise, Shiori Izawa",
        "Plot": "The Abyss is a massive, mysterious chasm filled with ancient relics and dangerous creatures. Riko, a young girl, dreams of following in her mother's footsteps as a Cave Raider. When she discovers a robot boy named Reg, the two embark on a perilous journey into the depths of the Abyss to uncover its secrets and find Riko's mother. Made in Abyss is a hauntingly beautiful tale of adventure, sacrifice, and the unknown.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "4 wins & 5 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjM4ODA5YTktNjliMC00NzI5LTk3ZTctZWYyYWEyNTJhMmQzXkEyXkFqcGc@._V1_.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "100%"
            },
            {
                "Source": "MyAnimeList",
                "Value": "8.7/10"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.4",
        "imdbVotes": "23,456",
        "imdbID": "tt7223528",
        "Type": "series",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "id": 47
    },
    {
        "Title": "Erased",
        "Year": "2016",
        "Rated": "TV-14",
        "Released": "08 Jan 2016",
        "Runtime": "23 min per episode",
        "Genre": "Animation, Mystery, Thriller",
        "Director": "Tomohiko Itō",
        "Writer": "Taku Kishimoto",
        "Actors": "Taito Ban, Shinnosuke Mitsushima, Minami Takayama",
        "Plot": "Satoru Fujinuma possesses a unique ability called Revival, which sends him back in time moments before a life-threatening incident occurs. When he is falsely accused of murder, Satoru is sent back 18 years to his childhood, where he must prevent a series of kidnappings that ultimately led to the death of his classmate Kayo. Erased is a gripping mystery that explores themes of redemption, the impact of small actions, and the power of second chances.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "2 wins & 3 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWQ2YmI5NWMtZTY2Mi00MGUxLWFhMmEtYjVjZjMwOTNkOThjXkEyXkFqcGc@._V1_.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.5/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "100%"
            },
            {
                "Source": "MyAnimeList",
                "Value": "8.5/10"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.5",
        "imdbVotes": "34,567",
        "imdbID": "tt5249462",
        "Type": "series",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "id": 48
    },
    {
        "Title": "Re:Zero - Starting Life in Another World",
        "Year": "2016",
        "Rated": "TV-14",
        "Released": "04 Apr 2016",
        "Runtime": "25 min per episode",
        "Genre": "Animation, Adventure, Drama",
        "Director": "Masaharu Watanabe",
        "Writer": "Tappei Nagatsuki",
        "Actors": "Yūsuke Kobayashi, Rie Takahashi, Yumi Uchiyama",
        "Plot": "Subaru Natsuki is suddenly transported to a fantasy world, where he discovers he has the ability to return to a specific point in time upon death. As he tries to navigate this new world and protect those he cares about, Subaru must endure countless deaths and resets, each time learning more about the world and himself. Re:Zero is a dark and emotional journey that explores themes of perseverance, love, and the cost of second chances.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "3 wins & 4 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDFkMGU0OWItMGRlYi00NzcxLWE0M2ItZDBkMjQ1ZmY5ZWI2XkEyXkFqcGc@._V1_QL75_UY207_CR8,0,140,207_.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "90%"
            },
            {
                "Source": "MyAnimeList",
                "Value": "8.3/10"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.1",
        "imdbVotes": "45,678",
        "imdbID": "tt5607616",
        "Type": "series",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "id": 49
    },
    {
        "Title": "Mushoku Tensei: Jobless Reincarnation",
        "Year": "2021",
        "Rated": "TV-MA",
        "Released": "11 Jan 2021",
        "Runtime": "23 min per episode",
        "Genre": "Animation, Adventure, Drama",
        "Director": "Manabu Okamoto",
        "Writer": "Rifujin na Magonote",
        "Actors": "Yumi Uchiyama, Tomokazu Sugita, Ai Kayano",
        "Plot": "A 34-year-old unemployed recluse dies in a traffic accident and is reincarnated into a fantasy world as Rudeus Greyrat, a newborn baby. Retaining his memories from his past life, Rudeus vows to live his new life to the fullest. With his newfound talent for magic and a determination to overcome his past failures, he embarks on a journey of self-discovery, growth, and adventure, forming bonds and facing challenges that shape his destiny in this new world.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "2 wins & 3 nominations",
        "Poster": "https://i.ebayimg.com/images/g/aPQAAOSwgbhm8kYV/s-l1600.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "95%"
            },
            {
                "Source": "MyAnimeList",
                "Value": "8.4/10"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.4",
        "imdbVotes": "23,456",
        "imdbID": "tt13109448",
        "Type": "series",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "id": 50
    },
    {
        "Title": "My Neighbor Totoro",
        "Year": "1988",
        "Rated": "G",
        "Released": "13 Jul 1990",
        "Runtime": "86 min",
        "Genre": "Animation, Comedy, Family",
        "Director": "Hayao Miyazaki",
        "Writer": "Hayao Miyazaki",
        "Actors": "Hitoshi Takagi, Noriko Hidaka, Chika Sakamoto",
        "Plot": "When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "5 wins & 2 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYzJjMTYyMjQtZDI0My00ZjE2LTkyNGYtOTllNGQxNDMyZjE0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "94%"
            },
            {
                "Source": "Metacritic",
                "Value": "86/100"
            }
        ],
        "Metascore": "86",
        "imdbRating": "8.2",
        "imdbVotes": "324,357",
        "imdbID": "tt0096283",
        "Type": "movie",
        "DVD": "28 Feb 2006",
        "BoxOffice": "$2,250,213",
        "id": 51
    },
    {
        "Title": "The Shawshank Redemption",
        "Year": "1994",
        "Rated": "R",
        "Released": "14 Oct 1994",
        "Runtime": "142 min",
        "Genre": "Drama",
        "Director": "Frank Darabont",
        "Writer": "Stephen King, Frank Darabont",
        "Actors": "Tim Robbins, Morgan Freeman, Bob Gunton",
        "Plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Nominated for 7 Oscars. 21 wins & 43 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "9.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "91%"
            },
            {
                "Source": "Metacritic",
                "Value": "81/100"
            }
        ],
        "Metascore": "81",
        "imdbRating": "9.3",
        "imdbVotes": "2,559,562",
        "imdbID": "tt0111161",
        "Type": "movie",
        "DVD": "21 Dec 1999",
        "BoxOffice": "$28,767,189",
        "id": 52
    },
    {
        "Title": "The Godfather",
        "Year": "1972",
        "Rated": "R",
        "Released": "24 Mar 1972",
        "Runtime": "175 min",
        "Genre": "Crime, Drama",
        "Director": "Francis Ford Coppola",
        "Writer": "Mario Puzo, Francis Ford Coppola",
        "Actors": "Marlon Brando, Al Pacino, James Caan",
        "Plot": "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
        "Language": "English, Italian, Latin",
        "Country": "United States",
        "Awards": "Won 3 Oscars. 31 wins & 30 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "9.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "97%"
            },
            {
                "Source": "Metacritic",
                "Value": "100/100"
            }
        ],
        "Metascore": "100",
        "imdbRating": "9.2",
        "imdbVotes": "1,765,414",
        "imdbID": "tt0068646",
        "Type": "movie",
        "DVD": "11 May 2004",
        "BoxOffice": "$136,381,073",
        "id": 53
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Crime, Drama",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan, David S. Goyer",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "United States, United Kingdom",
        "Awards": "Won 2 Oscars. 159 wins & 163 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "9.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "94%"
            },
            {
                "Source": "Metacritic",
                "Value": "84/100"
            }
        ],
        "Metascore": "84",
        "imdbRating": "9.1",
        "imdbVotes": "2,528,462",
        "imdbID": "tt0468569",
        "Type": "movie",
        "DVD": "09 Dec 2008",
        "BoxOffice": "$534,987,076",
        "id": 54
    },
    {
        "Title": "The Godfather: Part II",
        "Year": "1974",
        "Rated": "R",
        "Released": "18 Dec 1974",
        "Runtime": "202 min",
        "Genre": "Crime, Drama",
        "Director": "Francis Ford Coppola",
        "Writer": "Francis Ford Coppola, Mario Puzo",
        "Actors": "Al Pacino, Robert De Niro, Robert Duvall",
        "Plot": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
        "Language": "English, Italian, Spanish, Latin, Sicilian",
        "Country": "United States",
        "Awards": "Won 6 Oscars. 17 wins & 20 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "9.0/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "96%"
            },
            {
                "Source": "Metacritic",
                "Value": "90/100"
            }
        ],
        "Metascore": "90",
        "imdbRating": "9.0",
        "imdbVotes": "1,222,153",
        "imdbID": "tt0071562",
        "Type": "movie",
        "DVD": "24 May 2005",
        "BoxOffice": "$47,834,595",
        "id": 55
    },
    {
        "Title": "12 Angry Men",
        "Year": "1957",
        "Rated": "Approved",
        "Released": "10 Apr 1957",
        "Runtime": "96 min",
        "Genre": "Crime, Drama",
        "Director": "Sidney Lumet",
        "Writer": "Reginald Rose",
        "Actors": "Henry Fonda, Lee J. Cobb, Martin Balsam",
        "Plot": "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Nominated for 3 Oscars. 17 wins & 13 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "9.0/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "100%"
            },
            {
                "Source": "Metacritic",
                "Value": "96/100"
            }
        ],
        "Metascore": "96",
        "imdbRating": "9.0",
        "imdbVotes": "756,234",
        "imdbID": "tt0050083",
        "Type": "movie",
        "DVD": "04 Mar 2008",
        "BoxOffice": "N/A",
        "id": 56
    },
    {
        "Title": "Schindler's List",
        "Year": "1993",
        "Rated": "R",
        "Released": "04 Feb 1994",
        "Runtime": "195 min",
        "Genre": "Biography, Drama, History",
        "Director": "Steven Spielberg",
        "Writer": "Thomas Keneally, Steven Zaillian",
        "Actors": "Liam Neeson, Ralph Fiennes, Ben Kingsley",
        "Plot": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        "Language": "English, Hebrew, German, Polish, Latin",
        "Country": "United States",
        "Awards": "Won 7 Oscars. 91 wins & 49 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.9/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "98%"
            },
            {
                "Source": "Metacritic",
                "Value": "94/100"
            }
        ],
        "Metascore": "94",
        "imdbRating": "8.9",
        "imdbVotes": "1,307,427",
        "imdbID": "tt0108052",
        "Type": "movie",
        "DVD": "12 Feb 2008",
        "BoxOffice": "$96,898,818",
        "id": 57
    },
    {
        "Title": "The Lord of the Rings: The Return of the King",
        "Year": "2003",
        "Rated": "PG-13",
        "Released": "17 Dec 2003",
        "Runtime": "201 min",
        "Genre": "Action, Adventure, Drama",
        "Director": "Peter Jackson",
        "Writer": "J.R.R. Tolkien, Fran Walsh, Philippa Boyens",
        "Actors": "Elijah Wood, Viggo Mortensen, Ian McKellen",
        "Plot": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        "Language": "English, Quenya, Old English, Sindarin",
        "Country": "New Zealand, United States",
        "Awards": "Won 11 Oscars. 209 wins & 124 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "9.0/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "93%"
            },
            {
                "Source": "Metacritic",
                "Value": "94/100"
            }
        ],
        "Metascore": "94",
        "imdbRating": "9.0",
        "imdbVotes": "1,765,286",
        "imdbID": "tt0167260",
        "Type": "movie",
        "DVD": "25 May 2004",
        "BoxOffice": "$378,251,207",
        "id": 58
    },
    {
        "Title": "Pulp Fiction",
        "Year": "1994",
        "Rated": "R",
        "Released": "14 Oct 1994",
        "Runtime": "154 min",
        "Genre": "Crime, Drama",
        "Director": "Quentin Tarantino",
        "Writer": "Quentin Tarantino, Roger Avary",
        "Actors": "John Travolta, Uma Thurman, Samuel L. Jackson",
        "Plot": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        "Language": "English, Spanish, French",
        "Country": "United States",
        "Awards": "Won 1 Oscar. 70 wins & 75 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.9/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "92%"
            },
            {
                "Source": "Metacritic",
                "Value": "94/100"
            }
        ],
        "Metascore": "94",
        "imdbRating": "8.9",
        "imdbVotes": "1,969,677",
        "imdbID": "tt0110912",
        "Type": "movie",
        "DVD": "20 Aug 2002",
        "BoxOffice": "$107,928,762",
        "id": 59
    },
    {
        "Title": "The Lord of the Rings: The Fellowship of the Ring",
        "Year": "2001",
        "Rated": "PG-13",
        "Released": "19 Dec 2001",
        "Runtime": "178 min",
        "Genre": "Action, Adventure, Drama",
        "Director": "Peter Jackson",
        "Writer": "J.R.R. Tolkien, Fran Walsh, Philippa Boyens",
        "Actors": "Elijah Wood, Ian McKellen, Orlando Bloom",
        "Plot": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        "Language": "English, Sindarin",
        "Country": "New Zealand, United States",
        "Awards": "Won 4 Oscars. 121 wins & 126 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.8/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "91%"
            },
            {
                "Source": "Metacritic",
                "Value": "92/100"
            }
        ],
        "Metascore": "92",
        "imdbRating": "8.8",
        "imdbVotes": "1,786,948",
        "imdbID": "tt0120737",
        "Type": "movie",
        "DVD": "06 Aug 2002",
        "BoxOffice": "$316,115,420",
        "id": 60
    },
    {
        "Title": "The Good, the Bad and the Ugly",
        "Year": "1966",
        "Rated": "R",
        "Released": "29 Dec 1967",
        "Runtime": "178 min",
        "Genre": "Adventure, Western",
        "Director": "Sergio Leone",
        "Writer": "Luciano Vincenzoni, Sergio Leone, Agenore Incrocci",
        "Actors": "Clint Eastwood, Eli Wallach, Lee Van Cleef",
        "Plot": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
        "Language": "Italian",
        "Country": "Italy, Spain, West Germany",
        "Awards": "3 wins & 6 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.8/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "97%"
            },
            {
                "Source": "Metacritic",
                "Value": "90/100"
            }
        ],
        "Metascore": "90",
        "imdbRating": "8.8",
        "imdbVotes": "738,104",
        "imdbID": "tt0060196",
        "Type": "movie",
        "DVD": "07 Nov 2006",
        "BoxOffice": "$25,100,000",
        "id": 61
    },
    {
        "Title": "Forrest Gump",
        "Year": "1994",
        "Rated": "PG-13",
        "Released": "06 Jul 1994",
        "Runtime": "142 min",
        "Genre": "Drama, Romance",
        "Director": "Robert Zemeckis",
        "Writer": "Winston Groom, Eric Roth",
        "Actors": "Tom Hanks, Robin Wright, Gary Sinise",
        "Plot": "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweeth",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 6 Oscars. 50 wins & 75 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.8/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "70%"
            },
            {
                "Source": "Metacritic",
                "Value": "82/100"
            }
        ],
        "Metascore": "82",
        "imdbRating": "8.8",
        "imdbVotes": "1,979,273",
        "imdbID": "tt0109830",
        "Type": "movie",
        "DVD": "28 Aug 2001",
        "BoxOffice": "$330,455,270",
        "id": 62
    },
    {
        "Title": "Fight Club",
        "Year": "1999",
        "Rated": "R",
        "Released": "15 Oct 1999",
        "Runtime": "139 min",
        "Genre": "Drama",
        "Director": "David Fincher",
        "Writer": "Chuck Palahniuk, Jim Uhls",
        "Actors": "Brad Pitt, Edward Norton, Meat Loaf",
        "Plot": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
        "Language": "English",
        "Country": "United States, Germany",
        "Awards": "Nominated for 1 Oscar. 11 wins & 38 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.8/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "79%"
            },
            {
                "Source": "Metacritic",
                "Value": "66/100"
            }
        ],
        "Metascore": "66",
        "imdbRating": "8.8",
        "imdbVotes": "2,014,670",
        "imdbID": "tt0137523",
        "Type": "movie",
        "DVD": "14 Oct 2003",
        "BoxOffice": "$37,030,102",
        "id": 63
    },
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
        "Plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
        "Language": "English, Japanese, French",
        "Country": "United States, United Kingdom",
        "Awards": "Won 4 Oscars. 157 wins & 220 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.8/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "87%"
            },
            {
                "Source": "Metacritic",
                "Value": "74/100"
            }
        ],
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "2,251,332",
        "imdbID": "tt1375666",
        "Type": "movie",
        "DVD": "07 Dec 2010",
        "BoxOffice": "$292,587,330",
        "id": 64
    },
    {
        "Title": "The Lord of the Rings: The Two Towers",
        "Year": "2002",
        "Rated": "PG-13",
        "Released": "18 Dec 2002",
        "Runtime": "179 min",
        "Genre": "Action, Adventure, Drama",
        "Director": "Peter Jackson",
        "Writer": "J.R.R. Tolkien, Fran Walsh, Philippa Boyens",
        "Actors": "Elijah Wood, Ian McKellen, Viggo Mortensen",
        "Plot": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
        "Language": "English, Sindarin, Old English",
        "Country": "New Zealand, United States",
        "Awards": "Won 2 Oscars. 126 wins & 138 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.7/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "95%"
            },
            {
                "Source": "Metacritic",
                "Value": "87/100"
            }
        ],
        "Metascore": "87",
        "imdbRating": "8.7",
        "imdbVotes": "1,594,949",
        "imdbID": "tt0167261",
        "Type": "movie",
        "DVD": "26 Aug 2003",
        "BoxOffice": "$342,952,511",
        "id": 65
    },
    {
        "Title": "Star Wars: Episode V - The Empire Strikes Back",
        "Year": "1980",
        "Rated": "PG",
        "Released": "20 Jun 1980",
        "Runtime": "124 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "Irvin Kershner",
        "Writer": "Leigh Brackett, Lawrence Kasdan, George Lucas",
        "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher",
        "Plot": "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 2 Oscars. 25 wins & 20 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.7/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "94%"
            },
            {
                "Source": "Metacritic",
                "Value": "82/100"
            }
        ],
        "Metascore": "82",
        "imdbRating": "8.7",
        "imdbVotes": "1,241,399",
        "imdbID": "tt0080684",
        "Type": "movie",
        "DVD": "21 Sep 2004",
        "BoxOffice": "$292,753,960",
        "id": 66
    },
    {
        "Title": "The Matrix",
        "Year": "1999",
        "Rated": "R",
        "Released": "31 Mar 1999",
        "Runtime": "136 min",
        "Genre": "Action, Sci-Fi",
        "Director": "Lana Wachowski, Lilly Wachowski",
        "Writer": "Lilly Wachowski, Lana Wachowski",
        "Actors": "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
        "Plot": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
        "Language": "English",
        "Country": "United States, Australia",
        "Awards": "Won 4 Oscars. 42 wins & 51 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.7/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "88%"
            },
            {
                "Source": "Metacritic",
                "Value": "73/100"
            }
        ],
        "Metascore": "73",
        "imdbRating": "8.7",
        "imdbVotes": "1,844,289",
        "imdbID": "tt0133093",
        "Type": "movie",
        "DVD": "15 May 2007",
        "BoxOffice": "$172,076,928",
        "id": 67
    },
    {
        "Title": "Goodfellas",
        "Year": "1990",
        "Rated": "R",
        "Released": "21 Sep 1990",
        "Runtime": "145 min",
        "Genre": "Biography, Crime, Drama",
        "Director": "Martin Scorsese",
        "Writer": "Nicholas Pileggi, Martin Scorsese",
        "Actors": "Robert De Niro, Ray Liotta, Joe Pesci",
        "Plot": "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
        "Language": "English, Italian",
        "Country": "United States",
        "Awards": "Won 1 Oscar. 44 wins & 38 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.7/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "96%"
            },
            {
                "Source": "Metacritic",
                "Value": "90/100"
            }
        ],
        "Metascore": "90",
        "imdbRating": "8.7",
        "imdbVotes": "1,107,104",
        "imdbID": "tt0099685",
        "Type": "movie",
        "DVD": "22 Aug 1997",
        "BoxOffice": "$46,909,721",
        "id": 68
    },
    {
        "Title": "One Flew Over the Cuckoo's Nest",
        "Year": "1975",
        "Rated": "R",
        "Released": "19 Nov 1975",
        "Runtime": "133 min",
        "Genre": "Drama",
        "Director": "Milos Forman",
        "Writer": "Lawrence Hauben, Bo Goldman, Ken Kesey",
        "Actors": "Jack Nicholson, Louise Fletcher, Michael Berryman",
        "Plot": "A criminal pleads insanity and is admitted to a mental institution, where he rebels against the oppressive nurse and rallies up the scared patients.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 5 Oscars. 38 wins & 16 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.7/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "93%"
            },
            {
                "Source": "Metacritic",
                "Value": "84/100"
            }
        ],
        "Metascore": "84",
        "imdbRating": "8.7",
        "imdbVotes": "976,526",
        "imdbID": "tt0073486",
        "Type": "movie",
        "DVD": "16 Dec 1997",
        "BoxOffice": "$108,981,275",
        "id": 69
    },
    {
        "Title": "Se7en",
        "Year": "1995",
        "Rated": "R",
        "Released": "22 Sep 1995",
        "Runtime": "127 min",
        "Genre": "Crime, Drama, Mystery",
        "Director": "David Fincher",
        "Writer": "Andrew Kevin Walker",
        "Actors": "Morgan Freeman, Brad Pitt, Kevin Spacey",
        "Plot": "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Nominated for 1 Oscar. 29 wins & 43 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.6/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "82%"
            },
            {
                "Source": "Metacritic",
                "Value": "65/100"
            }
        ],
        "Metascore": "65",
        "imdbRating": "8.6",
        "imdbVotes": "1,569,658",
        "imdbID": "tt0114369",
        "Type": "movie",
        "DVD": "19 Dec 2000",
        "BoxOffice": "$100,125,643",
        "id": 70
    },
    {
        "Title": "Seven Samurai",
        "Year": "1954",
        "Rated": "Not Rated",
        "Released": "19 Nov 1956",
        "Runtime": "207 min",
        "Genre": "Action, Drama",
        "Director": "Akira Kurosawa",
        "Writer": "Akira Kurosawa, Shinobu Hashimoto, Hideo Oguni",
        "Actors": "Toshirô Mifune, Takashi Shimura, Keiko Tsushima",
        "Plot": "A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "Nominated for 2 Oscars. 5 wins & 8 nominations total",
        "Poster": "https://yc.cldmlk.com/g7j2h78b3gc2ap10rxvh22smc8/uploads/vertical_3dc1090e-bac1-4bde-a2aa-0371d86199ef.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.6/10"
            },
            {
                "Source": "Metacritic",
                "Value": "98/100"
            }
        ],
        "Metascore": "98",
        "imdbRating": "8.6",
        "imdbVotes": "337,182",
        "imdbID": "tt0047478",
        "Type": "movie",
        "DVD": "05 Sep 2006",
        "BoxOffice": "$318,649",
        "id": 71
    },
    {
        "Title": "It's a Wonderful Life",
        "Year": "1946",
        "Rated": "PG",
        "Released": "07 Jan 1947",
        "Runtime": "130 min",
        "Genre": "Drama, Family, Fantasy",
        "Director": "Frank Capra",
        "Writer": "Frances Goodrich, Albert Hackett, Frank Capra",
        "Actors": "James Stewart, Donna Reed, Lionel Barrymore",
        "Plot": "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.",
        "Language": "English, French",
        "Country": "United States",
        "Awards": "Nominated for 5 Oscars. 6 wins & 6 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.7/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "94%"
            },
            {
                "Source": "Metacritic",
                "Value": "89/100"
            }
        ],
        "Metascore": "89",
        "imdbRating": "8.7",
        "imdbVotes": "442,236",
        "imdbID": "tt0038650",
        "Type": "movie",
        "DVD": "13 Jul 2004",
        "BoxOffice": "$44,000",
        "id": 72
    },
    {
        "Title": "The Silence of the Lambs",
        "Year": "1991",
        "Rated": "R",
        "Released": "14 Feb 1991",
        "Runtime": "118 min",
        "Genre": "Crime, Drama, Thriller",
        "Director": "Jonathan Demme",
        "Writer": "Thomas Harris, Ted Tally",
        "Actors": "Jodie Foster, Anthony Hopkins, Lawrence A. Bonney",
        "Plot": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
        "Language": "English, Latin",
        "Country": "United States",
        "Awards": "Won 5 Oscars. 69 wins & 51 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.6/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "96%"
            },
            {
                "Source": "Metacritic",
                "Value": "85/100"
            }
        ],
        "Metascore": "85",
        "imdbRating": "8.6",
        "imdbVotes": "1,376,039",
        "imdbID": "tt0102926",
        "Type": "movie",
        "DVD": "21 Aug 2001",
        "BoxOffice": "$130,742,922",
        "id": 73
    },
    {
        "Title": "Saving Private Ryan",
        "Year": "1998",
        "Rated": "R",
        "Released": "24 Jul 1998",
        "Runtime": "169 min",
        "Genre": "Drama, War",
        "Director": "Steven Spielberg",
        "Writer": "Robert Rodat",
        "Actors": "Tom Hanks, Matt Damon, Tom Sizemore",
        "Plot": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
        "Language": "English, French, German, Czech",
        "Country": "United States",
        "Awards": "Won 5 Oscars. 79 wins & 75 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.6/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "93%"
            },
            {
                "Source": "Metacritic",
                "Value": "91/100"
            }
        ],
        "Metascore": "91",
        "imdbRating": "8.6",
        "imdbVotes": "1,336,615",
        "imdbID": "tt0120815",
        "Type": "movie",
        "DVD": "25 May 2004",
        "BoxOffice": "$217,049,603",
        "id": 74
    },
    {
        "Title": "City of God",
        "Year": "2002",
        "Rated": "R",
        "Released": "13 Feb 2004",
        "Runtime": "130 min",
        "Genre": "Crime, Drama",
        "Director": "Fernando Meirelles, Kátia Lund",
        "Writer": "Paulo Lins, Bráulio Mantovani",
        "Actors": "Alexandre Rodrigues, Leandro Firmino, Matheus Nachtergaele",
        "Plot": "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
        "Language": "Portuguese",
        "Country": "Brazil, France, Germany",
        "Awards": "Nominated for 4 Oscars. 74 wins & 50 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.6/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "91%"
            },
            {
                "Source": "Metacritic",
                "Value": "79/100"
            }
        ],
        "Metascore": "79",
        "imdbRating": "8.6",
        "imdbVotes": "737,735",
        "imdbID": "tt0317248",
        "Type": "movie",
        "DVD": "08 Jun 2004",
        "BoxOffice": "$7,564,459",
        "id": 75
    },
    {
        "Title": "Life Is Beautiful",
        "Year": "1997",
        "Rated": "PG-13",
        "Released": "20 Dec 1997",
        "Runtime": "116 min",
        "Genre": "Comedy, Drama, Romance",
        "Director": "Roberto Benigni",
        "Writer": "Vincenzo Cerami, Roberto Benigni",
        "Actors": "Roberto Benigni, Nicoletta Braschi, Giorgio Cantarini",
        "Plot": "When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp.",
        "Language": "Italian, German, English",
        "Country": "Italy",
        "Awards": "Won 3 Oscars. 72 wins & 52 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.6/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "80%"
            },
            {
                "Source": "Metacritic",
                "Value": "59/100"
            }
        ],
        "Metascore": "59",
        "imdbRating": "8.6",
        "imdbVotes": "671,266",
        "imdbID": "tt0118799",
        "Type": "movie",
        "DVD": "09 Nov 1999",
        "BoxOffice": "$57,563,264",
        "id": 76
    },
    {
        "Title": "The Green Mile",
        "Year": "1999",
        "Rated": "R",
        "Released": "10 Dec 1999",
        "Runtime": "189 min",
        "Genre": "Crime, Drama, Fantasy",
        "Director": "Frank Darabont",
        "Writer": "Stephen King, Frank Darabont",
        "Actors": "Tom Hanks, Michael Clarke Duncan, David Morse",
        "Plot": "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
        "Language": "English, French",
        "Country": "United States",
        "Awards": "Nominated for 4 Oscars. 15 wins & 37 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.6/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "79%"
            },
            {
                "Source": "Metacritic",
                "Value": "61/100"
            }
        ],
        "Metascore": "61",
        "imdbRating": "8.6",
        "imdbVotes": "1,247,542",
        "imdbID": "tt0120689",
        "Type": "movie",
        "DVD": "13 Jun 2000",
        "BoxOffice": "$136,801,374",
        "id": 77
    },
    {
        "Title": "Star Wars",
        "Year": "1977",
        "Rated": "PG",
        "Released": "25 May 1977",
        "Runtime": "121 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "George Lucas",
        "Writer": "George Lucas",
        "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher",
        "Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vad",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 7 Oscars. 63 wins & 29 nominations total",
        "Poster": "https://lumiere-a.akamaihd.net/v1/images/image_fb8bbf87.jpeg?region=0%2C0%2C540%2C810",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.6/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "92%"
            },
            {
                "Source": "Metacritic",
                "Value": "90/100"
            }
        ],
        "Metascore": "90",
        "imdbRating": "8.6",
        "imdbVotes": "1,312,386",
        "imdbID": "tt0076759",
        "Type": "movie",
        "DVD": "06 Dec 2005",
        "BoxOffice": "$460,998,507",
        "id": 78
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "United States, United Kingdom, Canada",
        "Awards": "Won 1 Oscar. 44 wins & 148 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.7/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "72%"
            },
            {
                "Source": "Metacritic",
                "Value": "74/100"
            }
        ],
        "Metascore": "74",
        "imdbRating": "8.7",
        "imdbVotes": "1,708,996",
        "imdbID": "tt0816692",
        "Type": "movie",
        "DVD": "31 Mar 2015",
        "BoxOffice": "$188,020,017",
        "id": 79
    },
    {
        "Title": "Terminator 2: Judgment Day",
        "Year": "1991",
        "Rated": "R",
        "Released": "03 Jul 1991",
        "Runtime": "137 min",
        "Genre": "Action, Sci-Fi",
        "Director": "James Cameron",
        "Writer": "James Cameron, William Wisher",
        "Actors": "Arnold Schwarzenegger, Linda Hamilton, Edward Furlong",
        "Plot": "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten-year-old son John from a more advanced and powerful cyborg.",
        "Language": "English, Spanish",
        "Country": "United States",
        "Awards": "Won 4 Oscars. 36 wins & 33 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.6/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "93%"
            },
            {
                "Source": "Metacritic",
                "Value": "75/100"
            }
        ],
        "Metascore": "75",
        "imdbRating": "8.6",
        "imdbVotes": "1,061,594",
        "imdbID": "tt0103064",
        "Type": "movie",
        "DVD": "13 Feb 2007",
        "BoxOffice": "$205,881,154",
        "id": 80
    },
    {
        "Title": "Back to the Future",
        "Year": "1985",
        "Rated": "PG",
        "Released": "03 Jul 1985",
        "Runtime": "116 min",
        "Genre": "Adventure, Comedy, Sci-Fi",
        "Director": "Robert Zemeckis",
        "Writer": "Robert Zemeckis, Bob Gale",
        "Actors": "Michael J. Fox, Christopher Lloyd, Lea Thompson",
        "Plot": "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 1 Oscar. 22 wins & 25 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.6/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "96%"
            },
            {
                "Source": "Metacritic",
                "Value": "87/100"
            }
        ],
        "Metascore": "87",
        "imdbRating": "8.6",
        "imdbVotes": "1,151,512",
        "imdbID": "tt0088763",
        "Type": "movie",
        "DVD": "17 Aug 2010",
        "BoxOffice": "$212,836,762",
        "id": 81
    },
    {
        "Title": "Spirited Away",
        "Year": "2001",
        "Rated": "PG",
        "Released": "28 Mar 2003",
        "Runtime": "125 min",
        "Genre": "Animation, Adventure, Family",
        "Director": "Hayao Miyazaki",
        "Writer": "Hayao Miyazaki",
        "Actors": "Daveigh Chase, Suzanne Pleshette, Miyu Irino",
        "Plot": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
        "Language": "Japanese, English",
        "Country": "Japan",
        "Awards": "Won 1 Oscar. 58 wins & 31 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.6/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "97%"
            },
            {
                "Source": "Metacritic",
                "Value": "96/100"
            }
        ],
        "Metascore": "96",
        "imdbRating": "8.6",
        "imdbVotes": "724,763",
        "imdbID": "tt0245429",
        "Type": "movie",
        "DVD": "15 Apr 2003",
        "BoxOffice": "$13,750,644",
        "id": 82
    },
    {
        "Title": "Psycho",
        "Year": "1960",
        "Rated": "R",
        "Released": "08 Sep 1960",
        "Runtime": "109 min",
        "Genre": "Horror, Mystery, Thriller",
        "Director": "Alfred Hitchcock",
        "Writer": "Joseph Stefano, Robert Bloch",
        "Actors": "Anthony Perkins, Janet Leigh, Vera Miles",
        "Plot": "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Nominated for 4 Oscars. 7 wins & 14 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.5/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "96%"
            },
            {
                "Source": "Metacritic",
                "Value": "97/100"
            }
        ],
        "Metascore": "97",
        "imdbRating": "8.5",
        "imdbVotes": "649,146",
        "imdbID": "tt0054215",
        "Type": "movie",
        "DVD": "04 Oct 2005",
        "BoxOffice": "$32,000,000",
        "id": 83
    },
    {
        "Title": "The Pianist",
        "Year": "2002",
        "Rated": "R",
        "Released": "28 Mar 2003",
        "Runtime": "150 min",
        "Genre": "Biography, Drama, Music",
        "Director": "Roman Polanski",
        "Writer": "Ronald Harwood, Wladyslaw Szpilman",
        "Actors": "Adrien Brody, Thomas Kretschmann, Frank Finlay",
        "Plot": "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
        "Language": "English, German, Russian",
        "Country": "France, Germany, Poland, United Kingdom",
        "Awards": "Won 3 Oscars. 57 wins & 74 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.6/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "95%"
            },
            {
                "Source": "Metacritic",
                "Value": "85/100"
            }
        ],
        "Metascore": "85",
        "imdbRating": "8.6",
        "imdbVotes": "797,804",
        "imdbID": "tt0253474",
        "Type": "movie",
        "DVD": "27 May 2003",
        "BoxOffice": "$32,572,577",
        "id": 84
    },
    {
        "Title": "Léon: The Professional",
        "Year": "1994",
        "Rated": "R",
        "Released": "18 Nov 1994",
        "Runtime": "110 min",
        "Genre": "Action, Crime, Drama",
        "Director": "Luc Besson",
        "Writer": "Luc Besson",
        "Actors": "Jean Reno, Gary Oldman, Natalie Portman",
        "Plot": "12-year-old Mathilda is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade.",
        "Language": "English, Italian, French",
        "Country": "France, United States",
        "Awards": "6 wins & 15 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODllNWE0MmEtYjUwZi00ZjY3LThmNmQtZjZlMjI2YTZjYmQ0XkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.6/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "73%"
            },
            {
                "Source": "Metacritic",
                "Value": "64/100"
            }
        ],
        "Metascore": "64",
        "imdbRating": "8.6",
        "imdbVotes": "1,118,859",
        "imdbID": "tt0110413",
        "Type": "movie",
        "DVD": "24 Feb 1998",
        "BoxOffice": "$19,501,238",
        "id": 85
    },
    {
        "Title": "Parasite",
        "Year": "2019",
        "Rated": "R",
        "Released": "08 Nov 2019",
        "Runtime": "132 min",
        "Genre": "Comedy, Drama, Thriller",
        "Director": "Bong Joon Ho",
        "Writer": "Bong Joon Ho, Han Jin-won",
        "Actors": "Kang-ho Song, Sun-kyun Lee, Yeo-jeong Cho",
        "Plot": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        "Language": "Korean, English",
        "Country": "South Korea",
        "Awards": "Won 4 Oscars. 308 wins & 271 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.5/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "98%"
            },
            {
                "Source": "Metacritic",
                "Value": "96/100"
            }
        ],
        "Metascore": "96",
        "imdbRating": "8.5",
        "imdbVotes": "727,949",
        "imdbID": "tt6751668",
        "Type": "movie",
        "DVD": "11 Oct 2019",
        "BoxOffice": "$53,369,749",
        "id": 86
    },
    {
        "Title": "The Lion King",
        "Year": "1994",
        "Rated": "G",
        "Released": "24 Jun 1994",
        "Runtime": "88 min",
        "Genre": "Animation, Adventure, Drama",
        "Director": "Roger Allers, Rob Minkoff",
        "Writer": "Irene Mecchi, Jonathan Roberts, Linda Woolverton",
        "Actors": "Matthew Broderick, Jeremy Irons, James Earl Jones",
        "Plot": "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
        "Language": "English, Swahili, Xhosa, Zulu",
        "Country": "United States",
        "Awards": "Won 2 Oscars. 39 wins & 35 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.5/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "93%"
            },
            {
                "Source": "Metacritic",
                "Value": "88/100"
            }
        ],
        "Metascore": "88",
        "imdbRating": "8.5",
        "imdbVotes": "1,014,686",
        "imdbID": "tt0110357",
        "Type": "movie",
        "DVD": "04 Oct 2011",
        "BoxOffice": "$422,783,777",
        "id": 87
    },
    {
        "Title": "Gladiator",
        "Year": "2000",
        "Rated": "R",
        "Released": "05 May 2000",
        "Runtime": "155 min",
        "Genre": "Action, Adventure, Drama",
        "Director": "Ridley Scott",
        "Writer": "David Franzoni, John Logan, William Nicholson",
        "Actors": "Russell Crowe, Joaquin Phoenix, Connie Nielsen",
        "Plot": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
        "Language": "English",
        "Country": "United States, United Kingdom, Malta, Morocco",
        "Awards": "Won 5 Oscars. 59 wins & 106 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.5/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "77%"
            },
            {
                "Source": "Metacritic",
                "Value": "67/100"
            }
        ],
        "Metascore": "67",
        "imdbRating": "8.5",
        "imdbVotes": "1,443,934",
        "imdbID": "tt0172495",
        "Type": "movie",
        "DVD": "26 Sep 2000",
        "BoxOffice": "$187,705,427",
        "id": 88
    },
    {
        "Title": "American History X",
        "Year": "1998",
        "Rated": "R",
        "Released": "20 Nov 1998",
        "Runtime": "119 min",
        "Genre": "Drama",
        "Director": "Tony Kaye",
        "Writer": "David McKenna",
        "Actors": "Edward Norton, Edward Furlong, Beverly D'Angelo",
        "Plot": "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Nominated for 1 Oscar. 4 wins & 15 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZTJhN2FkYWEtMGI0My00YWM4LWI2MjAtM2UwNjY4MTI2ZTQyXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.5/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "83%"
            },
            {
                "Source": "Metacritic",
                "Value": "62/100"
            }
        ],
        "Metascore": "62",
        "imdbRating": "8.5",
        "imdbVotes": "1,089,660",
        "imdbID": "tt0120586",
        "Type": "movie",
        "DVD": "05 Apr 2005",
        "BoxOffice": "$6,719,864",
        "id": 89
    },
    {
        "Title": "The Usual Suspects",
        "Year": "1995",
        "Rated": "R",
        "Released": "16 Aug 1995",
        "Runtime": "106 min",
        "Genre": "Crime, Drama, Mystery",
        "Director": "Bryan Singer",
        "Writer": "Christopher McQuarrie",
        "Actors": "Kevin Spacey, Gabriel Byrne, Chazz Palminteri",
        "Plot": "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
        "Language": "English, Hungarian, Spanish, French",
        "Country": "United States, Germany",
        "Awards": "Won 2 Oscars. 37 wins & 17 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.5/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "88%"
            },
            {
                "Source": "Metacritic",
                "Value": "77/100"
            }
        ],
        "Metascore": "77",
        "imdbRating": "8.5",
        "imdbVotes": "1,055,417",
        "imdbID": "tt0114814",
        "Type": "movie",
        "DVD": "02 Sep 2003",
        "BoxOffice": "$23,341,568",
        "id": 90
    },
    {
        "Title": "The Departed",
        "Year": "2006",
        "Rated": "R",
        "Released": "06 Oct 2006",
        "Runtime": "151 min",
        "Genre": "Crime, Drama, Thriller",
        "Director": "Martin Scorsese",
        "Writer": "William Monahan, Alan Mak, Felix Chong",
        "Actors": "Leonardo DiCaprio, Matt Damon, Jack Nicholson",
        "Plot": "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
        "Language": "English, Cantonese",
        "Country": "United States, Hong Kong",
        "Awards": "Won 4 Oscars. 97 wins & 141 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.5/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "90%"
            },
            {
                "Source": "Metacritic",
                "Value": "85/100"
            }
        ],
        "Metascore": "85",
        "imdbRating": "8.5",
        "imdbVotes": "1,275,445",
        "imdbID": "tt0407887",
        "Type": "movie",
        "DVD": "13 Feb 2007",
        "BoxOffice": "$132,399,394",
        "id": 91
    },
    {
        "Title": "The Prestige",
        "Year": "2006",
        "Rated": "PG-13",
        "Released": "20 Oct 2006",
        "Runtime": "130 min",
        "Genre": "Drama, Mystery, Thriller",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan, Christopher Priest",
        "Actors": "Christian Bale, Hugh Jackman, Scarlett Johansson",
        "Plot": "After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
        "Language": "English",
        "Country": "United States, United Kingdom",
        "Awards": "Nominated for 2 Oscars. 6 wins & 45 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.5/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "76%"
            },
            {
                "Source": "Metacritic",
                "Value": "66/100"
            }
        ],
        "Metascore": "66",
        "imdbRating": "8.5",
        "imdbVotes": "1,283,065",
        "imdbID": "tt0482571",
        "Type": "movie",
        "DVD": "13 Feb 2007",
        "BoxOffice": "$53,089,891",
        "id": 92
    },
    {
        "Title": "Casablanca",
        "Year": "1942",
        "Rated": "PG",
        "Released": "23 Jan 1943",
        "Runtime": "102 min",
        "Genre": "Drama, Romance, War",
        "Director": "Michael Curtiz",
        "Writer": "Julius J. Epstein, Philip G. Epstein, Howard Koch",
        "Actors": "Humphrey Bogart, Ingrid Bergman, Paul Henreid",
        "Plot": "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.",
        "Language": "English, French, German, Italian",
        "Country": "United States",
        "Awards": "Won 3 Oscars. 10 wins & 9 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.5/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "99%"
            },
            {
                "Source": "Metacritic",
                "Value": "100/100"
            }
        ],
        "Metascore": "100",
        "imdbRating": "8.5",
        "imdbVotes": "555,904",
        "imdbID": "tt0034583",
        "Type": "movie",
        "DVD": "17 Nov 1998",
        "BoxOffice": "$4,219,709",
        "id": 93
    },
    {
        "Title": "Whiplash",
        "Year": "2014",
        "Rated": "R",
        "Released": "15 Oct 2014",
        "Runtime": "106 min",
        "Genre": "Drama, Music",
        "Director": "Damien Chazelle",
        "Writer": "Damien Chazelle",
        "Actors": "Miles Teller, J.K. Simmons, Melissa Benoist",
        "Plot": "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 3 Oscars. 98 wins & 145 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.5/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "94%"
            },
            {
                "Source": "Metacritic",
                "Value": "88/100"
            }
        ],
        "Metascore": "88",
        "imdbRating": "8.5",
        "imdbVotes": "800,184",
        "imdbID": "tt2582802",
        "Type": "movie",
        "DVD": "02 Dec 2014",
        "BoxOffice": "$13,092,000",
        "id": 94
    },
    {
        "Title": "The Intouchables",
        "Year": "2011",
        "Rated": "R",
        "Released": "02 Nov 2011",
        "Runtime": "112 min",
        "Genre": "Biography, Comedy, Drama",
        "Director": "Olivier Nakache, Éric Toledano",
        "Writer": "Olivier Nakache, Philippe Pozzo di Borgo, Éric Toledano",
        "Actors": "François Cluzet, Omar Sy, Anne Le Ny",
        "Plot": "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
        "Language": "French, English",
        "Country": "France",
        "Awards": "Nominated for 1 BAFTA Film Award38 wins & 40 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.5/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "75%"
            },
            {
                "Source": "Metacritic",
                "Value": "57/100"
            }
        ],
        "Metascore": "57",
        "imdbRating": "8.5",
        "imdbVotes": "825,602",
        "imdbID": "tt1675434",
        "Type": "movie",
        "DVD": "15 Jan 2013",
        "BoxOffice": "$10,198,820",
        "id": 95
    },
    {
        "Title": "Modern Times",
        "Year": "1936",
        "Rated": "G",
        "Released": "25 Feb 1936",
        "Runtime": "87 min",
        "Genre": "Comedy, Drama, Romance",
        "Director": "Charles Chaplin",
        "Writer": "Charles Chaplin",
        "Actors": "Charles Chaplin, Paulette Goddard, Henry Bergman",
        "Plot": "The Tramp struggles to live in modern industrial society with the help of a young homeless woman.",
        "Language": "English",
        "Country": "United States",
        "Awards": "4 wins & 1 nomination",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.5/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "98%"
            },
            {
                "Source": "Metacritic",
                "Value": "96/100"
            }
        ],
        "Metascore": "96",
        "imdbRating": "8.5",
        "imdbVotes": "235,858",
        "imdbID": "tt0027977",
        "Type": "movie",
        "DVD": "16 Nov 2010",
        "BoxOffice": "$163,577",
        "id": 96
    },
    {
        "Title": "Once Upon a Time in the West",
        "Year": "1968",
        "Rated": "PG-13",
        "Released": "04 Jul 1969",
        "Runtime": "165 min",
        "Genre": "Western",
        "Director": "Sergio Leone",
        "Writer": "Sergio Donati, Sergio Leone, Dario Argento",
        "Actors": "Henry Fonda, Charles Bronson, Claudia Cardinale",
        "Plot": "A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.",
        "Language": "Italian, English, Spanish",
        "Country": "Italy, United States",
        "Awards": "4 wins & 5 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZGI5MjBmYzYtMzJhZi00NGI1LTk3MzItYjBjMzcxM2U3MDdiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.5/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "95%"
            },
            {
                "Source": "Metacritic",
                "Value": "80/100"
            }
        ],
        "Metascore": "80",
        "imdbRating": "8.5",
        "imdbVotes": "321,833",
        "imdbID": "tt0064116",
        "Type": "movie",
        "DVD": "18 Nov 2003",
        "BoxOffice": "$5,321,508",
        "id": 97
    },
    {
        "Title": "Hara-Kiri",
        "Year": "1962",
        "Rated": "Not Rated",
        "Released": "04 Aug 1964",
        "Runtime": "133 min",
        "Genre": "Action, Drama, Mystery",
        "Director": "Masaki Kobayashi",
        "Writer": "Yasuhiko Takiguchi, Shinobu Hashimoto",
        "Actors": "Tatsuya Nakadai, Akira Ishihama, Shima Iwashita",
        "Plot": "When a ronin requesting seppuku at a feudal lord's palace is told of the brutal suicide of another ronin who previously visited, he reveals how their pasts are intertwined - and in doing so challenges the clan's integrity.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "9 wins & 3 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.6/10"
            },
            {
                "Source": "Metacritic",
                "Value": "85/100"
            }
        ],
        "Metascore": "85",
        "imdbRating": "8.6",
        "imdbVotes": "53,073",
        "imdbID": "tt0056058",
        "Type": "movie",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "id": 98
    },
    {
        "Title": "Grave of the Fireflies",
        "Year": "1988",
        "Rated": "Not Rated",
        "Released": "26 Jul 1989",
        "Runtime": "89 min",
        "Genre": "Animation, Drama, War",
        "Director": "Isao Takahata",
        "Writer": "Akiyuki Nosaka, Isao Takahata",
        "Actors": "Tsutomu Tatsumi, Ayano Shiraishi, Akemi Yamaguchi",
        "Plot": "A young boy and his little sister struggle to survive in Japan during World War II.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "3 wins",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.5/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "100%"
            },
            {
                "Source": "Metacritic",
                "Value": "94/100"
            }
        ],
        "Metascore": "94",
        "imdbRating": "8.5",
        "imdbVotes": "263,474",
        "imdbID": "tt0095327",
        "Type": "movie",
        "DVD": "11 Mar 2017",
        "BoxOffice": "$516,962",
        "id": 99
    },
    {
        "Title": "Alien",
        "Year": "1979",
        "Rated": "R",
        "Released": "22 Jun 1979",
        "Runtime": "117 min",
        "Genre": "Horror, Sci-Fi",
        "Director": "Ridley Scott",
        "Writer": "Dan O'Bannon, Ronald Shusett",
        "Actors": "Sigourney Weaver, Tom Skerritt, John Hurt",
        "Plot": "The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission.",
        "Language": "English",
        "Country": "United Kingdom, United States",
        "Awards": "Won 1 Oscar. 18 wins & 22 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMmQ2MmU3NzktZjAxOC00ZDZhLTk4YzEtMDMyMzcxY2IwMDAyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.5/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "98%"
            },
            {
                "Source": "Metacritic",
                "Value": "89/100"
            }
        ],
        "Metascore": "89",
        "imdbRating": "8.5",
        "imdbVotes": "848,173",
        "imdbID": "tt0078748",
        "Type": "movie",
        "DVD": "01 Jun 1999",
        "BoxOffice": "$81,900,459",
        "id": 100
    },
    {
        "Title": "Rear Window",
        "Year": "1954",
        "Rated": "PG",
        "Released": "01 Sep 1954",
        "Runtime": "112 min",
        "Genre": "Mystery, Thriller",
        "Director": "Alfred Hitchcock",
        "Writer": "John Michael Hayes, Cornell Woolrich",
        "Actors": "James Stewart, Grace Kelly, Wendell Corey",
        "Plot": "A wheelchair-bound photographer spies on his neighbors from his Greenwich Village courtyard apartment window, and becomes convinced one of them has committed murder, despite the skepticism of his fashion-model girlfriend.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Nominated for 4 Oscars. 6 wins & 13 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.5/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "98%"
            },
            {
                "Source": "Metacritic",
                "Value": "100/100"
            }
        ],
        "Metascore": "100",
        "imdbRating": "8.5",
        "imdbVotes": "477,246",
        "imdbID": "tt0047396",
        "Type": "movie",
        "DVD": "07 Sep 2004",
        "BoxOffice": "$36,764,313",
        "id": 101
    },
    {
        "Title": "City Lights",
        "Year": "1931",
        "Rated": "G",
        "Released": "07 Mar 1931",
        "Runtime": "87 min",
        "Genre": "Comedy, Drama, Romance",
        "Director": "Charles Chaplin",
        "Writer": "Charles Chaplin, Harry Carr, Harry Crocker",
        "Actors": "Charles Chaplin, Virginia Cherrill, Florence Lee",
        "Plot": "With the aid of a wealthy erratic tippler, a dewy-eyed tramp who has fallen in love with a sightless flower girl accumulates money to be able to help her medically.",
        "Language": "None, English",
        "Country": "United States",
        "Awards": "3 wins & 1 nomination",
        "Poster": "https://m.media-amazon.com/images/M/MV5BY2I4MmM1N2EtM2YzOS00OWUzLTkzYzctNDc5NDg2N2IyODJmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.5/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "96%"
            },
            {
                "Source": "Metacritic",
                "Value": "99/100"
            }
        ],
        "Metascore": "99",
        "imdbRating": "8.5",
        "imdbVotes": "180,416",
        "imdbID": "tt0021749",
        "Type": "movie",
        "DVD": "23 Feb 2010",
        "BoxOffice": "$19,181",
        "id": 102
    },
    {
        "Title": "Memento",
        "Year": "2000",
        "Rated": "R",
        "Released": "25 May 2001",
        "Runtime": "113 min",
        "Genre": "Mystery, Thriller",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan, Jonathan Nolan",
        "Actors": "Guy Pearce, Carrie-Anne Moss, Joe Pantoliano",
        "Plot": "A man with short-term memory loss attempts to track down his wife's murderer.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Nominated for 2 Oscars. 57 wins & 59 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.5/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "93%"
            },
            {
                "Source": "Metacritic",
                "Value": "80/100"
            }
        ],
        "Metascore": "80",
        "imdbRating": "8.5",
        "imdbVotes": "1,200,396",
        "imdbID": "tt0209144",
        "Type": "movie",
        "DVD": "04 Sep 2001",
        "BoxOffice": "$25,544,867",
        "id": 103
    },
    {
        "Title": "Cinema Paradiso",
        "Year": "1988",
        "Rated": "PG",
        "Released": "23 Feb 1990",
        "Runtime": "155 min",
        "Genre": "Drama, Romance",
        "Director": "Giuseppe Tornatore",
        "Writer": "Giuseppe Tornatore, Vanna Paoli",
        "Actors": "Philippe Noiret, Enzo Cannavale, Antonella Attili",
        "Plot": "A filmmaker recalls his childhood when falling in love with the pictures at the cinema of his home village and forms a deep friendship with the cinema's projectionist.",
        "Language": "Italian",
        "Country": "Italy, France",
        "Awards": "Won 1 Oscar. 25 wins & 32 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BM2FhYjEyYmYtMDI1Yy00YTdlLWI2NWQtYmEzNzAxOGY1NjY2XkEyXkFqcGdeQXVyNTA3NTIyNDg@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.5/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "90%"
            },
            {
                "Source": "Metacritic",
                "Value": "80/100"
            }
        ],
        "Metascore": "80",
        "imdbRating": "8.5",
        "imdbVotes": "252,468",
        "imdbID": "tt0095765",
        "Type": "movie",
        "DVD": "10 Jan 2006",
        "BoxOffice": "$12,397,210",
        "id": 104
    },
    {
        "Title": "Apocalypse Now",
        "Year": "1979",
        "Rated": "R",
        "Released": "15 Aug 1979",
        "Runtime": "147 min",
        "Genre": "Drama, Mystery, War",
        "Director": "Francis Ford Coppola",
        "Writer": "John Milius, Francis Ford Coppola, Michael Herr",
        "Actors": "Martin Sheen, Marlon Brando, Robert Duvall",
        "Plot": "A U.S. Army officer serving in Vietnam is tasked with assassinating a renegade Special Forces Colonel who sees himself as a god.",
        "Language": "English, French, Vietnamese",
        "Country": "United States",
        "Awards": "Won 2 Oscars. 21 wins & 33 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDdhODg0MjYtYzBiOS00ZmI5LWEwZGYtZDEyNDU4MmQyNzFkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.5/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "98%"
            },
            {
                "Source": "Metacritic",
                "Value": "94/100"
            }
        ],
        "Metascore": "94",
        "imdbRating": "8.5",
        "imdbVotes": "646,847",
        "imdbID": "tt0078788",
        "Type": "movie",
        "DVD": "18 May 2010",
        "BoxOffice": "$83,471,511",
        "id": 105
    },
    {
        "Title": "Indiana Jones and the Raiders of the Lost Ark",
        "Year": "1981",
        "Rated": "PG",
        "Released": "12 Jun 1981",
        "Runtime": "115 min",
        "Genre": "Action, Adventure",
        "Director": "Steven Spielberg",
        "Writer": "Lawrence Kasdan, George Lucas, Philip Kaufman",
        "Actors": "Harrison Ford, Karen Allen, Paul Freeman",
        "Plot": "In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before Adolf Hitler's Nazis can obtain its awesome powers.",
        "Language": "English, German, Hebrew, Spanish, Arabic, Nepali",
        "Country": "United States",
        "Awards": "Won 5 Oscars. 37 wins & 24 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "95%"
            },
            {
                "Source": "Metacritic",
                "Value": "85/100"
            }
        ],
        "Metascore": "85",
        "imdbRating": "8.4",
        "imdbVotes": "938,565",
        "imdbID": "tt0082971",
        "Type": "movie",
        "DVD": "13 May 2008",
        "BoxOffice": "$248,159,971",
        "id": 106
    },
    {
        "Title": "Django Unchained",
        "Year": "2012",
        "Rated": "R",
        "Released": "25 Dec 2012",
        "Runtime": "165 min",
        "Genre": "Drama, Western",
        "Director": "Quentin Tarantino",
        "Writer": "Quentin Tarantino",
        "Actors": "Jamie Foxx, Christoph Waltz, Leonardo DiCaprio",
        "Plot": "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi.",
        "Language": "English, German, French, Italian",
        "Country": "United States",
        "Awards": "Won 2 Oscars. 58 wins & 158 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "86%"
            },
            {
                "Source": "Metacritic",
                "Value": "81/100"
            }
        ],
        "Metascore": "81",
        "imdbRating": "8.4",
        "imdbVotes": "1,482,385",
        "imdbID": "tt1853728",
        "Type": "movie",
        "DVD": "16 Apr 2013",
        "BoxOffice": "$162,805,434",
        "id": 107
    },
    {
        "Title": "WALL·E",
        "Year": "2008",
        "Rated": "G",
        "Released": "27 Jun 2008",
        "Runtime": "98 min",
        "Genre": "Animation, Adventure, Family",
        "Director": "Andrew Stanton",
        "Writer": "Andrew Stanton, Pete Docter, Jim Reardon",
        "Actors": "Ben Burtt, Elissa Knight, Jeff Garlin",
        "Plot": "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
        "Language": "English, Hindi",
        "Country": "United States",
        "Awards": "Won 1 Oscar. 94 wins & 95 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "95%"
            },
            {
                "Source": "Metacritic",
                "Value": "95/100"
            }
        ],
        "Metascore": "95",
        "imdbRating": "8.4",
        "imdbVotes": "1,076,317",
        "imdbID": "tt0910970",
        "Type": "movie",
        "DVD": "18 Nov 2008",
        "BoxOffice": "$223,808,164",
        "id": 108
    },
    {
        "Title": "The Lives of Others",
        "Year": "2006",
        "Rated": "R",
        "Released": "30 Mar 2007",
        "Runtime": "137 min",
        "Genre": "Drama, Mystery, Thriller",
        "Director": "Florian Henckel von Donnersmarck",
        "Writer": "Florian Henckel von Donnersmarck",
        "Actors": "Ulrich Mühe, Martina Gedeck, Sebastian Koch",
        "Plot": "In 1984 East Berlin, an agent of the secret police, conducting surveillance on a writer and his lover, finds himself becoming increasingly absorbed by their lives.",
        "Language": "German",
        "Country": "Germany, France",
        "Awards": "Won 1 Oscar. 80 wins & 38 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTQyZGFjNWMtYWFiYy00OWU1LTlhMjAtYTBiNmU5NjJiNTAzXkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "92%"
            },
            {
                "Source": "Metacritic",
                "Value": "89/100"
            }
        ],
        "Metascore": "89",
        "imdbRating": "8.4",
        "imdbVotes": "381,488",
        "imdbID": "tt0405094",
        "Type": "movie",
        "DVD": "21 Aug 2007",
        "BoxOffice": "$11,286,112",
        "id": 109
    },
    {
        "Title": "Sunset Blvd.",
        "Year": "1950",
        "Rated": "Passed",
        "Released": "04 Aug 1950",
        "Runtime": "110 min",
        "Genre": "Drama, Film-Noir",
        "Director": "Billy Wilder",
        "Writer": "Charles Brackett, Billy Wilder, D.M. Marshman Jr.",
        "Actors": "William Holden, Gloria Swanson, Erich von Stroheim",
        "Plot": "A screenwriter develops a dangerous relationship with a faded film star determined to make a triumphant return.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 3 Oscars. 18 wins & 20 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTU0NTkyNzYwMF5BMl5BanBnXkFtZTgwMDU0NDk5MTI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "98%"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.4",
        "imdbVotes": "216,441",
        "imdbID": "tt0043014",
        "Type": "movie",
        "DVD": "11 Nov 2008",
        "BoxOffice": "$299,645",
        "id": 110
    },
    {
        "Title": "The Shining",
        "Year": "1980",
        "Rated": "R",
        "Released": "13 Jun 1980",
        "Runtime": "146 min",
        "Genre": "Drama, Horror",
        "Director": "Stanley Kubrick",
        "Writer": "Stephen King, Stanley Kubrick, Diane Johnson",
        "Actors": "Jack Nicholson, Shelley Duvall, Danny Lloyd",
        "Plot": "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
        "Language": "English",
        "Country": "United Kingdom, United States",
        "Awards": "4 wins & 8 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "85%"
            },
            {
                "Source": "Metacritic",
                "Value": "66/100"
            }
        ],
        "Metascore": "66",
        "imdbRating": "8.4",
        "imdbVotes": "975,614",
        "imdbID": "tt0081505",
        "Type": "movie",
        "DVD": "23 Oct 2007",
        "BoxOffice": "$45,634,352",
        "id": 111
    },
    {
        "Title": "Paths of Glory",
        "Year": "1957",
        "Rated": "Approved",
        "Released": "25 Dec 1957",
        "Runtime": "88 min",
        "Genre": "Drama, War",
        "Director": "Stanley Kubrick",
        "Writer": "Stanley Kubrick, Calder Willingham, Jim Thompson",
        "Actors": "Kirk Douglas, Ralph Meeker, Adolphe Menjou",
        "Plot": "After refusing to attack an enemy position, a general accuses the soldiers of cowardice and their commanding officer must defend them.",
        "Language": "English, German, Latin",
        "Country": "United States",
        "Awards": "Nominated for 1 BAFTA Film Award7 wins & 4 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjViMmRkOTEtM2ViOS00ODg0LWJhYWEtNTBlOGQxNDczOGY3XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "96%"
            },
            {
                "Source": "Metacritic",
                "Value": "90/100"
            }
        ],
        "Metascore": "90",
        "imdbRating": "8.4",
        "imdbVotes": "191,846",
        "imdbID": "tt0050825",
        "Type": "movie",
        "DVD": "01 May 2001",
        "BoxOffice": "N/A",
        "id": 112
    },
    {
        "Title": "The Great Dictator",
        "Year": "1940",
        "Rated": "G",
        "Released": "07 Mar 1941",
        "Runtime": "125 min",
        "Genre": "Comedy, Drama, War",
        "Director": "Charles Chaplin",
        "Writer": "Charles Chaplin",
        "Actors": "Charles Chaplin, Paulette Goddard, Jack Oakie",
        "Plot": "Dictator Adenoid Hynkel tries to expand his empire while a poor Jewish barber tries to avoid persecution from Hynkel's regime.",
        "Language": "English, Esperanto, Latin",
        "Country": "United States",
        "Awards": "Nominated for 5 Oscars. 6 wins & 6 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMmExYWJjNTktNGUyZS00ODhmLTkxYzAtNWIzOGEyMGNiMmUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "93%"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.4",
        "imdbVotes": "218,926",
        "imdbID": "tt0032553",
        "Type": "movie",
        "DVD": "24 May 2011",
        "BoxOffice": "N/A",
        "id": 113
    },
    {
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "Rated": "PG-13",
        "Released": "27 Apr 2018",
        "Runtime": "149 min",
        "Genre": "Action, Adventure, Sci-Fi",
        "Director": "Anthony Russo, Joe Russo",
        "Writer": "Christopher Markus, Stephen McFeely, Stan Lee",
        "Actors": "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo",
        "Plot": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Nominated for 1 Oscar. 46 wins & 79 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "85%"
            },
            {
                "Source": "Metacritic",
                "Value": "68/100"
            }
        ],
        "Metascore": "68",
        "imdbRating": "8.4",
        "imdbVotes": "995,851",
        "imdbID": "tt4154756",
        "Type": "movie",
        "DVD": "14 Aug 2018",
        "BoxOffice": "$678,815,482",
        "id": 114
    },
    {
        "Title": "Witness for the Prosecution",
        "Year": "1957",
        "Rated": "Approved",
        "Released": "06 Feb 1958",
        "Runtime": "116 min",
        "Genre": "Crime, Drama, Mystery",
        "Director": "Billy Wilder",
        "Writer": "Agatha Christie, Billy Wilder, Harry Kurnitz",
        "Actors": "Tyrone Power, Marlene Dietrich, Charles Laughton",
        "Plot": "A veteran British barrister must defend his client in a murder trial that has surprise after surprise.",
        "Language": "English, German",
        "Country": "United States",
        "Awards": "Nominated for 6 Oscars. 4 wins & 16 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDQwODU5OWYtNDcyNi00MDQ1LThiOGMtZDkwNWJiM2Y3MDg0XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.4",
        "imdbVotes": "121,212",
        "imdbID": "tt0051201",
        "Type": "movie",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "id": 115
    },
    {
        "Title": "Aliens",
        "Year": "1986",
        "Rated": "R",
        "Released": "18 Jul 1986",
        "Runtime": "137 min",
        "Genre": "Action, Adventure, Sci-Fi",
        "Director": "James Cameron",
        "Writer": "James Cameron, David Giler, Walter Hill",
        "Actors": "Sigourney Weaver, Michael Biehn, Carrie Henn",
        "Plot": "Fifty-seven years after surviving an apocalyptic attack aboard her space vessel by merciless space creatures, Officer Ripley awakens from hyper-sleep and tries to warn anyone who will listen about the predators.",
        "Language": "English",
        "Country": "United Kingdom, United States",
        "Awards": "Won 2 Oscars. 20 wins & 23 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZGU2OGY5ZTYtMWNhYy00NjZiLWI0NjUtZmNhY2JhNDRmODU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "97%"
            },
            {
                "Source": "Metacritic",
                "Value": "84/100"
            }
        ],
        "Metascore": "84",
        "imdbRating": "8.4",
        "imdbVotes": "695,705",
        "imdbID": "tt0090605",
        "Type": "movie",
        "DVD": "01 Jun 1999",
        "BoxOffice": "$85,160,248",
        "id": 116
    },
    {
        "Title": "American Beauty",
        "Year": "1999",
        "Rated": "R",
        "Released": "01 Oct 1999",
        "Runtime": "122 min",
        "Genre": "Drama",
        "Director": "Sam Mendes",
        "Writer": "Alan Ball",
        "Actors": "Kevin Spacey, Annette Bening, Thora Birch",
        "Plot": "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 5 Oscars. 111 wins & 102 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "87%"
            },
            {
                "Source": "Metacritic",
                "Value": "84/100"
            }
        ],
        "Metascore": "84",
        "imdbRating": "8.4",
        "imdbVotes": "1,127,102",
        "imdbID": "tt0169547",
        "Type": "movie",
        "DVD": "02 Jan 2002",
        "BoxOffice": "$130,096,601",
        "id": 117
    },
    {
        "Title": "The Dark Knight Rises",
        "Year": "2012",
        "Rated": "PG-13",
        "Released": "20 Jul 2012",
        "Runtime": "164 min",
        "Genre": "Action, Crime, Drama",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan, David S. Goyer",
        "Actors": "Christian Bale, Tom Hardy, Anne Hathaway",
        "Plot": "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
        "Language": "English, Arabic",
        "Country": "United States, United Kingdom",
        "Awards": "Nominated for 1 BAFTA Film Award39 wins & 103 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "87%"
            },
            {
                "Source": "Metacritic",
                "Value": "78/100"
            }
        ],
        "Metascore": "78",
        "imdbRating": "8.4",
        "imdbVotes": "1,631,596",
        "imdbID": "tt1345836",
        "Type": "movie",
        "DVD": "04 Dec 2012",
        "BoxOffice": "$448,149,584",
        "id": 118
    },
    {
        "Title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
        "Year": "1964",
        "Rated": "PG",
        "Released": "29 Jan 1964",
        "Runtime": "95 min",
        "Genre": "Comedy, War",
        "Director": "Stanley Kubrick",
        "Writer": "Stanley Kubrick, Terry Southern, Peter George",
        "Actors": "Peter Sellers, George C. Scott, Sterling Hayden",
        "Plot": "An insane American general orders a bombing attack on the Soviet Union, triggering a path to nuclear holocaust that a war room full of politicians and generals frantically tries to stop.",
        "Language": "English, Russian",
        "Country": "United Kingdom, United States",
        "Awards": "Nominated for 4 Oscars. 14 wins & 11 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "98%"
            },
            {
                "Source": "Metacritic",
                "Value": "97/100"
            }
        ],
        "Metascore": "97",
        "imdbRating": "8.4",
        "imdbVotes": "477,608",
        "imdbID": "tt0057012",
        "Type": "movie",
        "DVD": "21 Oct 2003",
        "BoxOffice": "$9,440,272",
        "id": 119
    },
    {
        "Title": "Spider-Man: Into the Spider-Verse",
        "Year": "2018",
        "Rated": "PG",
        "Released": "14 Dec 2018",
        "Runtime": "117 min",
        "Genre": "Animation, Action, Adventure",
        "Director": "Bob Persichetti, Peter Ramsey, Rodney Rothman",
        "Writer": "Phil Lord, Rodney Rothman",
        "Actors": "Shameik Moore, Jake Johnson, Hailee Steinfeld",
        "Plot": "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
        "Language": "English, Spanish",
        "Country": "United States",
        "Awards": "Won 1 Oscar. 82 wins & 57 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "97%"
            },
            {
                "Source": "Metacritic",
                "Value": "87/100"
            }
        ],
        "Metascore": "87",
        "imdbRating": "8.4",
        "imdbVotes": "480,522",
        "imdbID": "tt4633694",
        "Type": "movie",
        "DVD": "19 Mar 2019",
        "BoxOffice": "$190,241,310",
        "id": 120
    },
    {
        "Title": "Joker",
        "Year": "2019",
        "Rated": "R",
        "Released": "04 Oct 2019",
        "Runtime": "122 min",
        "Genre": "Crime, Drama, Thriller",
        "Director": "Todd Phillips",
        "Writer": "Todd Phillips, Scott Silver, Bob Kane",
        "Actors": "Joaquin Phoenix, Robert De Niro, Zazie Beetz",
        "Plot": "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
        "Language": "English",
        "Country": "United States, Canada",
        "Awards": "Won 2 Oscars. 122 wins & 239 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "68%"
            },
            {
                "Source": "Metacritic",
                "Value": "59/100"
            }
        ],
        "Metascore": "59",
        "imdbRating": "8.4",
        "imdbVotes": "1,160,925",
        "imdbID": "tt7286456",
        "Type": "movie",
        "DVD": "03 Oct 2019",
        "BoxOffice": "$335,477,657",
        "id": 121
    },
    {
        "Title": "Old Boy",
        "Year": "2003",
        "Rated": "R",
        "Released": "21 Nov 2003",
        "Runtime": "120 min",
        "Genre": "Action, Drama, Mystery",
        "Director": "Park Chan-wook",
        "Writer": "Garon Tsuchiya, Nobuaki Minegishi, Park Chan-wook",
        "Actors": "Choi Min-sik, Yoo Ji-Tae, Kang Hye-jeong",
        "Plot": "After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days.",
        "Language": "Korean",
        "Country": "South Korea",
        "Awards": "40 wins & 21 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "81%"
            },
            {
                "Source": "Metacritic",
                "Value": "77/100"
            }
        ],
        "Metascore": "77",
        "imdbRating": "8.4",
        "imdbVotes": "558,021",
        "imdbID": "tt0364569",
        "Type": "movie",
        "DVD": "07 Aug 2008",
        "BoxOffice": "$707,481",
        "id": 122
    },
    {
        "Title": "Braveheart",
        "Year": "1995",
        "Rated": "R",
        "Released": "24 May 1995",
        "Runtime": "178 min",
        "Genre": "Biography, Drama, History",
        "Director": "Mel Gibson",
        "Writer": "Randall Wallace",
        "Actors": "Mel Gibson, Sophie Marceau, Patrick McGoohan",
        "Plot": "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
        "Language": "English, French, Latin, Gaelic, Italian",
        "Country": "United States",
        "Awards": "Won 5 Oscars. 33 wins & 34 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "78%"
            },
            {
                "Source": "Metacritic",
                "Value": "68/100"
            }
        ],
        "Metascore": "68",
        "imdbRating": "8.4",
        "imdbVotes": "1,011,563",
        "imdbID": "tt0112573",
        "Type": "movie",
        "DVD": "19 Sep 2006",
        "BoxOffice": "$75,609,945",
        "id": 123
    },
    {
        "Title": "Toy Story",
        "Year": "1995",
        "Rated": "G",
        "Released": "22 Nov 1995",
        "Runtime": "81 min",
        "Genre": "Animation, Adventure, Comedy",
        "Director": "John Lasseter",
        "Writer": "John Lasseter, Pete Docter, Andrew Stanton",
        "Actors": "Tom Hanks, Tim Allen, Don Rickles",
        "Plot": "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 1 Oscar. 27 wins & 23 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "100%"
            },
            {
                "Source": "Metacritic",
                "Value": "95/100"
            }
        ],
        "Metascore": "95",
        "imdbRating": "8.3",
        "imdbVotes": "956,380",
        "imdbID": "tt0114709",
        "Type": "movie",
        "DVD": "23 Mar 2010",
        "BoxOffice": "$223,225,679",
        "id": 124
    },
    {
        "Title": "Amadeus",
        "Year": "1984",
        "Rated": "PG",
        "Released": "19 Sep 1984",
        "Runtime": "160 min",
        "Genre": "Biography, Drama, Music",
        "Director": "Milos Forman",
        "Writer": "Peter Shaffer, Zdenek Mahler",
        "Actors": "F. Murray Abraham, Tom Hulce, Elizabeth Berridge",
        "Plot": "The life, success and troubles of Wolfgang Amadeus Mozart, as told by Antonio Salieri, the contemporaneous composer who was insanely jealous of Mozart's talent and claimed to have murdered him.",
        "Language": "English, Italian, Latin, German",
        "Country": "United States, France",
        "Awards": "Won 8 Oscars. 43 wins & 15 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNWJlNzUzNGMtYTAwMS00ZjI2LWFmNWQtODcxNWUxODA5YmU1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "93%"
            },
            {
                "Source": "Metacritic",
                "Value": "88/100"
            }
        ],
        "Metascore": "88",
        "imdbRating": "8.4",
        "imdbVotes": "391,471",
        "imdbID": "tt0086879",
        "Type": "movie",
        "DVD": "24 Sep 2002",
        "BoxOffice": "$51,973,029",
        "id": 125
    },
    {
        "Title": "Coco",
        "Year": "2017",
        "Rated": "PG",
        "Released": "22 Nov 2017",
        "Runtime": "105 min",
        "Genre": "Animation, Adventure, Comedy",
        "Director": "Lee Unkrich, Adrian Molina",
        "Writer": "Lee Unkrich, Jason Katz, Matthew Aldrich",
        "Actors": "Anthony Gonzalez, Gael García Bernal, Benjamin Bratt",
        "Plot": "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
        "Language": "English, Spanish",
        "Country": "United States",
        "Awards": "Won 2 Oscars. 109 wins & 40 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "97%"
            },
            {
                "Source": "Metacritic",
                "Value": "81/100"
            }
        ],
        "Metascore": "81",
        "imdbRating": "8.4",
        "imdbVotes": "469,282",
        "imdbID": "tt2380307",
        "Type": "movie",
        "DVD": "13 Feb 2018",
        "BoxOffice": "$210,460,015",
        "id": 126
    },
    {
        "Title": "Spider-Man: No Way Home",
        "Year": "2021",
        "Rated": "PG-13",
        "Released": "17 Dec 2021",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "Jon Watts",
        "Writer": "Chris McKenna, Erik Sommers, Stan Lee",
        "Actors": "Tom Holland, Zendaya, Benedict Cumberbatch",
        "Plot": "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Nominated for 1 Oscar. 15 wins & 45 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.5/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "93%"
            },
            {
                "Source": "Metacritic",
                "Value": "71/100"
            }
        ],
        "Metascore": "71",
        "imdbRating": "8.5",
        "imdbVotes": "555,922",
        "imdbID": "tt10872600",
        "Type": "movie",
        "DVD": "N/A",
        "BoxOffice": "$800,588,139",
        "id": 127
    },
    {
        "Title": "Inglourious Basterds",
        "Year": "2009",
        "Rated": "R",
        "Released": "21 Aug 2009",
        "Runtime": "153 min",
        "Genre": "Adventure, Drama, War",
        "Director": "Quentin Tarantino",
        "Writer": "Quentin Tarantino",
        "Actors": "Brad Pitt, Diane Kruger, Eli Roth",
        "Plot": "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
        "Language": "English, German, French, Italian",
        "Country": "Germany, United States",
        "Awards": "Won 1 Oscar. 133 wins & 172 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "89%"
            },
            {
                "Source": "Metacritic",
                "Value": "69/100"
            }
        ],
        "Metascore": "69",
        "imdbRating": "8.3",
        "imdbVotes": "1,382,836",
        "imdbID": "tt0361748",
        "Type": "movie",
        "DVD": "15 Dec 2009",
        "BoxOffice": "$120,540,719",
        "id": 128
    },
    {
        "Title": "The Boat",
        "Year": "1981",
        "Rated": "R",
        "Released": "10 Feb 1982",
        "Runtime": "149 min",
        "Genre": "Drama, War",
        "Director": "Wolfgang Petersen",
        "Writer": "Wolfgang Petersen, Lothar G. Buchheim",
        "Actors": "Jürgen Prochnow, Herbert Grönemeyer, Klaus Wennemann",
        "Plot": "The claustrophobic world of a WWII German U-boat; boredom, filth and sheer terror.",
        "Language": "German",
        "Country": "West Germany",
        "Awards": "Nominated for 6 Oscars. 13 wins & 11 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOGZhZDIzNWMtNjkxMS00MDQ1LThkMTYtZWQzYWU3MWMxMGU5XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "98%"
            },
            {
                "Source": "Metacritic",
                "Value": "86/100"
            }
        ],
        "Metascore": "86",
        "imdbRating": "8.4",
        "imdbVotes": "245,669",
        "imdbID": "tt0082096",
        "Type": "movie",
        "DVD": "21 Oct 2003",
        "BoxOffice": "$11,487,676",
        "id": 129
    },
    {
        "Title": "Avengers: Endgame",
        "Year": "2019",
        "Rated": "PG-13",
        "Released": "26 Apr 2019",
        "Runtime": "181 min",
        "Genre": "Action, Adventure, Drama",
        "Director": "Anthony Russo, Joe Russo",
        "Writer": "Christopher Markus, Stephen McFeely, Stan Lee",
        "Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo",
        "Plot": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
        "Language": "English, Japanese, Xhosa, German",
        "Country": "United States",
        "Awards": "Nominated for 1 Oscar. 70 wins & 132 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "94%"
            },
            {
                "Source": "Metacritic",
                "Value": "78/100"
            }
        ],
        "Metascore": "78",
        "imdbRating": "8.4",
        "imdbVotes": "1,030,512",
        "imdbID": "tt4154796",
        "Type": "movie",
        "DVD": "30 Jul 2019",
        "BoxOffice": "$858,373,000",
        "id": 130
    },
    {
        "Title": "Princess Mononoke",
        "Year": "1997",
        "Rated": "PG-13",
        "Released": "19 Dec 1997",
        "Runtime": "134 min",
        "Genre": "Animation, Action, Adventure",
        "Director": "Hayao Miyazaki",
        "Writer": "Hayao Miyazaki, Neil Gaiman",
        "Actors": "Yôji Matsuda, Yuriko Ishida, Yûko Tanaka",
        "Plot": "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "14 wins & 7 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNGIzY2IzODQtNThmMi00ZDE4LWI5YzAtNzNlZTM1ZjYyYjUyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "93%"
            },
            {
                "Source": "Metacritic",
                "Value": "76/100"
            }
        ],
        "Metascore": "76",
        "imdbRating": "8.4",
        "imdbVotes": "377,972",
        "imdbID": "tt0119698",
        "Type": "movie",
        "DVD": "20 Jul 2000",
        "BoxOffice": "$4,845,631",
        "id": 131
    },
    {
        "Title": "Once Upon a Time in America",
        "Year": "1984",
        "Rated": "R",
        "Released": "01 Jun 1984",
        "Runtime": "229 min",
        "Genre": "Crime, Drama",
        "Director": "Sergio Leone",
        "Writer": "Harry Grey, Leonardo Benvenuti, Piero De Bernardi",
        "Actors": "Robert De Niro, James Woods, Elizabeth McGovern",
        "Plot": "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan 35 years later, where he must once again confront the ghosts and regrets of his old life.",
        "Language": "English, Italian, French, Yiddish, Hebrew",
        "Country": "Italy, United States",
        "Awards": "Won 2 BAFTA Film 12 wins & 12 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "87%"
            },
            {
                "Source": "Metacritic",
                "Value": "75/100"
            }
        ],
        "Metascore": "75",
        "imdbRating": "8.4",
        "imdbVotes": "340,403",
        "imdbID": "tt0087843",
        "Type": "movie",
        "DVD": "10 Jun 2003",
        "BoxOffice": "$5,321,508",
        "id": 132
    },
    {
        "Title": "Good Will Hunting",
        "Year": "1997",
        "Rated": "R",
        "Released": "09 Jan 1998",
        "Runtime": "126 min",
        "Genre": "Drama, Romance",
        "Director": "Gus Van Sant",
        "Writer": "Matt Damon, Ben Affleck",
        "Actors": "Robin Williams, Matt Damon, Ben Affleck",
        "Plot": "Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 2 Oscars. 24 wins & 61 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "98%"
            },
            {
                "Source": "Metacritic",
                "Value": "70/100"
            }
        ],
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "930,723",
        "imdbID": "tt0119217",
        "Type": "movie",
        "DVD": "08 Dec 1998",
        "BoxOffice": "$138,433,435",
        "id": 133
    },
    {
        "Title": "Toy Story 3",
        "Year": "2010",
        "Rated": "G",
        "Released": "18 Jun 2010",
        "Runtime": "103 min",
        "Genre": "Animation, Adventure, Comedy",
        "Director": "Lee Unkrich",
        "Writer": "John Lasseter, Andrew Stanton, Lee Unkrich",
        "Actors": "Tom Hanks, Tim Allen, Joan Cusack",
        "Plot": "The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college, and it's up to Woody to convince the other toys that they weren't abandoned and to return home.",
        "Language": "English, Spanish",
        "Country": "United States",
        "Awards": "Won 2 Oscars. 61 wins & 96 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "98%"
            },
            {
                "Source": "Metacritic",
                "Value": "92/100"
            }
        ],
        "Metascore": "92",
        "imdbRating": "8.3",
        "imdbVotes": "808,201",
        "imdbID": "tt0435761",
        "Type": "movie",
        "DVD": "02 Nov 2010",
        "BoxOffice": "$415,004,880",
        "id": 134
    },
    {
        "Title": "Requiem for a Dream",
        "Year": "2000",
        "Rated": "Unrated",
        "Released": "15 Dec 2000",
        "Runtime": "102 min",
        "Genre": "Drama",
        "Director": "Darren Aronofsky",
        "Writer": "Hubert Selby Jr., Darren Aronofsky",
        "Actors": "Ellen Burstyn, Jared Leto, Jennifer Connelly",
        "Plot": "The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Nominated for 1 Oscar. 37 wins & 70 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "79%"
            },
            {
                "Source": "Metacritic",
                "Value": "68/100"
            }
        ],
        "Metascore": "68",
        "imdbRating": "8.3",
        "imdbVotes": "815,870",
        "imdbID": "tt0180093",
        "Type": "movie",
        "DVD": "22 May 2001",
        "BoxOffice": "$3,635,482",
        "id": 135
    },
    {
        "Title": "3 Idiots",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "25 Dec 2009",
        "Runtime": "170 min",
        "Genre": "Comedy, Drama",
        "Director": "Rajkumar Hirani",
        "Writer": "Rajkumar Hirani, Abhijat Joshi, Vidhu Vinod Chopra",
        "Actors": "Aamir Khan, Madhavan, Mona Singh",
        "Plot": "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them \"idiots\".",
        "Language": "Hindi, English",
        "Country": "India",
        "Awards": "63 wins & 27 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.5/10"
            },
            {
                "Source": "Metacritic",
                "Value": "67/100"
            }
        ],
        "Metascore": "67",
        "imdbRating": "8.5",
        "imdbVotes": "382,526",
        "imdbID": "tt1187043",
        "Type": "movie",
        "DVD": "N/A",
        "BoxOffice": "$6,532,874",
        "id": 136
    },
    {
        "Title": "Your Name.",
        "Year": "2016",
        "Rated": "TV-PG",
        "Released": "07 Apr 2017",
        "Runtime": "106 min",
        "Genre": "Animation, Drama, Fantasy",
        "Director": "Makoto Shinkai",
        "Writer": "Makoto Shinkai, Clark Cheng",
        "Actors": "Ryûnosuke Kamiki, Mone Kamishiraishi, Ryô Narita",
        "Plot": "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "16 wins & 26 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "98%"
            },
            {
                "Source": "Metacritic",
                "Value": "79/100"
            }
        ],
        "Metascore": "79",
        "imdbRating": "8.4",
        "imdbVotes": "244,366",
        "imdbID": "tt5311514",
        "Type": "movie",
        "DVD": "31 Jan 2018",
        "BoxOffice": "$5,017,246",
        "id": 137
    },
    {
        "Title": "Singin' in the Rain",
        "Year": "1952",
        "Rated": "G",
        "Released": "11 Apr 1952",
        "Runtime": "103 min",
        "Genre": "Comedy, Musical, Romance",
        "Director": "Stanley Donen, Gene Kelly",
        "Writer": "Betty Comden, Adolph Green",
        "Actors": "Gene Kelly, Donald O'Connor, Debbie Reynolds",
        "Plot": "A silent film star falls for a chorus girl just as he and his delusionally jealous screen partner are trying to make the difficult transition to talking pictures in 1920s Hollywood.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Nominated for 2 Oscars. 7 wins & 9 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZDRjNGViMjQtOThlMi00MTA3LThkYzQtNzJkYjBkMGE0YzE1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "100%"
            },
            {
                "Source": "Metacritic",
                "Value": "99/100"
            }
        ],
        "Metascore": "99",
        "imdbRating": "8.3",
        "imdbVotes": "235,058",
        "imdbID": "tt0045152",
        "Type": "movie",
        "DVD": "24 Sep 2002",
        "BoxOffice": "$1,884,537",
        "id": 138
    },
    {
        "Title": "Star Wars: Episode VI - Return of the Jedi",
        "Year": "1983",
        "Rated": "PG",
        "Released": "25 May 1983",
        "Runtime": "131 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "Richard Marquand",
        "Writer": "Lawrence Kasdan, George Lucas",
        "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher",
        "Plot": "After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperor's tr",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 1 Oscar. 23 wins & 20 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "82%"
            },
            {
                "Source": "Metacritic",
                "Value": "58/100"
            }
        ],
        "Metascore": "58",
        "imdbRating": "8.3",
        "imdbVotes": "1,014,703",
        "imdbID": "tt0086190",
        "Type": "movie",
        "DVD": "21 Sep 2004",
        "BoxOffice": "$309,306,177",
        "id": 139
    },
    {
        "Title": "Reservoir Dogs",
        "Year": "1992",
        "Rated": "R",
        "Released": "02 Sep 1992",
        "Runtime": "99 min",
        "Genre": "Crime, Drama, Thriller",
        "Director": "Quentin Tarantino",
        "Writer": "Quentin Tarantino, Roger Avary",
        "Actors": "Harvey Keitel, Tim Roth, Michael Madsen",
        "Plot": "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
        "Language": "English",
        "Country": "United States",
        "Awards": "12 wins & 23 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "91%"
            },
            {
                "Source": "Metacritic",
                "Value": "79/100"
            }
        ],
        "Metascore": "79",
        "imdbRating": "8.3",
        "imdbVotes": "984,539",
        "imdbID": "tt0105236",
        "Type": "movie",
        "DVD": "18 Mar 2003",
        "BoxOffice": "$2,832,029",
        "id": 140
    },
    {
        "Title": "Eternal Sunshine of the Spotless Mind",
        "Year": "2004",
        "Rated": "R",
        "Released": "19 Mar 2004",
        "Runtime": "108 min",
        "Genre": "Drama, Romance, Sci-Fi",
        "Director": "Michel Gondry",
        "Writer": "Charlie Kaufman, Michel Gondry, Pierre Bismuth",
        "Actors": "Jim Carrey, Kate Winslet, Tom Wilkinson",
        "Plot": "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 1 Oscar. 73 wins & 111 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "92%"
            },
            {
                "Source": "Metacritic",
                "Value": "89/100"
            }
        ],
        "Metascore": "89",
        "imdbRating": "8.3",
        "imdbVotes": "972,641",
        "imdbID": "tt0338013",
        "Type": "movie",
        "DVD": "28 Sep 2004",
        "BoxOffice": "$34,400,301",
        "id": 141
    },
    {
        "Title": "2001: A Space Odyssey",
        "Year": "1968",
        "Rated": "G",
        "Released": "24 Jun 1970",
        "Runtime": "149 min",
        "Genre": "Adventure, Sci-Fi",
        "Director": "Stanley Kubrick",
        "Writer": "Stanley Kubrick, Arthur C. Clarke",
        "Actors": "Keir Dullea, Gary Lockwood, William Sylvester",
        "Plot": "The Monoliths push humanity to reach for the stars; after their discovery in Africa generations ago, the mysterious objects lead mankind on an awesome journey to Jupiter, with the help of H.A.L. 9000: the world's greatest supercomput",
        "Language": "English, Russian, French",
        "Country": "United Kingdom, United States",
        "Awards": "Won 1 Oscar. 16 wins & 12 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "92%"
            },
            {
                "Source": "Metacritic",
                "Value": "84/100"
            }
        ],
        "Metascore": "84",
        "imdbRating": "8.3",
        "imdbVotes": "647,441",
        "imdbID": "tt0062622",
        "Type": "movie",
        "DVD": "23 Oct 2007",
        "BoxOffice": "$60,481,243",
        "id": 142
    },
    {
        "Title": "High and Low",
        "Year": "1963",
        "Rated": "Not Rated",
        "Released": "26 Nov 1963",
        "Runtime": "143 min",
        "Genre": "Crime, Drama, Mystery",
        "Director": "Akira Kurosawa",
        "Writer": "Hideo Oguni, Ryûzô Kikushima, Eijirô Hisaita",
        "Actors": "Toshirô Mifune, Yutaka Sada, Tatsuya Nakadai",
        "Plot": "An executive of a Yokohama shoe company becomes a victim of extortion when his chauffeur's son is kidnapped by mistake and held for ransom.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "3 wins & 3 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTI4NTNhZDMtMWNkZi00MTRmLWJmZDQtMmJkMGVmZTEzODlhXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "95%"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.4",
        "imdbVotes": "42,095",
        "imdbID": "tt0057565",
        "Type": "movie",
        "DVD": "22 Jul 2008",
        "BoxOffice": "$46,808",
        "id": 143
    },
    {
        "Title": "Citizen Kane",
        "Year": "1941",
        "Rated": "PG",
        "Released": "05 Sep 1941",
        "Runtime": "119 min",
        "Genre": "Drama, Mystery",
        "Director": "Orson Welles",
        "Writer": "Herman J. Mankiewicz, Orson Welles, John Houseman",
        "Actors": "Orson Welles, Joseph Cotten, Dorothy Comingore",
        "Plot": "Following the death of publishing tycoon Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance; 'Rosebud'.",
        "Language": "English, Italian",
        "Country": "United States",
        "Awards": "Won 1 Oscar. 11 wins & 13 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "99%"
            },
            {
                "Source": "Metacritic",
                "Value": "100/100"
            }
        ],
        "Metascore": "100",
        "imdbRating": "8.3",
        "imdbVotes": "432,171",
        "imdbID": "tt0033467",
        "Type": "movie",
        "DVD": "23 Feb 2010",
        "BoxOffice": "$1,627,530",
        "id": 144
    },
    {
        "Title": "Lawrence of Arabia",
        "Year": "1962",
        "Rated": "Approved",
        "Released": "11 Dec 1962",
        "Runtime": "218 min",
        "Genre": "Adventure, Biography, Drama",
        "Director": "David Lean",
        "Writer": "Robert Bolt, Michael Wilson",
        "Actors": "Peter O'Toole, Alec Guinness, Anthony Quinn",
        "Plot": "The story of T.E. Lawrence, the English officer who successfully united and led the diverse, often warring, Arab tribes during World War I in order to fight the Turks.",
        "Language": "English, Arabic, Turkish",
        "Country": "United Kingdom",
        "Awards": "Won 7 Oscars. 31 wins & 15 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYWY5ZjhjNGYtZmI2Ny00ODM0LWFkNzgtZmI1YzA2N2MxMzA0XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "94%"
            },
            {
                "Source": "Metacritic",
                "Value": "100/100"
            }
        ],
        "Metascore": "100",
        "imdbRating": "8.3",
        "imdbVotes": "285,993",
        "imdbID": "tt0056172",
        "Type": "movie",
        "DVD": "03 Apr 2001",
        "BoxOffice": "$45,306,425",
        "id": 145
    },
    {
        "Title": "Capernaum",
        "Year": "2018",
        "Rated": "R",
        "Released": "20 Sep 2018",
        "Runtime": "126 min",
        "Genre": "Drama",
        "Director": "Nadine Labaki",
        "Writer": "Nadine Labaki, Jihad Hojeily, Michelle Keserwany",
        "Actors": "Zain Al Rafeea, Yordanos Shiferaw, Boluwatife Treasure Bankole",
        "Plot": "While serving a five-year sentence for a violent crime, a 12-year-old boy sues his parents for neglect.",
        "Language": "Arabic, Amharic",
        "Country": "Lebanon, France, Cyprus, Qatar, United Kingdom",
        "Awards": "Nominated for 1 Oscar. 35 wins & 53 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMmExNzU2ZWMtYzUwYi00YmM2LTkxZTQtNmVhNjY0NTMyMWI2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "90%"
            },
            {
                "Source": "Metacritic",
                "Value": "75/100"
            }
        ],
        "Metascore": "75",
        "imdbRating": "8.4",
        "imdbVotes": "82,927",
        "imdbID": "tt8267604",
        "Type": "movie",
        "DVD": "26 Mar 2019",
        "BoxOffice": "$1,661,096",
        "id": 146
    },
    {
        "Title": "M",
        "Year": "1931",
        "Rated": "Passed",
        "Released": "31 Aug 1931",
        "Runtime": "99 min",
        "Genre": "Crime, Mystery, Thriller",
        "Director": "Fritz Lang",
        "Writer": "Thea von Harbou, Fritz Lang, Egon Jacobsohn",
        "Actors": "Peter Lorre, Ellen Widmann, Inge Landgut",
        "Plot": "When the police in a German city are unable to catch a child-murderer, other criminals join in the manhunt.",
        "Language": "German",
        "Country": "Germany",
        "Awards": "2 wins",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODA4ODk3OTEzMF5BMl5BanBnXkFtZTgwMTQ2ODMwMzE@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.3",
        "imdbVotes": "154,488",
        "imdbID": "tt0022100",
        "Type": "movie",
        "DVD": "N/A",
        "BoxOffice": "$35,566",
        "id": 147
    },
    {
        "Title": "North by Northwest",
        "Year": "1959",
        "Rated": "Approved",
        "Released": "18 Dec 1959",
        "Runtime": "136 min",
        "Genre": "Adventure, Mystery, Thriller",
        "Director": "Alfred Hitchcock",
        "Writer": "Ernest Lehman",
        "Actors": "Cary Grant, Eva Marie Saint, James Mason",
        "Plot": "A New York City advertising executive goes on the run after being mistaken for a government agent by a group of foreign spies, and falls for a woman whose loyalties he begins to doubt.",
        "Language": "English, French",
        "Country": "United States",
        "Awards": "Nominated for 3 Oscars. 8 wins & 10 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZDA3NDExMTUtMDlhOC00MmQ5LWExZGUtYmI1NGVlZWI4OWNiXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "97%"
            },
            {
                "Source": "Metacritic",
                "Value": "98/100"
            }
        ],
        "Metascore": "98",
        "imdbRating": "8.3",
        "imdbVotes": "320,051",
        "imdbID": "tt0053125",
        "Type": "movie",
        "DVD": "03 Nov 2009",
        "BoxOffice": "$66,728",
        "id": 148
    },
    {
        "Title": "The Hunt",
        "Year": "2012",
        "Rated": "R",
        "Released": "10 Jan 2013",
        "Runtime": "115 min",
        "Genre": "Drama",
        "Director": "Thomas Vinterberg",
        "Writer": "Tobias Lindholm, Thomas Vinterberg",
        "Actors": "Mads Mikkelsen, Thomas Bo Larsen, Annika Wedderkopp",
        "Plot": "A teacher lives a lonely life, all the while struggling over his son's custody. His life slowly gets better as he finds love and receives good news from his son, but his new luck is about to be brutally shattered by an innocent littl",
        "Language": "Danish, English, Polish",
        "Country": "Denmark, Sweden",
        "Awards": "Nominated for 1 Oscar. 38 wins & 73 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "93%"
            },
            {
                "Source": "Metacritic",
                "Value": "77/100"
            }
        ],
        "Metascore": "77",
        "imdbRating": "8.3",
        "imdbVotes": "316,835",
        "imdbID": "tt2106476",
        "Type": "movie",
        "DVD": "12 Jul 2014",
        "BoxOffice": "$613,308",
        "id": 149
    },
    {
        "Title": "Vertigo",
        "Year": "1958",
        "Rated": "PG",
        "Released": "22 May 1958",
        "Runtime": "128 min",
        "Genre": "Mystery, Romance, Thriller",
        "Director": "Alfred Hitchcock",
        "Writer": "Alec Coppel, Samuel A. Taylor, Pierre Boileau",
        "Actors": "James Stewart, Kim Novak, Barbara Bel Geddes",
        "Plot": "A former San Francisco police detective juggles wrestling with his personal demons and becoming obsessed with the hauntingly beautiful woman he has been hired to trail, who may be deeply disturbed.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Nominated for 2 Oscars. 8 wins & 7 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "94%"
            },
            {
                "Source": "Metacritic",
                "Value": "100/100"
            }
        ],
        "Metascore": "100",
        "imdbRating": "8.3",
        "imdbVotes": "391,838",
        "imdbID": "tt0052357",
        "Type": "movie",
        "DVD": "25 Jan 2001",
        "BoxOffice": "$7,705,225",
        "id": 150
    },
    {
        "Title": "Amélie",
        "Year": "2001",
        "Rated": "R",
        "Released": "08 Feb 2002",
        "Runtime": "122 min",
        "Genre": "Comedy, Romance",
        "Director": "Jean-Pierre Jeunet",
        "Writer": "Guillaume Laurant, Jean-Pierre Jeunet",
        "Actors": "Audrey Tautou, Mathieu Kassovitz, Rufus",
        "Plot": "Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.",
        "Language": "French, Russian, English",
        "Country": "France, Germany",
        "Awards": "Nominated for 5 Oscars. 59 wins & 74 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDg4NjM1YjMtYmNhZC00MjM0LWFiZmYtNGY1YjA3MzZmODc5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "89%"
            },
            {
                "Source": "Metacritic",
                "Value": "69/100"
            }
        ],
        "Metascore": "69",
        "imdbRating": "8.3",
        "imdbVotes": "739,731",
        "imdbID": "tt0211915",
        "Type": "movie",
        "DVD": "16 Jul 2002",
        "BoxOffice": "$33,225,499",
        "id": 151
    },
    {
        "Title": "A Clockwork Orange",
        "Year": "1971",
        "Rated": "X",
        "Released": "02 Feb 1972",
        "Runtime": "136 min",
        "Genre": "Crime, Sci-Fi",
        "Director": "Stanley Kubrick",
        "Writer": "Stanley Kubrick, Anthony Burgess",
        "Actors": "Malcolm McDowell, Patrick Magee, Michael Bates",
        "Plot": "In the future, a sadistic gang leader is imprisoned and volunteers for a conduct-aversion experiment, but it doesn't go as planned.",
        "Language": "English",
        "Country": "United Kingdom, United States",
        "Awards": "Nominated for 4 Oscars. 12 wins & 24 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "87%"
            },
            {
                "Source": "Metacritic",
                "Value": "77/100"
            }
        ],
        "Metascore": "77",
        "imdbRating": "8.3",
        "imdbVotes": "805,089",
        "imdbID": "tt0066921",
        "Type": "movie",
        "DVD": "23 Oct 2007",
        "BoxOffice": "$26,617,553",
        "id": 152
    },
    {
        "Title": "Full Metal Jacket",
        "Year": "1987",
        "Rated": "R",
        "Released": "10 Jul 1987",
        "Runtime": "116 min",
        "Genre": "Drama, War",
        "Director": "Stanley Kubrick",
        "Writer": "Stanley Kubrick, Michael Herr, Gustav Hasford",
        "Actors": "Matthew Modine, R. Lee Ermey, Vincent D'Onofrio",
        "Plot": "A pragmatic U.S. Marine observes the dehumanizing effects the Vietnam War has on his fellow recruits from their brutal boot camp training to the bloody street fighting in Hue.",
        "Language": "English, Vietnamese",
        "Country": "United Kingdom, United States",
        "Awards": "Nominated for 1 Oscar. 8 wins & 15 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzkxODk0NjEtYjc4Mi00ZDI0LTgyYjEtYzc1NDkxY2YzYTgyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "91%"
            },
            {
                "Source": "Metacritic",
                "Value": "76/100"
            }
        ],
        "Metascore": "76",
        "imdbRating": "8.3",
        "imdbVotes": "719,680",
        "imdbID": "tt0093058",
        "Type": "movie",
        "DVD": "12 Jun 2001",
        "BoxOffice": "$46,357,676",
        "id": 153
    },
    {
        "Title": "Scarface",
        "Year": "1983",
        "Rated": "R",
        "Released": "09 Dec 1983",
        "Runtime": "170 min",
        "Genre": "Crime, Drama",
        "Director": "Brian De Palma",
        "Writer": "Oliver Stone, Howard Hawks, Ben Hecht",
        "Actors": "Al Pacino, Michelle Pfeiffer, Steven Bauer",
        "Plot": "In 1980 Miami, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.",
        "Language": "English, Spanish",
        "Country": "United States",
        "Awards": "8 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjdjNGQ4NDEtNTEwYS00MTgxLTliYzQtYzE2ZDRiZjFhZmNlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "81%"
            },
            {
                "Source": "Metacritic",
                "Value": "65/100"
            }
        ],
        "Metascore": "65",
        "imdbRating": "8.3",
        "imdbVotes": "803,344",
        "imdbID": "tt0086250",
        "Type": "movie",
        "DVD": "30 Sep 2003",
        "BoxOffice": "$45,408,703",
        "id": 154
    },
    {
        "Title": "Come and See",
        "Year": "1985",
        "Rated": "Not Rated",
        "Released": "03 Sep 1985",
        "Runtime": "142 min",
        "Genre": "Drama, Thriller, War",
        "Director": "Elem Klimov",
        "Writer": "Ales Adamovich, Elem Klimov",
        "Actors": "Aleksey Kravchenko, Olga Mironova, Liubomiras Laucevicius",
        "Plot": "After finding an old rifle, a young boy joins the Soviet resistance movement against ruthless German forces and experiences the horrors of World War II.",
        "Language": "Russian, Belarusian, German",
        "Country": "Soviet Union",
        "Awards": "3 wins",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODM4Njg0NTAtYjI5Ny00ZjAxLTkwNmItZTMxMWU5M2U3M2RjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "97%"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.4",
        "imdbVotes": "73,245",
        "imdbID": "tt0091251",
        "Type": "movie",
        "DVD": "22 Mar 2007",
        "BoxOffice": "$71,909",
        "id": 155
    },
    {
        "Title": "Double Indemnity",
        "Year": "1944",
        "Rated": "Passed",
        "Released": "06 Jul 1944",
        "Runtime": "107 min",
        "Genre": "Crime, Drama, Film-Noir",
        "Director": "Billy Wilder",
        "Writer": "Billy Wilder, Raymond Chandler, James M. Cain",
        "Actors": "Fred MacMurray, Barbara Stanwyck, Edward G. Robinson",
        "Plot": "A Los Angeles insurance representative lets an alluring housewife seduce him into a scheme of insurance fraud and murder that arouses the suspicion of his colleague, an insurance investigator.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Nominated for 7 Oscars. 2 wins & 9 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTdlNjgyZGUtOTczYi00MDdhLTljZmMtYTEwZmRiOWFkYjRhXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "97%"
            },
            {
                "Source": "Metacritic",
                "Value": "95/100"
            }
        ],
        "Metascore": "95",
        "imdbRating": "8.3",
        "imdbVotes": "153,321",
        "imdbID": "tt0036775",
        "Type": "movie",
        "DVD": "29 Aug 2006",
        "BoxOffice": "N/A",
        "id": 156
    },
    {
        "Title": "The Apartment",
        "Year": "1960",
        "Rated": "Approved",
        "Released": "29 Jun 1960",
        "Runtime": "125 min",
        "Genre": "Comedy, Drama, Romance",
        "Director": "Billy Wilder",
        "Writer": "Billy Wilder, I.A.L. Diamond",
        "Actors": "Jack Lemmon, Shirley MacLaine, Fred MacMurray",
        "Plot": "A Manhattan insurance clerk tries to rise in his company by letting its executives use his apartment for trysts, but complications and a romance of his own ensue.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 5 Oscars. 24 wins & 8 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzkwODFjNzItMmMwNi00MTU5LWE2MzktM2M4ZDczZGM1MmViXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "93%"
            },
            {
                "Source": "Metacritic",
                "Value": "94/100"
            }
        ],
        "Metascore": "94",
        "imdbRating": "8.3",
        "imdbVotes": "177,131",
        "imdbID": "tt0053604",
        "Type": "movie",
        "DVD": "04 Mar 2008",
        "BoxOffice": "$18,600,000",
        "id": 157
    },
    {
        "Title": "Taxi Driver",
        "Year": "1976",
        "Rated": "R",
        "Released": "09 Feb 1976",
        "Runtime": "114 min",
        "Genre": "Crime, Drama",
        "Director": "Martin Scorsese",
        "Writer": "Paul Schrader",
        "Actors": "Robert De Niro, Jodie Foster, Cybill Shepherd",
        "Plot": "A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action.",
        "Language": "English, Spanish",
        "Country": "United States",
        "Awards": "Nominated for 4 Oscars. 22 wins & 20 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "96%"
            },
            {
                "Source": "Metacritic",
                "Value": "94/100"
            }
        ],
        "Metascore": "94",
        "imdbRating": "8.2",
        "imdbVotes": "789,137",
        "imdbID": "tt0075314",
        "Type": "movie",
        "DVD": "14 Aug 2007",
        "BoxOffice": "$28,262,574",
        "id": 158
    },
    {
        "Title": "To Kill a Mockingbird",
        "Year": "1962",
        "Rated": "Approved",
        "Released": "16 Mar 1963",
        "Runtime": "129 min",
        "Genre": "Crime, Drama",
        "Director": "Robert Mulligan",
        "Writer": "Harper Lee, Horton Foote",
        "Actors": "Gregory Peck, John Megna, Frank Overton",
        "Plot": "Atticus Finch, a widowed lawyer in Depression-era Alabama, defends a black man against an undeserved rape charge, and his children against prejudice.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 3 Oscars. 14 wins & 16 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNmVmYzcwNzMtMWM1NS00MWIyLThlMDEtYzUwZDgzODE1NmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "93%"
            },
            {
                "Source": "Metacritic",
                "Value": "88/100"
            }
        ],
        "Metascore": "88",
        "imdbRating": "8.3",
        "imdbVotes": "309,885",
        "imdbID": "tt0056592",
        "Type": "movie",
        "DVD": "28 Apr 1998",
        "BoxOffice": "$592,237",
        "id": 159
    },
    {
        "Title": "The Sting",
        "Year": "1973",
        "Rated": "PG",
        "Released": "25 Dec 1973",
        "Runtime": "129 min",
        "Genre": "Comedy, Crime, Drama",
        "Director": "George Roy Hill",
        "Writer": "David S. Ward",
        "Actors": "Paul Newman, Robert Redford, Robert Shaw",
        "Plot": "Two grifters team up to pull off the ultimate con.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 7 Oscars. 18 wins & 6 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNGU3NjQ4YTMtZGJjOS00YTQ3LThmNmItMTI5MDE2ODI3NzY3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "94%"
            },
            {
                "Source": "Metacritic",
                "Value": "83/100"
            }
        ],
        "Metascore": "83",
        "imdbRating": "8.3",
        "imdbVotes": "255,692",
        "imdbID": "tt0070735",
        "Type": "movie",
        "DVD": "31 Mar 1998",
        "BoxOffice": "$156,000,000",
        "id": 160
    },
    {
        "Title": "Up",
        "Year": "2009",
        "Rated": "PG",
        "Released": "29 May 2009",
        "Runtime": "96 min",
        "Genre": "Animation, Adventure, Comedy",
        "Director": "Pete Docter, Bob Peterson",
        "Writer": "Pete Docter, Bob Peterson, Tom McCarthy",
        "Actors": "Edward Asner, Jordan Nagai, John Ratzenberger",
        "Plot": "78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 2 Oscars. 79 wins & 87 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "98%"
            },
            {
                "Source": "Metacritic",
                "Value": "88/100"
            }
        ],
        "Metascore": "88",
        "imdbRating": "8.2",
        "imdbVotes": "1,005,054",
        "imdbID": "tt1049413",
        "Type": "movie",
        "DVD": "10 Nov 2009",
        "BoxOffice": "$293,004,164",
        "id": 161
    },
    {
        "Title": "L.A. Confidential",
        "Year": "1997",
        "Rated": "R",
        "Released": "19 Sep 1997",
        "Runtime": "138 min",
        "Genre": "Crime, Drama, Mystery",
        "Director": "Curtis Hanson",
        "Writer": "James Ellroy, Brian Helgeland, Curtis Hanson",
        "Actors": "Kevin Spacey, Russell Crowe, Guy Pearce",
        "Plot": "As corruption grows in 1950s Los Angeles, three policemen - one strait-laced, one brutal, and one sleazy - investigate a series of murders with their own brand of justice.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 2 Oscars. 92 wins & 86 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDQ2YzEyZGItYWRhOS00MjBmLTkzMDUtMTdjYzkyMmQxZTJlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "99%"
            },
            {
                "Source": "Metacritic",
                "Value": "90/100"
            }
        ],
        "Metascore": "90",
        "imdbRating": "8.2",
        "imdbVotes": "568,238",
        "imdbID": "tt0119488",
        "Type": "movie",
        "DVD": "23 Sep 2008",
        "BoxOffice": "$64,616,940",
        "id": 162
    },
    {
        "Title": "Hamilton",
        "Year": "2020",
        "Rated": "PG-13",
        "Released": "03 Jul 2020",
        "Runtime": "160 min",
        "Genre": "Biography, Drama, History",
        "Director": "Thomas Kail",
        "Writer": "Lin-Manuel Miranda, Ron Chernow",
        "Actors": "Lin-Manuel Miranda, Phillipa Soo, Leslie Odom Jr.",
        "Plot": "The real life of one of America's foremost founding fathers and first Secretary of the Treasury, Alexander Hamilton. Captured live on Broadway from the Richard Rodgers Theater with the original Broadway cast.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 1 Primetime Emmy. 18 wins & 46 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjViNWRjYWEtZTI0NC00N2E3LTk0NGQtMjY4NTM3OGNkZjY0XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "98%"
            },
            {
                "Source": "Metacritic",
                "Value": "90/100"
            }
        ],
        "Metascore": "90",
        "imdbRating": "8.4",
        "imdbVotes": "84,926",
        "imdbID": "tt8503618",
        "Type": "movie",
        "DVD": "03 Jul 2020",
        "BoxOffice": "N/A",
        "id": 163
    },
    {
        "Title": "Heat",
        "Year": "1995",
        "Rated": "R",
        "Released": "15 Dec 1995",
        "Runtime": "170 min",
        "Genre": "Action, Crime, Drama",
        "Director": "Michael Mann",
        "Writer": "Michael Mann",
        "Actors": "Al Pacino, Robert De Niro, Val Kilmer",
        "Plot": "A group of high-end professional thieves start to feel the heat from the LAPD when they unknowingly leave a clue at their latest heist.",
        "Language": "English, Spanish",
        "Country": "United States",
        "Awards": "14 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNGMwNzUwNjYtZWM5NS00YzMyLWI4NjAtNjM0ZDBiMzE1YWExXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "87%"
            },
            {
                "Source": "Metacritic",
                "Value": "76/100"
            }
        ],
        "Metascore": "76",
        "imdbRating": "8.3",
        "imdbVotes": "629,391",
        "imdbID": "tt0113277",
        "Type": "movie",
        "DVD": "27 Jul 1999",
        "BoxOffice": "$67,436,818",
        "id": 164
    },
    {
        "Title": "Ikiru",
        "Year": "1952",
        "Rated": "Not Rated",
        "Released": "25 Mar 1956",
        "Runtime": "143 min",
        "Genre": "Drama",
        "Director": "Akira Kurosawa",
        "Writer": "Akira Kurosawa, Shinobu Hashimoto, Hideo Oguni",
        "Actors": "Takashi Shimura, Nobuo Kaneko, Shin'ichi Himori",
        "Plot": "A bureaucrat tries to find meaning in his life after he discovers he has terminal cancer.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "Nominated for 1 BAFTA Film Award5 wins & 2 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZTdkN2E5OTYtN2FiMi00YWUwLWEzMGMtZTMzNjY0NjgzYzFiXkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "98%"
            },
            {
                "Source": "Metacritic",
                "Value": "91/100"
            }
        ],
        "Metascore": "91",
        "imdbRating": "8.3",
        "imdbVotes": "76,069",
        "imdbID": "tt0044741",
        "Type": "movie",
        "DVD": "06 Jan 2004",
        "BoxOffice": "$60,239",
        "id": 165
    },
    {
        "Title": "Snatch",
        "Year": "2000",
        "Rated": "R",
        "Released": "19 Jan 2001",
        "Runtime": "102 min",
        "Genre": "Comedy, Crime",
        "Director": "Guy Ritchie",
        "Writer": "Guy Ritchie",
        "Actors": "Jason Statham, Brad Pitt, Stephen Graham",
        "Plot": "Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.",
        "Language": "English, Russian",
        "Country": "United Kingdom, United States",
        "Awards": "4 wins & 7 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "74%"
            },
            {
                "Source": "Metacritic",
                "Value": "55/100"
            }
        ],
        "Metascore": "55",
        "imdbRating": "8.3",
        "imdbVotes": "832,177",
        "imdbID": "tt0208092",
        "Type": "movie",
        "DVD": "06 May 2003",
        "BoxOffice": "$30,328,156",
        "id": 166
    },
    {
        "Title": "Die Hard",
        "Year": "1988",
        "Rated": "R",
        "Released": "20 Jul 1988",
        "Runtime": "132 min",
        "Genre": "Action, Thriller",
        "Director": "John McTiernan",
        "Writer": "Roderick Thorp, Jeb Stuart, Steven E. de Souza",
        "Actors": "Bruce Willis, Alan Rickman, Bonnie Bedelia",
        "Plot": "An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.",
        "Language": "English, German, Italian, Japanese",
        "Country": "United States",
        "Awards": "Nominated for 4 Oscars. 8 wins & 6 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "94%"
            },
            {
                "Source": "Metacritic",
                "Value": "72/100"
            }
        ],
        "Metascore": "72",
        "imdbRating": "8.3",
        "imdbVotes": "852,623",
        "imdbID": "tt0095016",
        "Type": "movie",
        "DVD": "28 Dec 1999",
        "BoxOffice": "$83,844,093",
        "id": 167
    },
    {
        "Title": "Indiana Jones and the Last Crusade",
        "Year": "1989",
        "Rated": "PG-13",
        "Released": "24 May 1989",
        "Runtime": "127 min",
        "Genre": "Action, Adventure",
        "Director": "Steven Spielberg",
        "Writer": "Jeffrey Boam, George Lucas, Menno Meyjes",
        "Actors": "Harrison Ford, Sean Connery, Alison Doody",
        "Plot": "In 1938, after his father Professor Henry Jones, Sr. goes missing while pursuing the Holy Grail, Professor Henry \"Indiana\" Jones, Jr. finds himself up against Adolf Hitler's Nazis again to stop them from obtaining its powers.",
        "Language": "English, German, Greek, Arabic",
        "Country": "United States",
        "Awards": "Won 1 Oscar. 8 wins & 22 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjNkMzc2N2QtNjVlNS00ZTk5LTg0MTgtODY2MDAwNTMwZjBjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "88%"
            },
            {
                "Source": "Metacritic",
                "Value": "65/100"
            }
        ],
        "Metascore": "65",
        "imdbRating": "8.3",
        "imdbVotes": "734,249",
        "imdbID": "tt0097576",
        "Type": "movie",
        "DVD": "13 May 2008",
        "BoxOffice": "$197,171,806",
        "id": 168
    },
    {
        "Title": "A Separation",
        "Year": "2011",
        "Rated": "PG-13",
        "Released": "16 Mar 2011",
        "Runtime": "123 min",
        "Genre": "Drama",
        "Director": "Asghar Farhadi",
        "Writer": "Asghar Farhadi",
        "Actors": "Payman Maadi, Leila Hatami, Sareh Bayat",
        "Plot": "A married couple are faced with a difficult decision - to improve the life of their child by moving to another country or to stay in Iran and look after a deteriorating parent who has Alzheimer's disease.",
        "Language": "Persian",
        "Country": "Iran, France, Australia",
        "Awards": "Won 1 Oscar. 89 wins & 50 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BN2JmMjViMjMtZTM5Mi00ZGZkLTk5YzctZDg5MjFjZDE4NjNkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "99%"
            },
            {
                "Source": "Metacritic",
                "Value": "95/100"
            }
        ],
        "Metascore": "95",
        "imdbRating": "8.3",
        "imdbVotes": "239,750",
        "imdbID": "tt1832382",
        "Type": "movie",
        "DVD": "21 Aug 2012",
        "BoxOffice": "$7,099,055",
        "id": 169
    },
    {
        "Title": "Metropolis",
        "Year": "1927",
        "Rated": "Not Rated",
        "Released": "13 Mar 1927",
        "Runtime": "153 min",
        "Genre": "Drama, Sci-Fi",
        "Director": "Fritz Lang",
        "Writer": "Thea von Harbou, Fritz Lang",
        "Actors": "Brigitte Helm, Alfred Abel, Gustav Fröhlich",
        "Plot": "In a futuristic city sharply divided between the working class and the city planners, the son of the city's mastermind falls in love with a working-class prophet who predicts the coming of a savior to mediate their differences.",
        "Language": "German, English",
        "Country": "Germany",
        "Awards": "6 wins & 7 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTg5YWIyMWUtZDY5My00Zjc1LTljOTctYmI0MWRmY2M2NmRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "97%"
            },
            {
                "Source": "Metacritic",
                "Value": "98/100"
            }
        ],
        "Metascore": "98",
        "imdbRating": "8.3",
        "imdbVotes": "170,498",
        "imdbID": "tt0017136",
        "Type": "movie",
        "DVD": "22 Mar 2007",
        "BoxOffice": "$1,236,166",
        "id": 170
    },
    {
        "Title": "Bicycle Thieves",
        "Year": "1948",
        "Rated": "Not Rated",
        "Released": "13 Dec 1949",
        "Runtime": "89 min",
        "Genre": "Drama",
        "Director": "Vittorio De Sica",
        "Writer": "Cesare Zavattini, Luigi Bartolini, Oreste Biancoli",
        "Actors": "Lamberto Maggiorani, Enzo Staiola, Lianella Carell",
        "Plot": "In post-war Italy, a working-class man's bicycle is stolen, endangering his efforts to find work. He and his son set out to find it.",
        "Language": "Italian, English, German",
        "Country": "Italy",
        "Awards": "Won 1 Oscar. 20 wins & 3 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNmI1ODdjODctMDlmMC00ZWViLWI5MzYtYzRhNDdjYmM3MzFjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "99%"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.3",
        "imdbVotes": "159,912",
        "imdbID": "tt0040522",
        "Type": "movie",
        "DVD": "12 Aug 2003",
        "BoxOffice": "$371,111",
        "id": 171
    },
    {
        "Title": "Incendies",
        "Year": "2010",
        "Rated": "R",
        "Released": "12 Jan 2011",
        "Runtime": "131 min",
        "Genre": "Drama, Mystery, War",
        "Director": "Denis Villeneuve",
        "Writer": "Denis Villeneuve, Wajdi Mouawad, Valérie Beaugrand-Champagne",
        "Actors": "Lubna Azabal, Mélissa Désormeaux-Poulin, Maxim Gaudette",
        "Plot": "Twins journey to the Middle East to discover their family history and fulfill their mother's last wishes.",
        "Language": "French, Arabic, English",
        "Country": "Canada, France",
        "Awards": "Nominated for 1 Oscar. 40 wins & 18 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMWE3MGYzZjktY2Q5Mi00Y2NiLWIyYWUtMmIyNzA3YmZlMGFhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "92%"
            },
            {
                "Source": "Metacritic",
                "Value": "80/100"
            }
        ],
        "Metascore": "80",
        "imdbRating": "8.3",
        "imdbVotes": "170,523",
        "imdbID": "tt1255953",
        "Type": "movie",
        "DVD": "15 Mar 2011",
        "BoxOffice": "$2,071,334",
        "id": 172
    },
    {
        "Title": "1917",
        "Year": "2019",
        "Rated": "R",
        "Released": "10 Jan 2020",
        "Runtime": "119 min",
        "Genre": "Action, Drama, War",
        "Director": "Sam Mendes",
        "Writer": "Sam Mendes, Krysty Wilson-Cairns",
        "Actors": "Dean-Charles Chapman, George MacKay, Daniel Mays",
        "Plot": "April 6th, 1917. As an infantry battalion assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.",
        "Language": "English, French, German",
        "Country": "United Kingdom, United States, India, Spain",
        "Awards": "Won 3 Oscars. 134 wins & 206 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "88%"
            },
            {
                "Source": "Metacritic",
                "Value": "78/100"
            }
        ],
        "Metascore": "78",
        "imdbRating": "8.3",
        "imdbVotes": "540,419",
        "imdbID": "tt8579674",
        "Type": "movie",
        "DVD": "25 Dec 2019",
        "BoxOffice": "$159,227,644",
        "id": 173
    },
    {
        "Title": "Like Stars on Earth",
        "Year": "2007",
        "Rated": "PG",
        "Released": "21 Dec 2007",
        "Runtime": "165 min",
        "Genre": "Drama, Family",
        "Director": "Aamir Khan, Amole Gupte",
        "Writer": "Amole Gupte",
        "Actors": "Darsheel Safary, Aamir Khan, Tisca Chopra",
        "Plot": "An eight-year-old boy is thought to be a lazy trouble-maker, until the new art teacher has the patience and compassion to discover the real problem behind his struggles in school.",
        "Language": "Hindi",
        "Country": "India",
        "Awards": "23 wins & 14 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDhjZWViN2MtNzgxOS00NmI4LThiZDQtZDI3MzM4MDE4NTc0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "92%"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.4",
        "imdbVotes": "186,810",
        "imdbID": "tt0986264",
        "Type": "movie",
        "DVD": "12 Jan 2010",
        "BoxOffice": "$1,223,869",
        "id": 174
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Crime, Drama",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane, David S. Goyer, Christopher Nolan",
        "Actors": "Christian Bale, Michael Caine, Ken Watanabe",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
        "Language": "English, Mandarin",
        "Country": "United States, United Kingdom",
        "Awards": "Nominated for 1 Oscar. 13 wins & 79 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "84%"
            },
            {
                "Source": "Metacritic",
                "Value": "70/100"
            }
        ],
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "1,407,083",
        "imdbID": "tt0372784",
        "Type": "movie",
        "DVD": "18 Oct 2005",
        "BoxOffice": "$206,863,479",
        "id": 175
    },
    {
        "Title": "For a Few Dollars More",
        "Year": "1965",
        "Rated": "R",
        "Released": "10 May 1967",
        "Runtime": "132 min",
        "Genre": "Western",
        "Director": "Sergio Leone",
        "Writer": "Sergio Leone, Fulvio Morsella, Luciano Vincenzoni",
        "Actors": "Clint Eastwood, Lee Van Cleef, Gian Maria Volontè",
        "Plot": "Two bounty hunters with the same intentions team up to track down an escaped Mexican outlaw.",
        "Language": "Italian, English",
        "Country": "Italy, Spain, West Germany",
        "Awards": "2 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNWM1NmYyM2ItMTFhNy00NDU0LThlYWUtYjQyYTJmOTY0ZmM0XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "91%"
            },
            {
                "Source": "Metacritic",
                "Value": "74/100"
            }
        ],
        "Metascore": "74",
        "imdbRating": "8.3",
        "imdbVotes": "249,702",
        "imdbID": "tt0059578",
        "Type": "movie",
        "DVD": "01 Aug 2006",
        "BoxOffice": "$15,000,000",
        "id": 176
    },
    {
        "Title": "Dangal",
        "Year": "2016",
        "Rated": "Not Rated",
        "Released": "21 Dec 2016",
        "Runtime": "161 min",
        "Genre": "Action, Biography, Drama",
        "Director": "Nitesh Tiwari",
        "Writer": "Piyush Gupta, Shreyas Jain, Nikhil Mehrotra",
        "Actors": "Aamir Khan, Sakshi Tanwar, Fatima Sana Shaikh",
        "Plot": "Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression.",
        "Language": "Hindi, English",
        "Country": "India, United States",
        "Awards": "29 wins & 16 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "88%"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.4",
        "imdbVotes": "180,533",
        "imdbID": "tt5074352",
        "Type": "movie",
        "DVD": "22 Jun 2017",
        "BoxOffice": "$12,391,761",
        "id": 177
    },
    {
        "Title": "Downfall",
        "Year": "2004",
        "Rated": "R",
        "Released": "08 Apr 2005",
        "Runtime": "156 min",
        "Genre": "Biography, Drama, History",
        "Director": "Oliver Hirschbiegel",
        "Writer": "Bernd Eichinger, Joachim Fest, Traudl Junge",
        "Actors": "Bruno Ganz, Alexandra Maria Lara, Ulrich Matthes",
        "Plot": "Traudl Junge, the final secretary for Adolf Hitler, tells of the Nazi dictator's final days in his Berlin bunker at the end of WWII.",
        "Language": "German, Russian, French, English",
        "Country": "Germany, Austria, Italy",
        "Awards": "Nominated for 1 Oscar. 22 wins & 34 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTU0NTU5NTAyMl5BMl5BanBnXkFtZTYwNzYwMDg2._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "90%"
            },
            {
                "Source": "Metacritic",
                "Value": "82/100"
            }
        ],
        "Metascore": "82",
        "imdbRating": "8.2",
        "imdbVotes": "348,764",
        "imdbID": "tt0363163",
        "Type": "movie",
        "DVD": "02 Aug 2005",
        "BoxOffice": "$5,509,040",
        "id": 178
    },
    {
        "Title": "The Kid",
        "Year": "1921",
        "Rated": "Passed",
        "Released": "06 Feb 1921",
        "Runtime": "68 min",
        "Genre": "Comedy, Drama, Family",
        "Director": "Charles Chaplin",
        "Writer": "Charles Chaplin",
        "Actors": "Charles Chaplin, Edna Purviance, Jackie Coogan",
        "Plot": "The Tramp cares for an abandoned child, but events put that relationship in jeopardy.",
        "Language": "English",
        "Country": "United States",
        "Awards": "2 wins",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjhhMThhNDItNTY2MC00MmU1LTliNDEtNDdhZjdlNTY5ZDQ1XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "100%"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.3",
        "imdbVotes": "123,829",
        "imdbID": "tt0012349",
        "Type": "movie",
        "DVD": "01 May 2005",
        "BoxOffice": "N/A",
        "id": 179
    },
    {
        "Title": "Some Like It Hot",
        "Year": "1959",
        "Rated": "Passed",
        "Released": "19 Mar 1959",
        "Runtime": "121 min",
        "Genre": "Comedy, Music, Romance",
        "Director": "Billy Wilder",
        "Writer": "Billy Wilder, I.A.L. Diamond, Robert Thoeren",
        "Actors": "Marilyn Monroe, Tony Curtis, Jack Lemmon",
        "Plot": "After two male musicians witness a mob hit, they flee the state in an all-female band disguised as women, but further complications set in.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 1 Oscar. 15 wins & 15 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzAyOGIxYjAtMGY2NC00ZTgyLWIwMWEtYzY0OWQ4NDFjOTc5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "94%"
            },
            {
                "Source": "Metacritic",
                "Value": "98/100"
            }
        ],
        "Metascore": "98",
        "imdbRating": "8.2",
        "imdbVotes": "260,808",
        "imdbID": "tt0053291",
        "Type": "movie",
        "DVD": "18 Jul 2006",
        "BoxOffice": "N/A",
        "id": 180
    },
    {
        "Title": "The Batman",
        "Year": "2022",
        "Rated": "PG-13",
        "Released": "04 Mar 2022",
        "Runtime": "176 min",
        "Genre": "Action, Crime, Drama",
        "Director": "Matt Reeves",
        "Writer": "Matt Reeves, Peter Craig, Bill Finger",
        "Actors": "Robert Pattinson, Zoë Kravitz, Jeffrey Wright",
        "Plot": "When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
        "Language": "English",
        "Country": "United States",
        "Awards": "3 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "85%"
            },
            {
                "Source": "Metacritic",
                "Value": "72/100"
            }
        ],
        "Metascore": "72",
        "imdbRating": "8.4",
        "imdbVotes": "224,141",
        "imdbID": "tt1877830",
        "Type": "movie",
        "DVD": "19 Apr 2022",
        "BoxOffice": "$239,032,047",
        "id": 181
    },
    {
        "Title": "The Father",
        "Year": "2020",
        "Rated": "PG-13",
        "Released": "26 Feb 2021",
        "Runtime": "97 min",
        "Genre": "Drama, Mystery",
        "Director": "Florian Zeller",
        "Writer": "Christopher Hampton, Florian Zeller",
        "Actors": "Anthony Hopkins, Olivia Colman, Mark Gatiss",
        "Plot": "A man refuses all assistance from his daughter as he ages. As he tries to make sense of his changing circumstances, he begins to doubt his loved ones, his own mind and even the fabric of his reality.",
        "Language": "English",
        "Country": "United Kingdom, France, United States",
        "Awards": "Won 2 Oscars. 34 wins & 157 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZGJhNWRiOWQtMjI4OS00ZjcxLTgwMTAtMzQ2ODkxY2JkOTVlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "98%"
            },
            {
                "Source": "Metacritic",
                "Value": "88/100"
            }
        ],
        "Metascore": "88",
        "imdbRating": "8.3",
        "imdbVotes": "129,963",
        "imdbID": "tt10272386",
        "Type": "movie",
        "DVD": "25 Mar 2021",
        "BoxOffice": "$2,122,771",
        "id": 182
    },
    {
        "Title": "All About Eve",
        "Year": "1950",
        "Rated": "Passed",
        "Released": "27 Oct 1950",
        "Runtime": "138 min",
        "Genre": "Drama",
        "Director": "Joseph L. Mankiewicz",
        "Writer": "Joseph L. Mankiewicz, Mary Orr",
        "Actors": "Bette Davis, Anne Baxter, George Sanders",
        "Plot": "A seemingly timid but secretly ruthless ingénue insinuates herself into the lives of an aging Broadway star and her circle of theater friends.",
        "Language": "English, French",
        "Country": "United States",
        "Awards": "Won 6 Oscars. 26 wins & 20 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTY2MTAzODI5NV5BMl5BanBnXkFtZTgwMjM4NzQ0MjE@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "99%"
            },
            {
                "Source": "Metacritic",
                "Value": "98/100"
            }
        ],
        "Metascore": "98",
        "imdbRating": "8.3",
        "imdbVotes": "128,939",
        "imdbID": "tt0042192",
        "Type": "movie",
        "DVD": "05 Feb 2004",
        "BoxOffice": "$63,463",
        "id": 183
    },
    {
        "Title": "The Wolf of Wall Street",
        "Year": "2013",
        "Rated": "R",
        "Released": "25 Dec 2013",
        "Runtime": "180 min",
        "Genre": "Biography, Comedy, Crime",
        "Director": "Martin Scorsese",
        "Writer": "Terence Winter, Jordan Belfort",
        "Actors": "Leonardo DiCaprio, Jonah Hill, Margot Robbie",
        "Plot": "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
        "Language": "English, French",
        "Country": "United States",
        "Awards": "Nominated for 5 Oscars. 37 wins & 179 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "79%"
            },
            {
                "Source": "Metacritic",
                "Value": "75/100"
            }
        ],
        "Metascore": "75",
        "imdbRating": "8.2",
        "imdbVotes": "1,327,178",
        "imdbID": "tt0993846",
        "Type": "movie",
        "DVD": "25 Mar 2014",
        "BoxOffice": "$116,900,694",
        "id": 184
    },
    {
        "Title": "Green Book",
        "Year": "2018",
        "Rated": "PG-13",
        "Released": "16 Nov 2018",
        "Runtime": "130 min",
        "Genre": "Biography, Comedy, Drama",
        "Director": "Peter Farrelly",
        "Writer": "Nick Vallelonga, Brian Hayes Currie, Peter Farrelly",
        "Actors": "Viggo Mortensen, Mahershala Ali, Linda Cardellini",
        "Plot": "A working-class Italian-American bouncer becomes the driver of an African-American classical pianist on a tour of venues through the 1960s American South.",
        "Language": "English, Italian, Russian, German",
        "Country": "United States, China",
        "Awards": "Won 3 Oscars. 59 wins & 124 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "77%"
            },
            {
                "Source": "Metacritic",
                "Value": "69/100"
            }
        ],
        "Metascore": "69",
        "imdbRating": "8.2",
        "imdbVotes": "456,971",
        "imdbID": "tt6966692",
        "Type": "movie",
        "DVD": "12 Mar 2019",
        "BoxOffice": "$85,080,171",
        "id": 185
    },
    {
        "Title": "Unforgiven",
        "Year": "1992",
        "Rated": "R",
        "Released": "07 Aug 1992",
        "Runtime": "130 min",
        "Genre": "Drama, Western",
        "Director": "Clint Eastwood",
        "Writer": "David Webb Peoples",
        "Actors": "Clint Eastwood, Gene Hackman, Morgan Freeman",
        "Plot": "Retired Old West gunslinger William Munny reluctantly takes on one last job, with the help of his old partner Ned Logan and a young man, The \"Schofield Kid.\"",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 4 Oscars. 50 wins & 47 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODM3YWY4NmQtN2Y3Ni00OTg0LWFhZGQtZWE3ZWY4MTJlOWU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "96%"
            },
            {
                "Source": "Metacritic",
                "Value": "85/100"
            }
        ],
        "Metascore": "85",
        "imdbRating": "8.2",
        "imdbVotes": "401,166",
        "imdbID": "tt0105695",
        "Type": "movie",
        "DVD": "30 Oct 2001",
        "BoxOffice": "$101,167,799",
        "id": 186
    },
    {
        "Title": "Casino",
        "Year": "1995",
        "Rated": "R",
        "Released": "22 Nov 1995",
        "Runtime": "178 min",
        "Genre": "Crime, Drama",
        "Director": "Martin Scorsese",
        "Writer": "Nicholas Pileggi, Martin Scorsese",
        "Actors": "Robert De Niro, Sharon Stone, Joe Pesci",
        "Plot": "A tale of greed, deception, money, power, and murder occur between two best friends: a mafia enforcer and a casino executive compete against each other over a gambling empire, and over a fast-living and fast-loving socialite.",
        "Language": "English",
        "Country": "United States, France",
        "Awards": "Nominated for 1 Oscar. 4 wins & 11 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTcxOWYzNDYtYmM4YS00N2NkLTk0NTAtNjg1ODgwZjAxYzI3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "78%"
            },
            {
                "Source": "Metacritic",
                "Value": "73/100"
            }
        ],
        "Metascore": "73",
        "imdbRating": "8.2",
        "imdbVotes": "502,726",
        "imdbID": "tt0112641",
        "Type": "movie",
        "DVD": "26 Feb 2002",
        "BoxOffice": "$42,512,375",
        "id": 187
    },
    {
        "Title": "Judgment at Nuremberg",
        "Year": "1961",
        "Rated": "Approved",
        "Released": "18 Dec 1961",
        "Runtime": "179 min",
        "Genre": "Drama, War",
        "Director": "Stanley Kramer",
        "Writer": "Abby Mann, Montgomery Clift",
        "Actors": "Spencer Tracy, Burt Lancaster, Richard Widmark",
        "Plot": "In 1948, an American court in occupied Germany tries four Nazis judged for war crimes.",
        "Language": "English, German",
        "Country": "United States",
        "Awards": "Won 2 Oscars. 16 wins & 25 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDc2ODQ5NTE2MV5BMl5BanBnXkFtZTcwODExMjUyNA@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "92%"
            },
            {
                "Source": "Metacritic",
                "Value": "60/100"
            }
        ],
        "Metascore": "60",
        "imdbRating": "8.3",
        "imdbVotes": "75,697",
        "imdbID": "tt0055031",
        "Type": "movie",
        "DVD": "14 Sep 2004",
        "BoxOffice": "N/A",
        "id": 188
    },
    {
        "Title": "Pan's Labyrinth",
        "Year": "2006",
        "Rated": "R",
        "Released": "19 Jan 2007",
        "Runtime": "118 min",
        "Genre": "Drama, Fantasy, War",
        "Director": "Guillermo del Toro",
        "Writer": "Guillermo del Toro",
        "Actors": "Ivana Baquero, Ariadna Gil, Sergi López",
        "Plot": "In the Falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.",
        "Language": "Spanish",
        "Country": "Mexico, Spain",
        "Awards": "Won 3 Oscars. 110 wins & 115 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYzFjMThiMGItOWRlMC00MDI4LThmOGUtYTNlZGZiYWI1YjMyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "95%"
            },
            {
                "Source": "Metacritic",
                "Value": "98/100"
            }
        ],
        "Metascore": "98",
        "imdbRating": "8.2",
        "imdbVotes": "652,127",
        "imdbID": "tt0457430",
        "Type": "movie",
        "DVD": "15 May 2007",
        "BoxOffice": "$37,646,380",
        "id": 189
    },
    {
        "Title": "Ran",
        "Year": "1985",
        "Rated": "R",
        "Released": "01 Jun 1985",
        "Runtime": "162 min",
        "Genre": "Action, Drama, War",
        "Director": "Akira Kurosawa",
        "Writer": "Akira Kurosawa, Hideo Oguni, Masato Ide",
        "Actors": "Tatsuya Nakadai, Akira Terao, Jinpachi Nezu",
        "Plot": "In Medieval Japan, an elderly warlord retires, handing over his empire to his three sons. However, he vastly underestimates how the new-found power will corrupt them and cause them to turn on each other...and him.",
        "Language": "Japanese",
        "Country": "Japan, France",
        "Awards": "Won 1 Oscar. 30 wins & 23 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNTEyNjg0MDM4OF5BMl5BanBnXkFtZTgwODI0NjUxODE@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "96%"
            },
            {
                "Source": "Metacritic",
                "Value": "96/100"
            }
        ],
        "Metascore": "96",
        "imdbRating": "8.2",
        "imdbVotes": "122,419",
        "imdbID": "tt0089881",
        "Type": "movie",
        "DVD": "22 Nov 2005",
        "BoxOffice": "$4,135,750",
        "id": 190
    },
    {
        "Title": "A Beautiful Mind",
        "Year": "2001",
        "Rated": "PG-13",
        "Released": "04 Jan 2002",
        "Runtime": "135 min",
        "Genre": "Biography, Drama",
        "Director": "Ron Howard",
        "Writer": "Akiva Goldsman, Sylvia Nasar",
        "Actors": "Russell Crowe, Ed Harris, Jennifer Connelly",
        "Plot": "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 4 Oscars. 37 wins & 69 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzcwYWFkYzktZjAzNC00OGY1LWI4YTgtNzc5MzVjMDVmNjY0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "74%"
            },
            {
                "Source": "Metacritic",
                "Value": "72/100"
            }
        ],
        "Metascore": "72",
        "imdbRating": "8.2",
        "imdbVotes": "904,950",
        "imdbID": "tt0268978",
        "Type": "movie",
        "DVD": "25 Jun 2002",
        "BoxOffice": "$170,742,341",
        "id": 191
    },
    {
        "Title": "The Sixth Sense",
        "Year": "1999",
        "Rated": "PG-13",
        "Released": "06 Aug 1999",
        "Runtime": "107 min",
        "Genre": "Drama, Mystery, Thriller",
        "Director": "M. Night Shyamalan",
        "Writer": "M. Night Shyamalan",
        "Actors": "Bruce Willis, Haley Joel Osment, Toni Collette",
        "Plot": "A frightened, withdrawn Philadelphia boy who communicates with spirits seeks the help of a disheartened child psychologist.",
        "Language": "English, Latin, Spanish",
        "Country": "United States",
        "Awards": "Nominated for 6 Oscars. 37 wins & 56 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMWM4NTFhYjctNzUyNi00NGMwLTk3NTYtMDIyNTZmMzRlYmQyXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "86%"
            },
            {
                "Source": "Metacritic",
                "Value": "64/100"
            }
        ],
        "Metascore": "64",
        "imdbRating": "8.2",
        "imdbVotes": "963,541",
        "imdbID": "tt0167404",
        "Type": "movie",
        "DVD": "02 Sep 2003",
        "BoxOffice": "$293,506,292",
        "id": 192
    },
    {
        "Title": "Monty Python and the Holy Grail",
        "Year": "1975",
        "Rated": "PG",
        "Released": "25 May 1975",
        "Runtime": "91 min",
        "Genre": "Adventure, Comedy, Fantasy",
        "Director": "Terry Gilliam, Terry Jones",
        "Writer": "Graham Chapman, John Cleese, Eric Idle",
        "Actors": "Graham Chapman, John Cleese, Eric Idle",
        "Plot": "King Arthur and his Knights of the Round Table embark on a surreal, low-budget search for the Holy Grail, encountering many, very silly obstacles.",
        "Language": "English, French, Latin",
        "Country": "United Kingdom",
        "Awards": "3 wins & 3 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BN2IyNTE4YzUtZWU0Mi00MGIwLTgyMmQtMzQ4YzQxYWNlYWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "97%"
            },
            {
                "Source": "Metacritic",
                "Value": "91/100"
            }
        ],
        "Metascore": "91",
        "imdbRating": "8.2",
        "imdbVotes": "528,905",
        "imdbID": "tt0071853",
        "Type": "movie",
        "DVD": "08 Jun 2004",
        "BoxOffice": "$1,827,696",
        "id": 193
    },
    {
        "Title": "There Will Be Blood",
        "Year": "2007",
        "Rated": "R",
        "Released": "25 Jan 2008",
        "Runtime": "158 min",
        "Genre": "Drama",
        "Director": "Paul Thomas Anderson",
        "Writer": "Paul Thomas Anderson, Upton Sinclair",
        "Actors": "Daniel Day-Lewis, Paul Dano, Ciarán Hinds",
        "Plot": "A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business.",
        "Language": "English, American Sign ",
        "Country": "United States",
        "Awards": "Won 2 Oscars. 116 wins & 137 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxODQ4MDU5NV5BMl5BanBnXkFtZTcwMDU4MjU1MQ@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "91%"
            },
            {
                "Source": "Metacritic",
                "Value": "93/100"
            }
        ],
        "Metascore": "93",
        "imdbRating": "8.2",
        "imdbVotes": "565,701",
        "imdbID": "tt0469494",
        "Type": "movie",
        "DVD": "08 Apr 2008",
        "BoxOffice": "$40,222,514",
        "id": 194
    },
    {
        "Title": "The Truman Show",
        "Year": "1998",
        "Rated": "PG",
        "Released": "05 Jun 1998",
        "Runtime": "103 min",
        "Genre": "Comedy, Drama",
        "Director": "Peter Weir",
        "Writer": "Andrew Niccol",
        "Actors": "Jim Carrey, Ed Harris, Laura Linney",
        "Plot": "An insurance salesman discovers his whole life is actually a reality TV show.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Nominated for 3 Oscars. 40 wins & 69 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "95%"
            },
            {
                "Source": "Metacritic",
                "Value": "90/100"
            }
        ],
        "Metascore": "90",
        "imdbRating": "8.2",
        "imdbVotes": "1,026,521",
        "imdbID": "tt0120382",
        "Type": "movie",
        "DVD": "23 Aug 2005",
        "BoxOffice": "$125,618,201",
        "id": 195
    },
    {
        "Title": "Yojimbo",
        "Year": "1961",
        "Rated": "Not Rated",
        "Released": "13 Sep 1961",
        "Runtime": "110 min",
        "Genre": "Action, Drama, Thriller",
        "Director": "Akira Kurosawa",
        "Writer": "Akira Kurosawa, Ryûzô Kikushima",
        "Actors": "Toshirô Mifune, Eijirô Tôno, Tatsuya Nakadai",
        "Plot": "A crafty ronin comes to a town divided by two criminal gangs and decides to play them against each other to free the town.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "Nominated for 1 Oscar. 4 wins & 2 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZThiZjAzZjgtNDU3MC00YThhLThjYWUtZGRkYjc2ZWZlOTVjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "95%"
            },
            {
                "Source": "Metacritic",
                "Value": "93/100"
            }
        ],
        "Metascore": "93",
        "imdbRating": "8.2",
        "imdbVotes": "120,046",
        "imdbID": "tt0055630",
        "Type": "movie",
        "DVD": "23 Jan 2007",
        "BoxOffice": "$46,808",
        "id": 196
    },
    {
        "Title": "The Treasure of the Sierra Madre",
        "Year": "1948",
        "Rated": "Passed",
        "Released": "24 Jan 1948",
        "Runtime": "126 min",
        "Genre": "Adventure, Drama, Western",
        "Director": "John Huston",
        "Writer": "John Huston, B. Traven",
        "Actors": "Humphrey Bogart, Walter Huston, Tim Holt",
        "Plot": "Two down-on-their-luck Americans searching for work in 1920s Mexico convince an old prospector to help them mine for gold in the Sierra Madre Mountains.",
        "Language": "English, Spanish",
        "Country": "United States",
        "Awards": "Won 3 Oscars. 16 wins & 8 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTJlZWMxYzEtMjlkMS00ODE0LThlM2ItMDI3NGQ2YjhmMzkxXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Metacritic",
                "Value": "98/100"
            }
        ],
        "Metascore": "98",
        "imdbRating": "8.2",
        "imdbVotes": "122,280",
        "imdbID": "tt0040897",
        "Type": "movie",
        "DVD": "N/A",
        "BoxOffice": "$5,014,000",
        "id": 197
    },
    {
        "Title": "Shutter Island",
        "Year": "2010",
        "Rated": "R",
        "Released": "19 Feb 2010",
        "Runtime": "138 min",
        "Genre": "Mystery, Thriller",
        "Director": "Martin Scorsese",
        "Writer": "Laeta Kalogridis, Dennis Lehane",
        "Actors": "Leonardo DiCaprio, Emily Mortimer, Mark Ruffalo",
        "Plot": "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.",
        "Language": "English, German",
        "Country": "United States",
        "Awards": "11 wins & 66 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "68%"
            },
            {
                "Source": "Metacritic",
                "Value": "63/100"
            }
        ],
        "Metascore": "63",
        "imdbRating": "8.2",
        "imdbVotes": "1,244,033",
        "imdbID": "tt1130884",
        "Type": "movie",
        "DVD": "08 Jun 2010",
        "BoxOffice": "$128,012,934",
        "id": 198
    },
    {
        "Title": "The Great Escape",
        "Year": "1963",
        "Rated": "Approved",
        "Released": "04 Jul 1963",
        "Runtime": "172 min",
        "Genre": "Adventure, Drama, History",
        "Director": "John Sturges",
        "Writer": "Paul Brickhill, James Clavell, W.R. Burnett",
        "Actors": "Steve McQueen, James Garner, Richard Attenborough",
        "Plot": "Allied prisoners of war plan for several hundred of their number to escape from a German camp during World War II.",
        "Language": "English, German, French, Russian, Spanish",
        "Country": "United States",
        "Awards": "Nominated for 1 Oscar. 3 wins & 11 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzA2NmYxMWUtNzBlMC00MWM2LTkwNmQtYTFlZjQwODNhOWE0XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "94%"
            },
            {
                "Source": "Metacritic",
                "Value": "86/100"
            }
        ],
        "Metascore": "86",
        "imdbRating": "8.2",
        "imdbVotes": "239,304",
        "imdbID": "tt0057115",
        "Type": "movie",
        "DVD": "04 Jan 2003",
        "BoxOffice": "N/A",
        "id": 199
    },
    {
        "Title": "Rashomon",
        "Year": "1950",
        "Rated": "Not Rated",
        "Released": "26 Dec 1951",
        "Runtime": "88 min",
        "Genre": "Crime, Drama, Mystery",
        "Director": "Akira Kurosawa",
        "Writer": "Ryûnosuke Akutagawa, Akira Kurosawa, Shinobu Hashimoto",
        "Actors": "Toshirô Mifune, Machiko Kyô, Masayuki Mori",
        "Plot": "The rape of a bride and the murder of her samurai husband are recalled from the perspectives of a bandit, the bride, the samurai's ghost and a woodcutter.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "Won 1 Oscar. 9 wins & 5 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjEzMzA4NDE2OF5BMl5BanBnXkFtZTcwNTc5MDI2NQ@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "98%"
            },
            {
                "Source": "Metacritic",
                "Value": "98/100"
            }
        ],
        "Metascore": "98",
        "imdbRating": "8.2",
        "imdbVotes": "164,587",
        "imdbID": "tt0042876",
        "Type": "movie",
        "DVD": "02 Apr 2002",
        "BoxOffice": "$46,808",
        "id": 200
    },
    {
        "Title": "Jurassic Park",
        "Year": "1993",
        "Rated": "PG-13",
        "Released": "11 Jun 1993",
        "Runtime": "127 min",
        "Genre": "Action, Adventure, Sci-Fi",
        "Director": "Steven Spielberg",
        "Writer": "Michael Crichton, David Koepp",
        "Actors": "Sam Neill, Laura Dern, Jeff Goldblum",
        "Plot": "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
        "Language": "English, Spanish",
        "Country": "United States",
        "Awards": "Won 3 Oscars. 44 wins & 27 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "92%"
            },
            {
                "Source": "Metacritic",
                "Value": "68/100"
            }
        ],
        "Metascore": "68",
        "imdbRating": "8.1",
        "imdbVotes": "939,085",
        "imdbID": "tt0107290",
        "Type": "movie",
        "DVD": "28 Oct 2003",
        "BoxOffice": "$404,214,720",
        "id": 201
    },
    {
        "Title": "Kill Bill: Vol. 1",
        "Year": "2003",
        "Rated": "R",
        "Released": "10 Oct 2003",
        "Runtime": "111 min",
        "Genre": "Action, Crime, Drama",
        "Director": "Quentin Tarantino",
        "Writer": "Quentin Tarantino, Uma Thurman",
        "Actors": "Uma Thurman, David Carradine, Daryl Hannah",
        "Plot": "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
        "Language": "English, Japanese, French",
        "Country": "United States",
        "Awards": "Nominated for 5 BAFTA Film 29 wins & 104 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "85%"
            },
            {
                "Source": "Metacritic",
                "Value": "69/100"
            }
        ],
        "Metascore": "69",
        "imdbRating": "8.2",
        "imdbVotes": "1,075,217",
        "imdbID": "tt0266697",
        "Type": "movie",
        "DVD": "13 Apr 2004",
        "BoxOffice": "$70,099,045",
        "id": 202
    },
    {
        "Title": "No Country for Old Men",
        "Year": "2007",
        "Rated": "R",
        "Released": "21 Nov 2007",
        "Runtime": "122 min",
        "Genre": "Crime, Drama, Thriller",
        "Director": "Ethan Coen, Joel Coen",
        "Writer": "Joel Coen, Ethan Coen, Cormac McCarthy",
        "Actors": "Tommy Lee Jones, Javier Bardem, Josh Brolin",
        "Plot": "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
        "Language": "English, Spanish",
        "Country": "United States",
        "Awards": "Won 4 Oscars. 163 wins & 140 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "93%"
            },
            {
                "Source": "Metacritic",
                "Value": "92/100"
            }
        ],
        "Metascore": "92",
        "imdbRating": "8.2",
        "imdbVotes": "934,068",
        "imdbID": "tt0477348",
        "Type": "movie",
        "DVD": "11 Mar 2008",
        "BoxOffice": "$74,283,625",
        "id": 203
    },
    {
        "Title": "Finding Nemo",
        "Year": "2003",
        "Rated": "G",
        "Released": "30 May 2003",
        "Runtime": "100 min",
        "Genre": "Animation, Adventure, Comedy",
        "Director": "Andrew Stanton, Lee Unkrich",
        "Writer": "Andrew Stanton, Bob Peterson, David Reynolds",
        "Actors": "Albert Brooks, Ellen DeGeneres, Alexander Gould",
        "Plot": "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
        "Language": "English",
        "Country": "United States, Australia",
        "Awards": "Won 1 Oscar. 48 wins & 63 nominations total",
        "Poster": "https://lumiere-a.akamaihd.net/v1/images/p_findingnemo_19752_05271d3f.jpeg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "99%"
            },
            {
                "Source": "Metacritic",
                "Value": "90/100"
            }
        ],
        "Metascore": "90",
        "imdbRating": "8.1",
        "imdbVotes": "1,010,795",
        "imdbID": "tt0266543",
        "Type": "movie",
        "DVD": "04 Nov 2003",
        "BoxOffice": "$380,843,261",
        "id": 204
    },
    {
        "Title": "Raging Bull",
        "Year": "1980",
        "Rated": "R",
        "Released": "19 Dec 1980",
        "Runtime": "129 min",
        "Genre": "Biography, Drama, Sport",
        "Director": "Martin Scorsese",
        "Writer": "Jake LaMotta, Joseph Carter, Peter Savage",
        "Actors": "Robert De Niro, Cathy Moriarty, Joe Pesci",
        "Plot": "The life of boxer Jake LaMotta, whose violence and temper that led him to the top in the ring destroyed his life outside of it.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 2 Oscars. 24 wins & 28 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjRmODkzNDItMTNhNi00YjJlLTg0ZjAtODlhZTM0YzgzYThlXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "94%"
            },
            {
                "Source": "Metacritic",
                "Value": "89/100"
            }
        ],
        "Metascore": "89",
        "imdbRating": "8.2",
        "imdbVotes": "343,558",
        "imdbID": "tt0081398",
        "Type": "movie",
        "DVD": "08 Feb 2005",
        "BoxOffice": "$23,383,987",
        "id": 205
    },
    {
        "Title": "V for Vendetta",
        "Year": "2005",
        "Rated": "R",
        "Released": "17 Mar 2006",
        "Runtime": "132 min",
        "Genre": "Action, Drama, Sci-Fi",
        "Director": "James McTeigue",
        "Writer": "Lilly Wachowski, Lana Wachowski, David Lloyd",
        "Actors": "Hugo Weaving, Natalie Portman, Rupert Graves",
        "Plot": "In a future British tyranny, a shadowy freedom fighter, known only by the alias of \"V,\" plots to overthrow it with the help of a young woman.",
        "Language": "English",
        "Country": "United States, United Kingdom, Germany",
        "Awards": "7 wins & 29 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTI5ODc3NzExNV5BMl5BanBnXkFtZTcwNzYxNzQzMw@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "73%"
            },
            {
                "Source": "Metacritic",
                "Value": "62/100"
            }
        ],
        "Metascore": "62",
        "imdbRating": "8.2",
        "imdbVotes": "1,091,993",
        "imdbID": "tt0434409",
        "Type": "movie",
        "DVD": "01 Aug 2006",
        "BoxOffice": "$70,511,035",
        "id": 206
    },
    {
        "Title": "The Elephant Man",
        "Year": "1980",
        "Rated": "PG",
        "Released": "10 Oct 1980",
        "Runtime": "124 min",
        "Genre": "Biography, Drama",
        "Director": "David Lynch",
        "Writer": "Christopher De Vore, Eric Bergren, David Lynch",
        "Actors": "Anthony Hopkins, John Hurt, Anne Bancroft",
        "Plot": "A Victorian surgeon rescues a heavily disfigured man who is mistreated while scraping a living as a side-show freak. Behind his monstrous façade, there is revealed a person of kindness, intelligence and sophistication.",
        "Language": "English, French",
        "Country": "United States, United Kingdom",
        "Awards": "Nominated for 8 Oscars. 10 wins & 22 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDVjNjIwOGItNDE3Ny00OThjLWE0NzQtZTU3YjMzZTZjMzhkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "93%"
            },
            {
                "Source": "Metacritic",
                "Value": "78/100"
            }
        ],
        "Metascore": "78",
        "imdbRating": "8.1",
        "imdbVotes": "235,729",
        "imdbID": "tt0080678",
        "Type": "movie",
        "DVD": "09 Mar 2010",
        "BoxOffice": "$26,010,864",
        "id": 207
    },
    {
        "Title": "Gone with the Wind",
        "Year": "1939",
        "Rated": "Passed",
        "Released": "17 Jan 1940",
        "Runtime": "238 min",
        "Genre": "Drama, History, Romance",
        "Director": "Victor Fleming, George Cukor, Sam Wood",
        "Writer": "Margaret Mitchell, Sidney Howard, Oliver H.P. Garrett",
        "Actors": "Clark Gable, Vivien Leigh, Thomas Mitchell",
        "Plot": "The manipulative daughter of a Georgia plantation owner conducts a turbulent romance with a roguish profiteer during the American Civil War and Reconstruction periods.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 10 Oscars. 21 wins & 12 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjUyZWZkM2UtMzYxYy00ZmQ3LWFmZTQtOGE2YjBkNjA3YWZlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "90%"
            },
            {
                "Source": "Metacritic",
                "Value": "97/100"
            }
        ],
        "Metascore": "97",
        "imdbRating": "8.2",
        "imdbVotes": "308,588",
        "imdbID": "tt0031381",
        "Type": "movie",
        "DVD": "17 Nov 2009",
        "BoxOffice": "$200,882,193",
        "id": 208
    },
    {
        "Title": "Chinatown",
        "Year": "1974",
        "Rated": "R",
        "Released": "20 Jun 1974",
        "Runtime": "130 min",
        "Genre": "Drama, Mystery, Thriller",
        "Director": "Roman Polanski",
        "Writer": "Robert Towne, Roman Polanski",
        "Actors": "Jack Nicholson, Faye Dunaway, John Huston",
        "Plot": "A private detective hired to expose an adulterer in 1930s Los Angeles finds himself caught up in a web of deceit, corruption, and murder.",
        "Language": "English, Cantonese, Spanish",
        "Country": "United States",
        "Awards": "Won 1 Oscar. 21 wins & 24 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOGMwYmY5ZmEtMzY1Yi00OWJiLTk1Y2MtMzI2MjBhYmZkNTQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "99%"
            },
            {
                "Source": "Metacritic",
                "Value": "92/100"
            }
        ],
        "Metascore": "92",
        "imdbRating": "8.2",
        "imdbVotes": "317,709",
        "imdbID": "tt0071315",
        "Type": "movie",
        "DVD": "23 Nov 1999",
        "BoxOffice": "$29,200,000",
        "id": 209
    },
    {
        "Title": "Inside Out",
        "Year": "2015",
        "Rated": "PG",
        "Released": "19 Jun 2015",
        "Runtime": "95 min",
        "Genre": "Animation, Adventure, Comedy",
        "Director": "Pete Docter, Ronnie Del Carmen",
        "Writer": "Pete Docter, Ronnie Del Carmen, Meg LeFauve",
        "Actors": "Amy Poehler, Bill Hader, Lewis Black",
        "Plot": "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
        "Language": "English, Portuguese",
        "Country": "United States",
        "Awards": "Won 1 Oscar. 101 wins & 116 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "98%"
            },
            {
                "Source": "Metacritic",
                "Value": "94/100"
            }
        ],
        "Metascore": "94",
        "imdbRating": "8.2",
        "imdbVotes": "681,506",
        "imdbID": "tt2096673",
        "Type": "movie",
        "DVD": "03 Nov 2015",
        "BoxOffice": "$356,921,711",
        "id": 210
    },
    {
        "Title": "Lock, Stock and Two Smoking Barrels",
        "Year": "1998",
        "Rated": "R",
        "Released": "28 Aug 1998",
        "Runtime": "107 min",
        "Genre": "Action, Comedy, Crime",
        "Director": "Guy Ritchie",
        "Writer": "Guy Ritchie",
        "Actors": "Jason Flemyng, Dexter Fletcher, Nick Moran",
        "Plot": "Eddy persuades his three pals to pool money for a vital poker game against a powerful local mobster, Hatchet Harry. Eddy loses, after which Harry gives him a week to pay back 500,000 pounds.",
        "Language": "English",
        "Country": "United Kingdom",
        "Awards": "Won 1 BAFTA Film Award13 wins & 9 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTAyN2JmZmEtNjAyMy00NzYwLThmY2MtYWQ3OGNhNjExMmM4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "74%"
            },
            {
                "Source": "Metacritic",
                "Value": "66/100"
            }
        ],
        "Metascore": "66",
        "imdbRating": "8.2",
        "imdbVotes": "568,228",
        "imdbID": "tt0120735",
        "Type": "movie",
        "DVD": "11 Mar 2008",
        "BoxOffice": "$3,753,929",
        "id": 211
    },
    {
        "Title": "The Thing",
        "Year": "1982",
        "Rated": "R",
        "Released": "25 Jun 1982",
        "Runtime": "109 min",
        "Genre": "Horror, Mystery, Sci-Fi",
        "Director": "John Carpenter",
        "Writer": "Bill Lancaster, John W. Campbell Jr.",
        "Actors": "Kurt Russell, Wilford Brimley, Keith David",
        "Plot": "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.",
        "Language": "English, Norwegian",
        "Country": "United States",
        "Awards": "3 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "82%"
            },
            {
                "Source": "Metacritic",
                "Value": "57/100"
            }
        ],
        "Metascore": "57",
        "imdbRating": "8.2",
        "imdbVotes": "406,823",
        "imdbID": "tt0084787",
        "Type": "movie",
        "DVD": "14 Feb 2006",
        "BoxOffice": "$19,629,760",
        "id": 212
    },
    {
        "Title": "Dial M for Murder",
        "Year": "1954",
        "Rated": "PG",
        "Released": "29 May 1954",
        "Runtime": "105 min",
        "Genre": "Crime, Thriller",
        "Director": "Alfred Hitchcock",
        "Writer": "Frederick Knott",
        "Actors": "Ray Milland, Grace Kelly, Robert Cummings",
        "Plot": "A former tennis star arranges the murder of his adulterous wife.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Nominated for 1 BAFTA Film Award5 wins & 3 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOWIwODIxYWItZDI4MS00YzhhLWE3MmYtMzlhZDIwOTMzZmE5L2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "89%"
            },
            {
                "Source": "Metacritic",
                "Value": "75/100"
            }
        ],
        "Metascore": "75",
        "imdbRating": "8.2",
        "imdbVotes": "171,407",
        "imdbID": "tt0046912",
        "Type": "movie",
        "DVD": "29 Aug 2006",
        "BoxOffice": "$24,845",
        "id": 213
    },
    {
        "Title": "The Secret in Their Eyes",
        "Year": "2009",
        "Rated": "R",
        "Released": "21 May 2010",
        "Runtime": "129 min",
        "Genre": "Drama, Mystery, Romance",
        "Director": "Juan José Campanella",
        "Writer": "Eduardo Sacheri, Juan José Campanella",
        "Actors": "Ricardo Darín, Soledad Villamil, Pablo Rago",
        "Plot": "A retired legal counselor writes a novel hoping to find closure for one of his past unresolved homicide cases and for his unreciprocated love with his superior - both of which still haunt him decades later.",
        "Language": "Spanish",
        "Country": "Argentina, Spain",
        "Awards": "Won 1 Oscar. 53 wins & 43 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BY2FhZGI5M2QtZWFiZS00NjkwLWE4NWQtMzg3ZDZjNjdkYTJiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "89%"
            },
            {
                "Source": "Metacritic",
                "Value": "80/100"
            }
        ],
        "Metascore": "80",
        "imdbRating": "8.2",
        "imdbVotes": "205,338",
        "imdbID": "tt1305806",
        "Type": "movie",
        "DVD": "21 Sep 2010",
        "BoxOffice": "$6,391,436",
        "id": 214
    },
    {
        "Title": "Howl's Moving Castle",
        "Year": "2004",
        "Rated": "PG",
        "Released": "17 Jun 2005",
        "Runtime": "119 min",
        "Genre": "Animation, Adventure, Family",
        "Director": "Hayao Miyazaki",
        "Writer": "Hayao Miyazaki, Diana Wynne Jones",
        "Actors": "Chieko Baishô, Takuya Kimura, Tatsuya Gashûin",
        "Plot": "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "Nominated for 1 Oscar. 14 wins & 20 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNmM4YTFmMmItMGE3Yy00MmRkLTlmZGEtMzZlOTQzYjk3MzA2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "87%"
            },
            {
                "Source": "Metacritic",
                "Value": "80/100"
            }
        ],
        "Metascore": "80",
        "imdbRating": "8.2",
        "imdbVotes": "375,216",
        "imdbID": "tt0347149",
        "Type": "movie",
        "DVD": "14 Feb 2006",
        "BoxOffice": "$5,576,743",
        "id": 215
    },
    {
        "Title": "The Bridge on the River Kwai",
        "Year": "1957",
        "Rated": "PG",
        "Released": "14 Dec 1957",
        "Runtime": "161 min",
        "Genre": "Adventure, Drama, War",
        "Director": "David Lean",
        "Writer": "Pierre Boulle, Carl Foreman, Michael Wilson",
        "Actors": "William Holden, Alec Guinness, Jack Hawkins",
        "Plot": "British POWs are forced to build a railway bridge across the river Kwai for their Japanese captors in occupied Burma, not knowing that the allied forces are planning a daring commando raid through the jungle to destroy it.",
        "Language": "English, Japanese, Thai",
        "Country": "United Kingdom, United States",
        "Awards": "Won 7 Oscars. 30 wins & 8 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOGY5NmNlMmQtYzRlYy00NGQ5LWFkYjYtNzExZmQyMTg0ZDA0XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "96%"
            },
            {
                "Source": "Metacritic",
                "Value": "87/100"
            }
        ],
        "Metascore": "87",
        "imdbRating": "8.1",
        "imdbVotes": "215,727",
        "imdbID": "tt0050212",
        "Type": "movie",
        "DVD": "21 Nov 2000",
        "BoxOffice": "$27,200,000",
        "id": 216
    },
    {
        "Title": "Trainspotting",
        "Year": "1996",
        "Rated": "R",
        "Released": "09 Aug 1996",
        "Runtime": "93 min",
        "Genre": "Drama",
        "Director": "Danny Boyle",
        "Writer": "Irvine Welsh, John Hodge",
        "Actors": "Ewan McGregor, Ewen Bremner, Jonny Lee Miller",
        "Plot": "Renton, deeply immersed in the Edinburgh drug scene, tries to clean up and get out, despite the allure of the drugs and influence of friends.",
        "Language": "English",
        "Country": "United Kingdom",
        "Awards": "Nominated for 1 Oscar. 23 wins & 35 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzA5Zjc3ZTMtMmU5YS00YTMwLWI4MWUtYTU0YTVmNjVmODZhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "91%"
            },
            {
                "Source": "Metacritic",
                "Value": "83/100"
            }
        ],
        "Metascore": "83",
        "imdbRating": "8.1",
        "imdbVotes": "670,604",
        "imdbID": "tt0117951",
        "Type": "movie",
        "DVD": "01 Jun 2004",
        "BoxOffice": "$16,491,080",
        "id": 217
    },
    {
        "Title": "Three Billboards Outside Ebbing, Missouri",
        "Year": "2017",
        "Rated": "R",
        "Released": "01 Dec 2017",
        "Runtime": "115 min",
        "Genre": "Comedy, Crime, Drama",
        "Director": "Martin McDonagh",
        "Writer": "Martin McDonagh",
        "Actors": "Frances McDormand, Woody Harrelson, Sam Rockwell",
        "Plot": "A mother personally challenges the local authorities to solve her daughter's murder when they fail to catch the culprit.",
        "Language": "English",
        "Country": "United Kingdom, United States",
        "Awards": "Won 2 Oscars. 133 wins & 235 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjI0ODcxNzM1N15BMl5BanBnXkFtZTgwMzIwMTEwNDI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "91%"
            },
            {
                "Source": "Metacritic",
                "Value": "88/100"
            }
        ],
        "Metascore": "88",
        "imdbRating": "8.1",
        "imdbVotes": "486,166",
        "imdbID": "tt5027774",
        "Type": "movie",
        "DVD": "27 Feb 2018",
        "BoxOffice": "$54,513,740",
        "id": 218
    },
    {
        "Title": "Warrior",
        "Year": "2011",
        "Rated": "PG-13",
        "Released": "09 Sep 2011",
        "Runtime": "140 min",
        "Genre": "Action, Drama, Sport",
        "Director": "Gavin O'Connor",
        "Writer": "Gavin O'Connor, Anthony Tambakis, Cliff Dorfman",
        "Actors": "Tom Hardy, Nick Nolte, Joel Edgerton",
        "Plot": "The youngest son of an alcoholic former boxer returns home, where he's trained by his father for competition in a mixed martial arts tournament - a path that puts the fighter on a collision course with his estranged, older brother.",
        "Language": "English, Spanish",
        "Country": "United States",
        "Awards": "Nominated for 1 Oscar. 5 wins & 22 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTk4ODk5MTMyNV5BMl5BanBnXkFtZTcwMDMyNTg0Ng@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "84%"
            },
            {
                "Source": "Metacritic",
                "Value": "71/100"
            }
        ],
        "Metascore": "71",
        "imdbRating": "8.2",
        "imdbVotes": "461,060",
        "imdbID": "tt1291584",
        "Type": "movie",
        "DVD": "20 Dec 2011",
        "BoxOffice": "$13,657,115",
        "id": 219
    },
    {
        "Title": "Gran Torino",
        "Year": "2008",
        "Rated": "R",
        "Released": "09 Jan 2009",
        "Runtime": "116 min",
        "Genre": "Drama",
        "Director": "Clint Eastwood",
        "Writer": "Nick Schenk, Dave Johannson",
        "Actors": "Clint Eastwood, Bee Vang, Christopher Carley",
        "Plot": "Disgruntled Korean War veteran Walt Kowalski sets out to reform his neighbor, Thao Lor, a Hmong teenager who tried to steal Kowalski's prized possession: a 1972 Gran Torino.",
        "Language": "English, Hmong",
        "Country": "Germany, United States",
        "Awards": "21 wins & 22 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5NTk2OTU1Nl5BMl5BanBnXkFtZTcwMDc3NjAwMg@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "81%"
            },
            {
                "Source": "Metacritic",
                "Value": "72/100"
            }
        ],
        "Metascore": "72",
        "imdbRating": "8.1",
        "imdbVotes": "758,134",
        "imdbID": "tt1205489",
        "Type": "movie",
        "DVD": "09 Jun 2009",
        "BoxOffice": "$148,095,302",
        "id": 220
    },
    {
        "Title": "Fargo",
        "Year": "1996",
        "Rated": "R",
        "Released": "05 Apr 1996",
        "Runtime": "98 min",
        "Genre": "Crime, Thriller",
        "Director": "Joel Coen, Ethan Coen",
        "Writer": "Ethan Coen, Joel Coen",
        "Actors": "William H. Macy, Frances McDormand, Steve Buscemi",
        "Plot": "Minnesota car salesman Jerry Lundegaard's inept crime falls apart due to his and his henchmen's bungling and the persistent police work of the quite pregnant Marge Gunderson.",
        "Language": "English",
        "Country": "United States, United Kingdom",
        "Awards": "Won 2 Oscars. 83 wins & 58 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDJiZDgyZjctYmRjMS00ZjdkLTkwMTEtNGU1NDg3NDQ0Yzk1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "94%"
            },
            {
                "Source": "Metacritic",
                "Value": "85/100"
            }
        ],
        "Metascore": "85",
        "imdbRating": "8.1",
        "imdbVotes": "660,234",
        "imdbID": "tt0116282",
        "Type": "movie",
        "DVD": "01 Aug 2006",
        "BoxOffice": "$24,611,975",
        "id": 221
    },
    {
        "Title": "Prisoners",
        "Year": "2013",
        "Rated": "R",
        "Released": "20 Sep 2013",
        "Runtime": "153 min",
        "Genre": "Crime, Drama, Mystery",
        "Director": "Denis Villeneuve",
        "Writer": "Aaron Guzikowski",
        "Actors": "Hugh Jackman, Jake Gyllenhaal, Viola Davis",
        "Plot": "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads and the pressure mounts.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Nominated for 1 Oscar. 10 wins & 38 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "81%"
            },
            {
                "Source": "Metacritic",
                "Value": "70/100"
            }
        ],
        "Metascore": "70",
        "imdbRating": "8.1",
        "imdbVotes": "671,652",
        "imdbID": "tt1392214",
        "Type": "movie",
        "DVD": "17 Dec 2013",
        "BoxOffice": "$61,002,302",
        "id": 222
    },
    {
        "Title": "Million Dollar Baby",
        "Year": "2004",
        "Rated": "PG-13",
        "Released": "28 Jan 2005",
        "Runtime": "132 min",
        "Genre": "Drama, Sport",
        "Director": "Clint Eastwood",
        "Writer": "Paul Haggis, F.X. Toole",
        "Actors": "Hilary Swank, Clint Eastwood, Morgan Freeman",
        "Plot": "A determined woman works with a hardened boxing trainer to become a professional.",
        "Language": "English, Irish Gaelic",
        "Country": "United States",
        "Awards": "Won 4 Oscars. 67 wins & 86 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTkxNzA1NDQxOV5BMl5BanBnXkFtZTcwNTkyMTIzMw@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "90%"
            },
            {
                "Source": "Metacritic",
                "Value": "86/100"
            }
        ],
        "Metascore": "86",
        "imdbRating": "8.1",
        "imdbVotes": "671,209",
        "imdbID": "tt0405159",
        "Type": "movie",
        "DVD": "12 Jul 2005",
        "BoxOffice": "$100,492,203",
        "id": 223
    },
    {
        "Title": "Blade Runner",
        "Year": "1982",
        "Rated": "R",
        "Released": "25 Jun 1982",
        "Runtime": "117 min",
        "Genre": "Action, Drama, Sci-Fi",
        "Director": "Ridley Scott",
        "Writer": "Hampton Fancher, David Webb Peoples, Philip K. Dick",
        "Actors": "Harrison Ford, Rutger Hauer, Sean Young",
        "Plot": "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.",
        "Language": "Low German, English, German, Cantonese, Japanese, Hungarian, Arabic, Korean",
        "Country": "United States",
        "Awards": "Nominated for 2 Oscars. 12 wins & 19 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "89%"
            },
            {
                "Source": "Metacritic",
                "Value": "84/100"
            }
        ],
        "Metascore": "84",
        "imdbRating": "8.1",
        "imdbVotes": "743,906",
        "imdbID": "tt0083658",
        "Type": "movie",
        "DVD": "30 Oct 2001",
        "BoxOffice": "$32,914,489",
        "id": 224
    },
    {
        "Title": "Catch Me If You Can",
        "Year": "2002",
        "Rated": "PG-13",
        "Released": "25 Dec 2002",
        "Runtime": "141 min",
        "Genre": "Biography, Crime, Drama",
        "Director": "Steven Spielberg",
        "Writer": "Jeff Nathanson, Frank Abagnale Jr., Stan Redding",
        "Actors": "Leonardo DiCaprio, Tom Hanks, Christopher Walken",
        "Plot": "Barely 21 yet, Frank is a skilled forger who has passed as a doctor, lawyer and pilot. FBI agent Carl becomes obsessed with tracking down the con man, who only revels in the pursuit.",
        "Language": "English, French",
        "Country": "United States, Canada",
        "Awards": "Nominated for 2 Oscars. 16 wins & 46 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "96%"
            },
            {
                "Source": "Metacritic",
                "Value": "75/100"
            }
        ],
        "Metascore": "75",
        "imdbRating": "8.1",
        "imdbVotes": "930,258",
        "imdbID": "tt0264464",
        "Type": "movie",
        "DVD": "06 May 2003",
        "BoxOffice": "$164,615,351",
        "id": 225
    },
    {
        "Title": "The Gold Rush",
        "Year": "1925",
        "Rated": "Passed",
        "Released": "13 Jul 1925",
        "Runtime": "95 min",
        "Genre": "Adventure, Comedy, Drama",
        "Director": "Charles Chaplin",
        "Writer": "Charles Chaplin",
        "Actors": "Charles Chaplin, Mack Swain, Tom Murray",
        "Plot": "A prospector goes to the Klondike during the 1890s gold rush in hopes of making his fortune, and is smitten with a girl he sees in a dance hall.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Nominated for 2 Oscars. 3 wins & 3 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjEyOTE4MzMtNmMzMy00Mzc3LWJlOTQtOGJiNDE0ZmJiOTU4L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "100%"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.2",
        "imdbVotes": "109,170",
        "imdbID": "tt0015864",
        "Type": "movie",
        "DVD": "12 Jun 2012",
        "BoxOffice": "N/A",
        "id": 226
    },
    {
        "Title": "On the Waterfront",
        "Year": "1954",
        "Rated": "Approved",
        "Released": "22 Jun 1954",
        "Runtime": "108 min",
        "Genre": "Crime, Drama, Thriller",
        "Director": "Elia Kazan",
        "Writer": "Budd Schulberg, Malcolm Johnson, Robert Siodmak",
        "Actors": "Marlon Brando, Karl Malden, Lee J. Cobb",
        "Plot": "An ex-prize fighter turned New Jersey longshoreman struggles to stand up to his corrupt union bosses, including his older brother, as he starts to connect with the grieving sister of one of the syndicate's victims.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 8 Oscars. 30 wins & 9 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BY2I0MWFiZDMtNWQyYy00Njk5LTk3MDktZjZjNTNmZmVkYjkxXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "99%"
            },
            {
                "Source": "Metacritic",
                "Value": "91/100"
            }
        ],
        "Metascore": "91",
        "imdbRating": "8.1",
        "imdbVotes": "151,873",
        "imdbID": "tt0047296",
        "Type": "movie",
        "DVD": "23 Oct 2001",
        "BoxOffice": "N/A",
        "id": 227
    },
    {
        "Title": "Children of Heaven",
        "Year": "1997",
        "Rated": "PG",
        "Released": "22 Jan 1999",
        "Runtime": "89 min",
        "Genre": "Drama, Family, Sport",
        "Director": "Majid Majidi",
        "Writer": "Majid Majidi",
        "Actors": "Mohammad Amir Naji, Amir Farrokh Hashemian, Bahare Seddiqi",
        "Plot": "After a boy loses his sister's pair of shoes, he goes on a series of adventures in order to find them. When he can't, he tries a new way to \"win\" a new pair.",
        "Language": "Persian",
        "Country": "Iran",
        "Awards": "Nominated for 1 Oscar. 13 wins & 5 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZTYwZWQ4ZTQtZWU0MS00N2YwLWEzMDItZWFkZWY0MWVjODVhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "83%"
            },
            {
                "Source": "Metacritic",
                "Value": "77/100"
            }
        ],
        "Metascore": "77",
        "imdbRating": "8.2",
        "imdbVotes": "72,941",
        "imdbID": "tt0118849",
        "Type": "movie",
        "DVD": "03 Sep 2002",
        "BoxOffice": "$933,933",
        "id": 228
    },
    {
        "Title": "Harry Potter and the Deathly Hallows: Part 2",
        "Year": "2011",
        "Rated": "PG-13",
        "Released": "15 Jul 2011",
        "Runtime": "130 min",
        "Genre": "Adventure, Fantasy, Mystery",
        "Director": "David Yates",
        "Writer": "Steve Kloves, J.K. Rowling",
        "Actors": "Daniel Radcliffe, Emma Watson, Rupert Grint",
        "Plot": "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
        "Language": "English, Latin",
        "Country": "United Kingdom, United States",
        "Awards": "Nominated for 3 Oscars. 46 wins & 94 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "96%"
            },
            {
                "Source": "Metacritic",
                "Value": "85/100"
            }
        ],
        "Metascore": "85",
        "imdbRating": "8.2",
        "imdbVotes": "838,202",
        "imdbID": "tt1201607",
        "Type": "movie",
        "DVD": "11 Nov 2011",
        "BoxOffice": "$381,447,587",
        "id": 229
    },
    {
        "Title": "The Third Man",
        "Year": "1949",
        "Rated": "Approved",
        "Released": "03 Sep 1949",
        "Runtime": "93 min",
        "Genre": "Film-Noir, Mystery, Thriller",
        "Director": "Carol Reed",
        "Writer": "Graham Greene, Orson Welles, Alexander Korda",
        "Actors": "Orson Welles, Joseph Cotten, Alida Valli",
        "Plot": "Pulp novelist Holly Martins travels to shadowy, postwar Vienna, only to find himself investigating the mysterious death of an old friend, Harry Lime.",
        "Language": "English, German, Russian, French",
        "Country": "United Kingdom",
        "Awards": "Won 1 Oscar. 5 wins & 4 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjE2OTdhMWUtOGJlMy00ZDViLWIzZjgtYjZkZGZmMDZjYmEyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "99%"
            },
            {
                "Source": "Metacritic",
                "Value": "97/100"
            }
        ],
        "Metascore": "97",
        "imdbRating": "8.1",
        "imdbVotes": "168,801",
        "imdbID": "tt0041959",
        "Type": "movie",
        "DVD": "28 Oct 2008",
        "BoxOffice": "$1,067,364",
        "id": 230
    },
    {
        "Title": "Gone Girl",
        "Year": "2014",
        "Rated": "R",
        "Released": "03 Oct 2014",
        "Runtime": "149 min",
        "Genre": "Drama, Mystery, Thriller",
        "Director": "David Fincher",
        "Writer": "Gillian Flynn",
        "Actors": "Ben Affleck, Rosamund Pike, Neil Patrick Harris",
        "Plot": "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Nominated for 1 Oscar. 64 wins & 188 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "87%"
            },
            {
                "Source": "Metacritic",
                "Value": "79/100"
            }
        ],
        "Metascore": "79",
        "imdbRating": "8.1",
        "imdbVotes": "943,927",
        "imdbID": "tt2267998",
        "Type": "movie",
        "DVD": "13 Jan 2015",
        "BoxOffice": "$167,767,189",
        "id": 231
    },
    {
        "Title": "12 Years a Slave",
        "Year": "2013",
        "Rated": "R",
        "Released": "08 Nov 2013",
        "Runtime": "134 min",
        "Genre": "Biography, Drama, History",
        "Director": "Steve McQueen",
        "Writer": "John Ridley, Solomon Northup",
        "Actors": "Chiwetel Ejiofor, Michael Kenneth Williams, Michael Fassbender",
        "Plot": "In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.",
        "Language": "English",
        "Country": "United States, United Kingdom",
        "Awards": "Won 3 Oscars. 242 wins & 336 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjExMTEzODkyN15BMl5BanBnXkFtZTcwNTU4NTc4OQ@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "95%"
            },
            {
                "Source": "Metacritic",
                "Value": "96/100"
            }
        ],
        "Metascore": "96",
        "imdbRating": "8.1",
        "imdbVotes": "681,867",
        "imdbID": "tt2024544",
        "Type": "movie",
        "DVD": "04 Mar 2014",
        "BoxOffice": "$56,671,993",
        "id": 232
    },
    {
        "Title": "Ben-Hur",
        "Year": "1959",
        "Rated": "G",
        "Released": "18 Nov 1959",
        "Runtime": "212 min",
        "Genre": "Adventure, Drama, History",
        "Director": "William Wyler",
        "Writer": "Lew Wallace, Karl Tunberg, Gore Vidal",
        "Actors": "Charlton Heston, Jack Hawkins, Stephen Boyd",
        "Plot": "After a Jewish prince is betrayed and sent into slavery by a Roman friend in 1st-century Jerusalem, he regains his freedom and comes back for revenge.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 11 Oscars. 29 wins & 16 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjgxY2JiZDYtZmMwOC00ZmJjLWJmODUtMTNmNWNmYWI5ODkwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "86%"
            },
            {
                "Source": "Metacritic",
                "Value": "90/100"
            }
        ],
        "Metascore": "90",
        "imdbRating": "8.1",
        "imdbVotes": "233,968",
        "imdbID": "tt0052618",
        "Type": "movie",
        "DVD": "13 Sep 2005",
        "BoxOffice": "$74,432,704",
        "id": 233
    },
    {
        "Title": "The General",
        "Year": "1926",
        "Rated": "Passed",
        "Released": "02 Jan 1927",
        "Runtime": "67 min",
        "Genre": "Action, Adventure, Comedy",
        "Director": "Clyde Bruckman, Buster Keaton",
        "Writer": "Buster Keaton, Clyde Bruckman, Al Boasberg",
        "Actors": "Buster Keaton, Marion Mack, Glen Cavender",
        "Plot": "After being rejected by the Confederate military, not realizing it was due to his crucial civilian role, an engineer must single-handedly recapture his beloved locomotive after it is seized by Union spies and return it through enemy ",
        "Language": "English",
        "Country": "United States",
        "Awards": "2 wins & 1 nomination",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYmRiMDFlYjYtOTMwYy00OGY2LWE0Y2QtYzQxOGNhZmUwNTIxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "92%"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.1",
        "imdbVotes": "89,360",
        "imdbID": "tt0017925",
        "Type": "movie",
        "DVD": "22 Mar 2007",
        "BoxOffice": "N/A",
        "id": 234
    },
    {
        "Title": "The Deer Hunter",
        "Year": "1978",
        "Rated": "R",
        "Released": "23 Feb 1979",
        "Runtime": "183 min",
        "Genre": "Drama, War",
        "Director": "Michael Cimino",
        "Writer": "Michael Cimino, Deric Washburn, Louis Garfinkle",
        "Actors": "Robert De Niro, Christopher Walken, John Cazale",
        "Plot": "An in-depth examination of the ways in which the Vietnam War impacts and disrupts the lives of several friends in a small steel mill town in Pennsylvania.",
        "Language": "English, Vietnamese, French, Russian, Cantonese",
        "Country": "United States, United Kingdom",
        "Awards": "Won 5 Oscars. 24 wins & 27 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDhmNTA0ZDMtYjhkNS00NzEzLWIzYTItOGNkMTVmYjE2YmI3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "91%"
            },
            {
                "Source": "Metacritic",
                "Value": "86/100"
            }
        ],
        "Metascore": "86",
        "imdbRating": "8.1",
        "imdbVotes": "331,624",
        "imdbID": "tt0077416",
        "Type": "movie",
        "DVD": "31 Mar 1998",
        "BoxOffice": "$48,979,328",
        "id": 235
    },
    {
        "Title": "Before Sunrise",
        "Year": "1995",
        "Rated": "R",
        "Released": "27 Jan 1995",
        "Runtime": "101 min",
        "Genre": "Drama, Romance",
        "Director": "Richard Linklater",
        "Writer": "Richard Linklater, Kim Krizan",
        "Actors": "Ethan Hawke, Julie Delpy, Andrea Eckert",
        "Plot": "A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together.",
        "Language": "English, German, French",
        "Country": "United States, Austria",
        "Awards": "1 win & 7 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZDdiZTAwYzAtMDI3Ni00OTRjLTkzN2UtMGE3MDMyZmU4NTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "100%"
            },
            {
                "Source": "Metacritic",
                "Value": "77/100"
            }
        ],
        "Metascore": "77",
        "imdbRating": "8.1",
        "imdbVotes": "296,375",
        "imdbID": "tt0112471",
        "Type": "movie",
        "DVD": "01 Nov 2001",
        "BoxOffice": "$5,535,405",
        "id": 236
    },
    {
        "Title": "Wild Strawberries",
        "Year": "1957",
        "Rated": "Not Rated",
        "Released": "22 Jun 1959",
        "Runtime": "91 min",
        "Genre": "Drama, Romance",
        "Director": "Ingmar Bergman",
        "Writer": "Ingmar Bergman",
        "Actors": "Victor Sjöström, Bibi Andersson, Ingrid Thulin",
        "Plot": "After living a life marked by coldness, an aging professor is forced to confront the emptiness of his existence.",
        "Language": "Swedish, Latin",
        "Country": "Sweden",
        "Awards": "Nominated for 1 Oscar. 18 wins & 4 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYWQxYzdhMDMtNjAyZC00NzE0LWFjYmQtYjk0YzMyYjA5NzZkXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "94%"
            },
            {
                "Source": "Metacritic",
                "Value": "88/100"
            }
        ],
        "Metascore": "88",
        "imdbRating": "8.2",
        "imdbVotes": "105,087",
        "imdbID": "tt0050986",
        "Type": "movie",
        "DVD": "12 Feb 2002",
        "BoxOffice": "N/A",
        "id": 237
    },
    {
        "Title": "In the Name of the Father",
        "Year": "1993",
        "Rated": "R",
        "Released": "25 Feb 1994",
        "Runtime": "133 min",
        "Genre": "Biography, Crime, Drama",
        "Director": "Jim Sheridan",
        "Writer": "Gerry Conlon, Terry George, Jim Sheridan",
        "Actors": "Daniel Day-Lewis, Pete Postlethwaite, Alison Crosbie",
        "Plot": "A man's coerced confession to an I.R.A. bombing he did not commit results in the imprisonment of his father as well. An English lawyer fights to free them.",
        "Language": "English",
        "Country": "Ireland, United Kingdom",
        "Awards": "Nominated for 7 Oscars. 7 wins & 41 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMmYyOTgwYWItYmU3Ny00M2E2LTk0NWMtMDVlNmQ0MWZiMTMxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "94%"
            },
            {
                "Source": "Metacritic",
                "Value": "84/100"
            }
        ],
        "Metascore": "84",
        "imdbRating": "8.1",
        "imdbVotes": "170,162",
        "imdbID": "tt0107207",
        "Type": "movie",
        "DVD": "02 Sep 2003",
        "BoxOffice": "$25,096,862",
        "id": 238
    },
    {
        "Title": "The Grand Budapest Hotel",
        "Year": "2014",
        "Rated": "R",
        "Released": "28 Mar 2014",
        "Runtime": "99 min",
        "Genre": "Adventure, Comedy, Crime",
        "Director": "Wes Anderson",
        "Writer": "Stefan Zweig, Wes Anderson, Hugo Guinness",
        "Actors": "Ralph Fiennes, F. Murray Abraham, Mathieu Amalric",
        "Plot": "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
        "Language": "English, French, German",
        "Country": "United States, Germany",
        "Awards": "Won 4 Oscars. 134 wins & 226 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "92%"
            },
            {
                "Source": "Metacritic",
                "Value": "88/100"
            }
        ],
        "Metascore": "88",
        "imdbRating": "8.1",
        "imdbVotes": "775,312",
        "imdbID": "tt2278388",
        "Type": "movie",
        "DVD": "17 Jun 2014",
        "BoxOffice": "$59,301,324",
        "id": 239
    },
    {
        "Title": "Mr. Smith Goes to Washington",
        "Year": "1939",
        "Rated": "Passed",
        "Released": "19 Oct 1939",
        "Runtime": "129 min",
        "Genre": "Comedy, Drama",
        "Director": "Frank Capra",
        "Writer": "Sidney Buchman, Lewis R. Foster, Myles Connolly",
        "Actors": "James Stewart, Jean Arthur, Claude Rains",
        "Plot": "A naive youth leader is appointed to fill a vacancy in the U.S. Senate. His idealistic plans promptly collide with corruption at home and subterfuge from his hero in Washington, but he tries to forge ahead despite attacks on his char",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 1 Oscar. 6 wins & 16 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZTYwYjYxYzgtMDE1Ni00NzU4LWJlMTEtODQ5YmJmMGJhZjI5L2ltYWdlXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "85%"
            },
            {
                "Source": "Metacritic",
                "Value": "73/100"
            }
        ],
        "Metascore": "73",
        "imdbRating": "8.1",
        "imdbVotes": "113,859",
        "imdbID": "tt0031679",
        "Type": "movie",
        "DVD": "N/A",
        "BoxOffice": "$144,738",
        "id": 240
    },
    {
        "Title": "Room",
        "Year": "2015",
        "Rated": "R",
        "Released": "22 Jan 2016",
        "Runtime": "118 min",
        "Genre": "Drama, Thriller",
        "Director": "Lenny Abrahamson",
        "Writer": "Emma Donoghue",
        "Actors": "Brie Larson, Jacob Tremblay, Sean Bridgers",
        "Plot": "Held captive for 7 years in an enclosed space, a woman and her young son finally gain their freedom, allowing the boy to experience the outside world for the first time.",
        "Language": "English",
        "Country": "Ireland, Canada, United Kingdom, United States",
        "Awards": "Won 1 Oscar. 108 wins & 140 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjE4NzgzNzEwMl5BMl5BanBnXkFtZTgwMTMzMDE0NjE@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "93%"
            },
            {
                "Source": "Metacritic",
                "Value": "86/100"
            }
        ],
        "Metascore": "86",
        "imdbRating": "8.1",
        "imdbVotes": "405,153",
        "imdbID": "tt3170832",
        "Type": "movie",
        "DVD": "01 Mar 2016",
        "BoxOffice": "$14,677,654",
        "id": 241
    },
    {
        "Title": "Hacksaw Ridge",
        "Year": "2016",
        "Rated": "R",
        "Released": "04 Nov 2016",
        "Runtime": "139 min",
        "Genre": "Biography, Drama, History",
        "Director": "Mel Gibson",
        "Writer": "Robert Schenkkan, Andrew Knight",
        "Actors": "Andrew Garfield, Sam Worthington, Luke Bracey",
        "Plot": "World War II American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and becomes the first man in American history to receive the Medal of Honor without firing a shot.",
        "Language": "English, Japanese",
        "Country": "Australia, United States",
        "Awards": "Won 2 Oscars. 56 wins & 115 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "84%"
            },
            {
                "Source": "Metacritic",
                "Value": "71/100"
            }
        ],
        "Metascore": "71",
        "imdbRating": "8.1",
        "imdbVotes": "496,486",
        "imdbID": "tt2119532",
        "Type": "movie",
        "DVD": "21 Feb 2017",
        "BoxOffice": "$67,209,615",
        "id": 242
    },
    {
        "Title": "Sherlock Jr.",
        "Year": "1924",
        "Rated": "Passed",
        "Released": "11 May 1924",
        "Runtime": "45 min",
        "Genre": "Action, Comedy, Romance",
        "Director": "Buster Keaton",
        "Writer": "Jean C. Havez, Joseph A. Mitchell, Clyde Bruckman",
        "Actors": "Buster Keaton, Kathryn McGuire, Joe Keaton",
        "Plot": "A film projectionist longs to be a detective, and puts his meagre skills to work when he is framed by a rival for stealing his girlfriend's father's pocketwatch.",
        "Language": "None, English",
        "Country": "United States",
        "Awards": "1 win",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWFhOGU5NDctY2Q3YS00Y2VlLWI1NzEtZmIwY2ZiZjY4OTA2XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "92%"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.2",
        "imdbVotes": "48,086",
        "imdbID": "tt0015324",
        "Type": "movie",
        "DVD": "11 Dec 2012",
        "BoxOffice": "$977,375",
        "id": 243
    },
    {
        "Title": "Pather Panchali",
        "Year": "1955",
        "Rated": "Not Rated",
        "Released": "26 Aug 1955",
        "Runtime": "125 min",
        "Genre": "Drama",
        "Director": "Satyajit Ray",
        "Writer": "Bibhutibhushan Bandyopadhyay, Satyajit Ray",
        "Actors": "Kanu Bannerjee, Karuna Bannerjee, Subir Banerjee",
        "Plot": "Impoverished priest Harihar Ray, dreaming of a better life for himself and his family, leaves his rural Bengal village in search of work.",
        "Language": "Bengali",
        "Country": "India",
        "Awards": "Nominated for 1 BAFTA Film Award11 wins & 2 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMmFkNDY5OTktNzY3Yy00OTFlLThhNjktOTRhMmZjZmIxYjAxXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "97%"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.4",
        "imdbVotes": "30,864",
        "imdbID": "tt0048473",
        "Type": "movie",
        "DVD": "17 Nov 2015",
        "BoxOffice": "$134,241",
        "id": 244
    },
    {
        "Title": "How to Train Your Dragon",
        "Year": "2010",
        "Rated": "PG",
        "Released": "26 Mar 2010",
        "Runtime": "98 min",
        "Genre": "Animation, Action, Adventure",
        "Director": "Dean DeBlois, Chris Sanders",
        "Writer": "William Davies, Dean DeBlois, Chris Sanders",
        "Actors": "Jay Baruchel, Gerard Butler, Christopher Mintz-Plasse",
        "Plot": "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Nominated for 2 Oscars. 25 wins & 63 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "99%"
            },
            {
                "Source": "Metacritic",
                "Value": "75/100"
            }
        ],
        "Metascore": "75",
        "imdbRating": "8.1",
        "imdbVotes": "714,424",
        "imdbID": "tt0892769",
        "Type": "movie",
        "DVD": "17 Aug 2010",
        "BoxOffice": "$217,581,231",
        "id": 245
    },
    {
        "Title": "The Wages of Fear",
        "Year": "1953",
        "Rated": "Not Rated",
        "Released": "16 Feb 1955",
        "Runtime": "131 min",
        "Genre": "Adventure, Drama, Thriller",
        "Director": "Henri-Georges Clouzot",
        "Writer": "Georges Arnaud, Henri-Georges Clouzot, Jérôme Géronimi",
        "Actors": "Yves Montand, Charles Vanel, Peter van Eyck",
        "Plot": "In a decrepit South American village, four men are hired to transport an urgent nitroglycerine shipment without the equipment that would make it safe.",
        "Language": "French, English, Spanish, German, Italian, Russian",
        "Country": "France, Italy",
        "Awards": "Won 1 BAFTA Film Award6 wins total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZDdkNzMwZmUtY2Q5MS00ZmM2LWJhYjItYTBjMWY0MGM4MDRjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "100%"
            },
            {
                "Source": "Metacritic",
                "Value": "85/100"
            }
        ],
        "Metascore": "85",
        "imdbRating": "8.2",
        "imdbVotes": "59,625",
        "imdbID": "tt0046268",
        "Type": "movie",
        "DVD": "25 Oct 2005",
        "BoxOffice": "N/A",
        "id": 246
    },
    {
        "Title": "Barry Lyndon",
        "Year": "1975",
        "Rated": "PG",
        "Released": "18 Dec 1975",
        "Runtime": "185 min",
        "Genre": "Adventure, Drama, History",
        "Director": "Stanley Kubrick",
        "Writer": "Stanley Kubrick, William Makepeace Thackeray",
        "Actors": "Ryan O'Neal, Marisa Berenson, Patrick Magee",
        "Plot": "An Irish rogue wins the heart of a rich widow and assumes her dead husband's aristocratic position in 18th-century England.",
        "Language": "English, German, French",
        "Country": "United Kingdom, United States",
        "Awards": "Won 4 Oscars. 19 wins & 15 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNmY0MWY2NDctZDdmMi00MjA1LTk0ZTQtZDMyZTQ1NTNlYzVjXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "88%"
            },
            {
                "Source": "Metacritic",
                "Value": "89/100"
            }
        ],
        "Metascore": "89",
        "imdbRating": "8.1",
        "imdbVotes": "162,988",
        "imdbID": "tt0072684",
        "Type": "movie",
        "DVD": "18 Aug 2008",
        "BoxOffice": "N/A",
        "id": 247
    },
    {
        "Title": "Memories of Murder",
        "Year": "2003",
        "Rated": "Not Rated",
        "Released": "02 May 2003",
        "Runtime": "132 min",
        "Genre": "Crime, Drama, Mystery",
        "Director": "Bong Joon Ho",
        "Writer": "Bong Joon Ho, Kwang-rim Kim, Sung-bo Shim",
        "Actors": "Kang-ho Song, Kim Sang-kyung, Roe-ha Kim",
        "Plot": "In a small Korean province in 1986, two detectives struggle with the case of multiple young women being found raped and murdered by an unknown culprit.",
        "Language": "Korean, English",
        "Country": "South Korea",
        "Awards": "33 wins & 5 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOGViNTg4YTktYTQ2Ni00MTU0LTk2NWUtMTI4OTc1YTM0NzQ2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Metacritic",
                "Value": "82/100"
            }
        ],
        "Metascore": "82",
        "imdbRating": "8.1",
        "imdbVotes": "170,092",
        "imdbID": "tt0353969",
        "Type": "movie",
        "DVD": "N/A",
        "BoxOffice": "$15,357",
        "id": 248
    },
    {
        "Title": "The Seventh Seal",
        "Year": "1957",
        "Rated": "Not Rated",
        "Released": "13 Oct 1958",
        "Runtime": "96 min",
        "Genre": "Drama, Fantasy, History",
        "Director": "Ingmar Bergman",
        "Writer": "Ingmar Bergman",
        "Actors": "Max von Sydow, Gunnar Björnstrand, Bengt Ekerot",
        "Plot": "A knight returning to Sweden after the Crusades seeks answers about life, death, and the existence of God as he plays chess against the Grim Reaper during the Black Plague.",
        "Language": "Swedish, Latin",
        "Country": "Sweden",
        "Awards": "10 wins & 2 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BM2I1ZWU4YjMtYzU0My00YmMzLWFmNTAtZDJhZGYwMmI3YWQ5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "94%"
            },
            {
                "Source": "Metacritic",
                "Value": "88/100"
            }
        ],
        "Metascore": "88",
        "imdbRating": "8.1",
        "imdbVotes": "180,754",
        "imdbID": "tt0050976",
        "Type": "movie",
        "DVD": "04 Dec 2007",
        "BoxOffice": "N/A",
        "id": 249
    },
    {
        "Title": "Klaus",
        "Year": "2019",
        "Rated": "PG",
        "Released": "15 Nov 2019",
        "Runtime": "96 min",
        "Genre": "Animation, Adventure, Comedy",
        "Director": "Sergio Pablos, Carlos Martínez López",
        "Writer": "Sergio Pablos, Jim Mahoney, Zach Lewis",
        "Actors": "Jason Schwartzman, J.K. Simmons, Rashida Jones",
        "Plot": "A simple act of kindness always sparks another, even in a frozen, faraway place. When Smeerensburg's new postman, Jesper, befriends toymaker Klaus, their gifts melt an age-old feud and deliver a sleigh full of holiday traditions.",
        "Language": "English, Saami",
        "Country": "Spain, United Kingdom",
        "Awards": "Nominated for 1 Oscar. 11 wins & 26 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMWYwOThjM2ItZGYxNy00NTQwLWFlZWEtM2MzM2Q5MmY3NDU5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "94%"
            },
            {
                "Source": "Metacritic",
                "Value": "65/100"
            }
        ],
        "Metascore": "65",
        "imdbRating": "8.2",
        "imdbVotes": "139,530",
        "imdbID": "tt4729430",
        "Type": "movie",
        "DVD": "15 Nov 2019",
        "BoxOffice": "N/A",
        "id": 250
    },
    {
        "Title": "Mad Max: Fury Road",
        "Year": "2015",
        "Rated": "R",
        "Released": "15 May 2015",
        "Runtime": "120 min",
        "Genre": "Action, Adventure, Sci-Fi",
        "Director": "George Miller",
        "Writer": "George Miller, Brendan McCarthy, Nick Lathouris",
        "Actors": "Tom Hardy, Charlize Theron, Nicholas Hoult",
        "Plot": "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        "Language": "English, Russian",
        "Country": "Australia, United States",
        "Awards": "Won 6 Oscars. 247 wins & 233 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "97%"
            },
            {
                "Source": "Metacritic",
                "Value": "90/100"
            }
        ],
        "Metascore": "90",
        "imdbRating": "8.1",
        "imdbVotes": "960,998",
        "imdbID": "tt1392190",
        "Type": "movie",
        "DVD": "01 Sep 2015",
        "BoxOffice": "$154,109,060",
        "id": 251
    },
    {
        "Title": "The Big Lebowski",
        "Year": "1998",
        "Rated": "R",
        "Released": "06 Mar 1998",
        "Runtime": "117 min",
        "Genre": "Comedy, Crime",
        "Director": "Joel Coen, Ethan Coen",
        "Writer": "Ethan Coen, Joel Coen",
        "Actors": "Jeff Bridges, John Goodman, Julianne Moore",
        "Plot": "Ultimate L.A. slacker Jeff \"The Dude\" Lebowski, mistaken for a millionaire of the same name, seeks restitution for a rug ruined by debt collectors, enlisting his bowling buddies for help while trying to find the millionaire's missing",
        "Language": "English, German, Hebrew, Spanish",
        "Country": "United States, United Kingdom",
        "Awards": "5 wins & 18 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ0NjUzMDMyOF5BMl5BanBnXkFtZTgwODA1OTU0MDE@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "83%"
            },
            {
                "Source": "Metacritic",
                "Value": "71/100"
            }
        ],
        "Metascore": "71",
        "imdbRating": "8.1",
        "imdbVotes": "785,040",
        "imdbID": "tt0118715",
        "Type": "movie",
        "DVD": "18 Oct 2005",
        "BoxOffice": "$18,254,458",
        "id": 252
    },
    {
        "Title": "Wild Tales",
        "Year": "2014",
        "Rated": "R",
        "Released": "21 Aug 2014",
        "Runtime": "122 min",
        "Genre": "Comedy, Drama, Thriller",
        "Director": "Damián Szifron",
        "Writer": "Germán Servidio, Damián Szifron",
        "Actors": "Darío Grandinetti, María Marull, Mónica Villa",
        "Plot": "Six short stories that explore the extremities of human behavior involving people in distress.",
        "Language": "Spanish",
        "Country": "Argentina, Spain, France, United Kingdom",
        "Awards": "Nominated for 1 Oscar. 49 wins & 58 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNGQzY2Y0MTgtMDA4OC00NjM3LWI0ZGQtNTJlM2UxZDQxZjI0XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "94%"
            },
            {
                "Source": "Metacritic",
                "Value": "77/100"
            }
        ],
        "Metascore": "77",
        "imdbRating": "8.1",
        "imdbVotes": "192,368",
        "imdbID": "tt3011894",
        "Type": "movie",
        "DVD": "16 Jun 2015",
        "BoxOffice": "$3,106,530",
        "id": 253
    },
    {
        "Title": "Monsters, Inc.",
        "Year": "2001",
        "Rated": "G",
        "Released": "02 Nov 2001",
        "Runtime": "92 min",
        "Genre": "Animation, Adventure, Comedy",
        "Director": "Pete Docter, David Silverman, Lee Unkrich",
        "Writer": "Pete Docter, Jill Culton, Jeff Pidgeon",
        "Actors": "Billy Crystal, John Goodman, Mary Gibbs",
        "Plot": "In order to power the city, monsters have to scare children so that they scream. However, the children are toxic to the monsters, and after a child gets through, two monsters realize things may not be what they think.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 1 Oscar. 15 wins & 38 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "96%"
            },
            {
                "Source": "Metacritic",
                "Value": "79/100"
            }
        ],
        "Metascore": "79",
        "imdbRating": "8.1",
        "imdbVotes": "875,550",
        "imdbID": "tt0198781",
        "Type": "movie",
        "DVD": "17 Sep 2002",
        "BoxOffice": "$290,642,256",
        "id": 254
    },
    {
        "Title": "Mary and Max",
        "Year": "2009",
        "Rated": "Not Rated",
        "Released": "12 Mar 2010",
        "Runtime": "92 min",
        "Genre": "Animation, Comedy, Drama",
        "Director": "Adam Elliot",
        "Writer": "Adam Elliot",
        "Actors": "Toni Collette, Philip Seymour Hoffman, Eric Bana",
        "Plot": "A tale of friendship between two unlikely pen pals: Mary, a lonely, eight-year-old girl living in the suburbs of Melbourne, and Max, a forty-four-year old, severely obese man living in New York.",
        "Language": "English, Yiddish",
        "Country": "Australia",
        "Awards": "5 wins & 9 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDgzYjQwMDMtNGUzYi00MTRmLWIyMGMtNjE1OGZkNzY2YWIzL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "95%"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.1",
        "imdbVotes": "174,213",
        "imdbID": "tt0978762",
        "Type": "movie",
        "DVD": "22 Dec 2009",
        "BoxOffice": "N/A",
        "id": 255
    },
    {
        "Title": "Jaws",
        "Year": "1975",
        "Rated": "PG",
        "Released": "20 Jun 1975",
        "Runtime": "124 min",
        "Genre": "Adventure, Thriller",
        "Director": "Steven Spielberg",
        "Writer": "Peter Benchley, Carl Gottlieb",
        "Actors": "Roy Scheider, Robert Shaw, Richard Dreyfuss",
        "Plot": "When a killer shark unleashes chaos on a beach community off Long Island, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 3 Oscars. 15 wins & 20 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "98%"
            },
            {
                "Source": "Metacritic",
                "Value": "87/100"
            }
        ],
        "Metascore": "87",
        "imdbRating": "8.1",
        "imdbVotes": "577,967",
        "imdbID": "tt0073195",
        "Type": "movie",
        "DVD": "14 Jun 2005",
        "BoxOffice": "$260,758,300",
        "id": 256
    },
    {
        "Title": "The Passion of Joan of Arc",
        "Year": "1928",
        "Rated": "Passed",
        "Released": "25 Oct 1928",
        "Runtime": "114 min",
        "Genre": "Biography, Drama, History",
        "Director": "Carl Theodor Dreyer",
        "Writer": "Joseph Delteil, Carl Theodor Dreyer",
        "Actors": "Maria Falconetti, Eugene Silvain, André Berley",
        "Plot": "In 1431, Jeanne d'Arc is placed on trial on charges of heresy. The ecclesiastical jurists attempt to force Jeanne to recant her claims of holy visions.",
        "Language": "None, French",
        "Country": "France",
        "Awards": "5 wins & 2 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjBjNDJiYTUtOWY0OS00OGVmLTg2YzctMTE0NzVhODM1ZWJmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "98%"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.1",
        "imdbVotes": "53,032",
        "imdbID": "tt0019254",
        "Type": "movie",
        "DVD": "09 Nov 1999",
        "BoxOffice": "$21,877",
        "id": 257
    },
    {
        "Title": "Hotel Rwanda",
        "Year": "2004",
        "Rated": "PG-13",
        "Released": "04 Feb 2005",
        "Runtime": "121 min",
        "Genre": "Biography, Drama, History",
        "Director": "Terry George",
        "Writer": "Keir Pearson, Terry George",
        "Actors": "Don Cheadle, Sophie Okonedo, Joaquin Phoenix",
        "Plot": "Paul Rusesabagina, a hotel manager, houses over a thousand Tutsi refugees during their struggle against the Hutu militia in Rwanda, Africa.",
        "Language": "English, French, Kinyarwanda",
        "Country": "United Kingdom, South Africa, Italy, United States",
        "Awards": "Nominated for 3 Oscars. 16 wins & 49 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZGJjYmIzZmQtNWE4Yy00ZGVmLWJkZGEtMzUzNmQ4ZWFlMjRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "91%"
            },
            {
                "Source": "Metacritic",
                "Value": "79/100"
            }
        ],
        "Metascore": "79",
        "imdbRating": "8.1",
        "imdbVotes": "349,230",
        "imdbID": "tt0395169",
        "Type": "movie",
        "DVD": "12 Apr 2005",
        "BoxOffice": "$23,530,892",
        "id": 258
    },
    {
        "Title": "Rocky",
        "Year": "1976",
        "Rated": "PG",
        "Released": "03 Dec 1976",
        "Runtime": "120 min",
        "Genre": "Drama, Sport",
        "Director": "John G. Avildsen",
        "Writer": "Sylvester Stallone",
        "Actors": "Sylvester Stallone, Talia Shire, Burt Young",
        "Plot": "A small-time Philadelphia boxer gets a supremely rare chance to fight the world heavyweight champion in a bout in which he strives to go the distance for his self-respect.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 3 Oscars. 20 wins & 22 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTY5MDMzODUyOF5BMl5BanBnXkFtZTcwMTQ3NTMyNA@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "91%"
            },
            {
                "Source": "Metacritic",
                "Value": "70/100"
            }
        ],
        "Metascore": "70",
        "imdbRating": "8.1",
        "imdbVotes": "555,224",
        "imdbID": "tt0075148",
        "Type": "movie",
        "DVD": "08 Feb 2005",
        "BoxOffice": "$117,235,147",
        "id": 259
    },
    {
        "Title": "Dead Poets Society",
        "Year": "1989",
        "Rated": "PG",
        "Released": "09 Jun 1989",
        "Runtime": "128 min",
        "Genre": "Comedy, Drama",
        "Director": "Peter Weir",
        "Writer": "Tom Schulman",
        "Actors": "Robin Williams, Robert Sean Leonard, Ethan Hawke",
        "Plot": "Maverick teacher John Keating uses poetry to embolden his boarding school students to new heights of self-expression.",
        "Language": "English, Latin",
        "Country": "United States",
        "Awards": "Won 1 Oscar. 20 wins & 19 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOGYwYWNjMzgtNGU4ZC00NWQ2LWEwZjUtMzE1Zjc3NjY3YTU1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "85%"
            },
            {
                "Source": "Metacritic",
                "Value": "79/100"
            }
        ],
        "Metascore": "79",
        "imdbRating": "8.1",
        "imdbVotes": "467,597",
        "imdbID": "tt0097165",
        "Type": "movie",
        "DVD": "01 Jul 2003",
        "BoxOffice": "$95,860,116",
        "id": 260
    },
    {
        "Title": "Tokyo Story",
        "Year": "1953",
        "Rated": "Not Rated",
        "Released": "13 Mar 1972",
        "Runtime": "136 min",
        "Genre": "Drama",
        "Director": "Yasujirô Ozu",
        "Writer": "Kôgo Noda, Yasujirô Ozu",
        "Actors": "Chishû Ryû, Chieko Higashiyama, Sô Yamamura",
        "Plot": "An old couple visit their children and grandchildren in the city, but receive little attention.",
        "Language": "Japanese, English",
        "Country": "Japan",
        "Awards": "3 wins",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYWQ4ZTRiODktNjAzZC00Nzg1LTk1YWQtNDFmNDI0NmZiNGIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "100%"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.2",
        "imdbVotes": "59,895",
        "imdbID": "tt0046438",
        "Type": "movie",
        "DVD": "04 Nov 2003",
        "BoxOffice": "N/A",
        "id": 261
    },
    {
        "Title": "Platoon",
        "Year": "1986",
        "Rated": "R",
        "Released": "06 Feb 1987",
        "Runtime": "120 min",
        "Genre": "Drama, War",
        "Director": "Oliver Stone",
        "Writer": "Oliver Stone",
        "Actors": "Charlie Sheen, Tom Berenger, Willem Dafoe",
        "Plot": "Chris Taylor, a neophyte recruit in Vietnam, finds himself caught in a battle of wills between two sergeants, one good and the other evil. A shrewd examination of the brutality of war and the duality of man in conflict.",
        "Language": "English, Vietnamese",
        "Country": "United States, United Kingdom",
        "Awards": "Won 4 Oscars. 24 wins & 15 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzRjZjdlMjQtODVkYS00N2YzLWJlYWYtMGVlN2E5MWEwMWQzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "87%"
            },
            {
                "Source": "Metacritic",
                "Value": "92/100"
            }
        ],
        "Metascore": "92",
        "imdbRating": "8.1",
        "imdbVotes": "404,439",
        "imdbID": "tt0091763",
        "Type": "movie",
        "DVD": "15 Aug 2000",
        "BoxOffice": "$138,530,565",
        "id": 262
    },
    {
        "Title": "Ford v Ferrari",
        "Year": "2019",
        "Rated": "PG-13",
        "Released": "15 Nov 2019",
        "Runtime": "152 min",
        "Genre": "Action, Biography, Drama",
        "Director": "James Mangold",
        "Writer": "Jez Butterworth, John-Henry Butterworth, Jason Keller",
        "Actors": "Matt Damon, Christian Bale, Jon Bernthal",
        "Plot": "American car designer Carroll Shelby and driver Ken Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order to defeat Ferrari at the 24 Hours of Le Mans in 1966.",
        "Language": "English, Italian, French, Japanese",
        "Country": "United States",
        "Awards": "Won 2 Oscars. 25 wins & 91 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BM2UwMDVmMDItM2I2Yi00NGZmLTk4ZTUtY2JjNTQ3OGQ5ZjM2XkEyXkFqcGdeQXVyMTA1OTYzOTUx._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "92%"
            },
            {
                "Source": "Metacritic",
                "Value": "81/100"
            }
        ],
        "Metascore": "81",
        "imdbRating": "8.1",
        "imdbVotes": "360,390",
        "imdbID": "tt1950186",
        "Type": "movie",
        "DVD": "15 Nov 2019",
        "BoxOffice": "$117,624,357",
        "id": 263
    },
    {
        "Title": "The Terminator",
        "Year": "1984",
        "Rated": "R",
        "Released": "26 Oct 1984",
        "Runtime": "107 min",
        "Genre": "Action, Sci-Fi",
        "Director": "James Cameron",
        "Writer": "James Cameron, Gale Anne Hurd, William Wisher",
        "Actors": "Arnold Schwarzenegger, Linda Hamilton, Michael Biehn",
        "Plot": "A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, sent from the same year, which has been programmed to execute a young woman whose unborn son is the key to humanity's future salvation",
        "Language": "English, Spanish",
        "Country": "United Kingdom, United States",
        "Awards": "8 wins & 6 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "100%"
            },
            {
                "Source": "Metacritic",
                "Value": "84/100"
            }
        ],
        "Metascore": "84",
        "imdbRating": "8.1",
        "imdbVotes": "836,766",
        "imdbID": "tt0088247",
        "Type": "movie",
        "DVD": "02 Oct 2001",
        "BoxOffice": "$38,371,200",
        "id": 264
    },
    {
        "Title": "Stand by Me",
        "Year": "1986",
        "Rated": "R",
        "Released": "22 Aug 1986",
        "Runtime": "89 min",
        "Genre": "Adventure, Drama",
        "Director": "Rob Reiner",
        "Writer": "Stephen King, Raynold Gideon, Bruce A. Evans",
        "Actors": "Wil Wheaton, River Phoenix, Corey Feldman",
        "Plot": "After the death of one of his friends, a writer recounts a childhood journey with his friends to find the body of a missing boy.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Nominated for 1 Oscar. 5 wins & 11 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODJmY2Y2OGQtMDg2My00N2Q3LWJmZTUtYTc2ODBjZDVlNDlhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "91%"
            },
            {
                "Source": "Metacritic",
                "Value": "75/100"
            }
        ],
        "Metascore": "75",
        "imdbRating": "8.1",
        "imdbVotes": "390,678",
        "imdbID": "tt0092005",
        "Type": "movie",
        "DVD": "21 Oct 2003",
        "BoxOffice": "$52,287,414",
        "id": 265
    },
    {
        "Title": "Rush",
        "Year": "2013",
        "Rated": "R",
        "Released": "27 Sep 2013",
        "Runtime": "123 min",
        "Genre": "Action, Biography, Drama",
        "Director": "Ron Howard",
        "Writer": "Peter Morgan",
        "Actors": "Daniel Brühl, Chris Hemsworth, Olivia Wilde",
        "Plot": "The merciless 1970s rivalry between Formula One rivals James Hunt and Niki Lauda.",
        "Language": "English, German, Italian, French, Spanish",
        "Country": "United Kingdom, United States",
        "Awards": "Won 1 BAFTA Film Award6 wins & 65 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOWEwODJmZDItYTNmZC00OGM4LThlNDktOTQzZjIzMGQxODA4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "89%"
            },
            {
                "Source": "Metacritic",
                "Value": "74/100"
            }
        ],
        "Metascore": "74",
        "imdbRating": "8.1",
        "imdbVotes": "465,490",
        "imdbID": "tt1979320",
        "Type": "movie",
        "DVD": "28 Jan 2014",
        "BoxOffice": "$26,947,624",
        "id": 266
    },
    {
        "Title": "Into the Wild",
        "Year": "2007",
        "Rated": "R",
        "Released": "19 Oct 2007",
        "Runtime": "148 min",
        "Genre": "Adventure, Biography, Drama",
        "Director": "Sean Penn",
        "Writer": "Sean Penn, Jon Krakauer",
        "Actors": "Emile Hirsch, Vince Vaughn, Catherine Keener",
        "Plot": "After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, C",
        "Language": "English, Danish",
        "Country": "United States",
        "Awards": "Nominated for 2 Oscars. 23 wins & 106 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTAwNDEyODU1MjheQTJeQWpwZ15BbWU2MDc3NDQwNw@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "83%"
            },
            {
                "Source": "Metacritic",
                "Value": "73/100"
            }
        ],
        "Metascore": "73",
        "imdbRating": "8.1",
        "imdbVotes": "608,381",
        "imdbID": "tt0758758",
        "Type": "movie",
        "DVD": "04 Mar 2008",
        "BoxOffice": "$18,354,356",
        "id": 267
    },
    {
        "Title": "Logan",
        "Year": "2017",
        "Rated": "R",
        "Released": "03 Mar 2017",
        "Runtime": "137 min",
        "Genre": "Action, Drama, Sci-Fi",
        "Director": "James Mangold",
        "Writer": "James Mangold, Scott Frank, Michael Green",
        "Actors": "Hugh Jackman, Patrick Stewart, Dafne Keen",
        "Plot": "In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.",
        "Language": "English, Spanish",
        "Country": "United States",
        "Awards": "Nominated for 1 Oscar. 28 wins & 80 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "94%"
            },
            {
                "Source": "Metacritic",
                "Value": "77/100"
            }
        ],
        "Metascore": "77",
        "imdbRating": "8.1",
        "imdbVotes": "720,920",
        "imdbID": "tt3315342",
        "Type": "movie",
        "DVD": "20 Jun 2017",
        "BoxOffice": "$226,277,068",
        "id": 268
    },
    {
        "Title": "The Wizard of Oz",
        "Year": "1939",
        "Rated": "G",
        "Released": "25 Aug 1939",
        "Runtime": "102 min",
        "Genre": "Adventure, Family, Fantasy",
        "Director": "Victor Fleming, George Cukor, Mervyn LeRoy",
        "Writer": "Noel Langley, Florence Ryerson, Edgar Allan Woolf",
        "Actors": "Judy Garland, Frank Morgan, Ray Bolger",
        "Plot": "Young Dorothy Gale and her dog are swept away by a tornado from their Kansas farm to the magical Land of Oz, and embark on a quest with three new friends to see the Wizard, who can return her to her home and fulfill the others' wishe",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 2 Oscars. 13 wins & 16 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjUyMTc4MDExMV5BMl5BanBnXkFtZTgwNDg0NDIwMjE@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "98%"
            },
            {
                "Source": "Metacritic",
                "Value": "92/100"
            }
        ],
        "Metascore": "92",
        "imdbRating": "8.1",
        "imdbVotes": "386,540",
        "imdbID": "tt0032138",
        "Type": "movie",
        "DVD": "12 Aug 2003",
        "BoxOffice": "$24,668,669",
        "id": 269
    },
    {
        "Title": "Spotlight",
        "Year": "2015",
        "Rated": "R",
        "Released": "20 Nov 2015",
        "Runtime": "129 min",
        "Genre": "Biography, Crime, Drama",
        "Director": "Tom McCarthy",
        "Writer": "Josh Singer, Tom McCarthy",
        "Actors": "Mark Ruffalo, Michael Keaton, Rachel McAdams",
        "Plot": "The true story of how the Boston Globe uncovered the massive scandal of child molestation and cover-up within the local Catholic Archdiocese, shaking the entire Catholic Church to its core.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 2 Oscars. 124 wins & 143 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjIyOTM5OTIzNV5BMl5BanBnXkFtZTgwMDkzODE2NjE@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "97%"
            },
            {
                "Source": "Metacritic",
                "Value": "93/100"
            }
        ],
        "Metascore": "93",
        "imdbRating": "8.1",
        "imdbVotes": "455,632",
        "imdbID": "tt1895587",
        "Type": "movie",
        "DVD": "23 Feb 2016",
        "BoxOffice": "$45,055,776",
        "id": 270
    },
    {
        "Title": "Network",
        "Year": "1976",
        "Rated": "R",
        "Released": "27 Nov 1976",
        "Runtime": "121 min",
        "Genre": "Drama",
        "Director": "Sidney Lumet",
        "Writer": "Paddy Chayefsky",
        "Actors": "Faye Dunaway, William Holden, Peter Finch",
        "Plot": "A television network cynically exploits a deranged former anchor's ravings and revelations about the news media for its own profit, but finds that his message may be difficult to control.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 4 Oscars. 20 wins & 26 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZGNjYjM2MzItZGQzZi00NmY3LTgxOGUtMTQ2MWQxNWQ2MmMwXkEyXkFqcGdeQXVyNzM0MTUwNTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "92%"
            },
            {
                "Source": "Metacritic",
                "Value": "83/100"
            }
        ],
        "Metascore": "83",
        "imdbRating": "8.1",
        "imdbVotes": "156,160",
        "imdbID": "tt0074958",
        "Type": "movie",
        "DVD": "06 May 2005",
        "BoxOffice": "$23,689,877",
        "id": 271
    },
    {
        "Title": "Groundhog Day",
        "Year": "1993",
        "Rated": "PG",
        "Released": "12 Feb 1993",
        "Runtime": "101 min",
        "Genre": "Comedy, Drama, Fantasy",
        "Director": "Harold Ramis",
        "Writer": "Danny Rubin, Harold Ramis",
        "Actors": "Bill Murray, Andie MacDowell, Chris Elliott",
        "Plot": "A self-centered Pittsburgh weatherman finds himself inexplicably trapped in a small town as he lives the same day over and over again.",
        "Language": "English, French, Italian",
        "Country": "United States",
        "Awards": "Won 1 BAFTA Film Award7 wins & 17 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWIxNzM5YzQtY2FmMS00Yjc3LWI1ZjUtNGVjMjMzZTIxZTIxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "97%"
            },
            {
                "Source": "Metacritic",
                "Value": "72/100"
            }
        ],
        "Metascore": "72",
        "imdbRating": "8.1",
        "imdbVotes": "610,206",
        "imdbID": "tt0107048",
        "Type": "movie",
        "DVD": "17 Jan 2006",
        "BoxOffice": "$71,107,962",
        "id": 272
    },
    {
        "Title": "Ratatouille",
        "Year": "2007",
        "Rated": "G",
        "Released": "29 Jun 2007",
        "Runtime": "111 min",
        "Genre": "Animation, Adventure, Comedy",
        "Director": "Brad Bird, Jan Pinkava",
        "Writer": "Brad Bird, Jan Pinkava, Jim Capobianco",
        "Actors": "Brad Garrett, Lou Romano, Patton Oswalt",
        "Plot": "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous Paris restaurant.",
        "Language": "English, French",
        "Country": "United States",
        "Awards": "Won 1 Oscar. 67 wins & 42 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "96%"
            },
            {
                "Source": "Metacritic",
                "Value": "96/100"
            }
        ],
        "Metascore": "96",
        "imdbRating": "8.1",
        "imdbVotes": "694,110",
        "imdbID": "tt0382932",
        "Type": "movie",
        "DVD": "06 Nov 2007",
        "BoxOffice": "$206,445,654",
        "id": 273
    },
    {
        "Title": "The Exorcist",
        "Year": "1973",
        "Rated": "R",
        "Released": "26 Dec 1973",
        "Runtime": "122 min",
        "Genre": "Horror",
        "Director": "William Friedkin",
        "Writer": "William Peter Blatty",
        "Actors": "Ellen Burstyn, Max von Sydow, Linda Blair",
        "Plot": "When a 12-year-old girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her.",
        "Language": "English, Latin, Greek, French, German, Arabic, Kurdish",
        "Country": "United States",
        "Awards": "Won 2 Oscars. 16 wins & 17 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjhmMGMxZDYtMTkyNy00YWVmLTgyYmUtYTU3ZjcwNTBjN2I1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "83%"
            },
            {
                "Source": "Metacritic",
                "Value": "81/100"
            }
        ],
        "Metascore": "81",
        "imdbRating": "8.1",
        "imdbVotes": "387,487",
        "imdbID": "tt0070047",
        "Type": "movie",
        "DVD": "23 Nov 1999",
        "BoxOffice": "$233,005,644",
        "id": 274
    },
    {
        "Title": "Hachi: A Dog's Tale",
        "Year": "2009",
        "Rated": "G",
        "Released": "12 Mar 2010",
        "Runtime": "93 min",
        "Genre": "Biography, Drama, Family",
        "Director": "Lasse Hallström",
        "Writer": "Stephen P. Lindsey, Kaneto Shindô",
        "Actors": "Richard Gere, Joan Allen, Cary-Hiroyuki Tagawa",
        "Plot": "A college professor bonds with an abandoned dog he takes into his home.",
        "Language": "English, Japanese",
        "Country": "United Kingdom, United States",
        "Awards": "1 nomination",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzE4NDg5OWMtMzg3NC00ZDRjLTllMDMtZTRjNWZmNjBmMGZlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "64%"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.1",
        "imdbVotes": "275,172",
        "imdbID": "tt1028532",
        "Type": "movie",
        "DVD": "09 Mar 2010",
        "BoxOffice": "N/A",
        "id": 275
    },
    {
        "Title": "The Incredibles",
        "Year": "2004",
        "Rated": "PG",
        "Released": "05 Nov 2004",
        "Runtime": "115 min",
        "Genre": "Animation, Action, Adventure",
        "Director": "Brad Bird",
        "Writer": "Brad Bird",
        "Actors": "Craig T. Nelson, Samuel L. Jackson, Holly Hunter",
        "Plot": "A family of undercover superheroes, while trying to live the quiet suburban life, are forced into action to save the world.",
        "Language": "English, French",
        "Country": "United States",
        "Awards": "Won 2 Oscars. 67 wins & 56 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.0/10"
            },
            {
                "Source": "Metacritic",
                "Value": "90/100"
            }
        ],
        "Metascore": "90",
        "imdbRating": "8.0",
        "imdbVotes": "702,543",
        "imdbID": "tt0317705",
        "Type": "movie",
        "DVD": "29 Mar 2005",
        "BoxOffice": "$261,441,092",
        "id": 276
    },
    {
        "Title": "Before Sunset",
        "Year": "2004",
        "Rated": "R",
        "Released": "30 Jul 2004",
        "Runtime": "80 min",
        "Genre": "Drama, Romance",
        "Director": "Richard Linklater",
        "Writer": "Richard Linklater, Julie Delpy, Ethan Hawke",
        "Actors": "Ethan Hawke, Julie Delpy, Vernon Dobtcheff",
        "Plot": "Nine years after Jesse and Celine first met, they encounter each other again on the French leg of Jesse's book tour.",
        "Language": "English, French",
        "Country": "United States, France",
        "Awards": "Nominated for 1 Oscar. 9 wins & 32 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ1MjAwNTM5Ml5BMl5BanBnXkFtZTYwNDM0MTc3._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "94%"
            },
            {
                "Source": "Metacritic",
                "Value": "90/100"
            }
        ],
        "Metascore": "90",
        "imdbRating": "8.1",
        "imdbVotes": "255,084",
        "imdbID": "tt0381681",
        "Type": "movie",
        "DVD": "27 Sep 2005",
        "BoxOffice": "$5,820,649",
        "id": 277
    },
    {
        "Title": "The Best Years of Our Lives",
        "Year": "1946",
        "Rated": "Approved",
        "Released": "29 May 1947",
        "Runtime": "170 min",
        "Genre": "Drama, Romance, War",
        "Director": "William Wyler",
        "Writer": "Robert E. Sherwood, MacKinlay Kantor",
        "Actors": "Myrna Loy, Dana Andrews, Fredric March",
        "Plot": "Three World War II veterans, two of them traumatized or disabled, return home to the American midwest to discover that they and their families have been irreparably changed.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 7 Oscars. 21 wins & 4 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BY2RmNTRjYzctODI4Ni00MzQyLWEyNTAtNjU0N2JkMTNhNjJkXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "98%"
            },
            {
                "Source": "Metacritic",
                "Value": "93/100"
            }
        ],
        "Metascore": "93",
        "imdbRating": "8.1",
        "imdbVotes": "62,610",
        "imdbID": "tt0036868",
        "Type": "movie",
        "DVD": "18 Jul 2000",
        "BoxOffice": "$23,650,000",
        "id": 278
    },
    {
        "Title": "Dersu Uzala",
        "Year": "1975",
        "Rated": "G",
        "Released": "20 Dec 1977",
        "Runtime": "142 min",
        "Genre": "Adventure, Biography, Drama",
        "Director": "Akira Kurosawa",
        "Writer": "Akira Kurosawa, Yuriy Nagibin, Vladimir Arsenev",
        "Actors": "Maksim Munzuk, Yuriy Solomin, Mikhail Bychkov",
        "Plot": "The Russian army sends an explorer on an expedition to the snowy Siberian wilderness where he makes friends with a seasoned local hunter.",
        "Language": "Russian, Chinese",
        "Country": "Soviet Union, Japan",
        "Awards": "Won 1 Oscar. 8 wins & 2 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYWY0OWJlZTgtMWUzNy00MGJhLTk5YzQtNmY5MDEwOTIxNjMyXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "73%"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.3",
        "imdbVotes": "27,789",
        "imdbID": "tt0071411",
        "Type": "movie",
        "DVD": "22 Mar 2007",
        "BoxOffice": "N/A",
        "id": 279
    },
    {
        "Title": "Rebecca",
        "Year": "1940",
        "Rated": "Approved",
        "Released": "12 Apr 1940",
        "Runtime": "130 min",
        "Genre": "Drama, Film-Noir, Mystery",
        "Director": "Alfred Hitchcock",
        "Writer": "Daphne Du Maurier, Robert E. Sherwood, Joan Harrison",
        "Actors": "Laurence Olivier, Joan Fontaine, George Sanders",
        "Plot": "A self-conscious woman juggles adjusting to her new role as an aristocrat's wife and avoiding being intimidated by his first wife's spectral presence.",
        "Language": "English, French",
        "Country": "United States",
        "Awards": "Won 2 Oscars. 7 wins & 10 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYTcxYWExOTMtMWFmYy00ZjgzLWI0YjktNWEzYzJkZTg0NDdmL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "99%"
            },
            {
                "Source": "Metacritic",
                "Value": "86/100"
            }
        ],
        "Metascore": "86",
        "imdbRating": "8.1",
        "imdbVotes": "134,117",
        "imdbID": "tt0032976",
        "Type": "movie",
        "DVD": "14 Oct 2008",
        "BoxOffice": "N/A",
        "id": 280
    },
    {
        "Title": "My Father and My Son",
        "Year": "2005",
        "Rated": "Not Rated",
        "Released": "18 Nov 2005",
        "Runtime": "112 min",
        "Genre": "Drama, Family",
        "Director": "Cagan Irmak",
        "Writer": "Cagan Irmak",
        "Actors": "Eser Sariyar, Çetin Tekindor, Fikret Kuskan",
        "Plot": "The family of a left-wing journalist is torn apart after the military coup of Turkey in 1980.",
        "Language": "Turkish",
        "Country": "Turkey",
        "Awards": "14 wins & 7 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjAzMzEwYzctNjc1MC00Nzg5LWFmMGItMTgzYmMyNTY2OTQ4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.3",
        "imdbVotes": "85,074",
        "imdbID": "tt0476735",
        "Type": "movie",
        "DVD": "01 May 2018",
        "BoxOffice": "N/A",
        "id": 281
    },
    {
        "Title": "Cool Hand Luke",
        "Year": "1967",
        "Rated": "GP",
        "Released": "01 Nov 1967",
        "Runtime": "127 min",
        "Genre": "Crime, Drama",
        "Director": "Stuart Rosenberg",
        "Writer": "Donn Pearce, Frank Pierson, Hal Dresner",
        "Actors": "Paul Newman, George Kennedy, Strother Martin",
        "Plot": "A laid back Southern man is sentenced to two years in a rural prison, but refuses to conform.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 1 Oscar. 4 wins & 10 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjcwNTQ3Y2EtMjdmZi00ODBhLWFhNzQtOTc3MWU5NTZlMDViXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "100%"
            },
            {
                "Source": "Metacritic",
                "Value": "92/100"
            }
        ],
        "Metascore": "92",
        "imdbRating": "8.1",
        "imdbVotes": "173,792",
        "imdbID": "tt0061512",
        "Type": "movie",
        "DVD": "24 Jun 1997",
        "BoxOffice": "N/A",
        "id": 282
    },
    {
        "Title": "The Grapes of Wrath",
        "Year": "1940",
        "Rated": "Passed",
        "Released": "15 Mar 1940",
        "Runtime": "129 min",
        "Genre": "Drama",
        "Director": "John Ford",
        "Writer": "Nunnally Johnson, John Steinbeck",
        "Actors": "Henry Fonda, Jane Darwell, John Carradine",
        "Plot": "An Oklahoma family driven off their farm by the poverty and hopelessness of the Dust Bowl joins the westward migration to California, suffering the misfortunes of the homeless in the Great Depression.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 2 Oscars. 10 wins & 5 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzJiOGI2MjctYjUyMS00ZjkzLWE2ZmUtOTg4NTZkOTNhZDc1L2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "100%"
            },
            {
                "Source": "Metacritic",
                "Value": "96/100"
            }
        ],
        "Metascore": "96",
        "imdbRating": "8.1",
        "imdbVotes": "91,044",
        "imdbID": "tt0032551",
        "Type": "movie",
        "DVD": "06 Apr 2004",
        "BoxOffice": "N/A",
        "id": 283
    },
    {
        "Title": "The Battle of Algiers",
        "Year": "1966",
        "Rated": "Not Rated",
        "Released": "20 Sep 1967",
        "Runtime": "121 min",
        "Genre": "Drama, War",
        "Director": "Gillo Pontecorvo",
        "Writer": "Franco Solinas, Gillo Pontecorvo",
        "Actors": "Brahim Hadjadj, Jean Martin, Yacef Saadi",
        "Plot": "In the 1950s, fear and violence escalate as the people of Algiers fight for independence from the French government.",
        "Language": "Arabic, French, English",
        "Country": "Italy, Algeria",
        "Awards": "Nominated for 3 Oscars. 9 wins & 9 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BN2M4YTA4ZTEtN2EyNy00YTlmLWE4YzYtYjYyYjRkMWM4ZDM0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "99%"
            },
            {
                "Source": "Metacritic",
                "Value": "96/100"
            }
        ],
        "Metascore": "96",
        "imdbRating": "8.1",
        "imdbVotes": "58,676",
        "imdbID": "tt0058946",
        "Type": "movie",
        "DVD": "19 Oct 2004",
        "BoxOffice": "$879,794",
        "id": 284
    },
    {
        "Title": "Pirates of the Caribbean: The Curse of the Black Pearl",
        "Year": "2003",
        "Rated": "PG-13",
        "Released": "09 Jul 2003",
        "Runtime": "143 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "Gore Verbinski",
        "Writer": "Ted Elliott, Terry Rossio, Stuart Beattie",
        "Actors": "Johnny Depp, Geoffrey Rush, Orlando Bloom",
        "Plot": "Blacksmith Will Turner teams up with eccentric pirate \"Captain\" Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Nominated for 5 Oscars. 38 wins & 104 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.0/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "80%"
            },
            {
                "Source": "Metacritic",
                "Value": "63/100"
            }
        ],
        "Metascore": "63",
        "imdbRating": "8.0",
        "imdbVotes": "1,070,277",
        "imdbID": "tt0325980",
        "Type": "movie",
        "DVD": "25 Jan 2005",
        "BoxOffice": "$305,413,918",
        "id": 285
    },
    {
        "Title": "To Be or Not to Be",
        "Year": "1942",
        "Rated": "Passed",
        "Released": "06 Mar 1942",
        "Runtime": "99 min",
        "Genre": "Comedy, Romance, War",
        "Director": "Ernst Lubitsch",
        "Writer": "Melchior Lengyel, Edwin Justus Mayer, Ernst Lubitsch",
        "Actors": "Carole Lombard, Jack Benny, Robert Stack",
        "Plot": "During the Nazi occupation of Poland, an acting troupe becomes embroiled in a Polish soldier's efforts to track down a German spy.",
        "Language": "English, German",
        "Country": "United States",
        "Awards": "Nominated for 1 Oscar. 2 wins & 2 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYTIwNDcyMjktMTczMy00NDM5LTlhNDEtMmE3NGVjOTM2YjQ3XkEyXkFqcGdeQXVyNjc0MzMzNjA@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "96%"
            },
            {
                "Source": "Metacritic",
                "Value": "86/100"
            }
        ],
        "Metascore": "86",
        "imdbRating": "8.2",
        "imdbVotes": "35,646",
        "imdbID": "tt0035446",
        "Type": "movie",
        "DVD": "27 Aug 2013",
        "BoxOffice": "$3,270,000",
        "id": 286
    },
    {
        "Title": "Amores perros",
        "Year": "2000",
        "Rated": "R",
        "Released": "13 Apr 2001",
        "Runtime": "154 min",
        "Genre": "Drama, Thriller",
        "Director": "Alejandro G. Iñárritu",
        "Writer": "Guillermo Arriaga",
        "Actors": "Emilio Echevarría, Gael García Bernal, Goya Toledo",
        "Plot": "A horrific car accident connects three stories, each involving characters dealing with loss, regret, and life's harsh realities, all in the name of love.",
        "Language": "Spanish",
        "Country": "Mexico",
        "Awards": "Nominated for 1 Oscar. 55 wins & 25 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQxMWJhMzMtMzllZi00NzMwLTllYjktNTcwZmU4ZmU3NTA0XkEyXkFqcGdeQXVyMTAzMDM4MjM0._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "93%"
            },
            {
                "Source": "Metacritic",
                "Value": "83/100"
            }
        ],
        "Metascore": "83",
        "imdbRating": "8.1",
        "imdbVotes": "236,072",
        "imdbID": "tt0245712",
        "Type": "movie",
        "DVD": "25 Sep 2001",
        "BoxOffice": "$5,408,467",
        "id": 287
    },
    {
        "Title": "The Sound of Music",
        "Year": "1965",
        "Rated": "G",
        "Released": "01 Apr 1965",
        "Runtime": "172 min",
        "Genre": "Biography, Drama, Family",
        "Director": "Robert Wise",
        "Writer": "George Hurdalek, Howard Lindsay, Russel Crouse",
        "Actors": "Julie Andrews, Christopher Plummer, Eleanor Parker",
        "Plot": "A young novitiate is sent by her convent in 1930s Austria to become a governess to the seven children of a widowed naval officer.",
        "Language": "English, German",
        "Country": "United States",
        "Awards": "Won 5 Oscars. 17 wins & 13 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BM2Q3YWMzMWItMjY4NS00ZjQ4LWEwYzQtODMwMjU1ZDg4ZjA4XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.0/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "83%"
            },
            {
                "Source": "Metacritic",
                "Value": "63/100"
            }
        ],
        "Metascore": "63",
        "imdbRating": "8.0",
        "imdbVotes": "223,312",
        "imdbID": "tt0059742",
        "Type": "movie",
        "DVD": "27 Aug 2002",
        "BoxOffice": "$159,287,539",
        "id": 288
    },
    {
        "Title": "Life of Brian",
        "Year": "1979",
        "Rated": "R",
        "Released": "17 Aug 1979",
        "Runtime": "94 min",
        "Genre": "Comedy",
        "Director": "Terry Jones",
        "Writer": "Graham Chapman, John Cleese, Terry Gilliam",
        "Actors": "Graham Chapman, John Cleese, Michael Palin",
        "Plot": "Born on the original Christmas in the stable next door to Jesus Christ, Brian of Nazareth spends his life being mistaken for a messiah.",
        "Language": "English, Latin",
        "Country": "United Kingdom",
        "Awards": "N/A",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzAwNjU1OTktYjY3Mi00NDY5LWFlZWUtZjhjNGE0OTkwZDkwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "95%"
            },
            {
                "Source": "Metacritic",
                "Value": "77/100"
            }
        ],
        "Metascore": "77",
        "imdbRating": "8.1",
        "imdbVotes": "390,711",
        "imdbID": "tt0079470",
        "Type": "movie",
        "DVD": "16 Nov 1999",
        "BoxOffice": "$20,206,622",
        "id": 289
    },
    {
        "Title": "The 400 Blows",
        "Year": "1959",
        "Rated": "Not Rated",
        "Released": "16 Nov 1959",
        "Runtime": "99 min",
        "Genre": "Crime, Drama",
        "Director": "François Truffaut",
        "Writer": "François Truffaut, Marcel Moussy",
        "Actors": "Jean-Pierre Léaud, Albert Rémy, Claire Maurier",
        "Plot": "A young boy, left without attention, delves into a life of petty crime.",
        "Language": "French, English",
        "Country": "France",
        "Awards": "Nominated for 1 Oscar. 10 wins & 7 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYTQ4MjA4NmYtYjRhNi00MTEwLTg0NjgtNjk3ODJlZGU4NjRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "99%"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.1",
        "imdbVotes": "114,819",
        "imdbID": "tt0053198",
        "Type": "movie",
        "DVD": "09 May 2006",
        "BoxOffice": "$509",
        "id": 290
    },
    {
        "Title": "Persona",
        "Year": "1966",
        "Rated": "Not Rated",
        "Released": "16 Mar 1967",
        "Runtime": "83 min",
        "Genre": "Drama, Thriller",
        "Director": "Ingmar Bergman",
        "Writer": "Ingmar Bergman",
        "Actors": "Bibi Andersson, Liv Ullmann, Margaretha Krook",
        "Plot": "A nurse is put in charge of a mute actress and finds that their personae are melding together.",
        "Language": "Swedish, English",
        "Country": "Sweden",
        "Awards": "Nominated for 1 BAFTA Film Award11 wins & 5 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjdhMGYyNTYtNTg5OC00MzY0LWE4YjctZWI3NDRkMzIyODBiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "91%"
            },
            {
                "Source": "Metacritic",
                "Value": "86/100"
            }
        ],
        "Metascore": "86",
        "imdbRating": "8.1",
        "imdbVotes": "114,751",
        "imdbID": "tt0060827",
        "Type": "movie",
        "DVD": "10 Feb 2004",
        "BoxOffice": "N/A",
        "id": 291
    },
    {
        "Title": "It Happened One Night",
        "Year": "1934",
        "Rated": "Passed",
        "Released": "22 Feb 1934",
        "Runtime": "105 min",
        "Genre": "Comedy, Romance",
        "Director": "Frank Capra",
        "Writer": "Robert Riskin, Samuel Hopkins Adams",
        "Actors": "Clark Gable, Claudette Colbert, Walter Connolly",
        "Plot": "A renegade reporter trailing a young runaway heiress for a big story joins her on a bus heading from Florida to New York, and they end up stuck with each other when the bus leaves them behind at one of the stops.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 5 Oscars. 11 wins & 2 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYzJmMWE5NjAtNWMyZS00NmFiLWIwMDgtZDE2NzczYWFhNzIzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "99%"
            },
            {
                "Source": "Metacritic",
                "Value": "87/100"
            }
        ],
        "Metascore": "87",
        "imdbRating": "8.1",
        "imdbVotes": "101,607",
        "imdbID": "tt0025316",
        "Type": "movie",
        "DVD": "28 Dec 1999",
        "BoxOffice": "N/A",
        "id": 292
    },
    {
        "Title": "La Haine",
        "Year": "1995",
        "Rated": "Not Rated",
        "Released": "23 Feb 1996",
        "Runtime": "98 min",
        "Genre": "Crime, Drama",
        "Director": "Mathieu Kassovitz",
        "Writer": "Mathieu Kassovitz",
        "Actors": "Vincent Cassel, Hubert Koundé, Saïd Taghmaoui",
        "Plot": "24 hours in the lives of three young men in the French suburbs the day after a violent riot.",
        "Language": "French",
        "Country": "France, United States",
        "Awards": "8 wins & 15 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDNiOTA5YjktY2Q0Ni00ODgzLWE5MWItNGExOWRlYjY2MjBlXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "100%"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.1",
        "imdbVotes": "166,656",
        "imdbID": "tt0113247",
        "Type": "movie",
        "DVD": "17 Apr 2007",
        "BoxOffice": "$280,859",
        "id": 293
    },
    {
        "Title": "Aladdin",
        "Year": "1992",
        "Rated": "G",
        "Released": "25 Nov 1992",
        "Runtime": "90 min",
        "Genre": "Animation, Adventure, Comedy",
        "Director": "Ron Clements, John Musker",
        "Writer": "Ron Clements, John Musker, Ted Elliott",
        "Actors": "Scott Weinger, Robin Williams, Linda Larkin",
        "Plot": "A kindhearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 2 Oscars. 32 wins & 22 nominations total",
        "Poster": "https://childrenandmedia.org.au/assets/images/movie-reviews/aladdin_1992.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "95%"
            },
            {
                "Source": "Metacritic",
                "Value": "86/100"
            }
        ],
        "Metascore": "86",
        "imdbRating": "8.1",
        "imdbVotes": "398,646",
        "imdbID": "tt0103639",
        "Type": "movie",
        "DVD": "13 Oct 2015",
        "BoxOffice": "$217,350,219",
        "id": 294
    },
    {
        "Title": "Dune",
        "Year": "2021",
        "Rated": "PG-13",
        "Released": "22 Oct 2021",
        "Runtime": "155 min",
        "Genre": "Action, Adventure, Drama",
        "Director": "Denis Villeneuve",
        "Writer": "Jon Spaihts, Denis Villeneuve, Eric Roth",
        "Actors": "Timothée Chalamet, Rebecca Ferguson, Zendaya",
        "Plot": "Feature adaptation of Frank Herbert's science fiction novel about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.",
        "Language": "English, Mandarin",
        "Country": "United States, Canada",
        "Awards": "Nominated for 10 Oscars. 142 wins & 270 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "84%"
            },
            {
                "Source": "Metacritic",
                "Value": "74/100"
            }
        ],
        "Metascore": "74",
        "imdbRating": "8.1",
        "imdbVotes": "514,691",
        "imdbID": "tt1160419",
        "Type": "movie",
        "DVD": "22 Oct 2021",
        "BoxOffice": "$108,188,660",
        "id": 295
    },
    {
        "Title": "Beauty and the Beast",
        "Year": "1991",
        "Rated": "G",
        "Released": "22 Nov 1991",
        "Runtime": "84 min",
        "Genre": "Animation, Family, Fantasy",
        "Director": "Gary Trousdale, Kirk Wise",
        "Writer": "Linda Woolverton, Brenda Chapman, Chris Sanders",
        "Actors": "Paige O'Hara, Robby Benson, Jesse Corti",
        "Plot": "A prince cursed to spend his days as a hideous monster sets out to regain his humanity by earning a young woman's love.",
        "Language": "English, French",
        "Country": "United States",
        "Awards": "Won 2 Oscars. 31 wins & 32 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzE5MDM1NDktY2I0OC00YWI5LTk2NzUtYjczNDczOWQxYjM0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "94%"
            },
            {
                "Source": "Metacritic",
                "Value": "95/100"
            }
        ],
        "Metascore": "95",
        "imdbRating": "8.1",
        "imdbVotes": "438,320",
        "imdbID": "tt0101414",
        "Type": "movie",
        "DVD": "06 Aug 2002",
        "BoxOffice": "$218,967,620",
        "id": 296
    },
    {
        "Title": "Gandhi",
        "Year": "1982",
        "Rated": "PG",
        "Released": "25 Feb 1983",
        "Runtime": "191 min",
        "Genre": "Biography, Drama",
        "Director": "Richard Attenborough",
        "Writer": "John Briley",
        "Actors": "Ben Kingsley, John Gielgud, Rohini Hattangadi",
        "Plot": "The life of the lawyer who became the famed leader of the Indian revolts against the British rule through his philosophy of nonviolent protest.",
        "Language": "English, Hindi",
        "Country": "United Kingdom, India, United States, South Africa",
        "Awards": "Won 8 Oscars. 35 wins & 21 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzJiZDRmOWUtYjE2MS00Mjc1LTg1ZDYtNTQxYWJkZTg1OTM4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.0/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "85%"
            },
            {
                "Source": "Metacritic",
                "Value": "79/100"
            }
        ],
        "Metascore": "79",
        "imdbRating": "8.0",
        "imdbVotes": "226,347",
        "imdbID": "tt0083987",
        "Type": "movie",
        "DVD": "20 Feb 2007",
        "BoxOffice": "$52,767,889",
        "id": 297
    },
    {
        "Title": "The Help",
        "Year": "2011",
        "Rated": "PG-13",
        "Released": "10 Aug 2011",
        "Runtime": "146 min",
        "Genre": "Drama",
        "Director": "Tate Taylor",
        "Writer": "Tate Taylor, Kathryn Stockett",
        "Actors": "Emma Stone, Viola Davis, Octavia Spencer",
        "Plot": "An aspiring author during the civil rights movement of the 1960s decides to write a book detailing the African American maids' point of view on the white families for which they work, and the hardships they go through on a daily basi",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 1 Oscar. 79 wins & 121 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTM5OTMyMjIxOV5BMl5BanBnXkFtZTcwNzU4MjIwNQ@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "76%"
            },
            {
                "Source": "Metacritic",
                "Value": "62/100"
            }
        ],
        "Metascore": "62",
        "imdbRating": "8.1",
        "imdbVotes": "447,129",
        "imdbID": "tt1454029",
        "Type": "movie",
        "DVD": "06 Dec 2011",
        "BoxOffice": "$169,708,112",
        "id": 298
    },
    {
        "Title": "The Handmaiden",
        "Year": "2016",
        "Rated": "Not Rated",
        "Released": "01 Jun 2016",
        "Runtime": "145 min",
        "Genre": "Drama, Romance, Thriller",
        "Director": "Park Chan-wook",
        "Writer": "Sarah Waters, Seo-kyeong Jeong, Park Chan-wook",
        "Actors": "Kim Min-hee, Ha Jung-woo, Cho Jin-woong",
        "Plot": "A woman is hired as a handmaiden to a Japanese heiress, but secretly she is involved in a plot to defraud her.",
        "Language": "Korean, Japanese",
        "Country": "South Korea",
        "Awards": "Won 1 BAFTA Film Award70 wins & 108 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDJhYTk2MTctZmVmOS00OTViLTgxNjQtMzQxOTRiMDdmNGRjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "95%"
            },
            {
                "Source": "Metacritic",
                "Value": "84/100"
            }
        ],
        "Metascore": "84",
        "imdbRating": "8.1",
        "imdbVotes": "136,525",
        "imdbID": "tt4016934",
        "Type": "movie",
        "DVD": "24 Jan 2017",
        "BoxOffice": "$2,006,788",
        "id": 299
    },
    {
        "Title": "Dances with Wolves",
        "Year": "1990",
        "Rated": "PG-13",
        "Released": "21 Nov 1990",
        "Runtime": "181 min",
        "Genre": "Adventure, Drama, Western",
        "Director": "Kevin Costner",
        "Writer": "Michael Blake",
        "Actors": "Kevin Costner, Mary McDonnell, Graham Greene",
        "Plot": "Lieutenant John Dunbar, assigned to a remote western Civil War outpost, befriends wolves and Native Americans, making him an intolerable aberration in the military.",
        "Language": "English, Sioux, Pawnee",
        "Country": "United States, United Kingdom",
        "Awards": "Won 7 Oscars. 51 wins & 38 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTY3OTI5NDczN15BMl5BanBnXkFtZTcwNDA0NDY3Mw@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "83%"
            },
            {
                "Source": "Metacritic",
                "Value": "72/100"
            }
        ],
        "Metascore": "72",
        "imdbRating": "8.1",
        "imdbVotes": "257,486",
        "imdbID": "tt0099348",
        "Type": "movie",
        "DVD": "01 Aug 2006",
        "BoxOffice": "$184,208,848",
        "id": 300
    },
    
    
]

  movieData.forEach((movie) => {
    console.log(movie.Title);
  });
export default movieData;