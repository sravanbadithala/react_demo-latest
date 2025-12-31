import { useEffect, useState } from "react";

export const useApiService = (url, id) => {
  const [menudata, SetMenudata] = useState(null);
  const menuUrl = id === null ? url : url + id;
  console.log(menuUrl);
  useEffect(() => {
    fetchedata();
  }, []);
  const fetchedata = async () => {
    const data = await fetch(menuUrl);
    const datajson = await data?.json();
    SetMenudata(datajson);
    console.log(datajson);
  };
  return menudata;
};
