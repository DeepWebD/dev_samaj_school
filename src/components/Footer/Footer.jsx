import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import Logo from "../../../public/logo.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  // style={FooterBg}
  return (
    <div className="rounded-t-3xl">
      <div className="bg-secondary text-gray-100">
        <div className="container">
          <div className="grid md:grid-cols-4 md:gap-4 py-5 border-t-2 border-gray-300/10 text-gray-100">
            {/* brand info section */}
            <div className="py-8 px-4 space-y-4">
              <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                <img className="w-10 h-10" src={Logo} alt="Logo" />
                {/* <MdComputer className="text-secondary text-4xl" /> */}
                <p className="">Dev Samaj School</p>
              </div>
              <p>
                Established in 1966, An English medium school in Nehru Nagar , Delhi, stands at Ring Road, Nehru Nagar, Delhi - 110065, nurturing young minds with excellence.
                The name "Dev Samaj" also honors a legacy of social reform, founded in Lahore in 1887 by Pandit Shiv Narayan Agnihotri.
              </p>
              <div className="flex items-center justify-start gap-5 !mt-6">
                <a href="#" className="hover:text-secondary duration-200">
                  <HiLocationMarker className="text-3xl" />
                </a>
                <a href="#" className="hover:text-secondary duration-200">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#" className="hover:text-secondary duration-200">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#" className="hover:text-secondary duration-200">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>
            {/* Footer Links  */}
            <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate("/about-devSamaj"); }}>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate("/contact"); }}>
                      Contact Us
                    </a>
                  </li>
                  {/* <li>
                    <a href="#" >
                      Login
                    </a>
                  </li> */}
                </ul>
              </div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                  Resources
                </h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate("/video"); }}>
                      Video Gallery
                    </a>
                  </li>
                  <li>
                    <a href="#"  onClick={(e) => { e.preventDefault(); navigate("/admission"); }}>
                      Admission
                    </a>
                  </li>
                  <li>
                    <a href="#"  onClick={(e) => { e.preventDefault(); navigate("/facilities"); }}>
                      Facilities
                    </a>
                  </li>
                  {/* <li>
                    <a href="#" >
                      Login
                    </a>
                  </li> */}
                </ul>
              </div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                  Company Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate("/extra-curricular"); }}>
                      Extra Curricular
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate("/images"); }}>
                      Image Gallery
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate("/prayers"); }}>
                      Prayers
                    </a>
                  </li>
                  {/* <li>
                    <a href="#" >
                      Login
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          {/* copyright section  */}
          <div className="mt-2">
            <div className="text-center py-6 border-t-2 border-gray-800/10">
              <span className="text-sm bg- text-gray-100">
                {" "}
                @copyright 2024 Dev Samaj School
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
