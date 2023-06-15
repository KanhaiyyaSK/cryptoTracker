import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import CoinPage from "./pages/CoinPage";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
  App:{
    color:"white",
    background:"#14161a",
    minHeight:'100vh'
  }
});

function App() {
 
  const classes = useStyles();
  console.log("App");
  console.log(classes);
  return (
    <Router>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
