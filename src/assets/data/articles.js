// Purpose: To create a list of articles that can be used to populate the blog page.
import deadlift from "../images/Articles/deadlift.jpg";
import squat from "../images/Articles/squat.jpg";
import benchPress from "../images/Articles/benchPress.jpg";
class Article {
  constructor(title, author, content, date, image) {
    this.title = title;
    this.author = author;
    this.content = content;
    this.intro = content.substring(0, 150);
    this.date = date ? date : new Date();
    this.id = Math.floor(Math.random() * 10000);
    this.image = image ? image : "https://via.placeholder.com/150";
  }
  setTitle(title) {
    this.title = title;
  }
  setAuthor(author) {
    this.author = author;
  }
  setContent(content) {
    this.content = content;
  }
  setDate(date) {
    this.date = date;
  }
  getId() {
    return this.id;
  }
  getTitle() {
    return this.title;
  }
  getAuthor() {
    return this.author;
  }
  getContent() {
    return this.content;
  }
  getDate() {
    return this.date;
  }
  getIntro() {
    return this.intro;
  }
  getImage() {
    return this.image;
  }
}

const articles = [];

articles.push(
  new Article(
    "How to Bench Press",
    "John Doe",
    "Bench Press is a great exercise for your chest and triceps. It is a compound movement that works multiple muscle groups. It is a great exercise for building strength and muscle mass.",
    new Date(),
    benchPress
  )
);

articles.push(
  new Article(
    "How to Deadlift",
    "Jane Doe",
    "Deadlift is a great exercise for your back and legs. It is a compound movement that works multiple muscle groups. It is a great exercise for building strength and muscle mass.",
    new Date(),
    deadlift
  )
);

articles.push(
  new Article(
    "How to Squat",
    "John Doe",
    "Squat is a great exercise for your legs. It is a compound movement that works multiple muscle groups. It is a great exercise for building strength and muscle mass.",
    new Date(),
    squat
  )
);

export default articles;
