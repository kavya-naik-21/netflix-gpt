import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        console.log("some error occured");
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <div className="absolute bg-gradient-to-b from-black w-full z-10">
        <img
          className="w-48 ml-20 mt-8"
          src={LOGO_URL}
          alt="netflix-logo"
        ></img>
      </div>

      {user && (
        <div className="absolute right-10 top-10 z-10">
          <div className="flex justify-center">
            <img className="mb-5 w-10" alt="usericon" src={user.photoURL}></img>
          </div>
          <button
            className="bg-red-700 pr-2 pl-2 rounded-md"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
