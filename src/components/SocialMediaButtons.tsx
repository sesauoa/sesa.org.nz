import Image from "next/image";
import { socialMedia } from "../data/socialMedia";

export default function SocialMediaButtons() {
  const iconSize = 40;

  return (
    <div className="flex items-center justify-center">
      {socialMedia.map((media) => {
        const { id, href, src, alt } = media;
        return (
          <a
            key={id}
            href={href}
            className="mr-4 transition-transform duration-200 hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={src} width={iconSize} height={iconSize} alt={alt} />
          </a>
        );
      })}
    </div>
  );
}
