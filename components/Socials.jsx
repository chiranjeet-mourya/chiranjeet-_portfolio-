import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/chiranjeet-mourya?tab=repositories",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/chiranjeet-singh-5932702b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    icon: <FaYoutube />,
    path: "https://www.youtube.com/@chiranjeetsingh461",
  },
  {
    icon: <FaTwitter />,
    path: "https://x.com/Chiranjeet8763",
  },
];

function Socials({ containerStyles, iconStyles }) {
  return (
    <>
      <div className={containerStyles}>
        {socials.map((item, index) => {
          return (
            <Link target="blank" href={item.path} key={index} className={iconStyles}>
              {item.icon}
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Socials;
