import React from "react";
import Aboutimg from "../assets/aboutimg.png";

const About_Section = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover"
      style={{ backgroundImage: `url(${Aboutimg})` }}
    >
      <div className=" w-full h-full bg-emerald-950/95 flex flex-col items-center p-20">
        <p
          data-aos="fade-up"
          data-aos-duration="3000"
          className=" text-white text-2xl font-semibold"
        >
          කවුද මේ ඩොක්ටර් සර්?
        </p>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className=" w-150 h-55 bg-emerald-100 rounded-2xl p-5 mt-20"
        >
          <p className=" text-lg font-bold text-center pb-10">
            අනාගත වෛද්‍යවරයෙකුගෙන් ජීව විද්‍යාව ඉගෙන ගන්න.
          </p>
          <p>
            ජීව විද්‍යාව යනු විභාගයක් සමත් වීම සඳහා පමණක් නොව, ජීවිතය තේරුම්
            ගැනීම සඳහාද ඉගෙන ගත යුතු විෂයකි. වෛද්‍ය අධ්‍යාපනය තුළින් ලබාගත්
            ගැඹුරු දැනුම, සරල හා සිසුන්ට තේරුම් ගත හැකි ආකාරයෙන් ඔබ වෙත ගෙන එන
            ඉගැන්වීමක්.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className=" w-full h-160 flex justify-between space-x-10 mt-20"
        >
          <div className=" w-1/2 h-full overflow-hidden rounded-lg">
            <img
              src={Aboutimg}
              alt=""
              className=" w-full h-full object-cover hover:scale-105 transition-all duration-300"
            />
          </div>
          <div className=" w-1/2 h-full">
            <p className=" text-white">
              ගයාන් මධුසංක මහතා උසස් පෙළ ජීව විද්‍යාව (Biology) විෂය සඳහා
              කැපවීමෙන් කටයුතු කරන දක්ෂ හා නවීන ඉගැන්වීම් ක්‍රමවේදයන් අනුගමනය
              කරන අධ්‍යාපනවේදියෙකි. සංකීර්ණ ජීව විද්‍යා සංකල්ප සරලව හා පැහැදිලිව
              සිසුන්ට අවබෝධ කර දීම ඔහුගේ ඉගැන්වීම්වල විශේෂත්වයකි.
              <br />
              <br />
              ඔහුගේ ඉගැන්වීම් ක්‍රමය සංකල්ප මූලික ඉගෙනීම, ක්‍රමවත් පුනරීක්ෂණය,
              නිරන්තර ඇගයීම් සහ විභාගයට ගැළපෙන ප්‍රායෝගික මඟපෙන්වීම මත පදනම් වේ.
              සෑම සිසුවෙකුගේම හැකියාව හඳුනාගෙන, ඔවුන්ගේ අධ්‍යාපනික ඉලක්ක සාර්ථක
              කර ගැනීමට අවශ්‍ය නිවැරදි මඟපෙන්වීම ලබාදීම ඔහුගේ ප්‍රධාන අරමුණයි.
              <br />
              <br />
              ගයාන් මධුසංක මහතාගේ පන්ති තුළින් සිසුන්ට විභාගයට පමණක් නොව, ජීව
              විද්‍යාව පිළිබඳ ගැඹුරු අවබෝධයක් ලබාගැනීමටද අවස්ථාව සැලසේ. සරල
              උදාහරණ, නවීන ඉගැන්වීම් ක්‍රම, උසස් තත්ත්වයේ සටහන් සහ ක්‍රමවත්
              පුනරීක්ෂණ සැලසුම් හරහා සිසුන්ගේ විශ්වාසය හා දැනුම වර්ධනය කිරීම
              ඔහුගේ ඉගැන්වීමේ මූලික අරමුණයි.
              <br />
              <br />
              ඔහුගේ දැනුම, කැපවීම සහ සිසුන්ගේ සාර්ථකත්වය වෙනුවෙන් දක්වන උනන්දුව
              හේතුවෙන්, උසස් පෙළ ජීව විද්‍යාව හදාරන සිසුන්ට විශ්වාසයෙන් යුතුව
              තෝරාගත හැකි ගුරුවරයෙකු ලෙස ඔහුගේ පන්තිය ප්‍රසිද්ධියට පත්ව ඇත.
            </p>
            <div className=" flex space-x-5 mt-10">
              <p className=" bg-white/50 px-10 py-3 rounded-lg border text-shadow-2xs text-shadow-black border-lime-400 text-lime-300 font-bold">
                Medical Student
              </p>
              <p className=" bg-white/50 px-10 py-3 rounded-lg border text-shadow-2xs text-shadow-black border-lime-400 text-lime-300 font-bold">
                A/L Biology Educator
              </p>
            </div>
          </div>
        </div>
        <p
          data-aos="fade-up"
          data-aos-duration="3000"
          className=" text-center text-emerald-200 pt-20 text-lg"
        >
          " ජීව විද්‍යාව සරලව, තේරුම් ගත හැකි ලෙස සහ විභාගයට ගැළපෙන ආකාරයෙන්
          ඉගැන්වීම මගේ අරමුණයි. වෛද්‍ය අධ්‍යාපනයෙන් ලබාගත් විද්‍යාත්මක දැනුම හා
          අත්දැකීම් භාවිතා කරමින් සෑම සිසුවෙකුටම විෂය පිළිබඳ නිවැරදි අවබෝධයක්
          ලබාදීමට කැපවී සිටිමි. "
        </p>
        <div className=" w-full grid grid-cols-4 gap-5 pt-20">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className=" w-full flex flex-col items-center space-y-5 bg-lime-100 rounded-lg p-3"
          >
            <p className="  font-bold text-lg text-center">
              සංකල්ප මූලික ඉගැන්වීම
            </p>
            <p className=" text-center">
              විෂය මතක තබා ගැනීම වෙනුවට තේරුම් ගැනීමට අවධානය.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className=" w-full flex flex-col items-center space-y-5 bg-lime-100 rounded-lg p-3"
          >
            <p className="  font-bold text-lg text-center">
              සම්පූර්ණ විෂය නිර්දේශය
            </p>
            <p className=" text-center">
              Theory, Revision සහ Paper Class එකම තැනක.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className=" w-full flex flex-col items-center space-y-5 bg-lime-100 rounded-lg p-3"
          >
            <p className="  font-bold text-lg text-center">සතියේ ඇගයීම්</p>
            <p className=" text-center">
              නිරන්තර පරීක්ෂණ හා ප්‍රගතිය නිරීක්ෂණය.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className=" w-full flex flex-col items-center space-y-5 bg-lime-100 rounded-lg p-3"
          >
            <p className="  font-bold text-lg text-center">විභාග ඉලක්කය</p>
            <p className=" text-center">
              A සාමාර්ථයක් සඳහා සැලසුම් කළ ඉගැන්වීම් ක්‍රමවේදය.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_Section;
