import { useRef, useState } from "react";
import Header from "./Header";
import validate from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const fullName = useRef();
  const [message, setMessage] = useState(null);
  const [isSignIn, setIsSignIn] = useState(true);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const msg = validate(email.current.value, password.current.value);
    setMessage(msg);
    if (msg !== null) return;
    if (!isSignIn) {
      // console.log(fullName.current.value);
      // console.log(email.current.value);
      // console.log(password.current.value);

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(auth.currentUser, {
            displayName: fullName.current.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/84696530?s=400&u=e19ed1ca712b09bd37ac56ffc861644f95e4824d&v=4",
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              console.log(user);
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="relative ">
      <Header />
      <div className="absolute bg-black opacity-90 rounded-md -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2 mt-28">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex flex-wrap flex-col m-10"
        >
          <span className="text-white mb-5">
            {isSignIn ? "Sign In" : "Sign Up"}
          </span>

          {!isSignIn && (
            <>
              <label className="text-white">Full Name</label>
              <input
                ref={fullName}
                className="border-solid mb-5"
                type="text"
                id="fullName"
                name="fullName"
              ></input>
            </>
          )}

          <label className="text-white"> Email Address</label>
          <input
            ref={email}
            className="border-solid mb-5"
            type="text"
            id="username"
            name="username"
          ></input>

          <label className="text-white"> Password</label>
          <input
            ref={password}
            className="border-solid mb-5"
            type="password"
            id="password"
            name="password"
          ></input>
          <span className="text-red-600 pb-2">{message}</span>
          <button className="text-white bg-red-600" onClick={handleSubmit}>
            Submit
          </button>
          <span
            className="text-white mt-5 cursor-pointer"
            onClick={toggleSignIn}
          >
            {isSignIn ? "New User ? Sign Up" : "Already a User ? Sign In"}
          </span>
        </form>
      </div>
      <img
        className="w-full"
        src="https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg?t=st=1739363746~exp=1739367346~hmac=4355dd30df1bcf65cd7228742b9237cf59f0a1cba87580836aeacb00da47e187&w=1060"
      ></img>
    </div>
  );
};

export default Login;
