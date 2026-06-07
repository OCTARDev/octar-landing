"use client";
import { useTranslations } from "next-intl";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
export default function Footer(){
  const t = useTranslations("components.layout.footer");
  return (
    <footer className="bg-gradient-primary text-white py-6 mt-auto capitalize">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* first column : socials */}
          <div className="flex flex-col justify-center items-start ">
              {/* Socials */}
              <div className=" flex justify-center items-center gap-4 text-[22px]">
                  <p className="text-base">&copy; {new Date().getFullYear()} {t("ed-circle")}  </p>
                  <a className="hover:text-primaryA1" target="_blank" href="https://x.com/OCTARedu"><FaTwitter /></a>
                  <a className="hover:text-primaryA1" target="_blank" href="https://www.linkedin.com/company/octar-edu/posts/?feedView=all"><FaLinkedin /></a>
                  <a className="hover:text-primaryA1" target="_blank" href="https://www.facebook.com/octareducation"><FaFacebook /></a>
              </div>
              <div className="mt-8 text-center text-white">
                <p>&copy; {new Date().getFullYear()} {t("school-rights")} </p>
              </div>
          </div>

          {/* second column : links */}
          <div className="grid grid-cols-2 gap-3 md:gap-8 font-medium   md:text-lg">
            <div className="flex flex-col items-start gap-4">
              <h3>{t("contact-us")}</h3>
              <p >{t("why-octar")}</p>
              <button >{t("octar-school")}</button>
              <button >{t("octar-home")}</button>
            </div>
            <div className="flex flex-col items-start gap-4 text-start">
              <h3>{t("meet-us")}</h3>
              {/* <a target="_blank" href="">+1 (202) 860-8888</a> */}
              <button >info@octargo.com</button>
              <p >Dubai- UAE</p>
              <p >205. Cairo, Egypt</p>
            </div>
          </div>
        </div>
        {/* under footer copy rights */}
        {/* <div className="mt-8 text-center text-white">
          <p>&copy; {new Date().getFullYear()} OCTAR SCHOOL. All rights reserved.</p>
        </div> */}
      </div>
    </footer>
  );
  };
  
 Footer;
  