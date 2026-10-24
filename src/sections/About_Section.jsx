import React from "react";
import Aboutimg from "../assets/aboutimg.png";
import { FaArrowDown } from "react-icons/fa";

const About_Section = () => {
  const scrollToSection = (id) => {
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 300);
  };

  return (
    <div
      className="w-full h-full bg-cover"
      style={{ backgroundImage: `url(${Aboutimg})` }}
    >
      <div className=" w-full h-full bg-emerald-950/95 flex flex-col items-center p-10 lg:p-20">
        <p
          data-aos="fade-up"
          data-aos-duration="3000"
          className=" text-white text-2xl font-semibold"
        >
          කවුද මේ ඩොක්ට සර්?
        </p>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className=" w-full h-full flex flex-col lg:flex-row justify-between lg:space-x-10 mt-20 items-center"
        >
          <div className=" w-full md:w-100 lg:w-1/2 h-100 md:h-160 lg:h-160 overflow-hidden rounded-lg">
            <img
              src={Aboutimg}
              alt=""
              className=" w-full h-full object-cover hover:scale-105 transition-all duration-300"
            />
          </div>
          <div className=" w-full lg:w-1/2 h-full">
            <p className=" text-white text-sm md:text-base mt-10 lg:mt-0">
              ඩොක්ටර් සර් හෙවත් ගයාන් මධුසංඛ කැලණිය විශ්වවිද්‍යාලයේ වෛදය පීඨයෙන්
              වෛද්‍ය උපාධිය සම්පූර්ණ කල උපාධිදාරියෙකි. උසස් පෙළ ජීව විද්‍යාව
              විෂය සඳහා විශ්වවිද්‍යාල සමයේ සිටම උපකාරක පංති ක්ෂේත්‍රයට පිවිස මේ
              වන විට වසර ගනනාවක අත්දැකීම් සහ විශිෂ්ට ප්‍රතිඵල රාශියක් බිහි
              කිරීමට සෘජුව දායකත්වය දැරු ගුරුවරයෙකි. කැපවීමෙන් කටයුතු කරන දක්ෂ
              හා නවීන ඉගැන්වීම් ක්‍රමවේදයන් අනුගමනය කරන ඔහු සංකීර්ණ ජීව විද්‍යා
              සංකල්ප සරලව හා පැහැදිලිව සිසුන්ට අවබෝධ කර දීමට ඔහුටම වෙන් වූ
              ක්‍රමවේද භාවිතය සිත්ගන්නා සුළුය.
              <br />
              <br />
              ඔහුගේ ඉගැන්වීම් ක්‍රමය මූලික සංකල්ප ඉගෙනීම, ක්‍රමවත් පුනරීක්ෂණය,
              නිරන්තර ඇගයීම් සහ විභාගයට ගැළපෙන ප්‍රායෝගික මඟපෙන්වීම මත පදනම් වේ.
              සෑම සිසුවෙකුගේම හැකියාව හඳුනාගෙන, ඔවුන්ගේ අධ්‍යාපනික ඉලක්ක සාර්ථක
              කර ගැනීමට අවශ්‍ය නිවැරදි මඟපෙන්වීම ලබාදීම ඔහුගේ ප්‍රධාන අරමුණයි.
              <br />
              <br />
              ගයාන් මධුසංඛ මහතාගේ පන්ති තුළින් සිසුන්ට විභාගයට පමණක් නොව, ජීව
              විද්‍යාව පිළිබඳ ගැඹුරු අවබෝධයක් ලබාගැනීමටද අවස්ථාව සැලසේ. සරල
              උදාහරණ, නවීන ඉගැන්වීම් ක්‍රම, උසස් තත්ත්වයේ සටහන් සහ ක්‍රමවත්
              පුනරීක්ෂණ සැලසුම් හරහා සිසුන්ගේ විශ්වාසය හා දැනුම වර්ධනය කිරීම
              ඔහුගේ ඉගැන්වීමේ මූලික අරමුණයි.
              <br />
              <br />
              ඔහුගේ දැනුම, කැපවීම සහ සිසුන්ගේ සාර්ථකත්වය වෙනුවෙන් දක්වන උනන්දුව
              හේතුවෙන්, ඔහුගේ පන්තියට සහභාගිව විශිෂ්ට ප්‍රතිඵල ලබාගත් සිසුන්
              විසින්, උසස් පෙළ ජීව විද්‍යාව හදාරන සිසුන්ට විශ්වාසයෙන් යුතුව
              තෝරාගත හැකි ගුරුවරයෙකු ලෙස ඔහුව හැදින්වීම ගුරුවරයෙක් ලෙස අසීමිත
              කැපවීම් මත ඩොක්ටර් සර් ලබාගත් විශාල ජයග්‍රාහනයකි.
            </p>
          </div>
        </div>
        <p
          data-aos="fade-up"
          data-aos-duration="3000"
          className=" text-center text-emerald-200 pt-20 text-base md:text-lg"
        >
          " ජීව විද්‍යාව සරලව, තේරුම් ගත හැකි ලෙස සහ විභාගයට ගැළපෙන ආකාරයෙන්
          ඉගැන්වීම මගේ අරමුණයි. වෛද්‍ය අධ්‍යාපනයෙන් ලබාගත් විද්‍යාත්මක දැනුම
          මනෝවිද්‍යාත්මක ක්‍රම හාඅත්දැකීම් භාවිතා කරමින් සෑම සිසුවෙකුටම විෂය
          පිළිබඳ නිවැරදි අවබෝධයක්ලබාදීමට කැපවී සිටිමි. "
        </p>
        <div data-aos="fade-up" data-aos-duration="3000">
          <div
            onClick={() => scrollToSection("wten")}
            className=" flex flex-col items-center animate-bounce mt-20 text-lime-400 font-bold cursor-pointer"
          >
            <p>W10</p>
            <FaArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_Section;
