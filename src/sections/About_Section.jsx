import React from "react";
import Aboutimg from "../assets/aboutimg.png";

const About_Section = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover"
      style={{ backgroundImage: `url(${Aboutimg})` }}
    >
      <div className=" w-full h-full bg-emerald-950/95 flex flex-col items-center p-20">
        <p className=" text-white text-2xl font-semibold">
          කවුද මේ ඩොක්ටර් සර්?
        </p>
        <div className=" w-150 h-55 bg-emerald-100 rounded-2xl p-5 mt-20">
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
        <div className=" w-full h-160 flex justify-between space-x-10 mt-20">
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
      </div>
    </div>
  );
};

export default About_Section;
