import React from "react";
import patternCard from "../assets/images/bg-pattern-card.svg";
import patternTop from "../assets/images/bg-pattern-top.svg";
import patternBottom from "../assets/images/bg-pattern-bottom.svg";
import profileImg from "../assets/images/image-victor.jpg";

function ProfileCard() {
  return (
    <div className="bg-color text-center">
      <img src={patternTop} alt="pattern-top" className="top" />
      <img src={patternBottom} alt="pattern-bottom" className="bottom" />
      <div>
        <div className="flex h-screen justify-center items-center">
          <div className="max-w-md mx-auto flex flex-col bg-white w-72 rounded-xl shadow-xl card">
            <div
              style={{
                backgroundImage: `url(${patternCard})`,
              }}
              className="rounded-t-xl overflow-visible"
            >
              <img
                src={profileImg}
                alt="profile-img"
                className="rounded-full profile_img ring-4 ring-white"
              />
            </div>
            <div className="divide-y-2">
              <div className="flex flex-col p-3 mt-12">
                <div className="flex flex-row justify-center">
                  <p className="font-bold title-color">Victor Crest</p>
                  <p className="text-gray-500 pl-3">26</p>
                </div>
                <p className="flex flex-row justify-center location">London</p>
              </div>
              <div className="flex flex-row justify-evenly p-3">
                <div className="flex flex-col">
                  <p className="stat_num font-bold">80K</p>
                  <p className="stat_title">Followers</p>
                </div>
                <div className="flex flex-col">
                  <p className="stat_num font-bold">803K</p>
                  <p className="stat_title">Likes</p>
                </div>
                <div className="flex flex-col">
                  <p className="stat_num font-bold">1.4K</p>
                  <p className="stat_title">Photos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
