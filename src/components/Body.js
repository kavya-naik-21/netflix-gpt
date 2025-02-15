import { useEffect } from "react";
import Browse from "./Browse";
import Login from "./Login";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const bodyRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        console.log(user)
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        console.log("came here")
        // navigate("/browser");
      } else {
        // User is signed out
        dispatch(removeUser());
        // navigate("/");
      }
    });
  }, []);
  return <RouterProvider router={bodyRouter} />;
};

export default Body;
