import loader from "../assets/Loader.gif";

function Loader() {
  return (
    <div className="h-screen text-center flex flex-col justify-center items-center">
      <img src={loader} alt="loading gif" />
      <p>Loading...</p>
    </div>
  );
}

export default Loader;
