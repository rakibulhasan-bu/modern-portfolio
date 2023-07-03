import { motion } from "framer-motion";
const TransitionEffect = () => {
    return (
        <>
            <motion.div initial={{ x: "100%", width: "100%" }} animate={{ x: "0%", width: "0%" }} exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }} transition={{ duration: .7, ease: "easeInOut" }} className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-primary dark:bg-primaryDark" />
            <motion.div initial={{ x: "100%", width: "100%" }} animate={{ x: "0%", width: "0%" }} transition={{ delay: .2, duration: .7, ease: "easeInOut" }} className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light dark:bg-dark" />
            <motion.div initial={{ x: "100%", width: "100%" }} animate={{ x: "0%", width: "0%" }} transition={{ delay: .3, duration: .7, ease: "easeInOut" }} className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-dark dark:bg-light" />
        </>
    );
};

export default TransitionEffect;