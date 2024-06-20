import { Button } from "../../components/ui/button";
import product from "../../assets/product.svg";
import bin from "../../assets/bin.svg";
import { useTranslation } from "react-i18next";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { category, banners, products } from "../../../data";
import MainCard from "../../components/cards/main-card";
import LinkIcon from "../../assets/linkIcon";
import { Link } from "react-router-dom";
import CategoryIcon from "../../assets/categoryIcon";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="  md:flex bg-bg ">
      {/* <button onClick={() => i18n.changeLanguage("uz")}>Uz</button>
      <button onClick={() => i18n.changeLanguage("ru")}>Ru</button>
      <button onClick={() => i18n.changeLanguage("en")}>Eng</button> */}
      <div
        style={{ WebkitScrollSnapType: "unset" }}
        className="sm:hidden xs:hidden  mt-5 mb-5 md:flex flex-col gap-9 px-[45px] pt-[30px] bg-white"
      >
        <Button
          className=" md:flex gap-3  hover:bg-green-400"
          variant="default"
        >
          <img src={bin} alt="icon" />{" "}
          <p className="text-font14 text-white"> {t("Maxsus buyurtma")}</p>
        </Button>
        <div className=" pb-4   flex gap-2 md:flex-col">
          {category.map((item: any) => (
            <div
              className=" flex  w-[200px] justify-between items-center "
              key={item.id}
            >
              <Link to={`${item.path}`}>
                <div className="flex flex-col items-center">
                  <div className="md:hidden">
                    <CategoryIcon />
                  </div>
                  <h2 className=" md:text-[16px]  font-normal hover:cursor-pointer hover:text-primary">
                    {item.title}
                  </h2>
                </div>
              </Link>
              <div className="hidden md:flex">
                <LinkIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-bg w-full  p-5 overflow-y-scroll h-screen">
        <div className="w-full bg-white mb-8">
          <Carousel className="">
            <CarouselContent className="">
              {banners.map((item: any) => (
                <img
                  key={item.id}
                  className="object-contain "
                  src={item.img}
                  alt="img"
                />
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div>
          <div className="flex gap-4 ml-3 mb-5">
            <img src={product} alt="icon" />
            <h2 className="font-bold text-2xl">{t("Barcha mahsulotlar")}:</h2>
          </div>
          <div className=" flex justify-center flex-col items-center  sm:grid sm:grid-cols-2 sm:gap-3 md:grid md:grid-cols-2 md:gap-3 lg:grid lg:grid-cols-3 lg:gap-3 xl:grid xl:grid-cols-4 xl:gap-3  ">
            {products.map((item: any) => (
              <Link to={`/home/${item.id}`} key={item.id}>
                <MainCard {...item} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
