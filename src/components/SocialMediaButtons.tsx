import Image from "next/image";

import facebook from "../../public/social-media-icons/facebook.svg";
import instagram from "../../public/social-media-icons/instagram.svg";
import linkedin from "../../public/social-media-icons/linkedin.svg";
import discord from "../../public/social-media-icons/discord.svg";
import tiktok from "../../public/social-media-icons/tiktok.svg";

export default function SocialMediaButtons() {
  const iconSize = 40;

  return (
    <div className="flex items-center justify-center">
      <a
        href="https://www.facebook.com/uoasesa"
        className="mr-4 transition-transform duration-200 transform hover:scale-105"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={facebook}
          width={iconSize}
          height={iconSize}
          alt="facebook-icon"
        />
      </a>
      <a
        href="https://www.instagram.com/sesa.uoa"
        className="mr-4 transition-transform duration-200 transform hover:scale-105"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={instagram}
          width={iconSize}
          height={iconSize}
          alt="instagram-icon"
        />
      </a>
      <a
        href="https://www.linkedin.com/company/ausesa"
        className="mr-4 transition-transform duration-200 transform hover:scale-105"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={linkedin}
          width={iconSize}
          height={iconSize}
          alt="linkedin-icon"
        />
      </a>
      <a
        href="https://discord.gg/93AW5tMSBc"
        className=" mr-4 transition-transform duration-200 transform hover:scale-105"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={discord}
          width={iconSize}
          height={iconSize}
          alt="discord-icon"
        />
      </a>
      <a
        href="https://www.tiktok.com/@sesauoa"
        className="transition-transform duration-200 transform hover:scale-105"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={tiktok}
          width={iconSize}
          height={iconSize}
          alt="tiktok-icon"
        />
      </a>
    </div>
  );
}
