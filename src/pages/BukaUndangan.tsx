import { Link } from "react-router-dom";
import bg from "../assets/images/bg.png";
import gunungan from "../assets/images/gunung.png";
import head from "../assets/images/head.png";
import foot from "../assets/images/foot.png";

const BukaUndangan = () => {
  return (
    <div className="bg-slate-800 items-center justify-center">
      <div
        className="w-full max-w-lg mx-auto p-6 min-h-screen flex flex-col items-center justify-around text-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Header */}
        <div>
          <img className="max-w-[14rem]" src={head} alt="" />
          <h3 className="text-primary mt-4 text-lg">The Wedding Of</h3>
        </div>
        {/* images gunungan dan nama mempelai */}
        <div className="mb-6">
          <img
            src={gunungan}
            alt="Gunungan"
            className="w-58 lg:w-[23rem] mx-auto mb-4"
          />
          <h1 className="mempelai text-4xl font-bold text-primary lg:text-6xl">Eta & Krisna</h1>
        </div>
        {/* nama tamu undangan */}
        <div className="space-y-4">
          <h5 className="text-primary text-sm w-40 mx-auto">
            Kepada Yth: Bapak/Ibu/Saudara/i
          </h5>
          <span className="text-white text-md font-semibold">
            Syahril Caesa
          </span>
        </div>
        {/* tombol buka undangan */}
        <Link to="/home" className="w-full mb-12 z-90 ">
          <button className="px-6 cursor-pointer animate-pulse bg-primary text-white py-2 rounded-full font-semibold shadow-md">
            Buka Undangan
          </button>
        </Link>
        {/* images footer */}
        <div className="fixed bottom-6 translate-y-8">
          <img className="min-w-[24rem] lg:w-[30rem]" src={foot} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BukaUndangan;
