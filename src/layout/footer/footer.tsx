import Logo from "../../assets/logo";
import FooterIcon1 from "../../assets/footerIcon1";
import FooterIcon2 from "../../assets/footerIcon2";
import { Link } from "react-router-dom";
import MainIcon from "../../assets/mainIcon";
import Category from "../../assets/category";
import Icon2 from "../../assets/icon2";
import Karzinka from "../../assets/karzinka";
import UserIconmabil from "../../assets/userIconmabil";

const Footer = () => {
  return (
    <div>
      <div className="sm:hidden xs:hidden container md:flex  px-[85px] py-[35px]  justify-between">
        <div className="">
          <Logo />
          <h3 className="mt-8 text-font19">Mobilux © 2022</h3>
          <p className="mb-4 mt-2 text-font15">Barcha huquqlar kafolatlangan</p>
          <div className="flex gap-3">
            <FooterIcon1 />
            <FooterIcon2 />
          </div>
        </div>
        <div>
          <h3 className="text-font19">Foydali havolalar</h3>
          <ul className="mt-4">
            <li className="text-font13">
              <Link to={"/#"}>Bosh sahifa</Link>
            </li>
            <li className="text-font13">
              <Link to={"/#"}> Yordam kerakmi?</Link>
            </li>{" "}
            <li className="text-font13">
              <Link to={"/#"}> Foydalanish shartlari</Link>
            </li>{" "}
            <li className="text-font13">
              <Link to={"/#"}> Maxfiylik siyosati</Link>
            </li>
          </ul>
        </div>
        <div className="xs:hidden sm:hidden w-[300px] lg:flex xl:w-[580px] ">
          <div>
            <h3 className="text-font19">Biz haqimizda</h3>
            <ul className="mt-4">
              <li className="text-font13">
                <Link to={"/#"}>
                  Manzil: #214, G-dong, Lotte castle, 347 Jongno, Jongno-gu,
                  Seoul, 03113, Crescent Trade ltd
                </Link>
              </li>
              <li className="text-font13">
                <Link to={"/#"}> Korxona nomi: Mobilux trade</Link>
              </li>{" "}
              <li className="text-font13">
                <Link to={"/#"}> Korxona rahbari: HASANBOY TURSUNOV</Link>
              </li>{" "}
              <li className="text-font13">
                <Link to={"/#"}> Registratsiya raqami: 433-62-00377</Link>
              </li>
              <li className="text-font13">
                <Link to={"/#"}>
                  {" "}
                  Telefon raqami: 93 000 66-44 97 000 66-44
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white pt-1 container">
        <ul className="flex justify-between px-3">
          <li>
            <Link className="flex flex-col items-center" to={"/#"}>
              {" "}
              <MainIcon /> <p>Asosiy</p>{" "}
            </Link>
          </li>
          <li>
            <Link className="flex flex-col items-center" to={"/#"}>
              {" "}
              <Category /> <p>Katalog</p>{" "}
            </Link>
          </li>
          <li>
            <Link className="flex flex-col items-center" to={"/#"}>
              {" "}
              <Icon2 />{" "}
              <p className="text-center">
                Maxsus <br /> buyurtma
              </p>{" "}
            </Link>
          </li>
          <li>
            <Link className="flex flex-col items-center" to={"/#"}>
              {" "}
              <Karzinka /> <p>Savat</p>{" "}
            </Link>
          </li>
          <li>
            <Link className="flex flex-col items-center" to={"/#"}>
              {" "}
              <UserIconmabil />
              <p>Profil</p>{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
