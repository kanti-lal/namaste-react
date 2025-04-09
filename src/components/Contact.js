import { useContext, useEffect } from "react";

const Contact = () => {
  useEffect(() => {}, []);

  return (
    <div className="m-3">
      <h1 className="font-bold text-center w-[260px]">Contact us</h1>
      <form>
        <div className="w-[260px] flex flex-col justify-center">
          <div>
            <input
              type="text"
              placeholder="name"
              className="border-2 border-gray-400 h-10 rounded-md mx-2 p-2 mb-2 w-full"
            />
          </div>

          <input
            type="email"
            className="border-2 border-gray-400 h-10 rounded-md mx-2 p-2 mb-2 w-full"
            placeholder="email"
          />
          <div>
            <textarea
              placeholder="Your message"
              className="border-2 border-gray-400 h-20 rounded-md mx-2 p-2 mb-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="h-10 bg-indigo-500 mx-2 w-full rounded-md text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
