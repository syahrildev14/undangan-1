
import bg from "../assets/images/bg.png";
import logo from "../assets/images/logo.png";
import Countdown from "../components/Countdown";

const Home = () => {
  return (
    <div className="bg-red-950 items-center justify-center">
      <div
        className="w-full max-w-lg mx-auto p-6 min-h-screen flex flex-col items-center justify-around text-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img className="w-64" src={logo} alt="logo" />
        <Countdown targetDate="2025-12-31T19:00:00" />
      </div>
    </div>
  )
}

export default Home
