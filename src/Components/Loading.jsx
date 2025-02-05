import L from "../A.json"
import Lottie from "lottie-react";

const Loading = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            {/* <span className="loading loading-bars loading-lg"></span> */}
            <Lottie animationData={L}></Lottie>

        </div>
    );
};

export default Loading;