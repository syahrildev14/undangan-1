import { motion } from "framer-motion";
import Countdown from "../components/Countdown";

import bg from "../assets/images/bg.png";
import border from "../assets/images/border2.png";
import imgHero from "../assets/images/img-hero.jpeg";
import headTitle from "../assets/images/head.png";
import border3 from "../assets/images/border3.png";
import pria from "../assets/images/pria.jpeg";
import wanita from "../assets/images/wanita.jpeg";
import bulat from "../assets/images/bulat.png";
import burung from "../assets/images/burung.png";
import bgHome from "../assets/images/bg.png";
import gunungan from "../assets/images/gunung.png";
import head from "../assets/images/head.png";
import foot from "../assets/images/foot.png";

// Foto Galeri
import galeri1 from "../assets/images/galeri1.jpeg";
import galeri2 from "../assets/images/galeri2.jpeg";

const Home = () => {
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
    <div className="bg-red-950">
      <div
        className="w-full max-w-lg mx-auto min-h-screen flex flex-col items-center text-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <section>
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
                  <motion.span
                    key={i}
                    variants={letter}
                    className="inline-block"
                  >
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

            {/* images footer */}
            <motion.div
              initial={{ opacity: 0, y: 100 }} // mulai agak turun & transparan
              animate={{ opacity: 1, y: 0 }} // naik ke posisi normal
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute bottom-0 translate-y-8"
            >
              <img
                className="min-w-[24rem] lg:w-[30rem]"
                src={foot}
                alt="footer decoration"
              />
            </motion.div>
          </div>
        </section>
        {/* Surah Ar-Rumm */}
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-center text-white overflow-hidden">
          {/* Border kiri */}
          <img
            src={border}
            alt="border kiri"
            className="absolute left-0 top-0 h-full object-contain pointer-events-none"
          />

          {/* Border kanan */}
          <img
            src={border}
            alt="border kanan"
            className="absolute right-0 top-0 h-full object-contain pointer-events-none"
          />
          <motion.img
            className="w-[18rem] mx-auto relative z-10 bottom-16 rounded-t-full"
            src={imgHero}
            alt="foto"
            initial={{ opacity: 0, scale: 0.5 }} // mulai kecil & transparan
            whileInView={{ opacity: 1, scale: 1 }} // membesar saat muncul di viewport
            viewport={{ once: false, amount: 0.5 }} // 'once: false' => animasi bisa diulang, 'amount: 0.5' => 50% gambar terlihat baru trigger
            transition={{ duration: 2, ease: "easeOut" }}
          />

          {/* Ayat */}
          <motion.p
            className="mt-4 w-72 lg:text-md text-sm relative z-10"
            initial={{ opacity: 0, scale: 0.8 }} // mulai lebih kecil dan transparan
            whileInView={{ opacity: 1, scale: 1 }} // zoom ke ukuran normal
            viewport={{ once: false, amount: 0.5 }} // bisa diulang saat scroll
            transition={{ duration: 2, ease: "easeOut" }}
          >
            Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang. Sungguh, pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
          </motion.p>

          <motion.h4
            className="mt-8 font-semibold relative z-10 shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }} // mulai lebih kecil dan transparan
            whileInView={{ opacity: 1, scale: 1 }} // zoom ke ukuran normal
            viewport={{ once: false, amount: 0.5 }} // bisa diulang saat scroll
            transition={{ duration: 2, ease: "easeOut" }}
          >
            Surah Ar-Rum : 21
          </motion.h4>

          {/* Dekorasi bulat */}
          <motion.img
            src={bulat}
            alt="dekorasi"
            className="w-[24rem] absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          />
        </section>

        {/* Mempelai */}
        <section className="relative text-white bg-gradient-to-b from-black via-teal-950 to-black min-h-screen w-full flex flex-col items-center px-8 md:px-16 pt-24 pb-24">
          {/* Border Atas Kiri */}
          <motion.img
            src={border3}
            alt="border atas kiri"
            className="absolute left-0 top-0 object-contain pointer-events-none w-[12rem] scale-y-[-1]"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            viewport={{ once: false, amount: 0.5 }} // bisa diulang saat scroll
            transition={{ duration: 3, ease: "easeInOut" }}
          />

          {/* Border Atas Kanan */}
          <motion.img
            src={border3}
            alt="border atas kanan"
            className="absolute right-0 top-0 rotate-180 object-contain pointer-events-none w-[12rem]"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            viewport={{ once: false, amount: 0.5 }} // bisa diulang saat scroll
            transition={{ duration: 3, ease: "easeInOut" }}
          />

          {/* Border Bawah Kiri */}
          <motion.img
            src={border3}
            alt="border bawah kiri"
            className="absolute left-0 bottom-0 object-contain pointer-events-none w-[12rem]"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            viewport={{ once: false, amount: 0.5 }} // bisa diulang saat scroll
            transition={{ duration: 3, ease: "easeInOut" }}
          />

          {/* Border Bawah Kanan */}
          <motion.img
            src={border3}
            alt="border bawah kanan"
            className="absolute right-0 bottom-0 object-contain pointer-events-none w-[12rem] scale-x-[-1]"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />

          {/* Judul */}
          <motion.div
            className="relative z-10 text-center space-y-2 mb-12"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <motion.img
              src={headTitle}
              alt="headTitle"
              className="w-[12rem] mx-auto"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            />
            <motion.h2
              className="text-lg font-semibold text-primary"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              Mempelai
            </motion.h2>
          </motion.div>

          {/* Foto mempelai */}
          <div className="flex flex-col items-center space-y-16 relative z-10">
            {/* Mempelai Pria */}
            <div className="flex flex-col items-center space-y-4">
              <motion.div
                className="w-[16rem] h-[24rem] border-3 border-primary rounded-full overflow-hidden shadow-lg"
                initial={{ scale: 0, opacity: 0 }} // mulai dari kecil & transparan
                whileInView={{ scale: 1, opacity: 1 }} // zoom in ke ukuran normal
                viewport={{ once: false, amount: 0.5 }} // bisa diulang saat scroll
                transition={{ duration: 2, ease: "easeOut" }}
              >
                <motion.img
                  src={pria}
                  alt="mempelai pria"
                  className="w-full h-full object-cover"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                />
              </motion.div>
              <motion.div
                className="text-center text-white max-w-xs"
                initial={{ x: 200, opacity: 0 }} // mulai dari kanan & transparan
                whileInView={{ x: 0, opacity: 1 }} // geser ke posisi normal
                viewport={{ once: false, amount: 0.5 }} // animasi bisa diulang saat scroll
                transition={{ duration: 2, ease: "easeOut" }}
              >
                <p className="font-bold text-lg">Krisna Mahardika, S.Pd</p>
                <p className="text-sm">
                  Putra dari Bpk Damiran Edy Saputro & Ibu Supik
                </p>
              </motion.div>
            </div>

            {/* Mempelai Wanita */}
            <div className="flex flex-col items-center space-y-4">
              <motion.div
                className="w-[16rem] h-[24rem] border-3 border-primary rounded-full overflow-hidden shadow-lg"
                initial={{ scale: 0, opacity: 0 }} // mulai dari kecil & transparan
                whileInView={{ scale: 1, opacity: 1 }} // zoom in ke ukuran normal
                viewport={{ once: false, amount: 0.5 }} // bisa diulang saat scroll
                transition={{ duration: 2, ease: "easeOut" }}
              >
                <motion.img
                  src={wanita}
                  alt="mempelai pria"
                  className="w-full h-full object-cover"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                />
              </motion.div>
              <motion.div
                className="text-center text-white max-w-xs"
                initial={{ x: -200, opacity: 0 }} // mulai dari kiri & transparan
                whileInView={{ x: 0, opacity: 1 }} // geser ke posisi normal
                viewport={{ once: false, amount: 0.5 }} // animasi bisa diulang saat scroll
                transition={{ duration: 2, ease: "easeOut" }}
              >
                <p className="font-bold text-lg">
                  Virnalisha Dwi Septarini, S.Pd
                </p>
                <p className="text-sm">
                  Putri dari Alm. Bpk Ponijan & Ibu Sumik Widayati
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Jadwal */}
        <section className="relative text-white py-16 min-h-screen w-full flex flex-col items-center">
          {/* Kontainer Jadwal */}
          <div className="space-y-8 items-center justify-center gap-12 w-full max-w-4xl px-6">
            {/* Akad */}
            <motion.div
              className="bg-teal-950 h-[20rem] border-4 border-primary rounded-t-full p-8 w-full md:w-1/2 shadow-lg flex flex-col items-center justify-center text-center space-y-6"
              initial={{ scale: 0, opacity: 0 }} // mulai dari kecil & transparan
              whileInView={{ scale: 1, opacity: 1 }} // zoom in ke ukuran normal
              viewport={{ once: false, amount: 0.5 }} // animasi bisa diulang saat scroll
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <h3 className="akad text-5xl font-bold text-primary">
                Akad Nikah
              </h3>

              <div>
                <p className="text-base font-semibold">
                  Minggu, 24 Oktober 2025
                </p>
                <p className="text-base font-semibold">Pukul 08.00 WIB</p>
              </div>

              <p className="text-sm">Masjid Agung Al-Mubarok, Jombang</p>
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }} // mulai dari kecil & transparan
              whileInView={{ scale: 1, opacity: 1 }} // zoom in ke ukuran normal
              viewport={{ once: false, amount: 0.5 }} // bisa diulang saat scroll
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <Countdown targetDate="2025-10-25T10:00:00" />
            </motion.div>
            {/* Resepsi */}

            <motion.div
              className="bg-teal-950 h-[20rem] border-4 border-primary rounded-b-full p-8 w-full md:w-1/2 shadow-lg flex flex-col items-center justify-center text-center space-y-8"
              initial={{ scale: 0, opacity: 0 }} // mulai dari kecil & transparan
              whileInView={{ scale: 1, opacity: 1 }} // zoom in ke ukuran normal
              viewport={{ once: false, amount: 0.5 }} // animasi bisa diulang saat scroll
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <h3 className="resepsionis text-5xl font-bold text-primary">
                Resepsi
              </h3>

              <div>
                <p className="text-base font-semibold">
                  Minggu, 25 Oktober 2025
                </p>
                <p className="mt-2 text-sm">Rumah Mempelai Wanita</p>
              </div>

              <div>
                <p className="text-base font-semibold">
                  Minggu, 26 Oktober 2025
                </p>
                <p className="mt-2 text-sm">Rumah Mempelai Pria</p>
              </div>
            </motion.div>
          </div>
          <div>
            <img
              src={burung}
              alt="borderBurung"
              className="w-[10rem] absolute left-0 bottom-0  object-contain pointer-events-none"
            />
            <img
              src={burung}
              alt="borderBurung"
              className="w-[10rem] absolute scale-x-[-1] right-0 bottom-0  object-contain pointer-events-none"
            />
          </div>
        </section>

        {/* Galeri */}
        <section className="py-16 text-primary w-full">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-5xl akad md:text-3xl font-bold text-center mb-10"
              initial={{ x: 200, opacity: 0 }} // mulai dari kanan
              whileInView={{ x: 0, opacity: 1 }} // masuk ke posisi normal
              viewport={{ once: false, amount: 0.5 }} // bisa diulang saat scroll
              transition={{ duration: 2, ease: "easeOut" }}
            >
              Our Gallery
            </motion.h2>
            <div className="grid grid-cols-2 mt-20">
              <div className="overflow-hidden  shadow-md hover:scale-105 transition-transform duration-300">
                <motion.img
                  src={galeri1}
                  alt="Foto 1"
                  className="w-full h-50 object-cover"
                  initial={{ scale: 0, opacity: 0 }} // mulai kecil & transparan
                  whileInView={{ scale: 1, opacity: 1 }} // zoom in saat terlihat
                  viewport={{ once: false, amount: 0.5 }} // animasi bisa diulang saat scroll
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
              <div className="overflow-hidden  shadow-md hover:scale-105 transition-transform duration-300">
                <motion.img
                  src={galeri2}
                  alt="Foto 2"
                  className="w-full h-50 object-cover"
                  initial={{ scale: 0, opacity: 0 }} // mulai kecil & transparan
                  whileInView={{ scale: 1, opacity: 1 }} // zoom in saat terlihat
                  viewport={{ once: false, amount: 0.5 }} // animasi bisa diulang saat scroll
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
              <div className="overflow-hidden  shadow-md hover:scale-105 transition-transform duration-300">
                <motion.img
                  src={galeri1}
                  alt="Foto 1"
                  className="w-full h-50 object-cover"
                  initial={{ scale: 0, opacity: 0 }} // mulai kecil & transparan
                  whileInView={{ scale: 1, opacity: 1 }} // zoom in saat terlihat
                  viewport={{ once: false, amount: 0.5 }} // animasi bisa diulang saat scroll
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
              <div className="overflow-hidden  shadow-md hover:scale-105 transition-transform duration-300">
                <motion.img
                  src={galeri2}
                  alt="Foto 2"
                  className="w-full h-50 object-cover"
                  initial={{ scale: 0, opacity: 0 }} // mulai kecil & transparan
                  whileInView={{ scale: 1, opacity: 1 }} // zoom in saat terlihat
                  viewport={{ once: false, amount: 0.5 }} // animasi bisa diulang saat scroll
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
              <div className="overflow-hidden  shadow-md hover:scale-105 transition-transform duration-300">
                <motion.img
                  src={galeri1}
                  alt="Foto 1"
                  className="w-full h-50 object-cover"
                  initial={{ scale: 0, opacity: 0 }} // mulai kecil & transparan
                  whileInView={{ scale: 1, opacity: 1 }} // zoom in saat terlihat
                  viewport={{ once: false, amount: 0.5 }} // animasi bisa diulang saat scroll
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
              <div className="overflow-hidden  shadow-md hover:scale-105 transition-transform duration-300">
                <motion.img
                  src={galeri2}
                  alt="Foto 2"
                  className="w-full h-50 object-cover"
                  initial={{ scale: 0, opacity: 0 }} // mulai kecil & transparan
                  whileInView={{ scale: 1, opacity: 1 }} // zoom in saat terlihat
                  viewport={{ once: false, amount: 0.5 }} // animasi bisa diulang saat scroll
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
              <div className="overflow-hidden  shadow-md hover:scale-105 transition-transform duration-300">
                <motion.img
                  src={galeri1}
                  alt="Foto 1"
                  className="w-full h-50 object-cover"
                  initial={{ scale: 0, opacity: 0 }} // mulai kecil & transparan
                  whileInView={{ scale: 1, opacity: 1 }} // zoom in saat terlihat
                  viewport={{ once: false, amount: 0.5 }} // animasi bisa diulang saat scroll
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
              <div className="overflow-hidden  shadow-md hover:scale-105 transition-transform duration-300">
                <motion.img
                  src={galeri2}
                  alt="Foto 2"
                  className="w-full h-50 object-cover"
                  initial={{ scale: 0, opacity: 0 }} // mulai kecil & transparan
                  whileInView={{ scale: 1, opacity: 1 }} // zoom in saat terlihat
                  viewport={{ once: false, amount: 0.5 }} // animasi bisa diulang saat scroll
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
              <div className="overflow-hidden  shadow-md hover:scale-105 transition-transform duration-300">
                <motion.img
                  src={galeri1}
                  alt="Foto 1"
                  className="w-full h-50 object-cover"
                  initial={{ scale: 0, opacity: 0 }} // mulai kecil & transparan
                  whileInView={{ scale: 1, opacity: 1 }} // zoom in saat terlihat
                  viewport={{ once: false, amount: 0.5 }} // animasi bisa diulang saat scroll
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
              <div className="overflow-hidden  shadow-md hover:scale-105 transition-transform duration-300">
                <motion.img
                  src={galeri2}
                  alt="Foto 2"
                  className="w-full h-50 object-cover"
                  initial={{ scale: 0, opacity: 0 }} // mulai kecil & transparan
                  whileInView={{ scale: 1, opacity: 1 }} // zoom in saat terlihat
                  viewport={{ once: false, amount: 0.5 }} // animasi bisa diulang saat scroll
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Rekening */}
        <section className="py-16 text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div
              className="space-y-3 mb-10"
              initial={{ x: -200, opacity: 0 }} // mulai dari kiri & transparan
              whileInView={{ x: 0, opacity: 1 }} // geser ke posisi normal
              viewport={{ once: false, amount: 0.5 }} // animasi bisa diulang saat discroll
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-primary">
                Rekening
              </h2>
              <p className="text-sm text-gray-300">
                Terima kasih atas doa dan restunya ❤️
              </p>
            </motion.div>

            <div className="space-y-6">
              {/* Rekening 1 */}
              <motion.div
                className="border-3 w-[22rem] h-[12rem] border-primary rounded-3xl p-6 shadow-md bg-teal-900/50 hover:scale-105 transition-transform duration-300"
                initial={{ scale: 0, opacity: 0 }} // mulai agak kecil
                whileInView={{ scale: 1, opacity: 1 }} // zoom in saat terlihat
                viewport={{ once: false, amount: 0.5 }}
                transition={{
                  duration: 2,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 80, // semakin kecil semakin smooth
                  damping: 12,
                }}
              >
                <h3 className="text-2xl font-semibold">BSI</h3>
                <p className="mt-2 text-xl font-bold tracking-wider">
                  7266029041
                </p>
                <p className="text-sm mt-1">a.n. Krisna Mahardika</p>
              </motion.div>

              {/* Rekening 2 */}
              <motion.div
                className="border-3 w-[22rem] h-[12rem] border-primary rounded-3xl p-6 shadow-md bg-teal-900/50 hover:scale-105 transition-transform duration-300"
                initial={{ scale: 0, opacity: 0 }} // mulai agak kecil & transparan
                whileInView={{ scale: 1, opacity: 1 }} // zoom in saat terlihat
                viewport={{ once: false, amount: 0.5 }}
                transition={{
                  duration: 2, // animasi 2 detik
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 80,
                  damping: 12,
                }}
              >
                <h3 className="text-2xl font-semibold">BRI</h3>
                <p className="mt-2 text-xl font-bold tracking-wider">
                  3649 0104 2132 531
                </p>
                <p className="text-sm mt-1">a.n. Virnalisha Dwi Septarini</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Penutup */}
        <section className="relative text-white py-24 px-8 bg-gradient-to-b from-black via-teal-950 to-black w-full flex flex-col items-center text-center">
          {/* Judul Penutup */}
          <motion.div
            className="space-y-4"
            initial={{ x: -200, opacity: 0 }} // mulai dari kiri & transparan
            whileInView={{ x: 0, opacity: 1 }} // bergerak ke posisi normal
            viewport={{ once: false, amount: 0.5 }} // animasi bisa diulang saat scroll
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <img
              src={headTitle}
              alt="headPenutup"
              className="w-[14rem] mx-auto"
            />
            <h2 className="text-3xl akad md:text-4xl font-bold text-primary mb-8">
              Terima Kasih
            </h2>
          </motion.div>

          {/* Ucapan Penutup */}
          <motion.div
            initial={{ x: 200, opacity: 0 }} // mulai dari kanan & transparan
            whileInView={{ x: 0, opacity: 1 }} // geser ke posisi normal
            viewport={{ once: false, amount: 0.5 }} // bisa diulang saat discroll
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <p className="max-w-2xl text-base md:text-lg leading-relaxed mb-8">
              Dengan penuh rasa syukur, kami mengucapkan terima kasih atas doa,
              kehadiran, dan dukungan Anda semua. Semoga Allah SWT selalu
              memberkahi keluarga kita dan memberikan kebahagiaan untuk kita
              semua.
            </p>

            <p className="max-w-2xl italic text-sm md:text-base leading-relaxed">
              "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
              pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
              cenderung dan merasa tenteram kepadanya..."
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Home;
