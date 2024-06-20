// import FilterIcon from "../../assets/FilterIcon";
import { useTranslation } from "react-i18next";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../../components/ui/select";
import { Input } from "../../components/ui/input";
import UserIcon from "../../assets/userIcon";
import SearchIcon from "../../assets/searchIcon";
import Logo from "../../assets/logo";
// import RingIcon from "../../assets/ringIcon";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import RingIcon from "../../assets/ringIcon";
const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="container py-5 flex justify-between items-center w-[100%]">
      <div className="flex items-center  gap-3 w-100%  ">
        <div>
          <Logo />
        </div>
        <div className="w-[100%] relative sm:hidden xs:hidden md:flex">
          <div className="flex w-[890px]  items-center space-x-2">
            <div className="absolute left-5">
              <SearchIcon />
            </div>
            <Input
              className=" border-primary   pl-[40px]  h-[47px] w-[90%]"
              type="text"
              placeholder={t("search")}
            />
            <Button
              variant="default"
              size={"sm"}
              className="  hover:bg-green-400 border-none  h-[47px] absolute right-[9%] flex gap-2"
            >
              {" "}
              <SearchIcon />
              <span>{t("search")}</span>{" "}
            </Button>
          </div>
        </div>
        <div className=" ml-[50px] sm:ml-[200px] md:ml-0 flex  justify-between gap-6 md:gap-10 items-center">
          {/* <Select>
            <SelectTrigger className="h-[38px] w-[120px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem
                  value="uz"
                  onClick={() => i18n.changeLanguage("uz")}
                >
                  {" "}
                  <div className="flex items-center gap-2">
                    <img
                      width={38}
                      className="rounded-[5px]"
                      src="https://sokin.moy.su/_ph/170/76810354.gif"
                      alt=""
                    />{" "}
                    <span> Uzb</span>
                  </div>
                </SelectItem>
                <SelectItem
                  value="ru"
                  onClick={() => i18n.changeLanguage("ru")}
                >
                  {" "}
                  <div className="flex items-center gap-2">
                    <img
                      width={38}
                      className="rounded-[5px]"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Russia.png/220px-Flag_of_Russia.png"
                      alt=""
                    />{" "}
                    <span>Рус</span>
                  </div>{" "}
                </SelectItem>
                <SelectItem
                  value="en"
                  onClick={() => i18n.changeLanguage("en")}
                >
                  {" "}
                  <div className="flex items-center gap-2">
                    <img
                      width={38}
                      className="rounded-[5px]"
                      src="https://images.satu.kz/187452926_w640_h640_flag-britanii-1h2m.jpg"
                      alt=""
                    />{" "}
                    <span>Eng</span>
                  </div>{" "}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select> */}
          <div className="flex gap-1">
            <button
              className="bg-slate-300 p-1 "
              onClick={() => i18n.changeLanguage("uz")}
            >
              Uzb
            </button>
            <button
              className="bg-slate-300 p-1"
              onClick={() => i18n.changeLanguage("ru")}
            >
              Rus
            </button>
            <button
              className="p-1 bg-slate-300"
              onClick={() => i18n.changeLanguage("en")}
            >
              Eng
            </button>
          </div>
          <div className="sm:hidden md:flex">
            <RingIcon />
          </div>
          <div className="md:flex sm:hidden xs:hidden  items-center">
            <Link className="sm:hidden md:flex" to={"/user"}>
              <Button className="sm:hidden bg-transparent  hover:bg-white md:flex gap-2  text-black">
                <p className="text-font16">{t("login")}</p>
              </Button>
            </Link>
            <div className=" cursor-pointer">
              <UserIcon />
            </div>
          </div>
          <div className="md:hidden ">
            <SearchIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
