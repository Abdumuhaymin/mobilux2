import React from "react";
import { ProductType } from "../../../types";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import bin from "../../assets/bin.svg";
import rating from "../../assets/rating.svg";
import { useTranslation } from "react-i18next";

const MainCard: React.FC<ProductType> = ({
  img,
  title,
  price,
  id,
  discount,
  description,
  type,
  brand,
}) => {
  const { t } = useTranslation();
  return (
    <div className="bg-white w-[264px] h-[443px] justify-between p-6 flex flex-col rounded-lg relative shadow-md mt-[50px] mb-[50px]">
      <img className="object-contain h-[262px]" src={img} alt="img" />
      {discount == "0" ? null : (
        <div className="p-1 flex justify-center items-center bg-red-500 w-[45px] rounded-md absolute left-[7px]">
          {discount}
        </div>
      )}
      <Link
        to={`/home/${id}`}
        className="hover:text-primary text-md font-medium text-center"
      >
        {title.length > 25 ? title.slice(0, 25) + "..." : title}
      </Link>
      <div className="flex justify-between items-center">
        <img className="h-4" src={rating} alt="icon" />
      </div>
      <h4 className=" text-font18">{price} so'm</h4>
      <Button className=" hover:bg-green-400 flex gap-2" variant="default">
        <img src={bin} alt="img" />
        <p className="text-font14 text-white"> {t("savatga")}</p>
      </Button>
    </div>
  );
};

export default MainCard;
