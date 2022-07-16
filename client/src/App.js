import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { setUserInfo, tokenStatus } from "./redux/reducer/userSlice";

import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

import "./App.css";
import Footer from "./components/Footer";
import Tasks from "./pages/Task";
import Comments from "./pages/Comments";

function App() {
  const [show, setShow] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        auth.currentUser?.getIdToken().then((res) => {
          dispatch(tokenStatus(res));
        });
        fetch(`${process.env.REACT_APP_API}/user/auth`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: currentUser.uid,
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            if (data.error) {
              throw new Error(data.error);
            }
            dispatch(setUserInfo(data));
          })
          .then(() => {
            setShow(
              <>
                <Routes>
                  <Route
                    path="/contacts"
                    element={
                      <>
                        <Contacts />
                      </>
                    }
                  />
                  <Route path="/task" element={<Tasks />} />
                  <Route
                    exact
                    path="/comments"
                    element={
                      <>
                        <Comments />
                      </>
                    }
                  />
                  <Route
                    path="*"
                    element={<Navigate to="/contacts" replace />}
                  />
                </Routes>
                <Footer />
              </>
            );
          })
          .catch((err) => {
            console.error("APP ERR", err);
          });
      } else {
        setShow(
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        );
      }
    });
  }, [dispatch]);

  return (
    <>
      <div className="App-header">
        <Navbar />
        {show}
      </div>
    </>
  );
}

export default App;
