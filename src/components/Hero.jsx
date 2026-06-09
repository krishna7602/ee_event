import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import logo from '../assets/logo.png';
import syngientLogo from '../assets/sponsors/syngient.svg';
import agmatelKeysightLogo from '../assets/sponsors/agmatel_keysight.png';
import track1Img from '../assets/track_1_renewable.png';
import track2Img from '../assets/track_2_smartgrids.png';
import track3Img from '../assets/track_3_multienergy.png';
import track4Img from '../assets/track_4_policy.png';
import track5Img from '../assets/track_5_intelligent.png';
import track6Img from '../assets/track_6_ev.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    {
      url: track1Img,
      caption: "Track 1: Renewable Energy and Storage Systems"
    },
    {
      url: track2Img,
      caption: "Track 2: Smart Grids, Digital Energy Platforms and Microgrids"
    },
    {
      url: track3Img,
      caption: "Track 3: Multi-Energy Systems and Net-Zero Integration"
    },
    {
      url: track4Img,
      caption: "Track 4: Energy Policy, Markets, and Regulatory Frameworks"
    },
    {
      url: track5Img,
      caption: "Track 5: Intelligent Systems and Optimization for Net-Zero Energy Systems Hybrid Mode"
    },
    {
      url: track6Img,
      caption: "Track 6: Electric Vehicles and E-Mobility Systems"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <div id="home" className="pt-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="w-full px-4 md:px-8 lg:px-12 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-9">
              <div className="flex items-center gap-8 mb-10">
                {/* Logo */}
                <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center border-4 border-green-500 overflow-hidden">
                  <img src={logo} alt="NZES-2026 Logo" className="w-full h-full object-contain p-2" />
                </div>

                {/* Title */}
                <div className="flex-1">
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                    National Conference on  
                    <span className="text-green-400 flex flex-wrap items-center gap-x-4">
                      Net-Zero Energy Systems 
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500 rounded-full text-base md:text-2xl font-bold -translate-y-0.5">
                        Hybrid Mode
                      </span>
                    </span>
                  </h1>
                  <p className="text-lg text-gray-300 max-w-3xl">
                    Advancing renewable energy, smart grids, energy storage, hydrogen
                    technologies, and policy frameworks to support India’s
                    <strong className="text-white"> Net-Zero 2070 </strong>
                    vision.
                  </p>
                </div>
              </div>

              {/* Date Banner */}
              <div className="bg-white text-gray-800 rounded-xl p-5 inline-block shadow-lg mb-8">
                <p className="text-lg font-semibold">
                  Date:{" "}
                  <span className="text-green-600">
                    12-13 June, 2026
                  </span>
                </p>
                
              </div>

              {/* Tagline */}
              <p className="text-xl text-gray-200 max-w-4xl">
                Bringing together academia, industry, policymakers, and research
                organizations to shape sustainable, low-carbon, and resilient
                energy systems for the future.
              </p>
              <div className="mt-6">
                <a
                  href="https://drive.google.com/file/d/19leP5fZNvffpoh4vYWtWSn7UOALJ7UHG/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition"
                >
                  See Brochure
                </a>
              </div>
            </div>

            <div className="lg:col-span-3 flex lg:justify-end lg:items-start">
              <div className="w-full max-w-52 flex flex-col items-center text-center">
                <p className="text-green-400 text-4xl md:text-5xl font-bold leading-tight mb-3">
                  Sponsors
                </p>
                <div className="flex flex-col gap-6 items-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-40 h-24 md:w-44 md:h-28 rounded-lg flex items-center justify-center p-2 bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-105">
                      <img
                        src={syngientLogo}
                        alt="Syngient"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-gray-300 text-sm font-medium">Syngient</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-40 h-24 md:w-44 md:h-28 rounded-lg flex items-center justify-center p-2 bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-105">
                      <img
                        src={agmatelKeysightLogo}
                        alt="Agmatel & Keysight"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-gray-300 text-sm font-medium text-center">Agmatel & Keysight</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* REGISTRATION FEE TABLE (copied from RegistrationPage) */}
      <div id="fees" className="w-full px-4 md:px-8 lg:px-12 py-12">
        <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50/90 p-5 shadow-sm">
          <p className="text-sm md:text-base leading-7 text-gray-800">
            <span className="font-bold text-gray-900">Important:</span>{" "}
            The organizing committee has decided to reduce the Registration Fee
            (<span className="font-bold bg-amber-200 px-1.5 py-0.5 rounded">Rs 500 + GST (18%) = Rs 590/-</span>)
            <span className="font-bold bg-yellow-200 px-1.5 py-0.5 rounded"> only for B.Tech students</span>.
            In this case, it is <span className="font-bold bg-amber-200 px-1.5 py-0.5 rounded">mandatory</span> that first author should be B.Tech student, and the registration &amp; presentation should be done only by the same B.Tech student. At the time of registration, the B.Tech students have to upload their id card (as a proof of students) along with payment slip in a single pdf file.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 mb-8">
          <div className="bg-blue-900 py-6 px-8">
            <h3 className="text-2xl font-bold text-white">Registration Fee Structure</h3>
          </div>

          <div className="overflow-x-auto p-6">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100 text-gray-800 text-center font-bold">
                  <th className="px-5 py-4 text-left border border-gray-200" rowSpan="2">Category</th>
                  <th className="px-5 py-3 border border-gray-200" colSpan="2">Online Participants</th>
                  <th className="px-5 py-3 border border-gray-200" colSpan="2">Offline Participants</th>
                </tr>
                <tr className="bg-gray-200 text-gray-600 text-center text-xs uppercase font-bold">
                  <th className="px-5 py-2 border border-gray-200">1st Paper</th>
                  <th className="px-5 py-2 border border-gray-200">For Every Additional Paper</th>
                  <th className="px-5 py-2 border border-gray-200">1st Paper</th>
                  <th className="px-5 py-2 border border-gray-200">For Every Additional Paper</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="bg-blue-50 hover:bg-blue-100 transition-colors">
                  <td className="px-5 py-4 font-medium border border-gray-200">Students (from NITJ)</td>
                  <td className="px-5 py-4 text-center border border-gray-200">Rs. 1500 /-</td>
                  <td className="px-5 py-4 text-center text-green-700 font-semibold border border-gray-200">Free</td>
                  <td className="px-5 py-4 text-center border border-gray-200">Rs. 1500 /-</td>
                  <td className="px-5 py-4 text-center text-green-700 font-semibold border border-gray-200">Free</td>
                </tr>
                <tr className="bg-blue-100 hover:bg-blue-200 transition-colors">
                  <td className="px-5 py-4 font-medium border border-gray-200">Students (Other than NITJ)</td>
                  <td className="px-5 py-4 text-center border border-gray-200">Rs. 2000 /- + GST<br/><span className="text-xs text-gray-500">=2360</span></td>
                  <td className="px-5 py-4 text-center border border-gray-200">Rs. 1000 /- + GST<br/><span className="text-xs text-gray-500">=1180 (2nd Paper Free)</span></td>
                  <td className="px-5 py-4 text-center border border-gray-200">Rs. 2500 /- + GST<br/><span className="text-xs text-gray-500">=2950</span></td>
                  <td className="px-5 py-4 text-center border border-gray-200">Rs. 1000 /- + GST<br/><span className="text-xs text-gray-500">=1180 (2nd paper Free)</span></td>
                </tr>
                <tr className="bg-blue-50 hover:bg-blue-100 transition-colors">
                  <td className="px-5 py-4 font-medium border border-gray-200">Faculties (from NITJ)</td>
                  <td className="px-5 py-4 text-center border border-gray-200">Rs. 2500 /-</td>
                  <td className="px-5 py-4 text-center text-green-700 font-semibold border border-gray-200">Free</td>
                  <td className="px-5 py-4 text-center border border-gray-200">Rs. 2500 /-</td>
                  <td className="px-5 py-4 text-center text-green-700 font-semibold border border-gray-200">Free</td>
                </tr>
                <tr className="bg-blue-100 hover:bg-blue-200 transition-colors">
                  <td className="px-5 py-4 font-medium border border-gray-200">Faculties (Other than NITJ)</td>
                  <td className="px-5 py-4 text-center border border-gray-200">Rs. 3000 /- + GST<br/><span className="text-xs text-gray-500">=3540</span></td>
                  <td className="px-5 py-4 text-center border border-gray-200">Rs. 1000 /- + GST<br/><span className="text-xs text-gray-500">=1180</span></td>
                  <td className="px-5 py-4 text-center border border-gray-200">Rs. 3500 /- + GST<br/><span className="text-xs text-gray-500">=4130</span></td>
                  <td className="px-5 py-4 text-center border border-gray-200">Rs. 1000 /- + GST<br/><span className="text-xs text-gray-500">=1180</span></td>
                </tr>
                <tr className="bg-blue-50 hover:bg-blue-100 transition-colors">
                  <td className="px-5 py-4 font-medium border border-gray-200">Industrial Persons</td>
                  <td className="px-5 py-4 text-center border border-gray-200">Rs. 3500 /- + GST<br/><span className="text-xs text-gray-500">=4130</span></td>
                  <td className="px-5 py-4 text-center border border-gray-200">Rs. 1500 /- + GST<br/><span className="text-xs text-gray-500">=1770</span></td>
                  <td className="px-5 py-4 text-center border border-gray-200">Rs. 4500 /- + GST<br/><span className="text-xs text-gray-500">=5310</span></td>
                  <td className="px-5 py-4 text-center border border-gray-200">Rs. 1500 /- + GST<br/><span className="text-xs text-gray-500">=1770</span></td>
                </tr>
                <tr className="bg-blue-100 hover:bg-blue-200 transition-colors">
                  <td className="px-5 py-4 font-medium border border-gray-200">Students (International)</td>
                  <td className="px-5 py-4 text-center border border-gray-200">USD 50</td>
                  <td className="px-5 py-4 text-center text-green-700 font-semibold border border-gray-200">Free</td>
                  <td className="px-5 py-4 text-center border border-gray-200">USD 100</td>
                  <td className="px-5 py-4 text-center text-green-700 font-semibold border border-gray-200">Free</td>
                </tr>
                <tr className="bg-blue-50 hover:bg-blue-100 transition-colors">
                  <td className="px-5 py-4 font-medium border border-gray-200">Faculties (International)</td>
                  <td className="px-5 py-4 text-center border border-gray-200">USD 100</td>
                  <td className="px-5 py-4 text-center border border-gray-200">USD 50</td>
                  <td className="px-5 py-4 text-center border border-gray-200">USD 125</td>
                  <td className="px-5 py-4 text-center border border-gray-200">USD 50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* IMAGE CAROUSEL */}
      <div id="tracks" className="w-full px-4 md:px-8 lg:px-12 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Conference Themes
        </h2>

        <div className="relative group">
          <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                  <p className="text-white text-2xl font-semibold">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="text-gray-800" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="text-gray-800" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-6">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-green-600 w-8"
                    : "bg-gray-300 w-3"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
