import Image from "next/image";
import { socialMediaCards } from "../constants/socialMediaCards";

export default function SocialMediaCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:flex items-center justify-center gap-6">
      {socialMediaCards.map((media) => {
        const { id, href, src, alt } = media;
        return (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={src} alt={alt} className="h-48 lg:h-30"/>
          </a>
        );
      })}
    </div>
  );
}
