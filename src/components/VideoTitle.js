const VideoTitle = ({ movieTitle, movieOverview }) => {
  return (
    <div className="absolute top-1/3 ml-20 text-white w-1/3">
      <div className="text-5xl font-medium">{movieTitle}</div>
      <div className="mt-8 font-medium">{movieOverview}</div>
      <div className="flex flex-wrap justify-between w-2/5 mt-5">
        <button className="bg-white text-black font-bold pl-5 pr-5 rounded-sm pt-2 pb-2">
          Play
        </button>
        <button className="bg-gray-400 font-bold pl-5 pr-5 rounded-sm pt-2 pb-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
