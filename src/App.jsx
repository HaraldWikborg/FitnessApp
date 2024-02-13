import Home from "./components/home/home";
import Nav from "./components/nav/Nav";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ExercisesList from "./components/exercisesList/ExercisesList";
import Routines from "./components/routines/Routines";
import Plan from "./components/plan/Plan";
import Blog from "./components/blog/Blog";
import Settings from "./components/settings/Settings";
import NotFound from "./components/notFound/notFound";
import Exercise from "./components/exercise/Exercise";
import LoginForm from "./logIn/login";
import Article from "./components/article/article";

function App() {
  //localStorage.clear();
  return (
    <div className="App">
      <Nav />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/exercises">
            <Route index element={<ExercisesList />} />
            <Route path=":id" element={<Exercise />} />
          </Route>
          <Route path="/routines" element={<Routines />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
