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
                  <a className="hover:text-primaryA1" target="_blank" href=""><FaTwitter /></a>
                  <a className="hover:text-primaryA1" target="_blank" href=""><FaLinkedin /></a>
                  <a className="hover:text-primaryA1" target="_blank" href=""><FaFacebook /></a>
              </div>
              <div className="mt-8 text-center text-white">
                <p>&copy; {new Date().getFullYear()} {t("school-rights")} </p>
              </div>
          </div>

          {/* second column : links */}
          <div className="grid grid-cols-2 gap-3 md:gap-8 font-medium   md:text-lg">
            <div className="flex flex-col gap-4">
              <h3>{t("contact-us")}</h3>
              <a target="_blank" href="">{t("why-octar")}</a>
              <a target="_blank" href="">{t("octar-school")}</a>
              <a target="_blank" href="">{t("octar-home")}</a>
            </div>
            <div className="flex flex-col gap-4">
              <h3>{t("meet-us")}</h3>
              <a target="_blank" href="">+1 (202) 860-8888</a>
              <a target="_blank" href="">info@octar.com</a>
              <a target="_blank" href="">205. Cairo, Egypt</a>
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
  