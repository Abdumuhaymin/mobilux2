import { useParams } from "react-router-dom";
import { products } from "../../../data";
import UzbIcon from "../../assets/UzbIcon";

const Detail = () => {
  const params = useParams();
  return (
    <div className="container">
      {products.map((item) => {
        if (item.id == params.id) {
          return (
            <div className="flex items-center gap-x-5 justify-center py-5">
              <div className="w-[500px] py-[24px]">
                <div className="flex items-center justify-between mb-6"></div>

                <img src={item?.img} alt="image" width={400} height={400} />
              </div>
              <div className="w-[1px] border-5 text-red-800 flex flex-col"></div>
              <div className="flex flex-col justify-end w-[550px]">
                <h1 className="font-bold text-[30px] mb-5">{item?.title}</h1>
                <div className="flex items-center gap-x-2">
                  <div className="flex items-center gap-x-2"></div>
                  <div className="py-1 px-2 text-[14px] text-white rounded-md bg-red-500 text-center">
                    {item?.discount} %
                  </div>
                </div>
                <h3 className="text-[#1FBA4A] text-[42px] font-bold">
                  {item?.price} so'm
                </h3>
                <div className="flex items-center gap-x-5">
                  <button className="bg-black text-white mt-5 px-[60px] py-3 flex items-center gap-x-2 rounded-md">
                    Savatchaga
                  </button>
                  <div className="flex items-center mt-3 gap-2 font-semibold">
                    <span className="w-5 h-5 bg-green-500 rounded-full pr-2"></span>
                    Omborda mavjud
                  </div>
                </div>
                <div className="mt-5 flex items-center gap-2 mb-4">
                  <p className="font-semibold">Rangi: </p> <p>{item?.color}</p>
                </div>
                <div>
                  <div className="py-3 flex items-center gap-x-5 bg-[#e9f8ed] rounded-lg mb-3">
                    <div className="rounded-full flex items-center justify-center ml-5 w-[42px] h-[42px] bg-white">
                      {" "}
                      <UzbIcon />
                    </div>
                    <h3 className="font-semibold">
                      O’zbekiston bo’ylab yetkazib berish:
                    </h3>
                    <p>14 ish kuni</p>
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="font-semibold">Описание</p>
                  <p>{item?.description}</p>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Detail;
