import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./App.css";
import useDimensions from "./hooks/useDimensions";

function App() {
  // Holds State about when to show hover modal or not?
  const [isHovered, setIsHovered] = useState(false);

  // Hold state about is it clicked or not?
  const [isClicked, setIsClicked] = useState(false);

  const [windowDimenion] = useDimensions();
  const { winHeight } = windowDimenion;
  console.log(winHeight);
  return (
    <div>
      <div className="relative">
        <div className="fixed bottom-2 right-5">
          {isClicked && (
            <div className=" bg-[#ffffff] z-50  absolute bottom-14 right-0">
              <iframe
                style={
                  winHeight < 856
                    ? { height: `${winHeight - 100}px` }
                    : { height: "48rem" }
                }
                className={`h-[46rem] w-[22rem]`}
                src="https://spa-client.netlify.app/"
                title="SPA Client"
              />
            </div>
          )}

          <div
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            {/* Hover Modal Displayed Only on the hover */}
            {isHovered && (
              <div className="rounded-3xl bg-[#ffffff] z-40 absolute bottom-14 right-0 shadow-lg px-10 py-6 w-[22rem] ">
                <h1 className="font-bold text-base">
                  Looking to book an appointment? our concierge team is here to
                  help.
                </h1>
                <p className="text-[#652293] font-semibold text-base">
                  powered by logo
                </p>
              </div>
            )}
            <div
              onClick={() => {
                setIsClicked(!isClicked);
              }}
              className="absolute cursor-pointer bottom-0 right-0 bg-[#652293] w-14 h-14 rounded-full flex items-center justify-center"
            >
              {isClicked && (
                <AiOutlineClose
                  style={{ color: "#ffffff", fontSize: "2rem" }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          console.log("Click Happend");
          setIsClicked(false);
        }}
        className="min-h-screen"
      >
        <h1 className="text-3xl font-bold ">
          Hello world! This Will be the external Website
        </h1>
      </div>
    </div>
  );
}

export default App;
