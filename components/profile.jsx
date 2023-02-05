import Image from "next/image";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";

function Profile() {
  return (
    <div className="text-center p-10 py-10">
      <h2 className="text-5xl py-2 text-blue-600 font-medium dark:text-sky-400 md:text-6xl">
        Ikram Khan
      </h2>
      <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
        Developer and Jr Software Architect.
      </h3>
      <p className="text-md py-3 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
        Freelancer providing services for programming and Web Development. Join
        me down below and let's get cracking!
      </p>
      <div className="text-5xl flex justify-center gap-8 py-3">
        <a target="_blank" href="https://twitter.com/ikramkhan9820">
          <AiFillTwitterCircle className=" text-blue-500" />
        </a>
        <a target="_blank" href="https://www.instagram.com/ikramkhan.98/">
          <AiFillInstagram className="text-red-400" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/ikram-khan-929658249/"
        >
          <AiFillLinkedin className=" text-blue-500 " />
        </a>
        <a target="_blank" href="https://github.com/ikram9820?tab=repositories">
          <AiFillGithub className="text-gray-800 dark:text-gray-200" />
        </a>
      </div>
      <div className="mx-auto bg-gradient-to-b  from-blue-200 rounded-full w-60 h-60 relative overflow-hidden mt-10 md:h-80 md:w-80">
        <Image src="/profile.png" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Profile;
