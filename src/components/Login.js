import Header from "./Header";

const Login = () => {
  return (
    <div className="relative ">
      <Header />
      <div className="absolute bg-black opacity-90 rounded-md -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2">
        <form className="flex flex-wrap flex-col m-10">
          <span className="text-white mb-5">Sign In</span>

          <label className="text-white"> Email Address</label>
          <input
            className="border-solid mb-5"
            type="text"
            id="username"
            name="username"
          ></input>
          <label className="text-white"> Password</label>

          <input
            className="border-solid mb-5"
            type="password"
            id="password"
            name="password"
          ></input>
          <span className="text-white">New User ? Sign Up</span>
        </form>
      </div>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_large.jpg"></img>
    </div>
  );
};

export default Login;
