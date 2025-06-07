import { Bars3Icon } from "@heroicons/react/24/solid";

import React from "react";
import {
  ShortsIcon,
  HomeIcon,
  SubscriptionsIcon,
  HistoryIcon,
  PlayListIcon,
  CoursesIcon,
  VideoIcon,
  WatchLaterIcon,
  LikeIcon,
  DownloadIcon,
  ClipIcon
} from "../icons/Icons";

const Sidebar = ({side, setSide}) => {
  const sideIcons = [
    {
      id: 0,
      Icon: HomeIcon,
      text: "Home",
    },
    {
      id: 1,
      Icon: ShortsIcon,
      text: "Shorts",
    },
    { id: 2, Icon: SubscriptionsIcon, text: "Subscriptions" },
    {
      id: 3,
      Icon: HistoryIcon,
      text: "History",
    },
    {
      id: 4,
      Icon: PlayListIcon,
      text: "Playlist",
    },
    {
      id: 5,
      Icon: VideoIcon,
      text: "Your Videos",
    },
    {
      id: 6,
      Icon: CoursesIcon,
      text: "Your Courses",
    },
    {
      id: 7,
      Icon: WatchLaterIcon,
      text: "Watch Later",
    },
    {
      id: 8,
      Icon: LikeIcon,
      text: "Liked Videos",
    },
    {
      id: 9,
      Icon: DownloadIcon,
      text: "Downloads",
    },
    {
      id: 10,
      Icon: ClipIcon,
      text: "Your Clips",
    },
    
  ];

  return (
    <div className={`${!side ? `-translate-x-full` : `translate-x-0`} transition-all duration-100 w-60 border border-e-neutral-900 bg-neutral-910 p-2 fixed h-screen start-0 bottom-0 z-50 bg-youtube`}>
      <div className="flex gap-3 items-center  bg-zinc-850">
        <button onClick={() => setSide(!side)} className=" hover:bg-gray-700 focus:bg-gray-600 rounded-full p-2">
          <Bars3Icon className="text-white h-6 w-6" />
        </button>
        <img
          className="w-7"
          src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png"
          alt=""
        />
        <h2 className="text-white font-bold tracking-wider text-2xl">
          YouTube
        </h2>
      </div>
      <div className="flex flex-col items-start p-2">
        {sideIcons.map(({ id, Icon, text }) => (
          <button
            key={id}
            className=" hover:bg-neutral-800 focus:bg-gray-600 rounded-lg text-sm w-full font-thin px-3 py-2 flex items-center gap-5"
          >
            <Icon className="text-white h-5.5 w-5.5" />
            <span className="dark:text-white">{text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
