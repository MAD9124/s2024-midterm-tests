const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/';
const SMALL_IMAGE = 'w92';
const LARGE_IMAGE = 'w780';

const getAllAPop = [
  {
    id: 693134,
    title: 'Dune: Part Two',
    imageUrl: 'https://image.tmdb.org/t/p/w92/czembW0Rk1Ke7lCJGahbOhdCuhV.jpg',
  },
  {
    id: 603,
    title: 'The Matrix',
    imageUrl: 'https://image.tmdb.org/t/p/w92/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
  },
  {
    id: 11,
    title: 'Star Wars',
    imageUrl: 'https://image.tmdb.org/t/p/w92/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
  },
  {
    id: 348,
    title: 'Alien',
    imageUrl: 'https://image.tmdb.org/t/p/w92/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg',
  },
  {
    id: 157336,
    title: 'Interstellar',
    imageUrl: 'https://image.tmdb.org/t/p/w92/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
  },
  {
    id: 103,
    title: 'Taxi Driver',
    imageUrl: 'https://image.tmdb.org/t/p/w92/ekstpH614fwDX8DUln1a2Opz0N8.jpg',
  },
  {
    id: 111,
    title: 'Scarface',
    imageUrl: 'https://image.tmdb.org/t/p/w92/iQ5ztdjvteGeboxtmRdXEChJOHh.jpg',
  },
  {
    id: 769,
    title: 'GoodFellas',
    imageUrl: 'https://image.tmdb.org/t/p/w92/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg',
  },
  {
    id: 299534,
    title: 'Avengers: Endgame',
    imageUrl: 'https://image.tmdb.org/t/p/w92/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
  },
  {
    id: 299536,
    title: 'Avengers: Infinity War',
    imageUrl: 'https://image.tmdb.org/t/p/w92/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
  },
];

const getAllARelease = [
  {
    id: 693134,
    title: 'Dune: Part Two',
    imageUrl: 'https://image.tmdb.org/t/p/w92/czembW0Rk1Ke7lCJGahbOhdCuhV.jpg',
  },
  {
    id: 838240,
    title: 'Robot Dreams',
    imageUrl: 'https://image.tmdb.org/t/p/w92/aoFmPEEb4QoqSNaTVfkATLB1CGF.jpg',
  },
  {
    id: 1058694,
    title: 'Radical',
    imageUrl: 'https://image.tmdb.org/t/p/w92/eSatbygYZp8ooprBHZdb6GFZxGB.jpg',
  },
  {
    id: 1160164,
    title: 'TAYLOR SWIFT | THE ERAS TOUR',
    imageUrl: 'https://image.tmdb.org/t/p/w92/jf3YO8hOqGHCupsREf5qymYq1n.jpg',
  },
  {
    id: 1139087,
    title: 'Once Upon a Studio',
    imageUrl: 'https://image.tmdb.org/t/p/w92/aiy3G1cYWV3LgKZHY6a3jL8bjYL.jpg',
  },
  {
    id: 569094,
    title: 'Spider-Man: Across the Spider-Verse',
    imageUrl: 'https://image.tmdb.org/t/p/w92/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
  },
  {
    id: 995133,
    title: 'The Boy, the Mole, the Fox and the Horse',
    imageUrl: 'https://image.tmdb.org/t/p/w92/oQRgyQCzcyZvE6w5heM9ktVY0LT.jpg',
  },
  {
    id: 315162,
    title: 'Puss in Boots: The Last Wish',
    imageUrl: 'https://image.tmdb.org/t/p/w92/kuf6dutpsT0vSVehic3EZIqkOBt.jpg',
  },
  {
    id: 762975,
    title: 'Purple Hearts',
    imageUrl: 'https://image.tmdb.org/t/p/w92/4JyNWkryifWbWXJyxcWh3pVya6N.jpg',
  },
  {
    id: 361743,
    title: 'Top Gun: Maverick',
    imageUrl: 'https://image.tmdb.org/t/p/w92/62HCnUTziyWcpDaBO2i1DX17ljH.jpg',
  },
];

const getAllAVote = [
  {
    id: 278,
    title: 'The Shawshank Redemption',
    imageUrl: 'https://image.tmdb.org/t/p/w92/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg',
  },
  {
    id: 238,
    title: 'The Godfather',
    imageUrl: 'https://image.tmdb.org/t/p/w92/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
  },
  {
    id: 240,
    title: 'The Godfather Part II',
    imageUrl: 'https://image.tmdb.org/t/p/w92/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg',
  },
  {
    id: 389,
    title: '12 Angry Men',
    imageUrl: 'https://image.tmdb.org/t/p/w92/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg',
  },
  {
    id: 19404,
    title: 'Dilwale Dulhania Le Jayenge',
    imageUrl: 'https://image.tmdb.org/t/p/w92/lfRkUr7DYdHldAqi3PwdQGBRBPM.jpg',
  },
  {
    id: 129,
    title: 'Spirited Away',
    imageUrl: 'https://image.tmdb.org/t/p/w92/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
  },
  {
    id: 155,
    title: 'The Dark Knight',
    imageUrl: 'https://image.tmdb.org/t/p/w92/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
  },
  {
    id: 496243,
    title: 'Parasite',
    imageUrl: 'https://image.tmdb.org/t/p/w92/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
  },
  {
    id: 372058,
    title: 'Your Name.',
    imageUrl: 'https://image.tmdb.org/t/p/w92/q719jXXEzOoYaps6babgKnONONX.jpg',
  },
  {
    id: 429,
    title: 'The Good, the Bad and the Ugly',
    imageUrl: 'https://image.tmdb.org/t/p/w92/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg',
  },
];

const getAllBVote = [
  {
    id: 429,
    title: 'The Good, the Bad and the Ugly',
    imageUrl: 'https://image.tmdb.org/t/p/w92/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg',
  },
  {
    id: 637,
    title: 'Life Is Beautiful',
    imageUrl: 'https://image.tmdb.org/t/p/w92/74hLDKjD5aGYOotO6esUVaeISa2.jpg',
  },
  {
    id: 550,
    title: 'Fight Club',
    imageUrl: 'https://image.tmdb.org/t/p/w92/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
  },
  {
    id: 667257,
    title: 'Impossible Things',
    imageUrl: 'https://image.tmdb.org/t/p/w92/t2Ew8NZ8Ci2kqmoecZUNQUFDJnQ.jpg',
  },
  {
    id: 696374,
    title: "Gabriel's Inferno",
    imageUrl: 'https://image.tmdb.org/t/p/w92/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg',
  },
  {
    id: 724089,
    title: "Gabriel's Inferno: Part II",
    imageUrl: 'https://image.tmdb.org/t/p/w92/x5o8cLZfEXMoZczTYWLrUo1P7UJ.jpg',
  },
  {
    id: 1891,
    title: 'The Empire Strikes Back',
    imageUrl: 'https://image.tmdb.org/t/p/w92/nNAeTmF4CtdSgMDplXTDPOpYzsX.jpg',
  },
  {
    id: 761053,
    title: "Gabriel's Inferno: Part III",
    imageUrl: 'https://image.tmdb.org/t/p/w92/fYtHxTxlhzD4QWfEbrC1rypysSD.jpg',
  },
  {
    id: 92321,
    title: 'Hotarubi no Mori e',
    imageUrl: 'https://image.tmdb.org/t/p/w92/mDqzHV8UXWWNpZkoAbKmKX1ZxEE.jpg',
  },
  {
    id: 105,
    title: 'Back to the Future',
    imageUrl: 'https://image.tmdb.org/t/p/w92/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg',
  },
];

const mockMovieId = 278;
const mockMovie = {
  adult: false,
  backdrop_path: '/zfbjgQE1uSd9wiPTX4VzsLi0rGG.jpg',
  genre_ids: [18, 80],
  id: 278,
  original_language: 'en',
  original_title: 'The Shawshank Redemption',
  overview:
    'Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
  popularity: 116.038,
  poster_path: '/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg',
  release_date: '1994-09-23',
  title: 'The Shawshank Redemption',
  video: false,
  vote_average: 8.705,
  vote_count: 26221,
  imageUrl: `${BASE_IMAGE_URL}${LARGE_IMAGE}/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg`,
};

module.exports = {
  getAllAPop,
  getAllARelease,
  getAllAVote,
  getAllBVote,
  mockMovieId,
  mockMovie,
};
