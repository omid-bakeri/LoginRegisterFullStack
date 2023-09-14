import { HiUser } from "react-icons/hi2";
import { FaEye } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import ErrorRegister from "../components/ErrorRegister";
import { Link } from "react-router-dom";
const register = () => {
  const buttonStyle =
    "bg-green-600 w-full w-[94%] mx-auto px-4 text-green-100 hover:opacity-90 py-3 mt-2 rounded-sm";
  return (
    <>
      <div className="bg-gradient-to-r flex justify-center items-center h-screen from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
        <div className="h-[800px] p-4 rounded-lg shadow-sm opacity-90 w-[1200px] mx-auto">
          <div className="flex  justify-center items-center gap-3">
            <form className="bg-slate-800 text-xl text-white rounded-lg shadow-lg h-[800px] p-4 w-[600px]">
              <div
                className="flex
               justify-center rounded-sm
                bg-slate-700 gap-2  p-4 items-start 
                text-center mx-aut
                 selection:bg-slate-600"
              >
                <h1>ثبت نام در سایت</h1>
                <i className="text-2xl  text-slate-400">
                  <HiUser />
                </i>
              </div>

              <div
                className="mt-5 selection:bg-slate-600
                 h-[89.3%]
               rounded-lg shadow-lg p-4 bg-slate-700"
              >
                <ErrorRegister />
                <div
                  className="flex p-4  mb-1
                 font-regular justify-between items-center gap-3"
                >
                  <label className="text-lg">نام و نام خانوادگی</label>
                  <input
                    type="text"
                    className="w-[335px] outline-none
                     rounded-md px-4 text-slate-800
                      py-2 border-2
                      text-xl focus:border-slate-500 
                      hover:duration-700"
                    placeholder="علی رضایی"
                  />
                </div>
                <div
                  className="flex p-4   
                font-regular justify-between items-center gap-3 mb-1"
                >
                  <label className="text-lg">نام کاربری</label>
                  <input
                    type="text"
                    className="w-[335px] outline-none
                     rounded-md px-4 text-slate-800
                      py-2 border-2
                      text-xl focus:border-slate-500 
                      hover:duration-700"
                    placeholder="َAli12"
                  />
                </div>
                <div
                  className="flex p-4  
                font-regular justify-between items-center gap-3 mb-1"
                >
                  <label className="text-lg">تاریخ تولد</label>
                  <input
                    type="date"
                    className="w-[335px] outline-none
                     rounded-md px-4 text-slate-800
                      py-2 border-2
                      text-xl focus:border-slate-500 
                      hover:duration-700"
                    placeholder="05/12/1390"
                  />
                </div>
                <div
                  className="flex p-4  
                font-regular justify-between items-center gap-3 mb-1"
                >
                  <label className="text-lg">آدرس الکترونیکی</label>
                  <input
                    type="email"
                    className="w-[335px] outline-none
                     rounded-md px-4 text-slate-800
                      py-2 border-2
                      text-xl focus:border-slate-500 
                      hover:duration-700"
                    placeholder="example@gmail.com"
                  />
                </div>
                <div
                  className="flex p-4   
                font-regular justify-between items-center gap-3 mb-1"
                >
                  <label className="text-lg">رمز عبور</label>
                  <div className="flex relative  justify-end items-center gap-2 ">
                    <input
                      type="password"
                      className=" outline-none
                     rounded-md px-4 text-slate-800
                      py-2 border-2
                      text-xl focus:border-slate-500 w-[335px] 
                      hover:duration-700"
                      placeholder="Reenfkj43@54d"
                    />
                    <i
                      className="
                   flex justify-start hover:cursor-pointer items-start absolute ml-4"
                    >
                      <FaEye className="text-slate-400" />
                    </i>
                  </div>
                </div>
                <div
                  className="flex p-4   
                font-regular justify-between items-center gap-3 mb-1"
                >
                  <label className="text-lg">تکرار رمز عبور</label>
                  <div className="flex relative  justify-end items-center gap-2 ">
                    <input
                      type="password"
                      className=" outline-none
                     rounded-md px-4 text-slate-800
                      py-2 border-2
                      text-xl focus:border-slate-500 w-[335px] 
                      hover:duration-700"
                      placeholder=""
                    />
                  </div>
                </div>
                <button
                  className={`flex justify-center mt-5 ${buttonStyle} items-center gap-2`}
                >
                  <button>ثبت نام</button>
                  <i>
                    <FaUser />
                  </i>
                </button>
                <div
                  className="flex justify-start
                  gap-1 items-center 
                 px-4 py-3"
                >
                  <p
                    className="font-regular 
                  text-lg mr-1"
                  >
                    حساب کاربری دارید ؟{" "}
                  </p>
                  <Link
                    className="font-regular text-xl text-blue-400"
                    to="login"
                  >
                    ورود
                  </Link>
                </div>
              </div>
            </form>
            <img
              width="600px"
              height="600px"
              className=" mt-20"
              src="../../public/assets/image/reset-password-removebg-preview.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default register;
