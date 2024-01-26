const USERS_DATA = [
  { username: "admin", password: "admin" },
  { username: "1", password: "123" },
]

const ARTICLES_DATA = [
  {
    id: "0",
    title: "The Impact of Technology on Modern Education",
    content: "In the rapidly evolving landscape of education, technology plays a pivotal role. From interactive learning platforms to virtual classrooms, this article explores the transformative impact of technology on the way we teach and learn."
  },
  {
    id: "1",
    title: "Exploring the Wonders of Artificial Intelligence",
    content: "Artificial Intelligence (AI) is reshaping industries and influencing our daily lives. This article delves into the fascinating world of AI, its applications, and the ethical considerations that come with its advancement."
  },
  {
    id: "2",
    title: "The Future of Renewable Energy: A Green Revolution",
    content: "As the world grapples with environmental challenges, the focus on renewable energy sources intensifies. This article examines the promising developments in renewable energy and their potential to usher in a sustainable, green revolution."
  },
  {
    id: "3",
    title: "The Rise of Remote Work: Navigating a Virtual Workspace",
    content: "Remote work has become a prevalent trend, especially in the wake of global events. This article discusses the advantages, challenges, and strategies for navigating the virtual workspace in an increasingly interconnected world."
  },
  {
    id: "4",
    title: "Mindfulness and Mental Health: A Holistic Approach",
    content: "In the fast-paced modern world, mental health has become a critical concern. This article explores the benefits of mindfulness practices in promoting mental well-being and advocates for a holistic approach to mental health care."
  },
  {
    id: "5",
    title: "Space Exploration: Unveiling the Mysteries of the Cosmos",
    content: "Humanity's curiosity about the cosmos has led to remarkable advancements in space exploration. From planetary missions to interstellar exploration, this article delves into the exciting ventures that expand our understanding of the universe."
  },
  {
    id: "6",
    title: "The Art of Storytelling in Marketing: Building Brand Narratives",
    content: "Effective storytelling has become a cornerstone in modern marketing strategies. This article explores how businesses leverage the art of storytelling to create compelling brand narratives that resonate with consumers and drive engagement."
  }
];

const INFORMATION_DATA = [
  {
    "id": "0",
    "title": "Countries and Capitals",
    "headers": ["Country", "Capital"],
    "data": [
      ["United States", "Washington, D.C."],
      ["United Kingdom", "London"],
      ["France", "Paris"],
      ["Germany", "Berlin"],
      ["Japan", "Tokyo"],
      ["India", "New Delhi"],
      ["Brazil", "Brasília"],
      ["Australia", "Canberra"],
      ["South Africa", "Pretoria"],
      ["Canada", "Ottawa"]
    ]
  },
  {
    "id": "1",
    "title": "Movies and Directors",
    "headers": ["Movie Title", "Director", "Release Year"],
    "data": [
      ["The Shawshank Redemption", "Frank Darabont", 1994],
      ["The Godfather", "Francis Ford Coppola", 1972],
      ["Inception", "Christopher Nolan", 2010],
      ["Pulp Fiction", "Quentin Tarantino", 1994],
      ["The Dark Knight", "Christopher Nolan", 2008],
      ["Forrest Gump", "Robert Zemeckis", 1994],
      ["The Matrix", "The Wachowskis", 1999],
      ["Schindler's List", "Steven Spielberg", 1993],
      ["Fight Club", "David Fincher", 1999],
      ["The Silence of the Lambs", "Jonathan Demme", 1991],
    ]
  },
  {
    "id": "2",
    "title": "Books and Authors",
    "headers": ["Book Title", "Author", "Genre", "Publication Year"],
    "data": [
      ["To Kill a Mockingbird", "Harper Lee", "Fiction", 1960],
      ["1984", "George Orwell", "Dystopian", 1949],
      ["The Great Gatsby", "F. Scott Fitzgerald", "Classic", 1925],
      ["The Hobbit", "J.R.R. Tolkien", "Fantasy", 1937],
      ["Pride and Prejudice", "Jane Austen", "Romance", 1813],
      ["The Catcher in the Rye", "J.D. Salinger", "Coming-of-age", 1951],
      ["Brave New World", "Aldous Huxley", "Science Fiction", 1932],
      ["The Hunger Games", "Suzanne Collins", "Young Adult", 2008],
      ["The Da Vinci Code", "Dan Brown", "Mystery", 2003],
      ["The Lord of the Rings", "J.R.R. Tolkien", "Fantasy", 1954]
    ]
  }
];


module.exports = {
  USERS_DATA,
  ARTICLES_DATA,
  INFORMATION_DATA
}