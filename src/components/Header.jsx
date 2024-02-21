import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";

const Header = () => {
  const navigate = useNavigate();

  //form gönderilince tetiklenir
  const handleSubmit = (e) => {
    e.preventDefault();

    //input girilen veri
    const text = e.target[0].value;
    // kullanıcıyı sonuçlar sayfasın yönlendir
    //search_query parametresi olarak aratılan terime ekle
    navigate(`/results?search_query=${text}`);
  };
  return (
    <div className="flex justify-between items-center p-4">
      <Link to={"/"} className="flex items-center gap-[10px]">
        <img className="w-[50px]" src="/youtube.png" alt="youtube logo" />
        <h1 className="hidden md:block text-2xl">Youtube</h1>
      </Link>

      <form
        onSubmit={handleSubmit}
        className="flex items-center border border-[rgb(123,123,123)] rounded-[20px] overflow-hidden"
      >
        <input
          className=" text-white bg-black px-3 py-1 outline-none"
          type="search"
        />
        <button className="border-l px-2 text-xl">
          <IoIosSearch />
        </button>
      </form>

      <div className="flex gap-3 text-xl cursor-pointer">
        <FaBell className="hover:text-gray-400 transition duration-[400ms]" />
        <IoVideocam className="hover:text-gray-400" />
      </div>
    </div>
  );
};

export default Header;
