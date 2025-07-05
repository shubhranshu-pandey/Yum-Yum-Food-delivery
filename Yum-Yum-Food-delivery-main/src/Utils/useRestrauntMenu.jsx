import { useEffect, useState } from "react";
import { SWIGGY_API } from "./apiConfig";

const useRestrauntMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  //fetch data

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(SWIGGY_API.MENU(resId));
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestrauntMenu;
