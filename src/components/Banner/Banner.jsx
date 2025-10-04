/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";
import ImageSlider from "../common/ImageSlider";
import VideoPlayer from "../common/VideoPlayer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentPath } from "../../store/reducers/uiSlice";

const Banner = ({ description, title, reverse, images, videoUrl }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    if (!reverse) {
      dispatch(setCurrentPath("/" + "images"));
      navigate("/" + "images");
    } else {
      dispatch(setCurrentPath("/" + "video"));
      navigate("/" + "video");
    }
  };

  return (
    // <div>Banner</div>
    <div className="bg-sky-100 p-14">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0">
          {/* banner Image section */}
          <div
            className={`flex justify-start items-center  ${
              reverse && "md:order-last md:justify-end"
            }`}
          >
            {reverse ? (
              <VideoPlayer videoUrl={videoUrl} />
            ) : (
              <ImageSlider images={images} />
            )}
          </div>
          {/* Banner text section */}
          <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px] p-2">
            <motion.h2
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView={"visible"}
              className=" text-secondary font-semibold capitalize"
            >
              {title}
            </motion.h2>

            <motion.p
              variants={SlideUp(0.9)}
              initial="hidden"
              whileInView={"visible"}
              className="text-lg font-extralight text-slate-500"
            >
              {description}
            </motion.p>
            <motion.div
              variants={SlideUp(1.1)}
              initial="hidden"
              whileInView={"visible"}
              className="flex justify-center md:justify-start"
            >
              <button
                onClick={(e) => clickHandler(e)}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition-all"
              >
                See More
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
