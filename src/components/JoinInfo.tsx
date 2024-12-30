import React from "react";
import JoinButton from "./JoinButton";

export default function JoinInfo() {
  return (
    <div>
      <p className="mt-4">
        <strong>Membership is 100% free!</strong>
      </p>
      <p className="mt-2 py-2">
        Membership doesn&apos;t roll over, so you need to fill out this form
        every year!
      </p>
      <p className="mt-2">
        Once you have filled out the form, don&apos;t forget to connect with us
        on{" "}
        <a
          href="https://facebook.com/sesauoa"
          target="_blank"
          className="text-sesa-teal-dark hover:underline"
        >
          Facebook
        </a>
        ,
        <a
          href="https://instagram.com/sesa.uoa"
          target="_blank"
          className="text-sesa-teal-dark hover:underline"
        >
          {" "}
          Instagram
        </a>
        ,
        <a
          href="https://www.linkedin.com/company/ausesa/"
          target="_blank"
          className="text-sesa-teal-dark hover:underline"
        >
          {" "}
          LinkedIn
        </a>
        ,{" "}
        <a
          href="https://discord.gg/93AW5tMSBc"
          target="_blank"
          className="text-sesa-teal-dark hover:underline"
        >
          {" "}
          Discord
        </a>{" "}
        and{" "}
        <a
          href="https://www.tiktok.com/@sesauoa"
          target="_blank"
          className="text-sesa-teal-dark hover:underline"
        >
          {" "}
          TikTok
        </a>
        , where most of our discussions and announcements take place!
      </p>
      <div className="flex justify-center mt-5">
        <JoinButton />
      </div>
    </div>
  );
}
