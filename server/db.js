const USERS_DATA = [
  { username: "admin", password: "admin" },
  { username: "1", password: "123" },
]

const ARTICLES_DATA = [
  {
    id: "0",
    title: "The Impact of Technology on Modern Education",
    content: "In the rapidly evolving landscape of education, technology plays a pivotal role. From interactive learning platforms to virtual classrooms, this article explores the transformative impact of technology on the way we teach and learn. It delves into the integration of artificial intelligence, augmented reality, and personalized learning systems, shedding light on how these innovations are reshaping traditional educational models. The discussion spans across global trends, challenges, and opportunities, emphasizing the need for educators to adapt and embrace technological advancements for the betterment of the educational experience. Additionally, the article touches upon the ethical considerations and societal implications that arise with the increased reliance on technology in educational settings, fostering a comprehensive understanding of the multifaceted relationship between technology and modern education."
  },
  {
    id: "1",
    title: "Exploring the Wonders of Artificial Intelligence",
    content: "Artificial Intelligence (AI) is reshaping industries and influencing our daily lives. This article delves into the fascinating world of AI, its applications, and the ethical considerations that come with its advancement. It provides an in-depth exploration of machine learning, neural networks, and the various branches of AI that contribute to its broad impact. From healthcare and finance to entertainment and transportation, the article examines how AI is revolutionizing diverse sectors, offering insights into the potential benefits and challenges. Ethical concerns such as bias in algorithms, job displacement, and privacy issues are thoroughly discussed, fostering a nuanced understanding of the complex landscape surrounding artificial intelligence. By presenting real-world examples and future possibilities, the article aims to demystify AI for a broader audience, encouraging informed discussions about its role in our society."
  },
  {
    id: "2",
    title: "The Future of Renewable Energy: A Green Revolution",
    content: "As the world grapples with environmental challenges, the focus on renewable energy sources intensifies. This article examines the promising developments in renewable energy and their potential to usher in a sustainable, green revolution. From solar and wind power to innovative technologies like wave and geothermal energy, the article provides a comprehensive overview of the diverse avenues in renewable energy. It explores the global efforts to reduce carbon emissions, emphasizing the role of clean energy in mitigating climate change. The discussion extends to the economic and social implications of transitioning to renewable sources, highlighting both the challenges and opportunities in creating a greener future. By addressing advancements in energy storage, policy frameworks, and international collaborations, the article aims to inspire a collective commitment to sustainable practices and the pursuit of a cleaner, more resilient planet."
  },
  {
    id: "3",
    title: "The Rise of Remote Work: Navigating a Virtual Workspace",
    content: "Remote work has become a prevalent trend, especially in the wake of global events. This article discusses the advantages, challenges, and strategies for navigating the virtual workspace in an increasingly interconnected world. It explores the evolution of remote work, from its origins to the technological advancements that have facilitated its widespread adoption. The article delves into the benefits for both employers and employees, such as increased flexibility, access to a global talent pool, and improved work-life balance. However, it also addresses the challenges, including potential feelings of isolation, communication hurdles, and the need for effective time management. Practical strategies for successful remote collaboration, team building, and maintaining employee well-being are presented, contributing to a comprehensive guide for individuals and organizations navigating the nuances of the virtual work environment."
  },
  {
    id: "4",
    title: "Mindfulness and Mental Health: A Holistic Approach",
    content: "In the fast-paced modern world, mental health has become a critical concern. This article explores the benefits of mindfulness practices in promoting mental well-being and advocates for a holistic approach to mental health care. It delves into the principles of mindfulness, including meditation, mindfulness-based stress reduction (MBSR), and mindful self-compassion. The article examines scientific research supporting the positive impact of mindfulness on mental health, addressing issues such as stress, anxiety, and depression. Beyond individual well-being, it explores the societal benefits of incorporating mindfulness into education, workplaces, and healthcare systems. The article advocates for a holistic approach to mental health, emphasizing the interconnectedness of physical, emotional, and social well-being. By fostering a deeper understanding of mindfulness, the article aims to contribute to the destigmatization of mental health issues and encourage proactive self-care practices."
  },
  {
    id: "5",
    title: "Space Exploration: Unveiling the Mysteries of the Cosmos",
    content: "Humanity's curiosity about the cosmos has led to remarkable advancements in space exploration. From planetary missions to interstellar exploration, this article delves into the exciting ventures that expand our understanding of the universe. It provides a historical overview of space exploration, from the early days of space travel to the current era of ambitious missions to Mars, the outer planets, and beyond. The article explores the scientific discoveries that have reshaped our knowledge of the cosmos, including insights into exoplanets, black holes, and the nature of dark matter. It discusses the collaboration between space agencies, private companies, and international partners, highlighting the collective effort to push the boundaries of human exploration. By addressing the challenges of long-term space travel and the potential for human colonization of other celestial bodies, the article invites readers to contemplate the limitless possibilities that lie beyond Earth."
  },
  {
    id: "6",
    title: "The Art of Storytelling in Marketing: Building Brand Narratives",
    content: "Effective storytelling has become a cornerstone in modern marketing strategies. This article explores how businesses leverage the art of storytelling to create compelling brand narratives that resonate with consumers and drive engagement. It delves into the psychology of storytelling, examining how narratives tap into emotions, create connections, and influence consumer behavior. The article explores diverse storytelling formats, from visual content and social media campaigns to immersive experiences and brand collaborations. Case studies showcase successful examples of brand storytelling, illustrating the power of authenticity, relatability, and consistency. The article also addresses the role of storytelling in building brand identity, fostering customer loyalty, and navigating crises. By providing insights into the strategic use of storytelling in marketing, the article aims to inspire marketers, entrepreneurs, and communicators to craft narratives that leave a lasting impact on their target audiences."
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