import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Komponen
import bgHome from "../assets/images/bg.png";
import gunungan from "../assets/images/gunung.png";
import head from "../assets/images/head.png";
import foot from "../assets/images/foot.png";

const BukaUndangan = () => {
  const text = "Eta & Krisna".split(""); // pecah jadi array huruf

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // jeda antar huruf
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-red-950 items-center justify-center">
      <div
        className="w-full max-w-lg mx-auto p-6 min-h-screen flex flex-col items-center justify-around text-center"
        style={{
          backgroundImage: `url(${bgHome})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.8 }} // mulai dari atas & kecil
          animate={{ opacity: 1, y: 0, scale: 1 }} // turun ke posisi normal
          transition={{ duration: 2, ease: "easeOut" }} // durasi & easing
          className="flex flex-col items-center justify-center text-center"
        >
          <img className="max-w-[14rem]" src={head} alt="head" />
          <h3 className="text-primary mt-4 text-lg">The Wedding Of</h3>
        </motion.div>

        {/* images gunungan dan nama mempelai */}
        <div className="mb-6">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src={gunungan}
            alt="Gunungan"
            className="w-[20rem] lg:w-[23rem] mx-auto mb-4"
          />
          <motion.h1
            className="mempelai text-5xl font-bold text-primary lg:text-6xl"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {text.map((char, i) => (
              <motion.span key={i} variants={letter} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
        </div>
        {/* nama tamu undangan */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="space-y-4"
        >
          <h5 className="text-primary text-lg w-40 mx-auto">
            Kepada Yth: Bapak/Ibu/Saudara/i
          </h5>
          <span className="text-white text-lg font-semibold">
            Syahril Caesa
          </span>
        </motion.div>
        {/* tombol buka undangan */}
        <Link to="/home" className="w-full mb-12 z-90">
          <motion.button
            initial={{ rotateY: 90, opacity: 0 }} // mulai miring dari samping
            animate={{ rotateY: 0, opacity: 1 }} // lurus ke depan
            transition={{ duration: 2, ease: "easeOut" }}
            whileHover={{ rotateY: 10 }} // efek goyang pas hover
            className="px-6 cursor-pointer bg-primary text-white animate-pulse py-2 rounded-full font-semibold shadow-md"
          >
            Open Invitation
          </motion.button>
        </Link>
        {/* images footer */}
        <motion.div
          initial={{ opacity: 0, y: 100 }} // mulai agak turun & transparan
          animate={{ opacity: 1, y: 0 }} // naik ke posisi normal
          transition={{ duration: 2, ease: "easeOut" }}
          className="fixed bottom-6 translate-y-8"
        >
          <img
            className="min-w-[24rem] lg:w-[30rem]"
            src={foot}
            alt="footer decoration"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default BukaUndangan;
