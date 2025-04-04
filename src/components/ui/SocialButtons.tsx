"use client";

import { FaGithub, FaGoogle } from "react-icons/fa";
import Button from "./Button";

export default function SocialButtons({
  githubText = "GitHub 로그인",
  googleText = "Google 로그인",
}: {
  githubText?: string;
  googleText?: string;
}) {
  return (
    <div className="flex flex-col gap-3 mt-4">
      <Button
        type="button"
        variant="outline"
        onClick={() => (window.location.href = "http://localhost:8080/oauth2/authorization/github")}
      >
        <div className="flex items-center justify-center gap-2">
          <FaGithub />
          {githubText}
        </div>
      </Button>

      <Button
        type="button"
        variant="outline"
        onClick={() => (window.location.href = "http://localhost:8080/oauth2/authorization/google")}
      >
        <div className="flex items-center justify-center gap-2">
          <FaGoogle />
          {googleText}
        </div>
      </Button>
    </div>
  );
}
