const movies = [
  {
    id: 1,
    title: "Stranger Things",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
    posterPath: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&auto=format&fit=crop&q=60",
    backdropPath: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1200&auto=format&fit=crop&q=80",
    videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    rating: 98,
    year: 2016
  },
  {
    id: 2,
    title: "The Witcher",
    description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
    posterPath: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?w=500&auto=format&fit=crop&q=60",
    backdropPath: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?w=1200&auto=format&fit=crop&q=80",
    videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    rating: 95,
    year: 2019
  },
  {
    id: 3,
    title: "Inception",
    description: "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\".",
    posterPath: "https://images.unsplash.com/photo-1604871000636-074fa5117945?w=500&auto=format&fit=crop&q=60",
    backdropPath: "https://images.unsplash.com/photo-1604871000636-074fa5117945?w=1200&auto=format&fit=crop&q=80",
    videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    rating: 99,
    year: 2010
  },
  {
    id: 4,
    title: "Interstellar",
    description: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    posterPath: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=60",
    backdropPath: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=80",
    rating: 97,
    year: 2014
  },
  {
    id: 5,
    title: "The Matrix",
    description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    posterPath: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop&q=60",
    backdropPath: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80",
    rating: 96,
    year: 1999
  },
  {
    id: 6,
    title: "Avatar",
    description: "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
    posterPath: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=500&auto=format&fit=crop&q=60",
    backdropPath: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=1200&auto=format&fit=crop&q=80",
    rating: 94,
    year: 2009
  },
  {
    id: 7,
    title: "Cyberpunk: Edgerunners",
    description: "In a dystopia riddled with corruption and cybernetic implants, a talented but reckless street kid strives to become a mercenary outlaw — an edgerunner.",
    posterPath: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&auto=format&fit=crop&q=60",
    backdropPath: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&auto=format&fit=crop&q=80",
    rating: 98,
    year: 2022
  },
  {
    id: 8,
    title: "Dune",
    description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.",
    posterPath: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&auto=format&fit=crop&q=60",
    backdropPath: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=1200&auto=format&fit=crop&q=80",
    rating: 95,
    year: 2021
  }
];

export const categories = [
  { title: "Trending Now", movies: movies },
  { title: "Top Rated", movies: [...movies].reverse() },
  { title: "Action Thrillers", movies: movies },
  { title: "Comedies", movies: movies },
  { title: "Sci-Fi Movies", movies: movies },
];

export const featuredMovie = movies[0];
export { movies };
