import hero from "../assets/images/hero.png";
import { FaFacebook,FaLinkedin,FaTwitter,FaGithub} from "react-icons/fa";
import { AiOutlineMail, AiOutlineWhatsApp, AiFillEnvironment } from "react-icons/ai";
  
    
const Hero = () =>{

    const contact_info = [
      { icon: <AiOutlineMail />, text: "ikram9820khan@gmail.com",link:"mailto:Ikram9820khan@gmail.com" },
      { icon: <AiOutlineWhatsApp />, text: "+923020185186",link:"https://wa.me/+923020185186" },
      { icon: <AiFillEnvironment />, text: "Airport Road, Quetta, Pakistan" },
    ];
    
    const social_media = [
        {icon: <FaGithub/>,link:"https://github.com/ikram9820/"},
        {icon: <FaLinkedin/>,link:"https://www.linkedin.com/in/ikram-khan-929658249/"},
        {icon: <FaTwitter/>,link:"https://twitter.com/Ikram9820"},
        {icon: <FaFacebook/>,link:"https://web.facebook.com/profile.php?id=100094423407781"}
    ]



    return(
        <section id="home"
        className="min-h-screen flex py-10 gap-10 px-7 md:flex-row flex-col items-center"
        >
            <img src={hero} alt="Ikram's Photo" className="w-96 h-96 rounded-full object-cover" />

            <div className="felx-1 flex-col">
                <h1 className="text-cyan-600 md:text-6xl text-5xl">Hello!</h1>
                <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white fond-bold">My Name Is Ikram Khan</h1>
                <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-400">FullStack Developer</h4>


               
         <ul className="flex flex-col mt-8 gap-4 list-none">
            {contact_info?.map((contact, i) => (
              <li
                key={i}
                className="flex flex-row text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[2.5rem] text-2xl min-h-[2.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                   {contact.icon}
                </div>
                <div className="md:text-base text-sm break-words">
                <a href={contact.link}>{contact.text}</a>
                </div>
              </li>
            ))}
          </ul>

                
                <ul className="mt-8 text-3xl flex text-gray-600 gap-5">
                    {social_media.map((icon,i:number)=>(
                        <li key={i} className="hover:text-white cursor-pointer">
                            <a href={icon.link}>{icon.icon}</a>
                        </li>
                    ))}
                </ul>
                
            </div>
        </section>
    )
};

export default Hero;



  
    
