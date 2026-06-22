import {heroContent} from "../data/heroData"
import DemoChatBox from "./demoChatBox/chatBox"
import { motion } from "framer-motion"

export const RightContent = () => {
    return <motion.div
          className="rightContent w-full lg:w-1/2 flex flex-col justify-center items-center px-6 sm:px-8 md:px-10 lg:px-16 py-16 sm:py-20 md:py-16 lg:py-8 min-h-screen lg:min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <div className="w-full max-w-md lg:max-w-2xl flex flex-col gap-6 lg:gap-4 h-full">
            {/* Heading and Description */}
            <motion.div
              className="flex flex-col gap-3 lg:gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold leading-tight text-[var(--color-text)] sm:text-3xl md:text-3xl lg:text-3xl">
                {heroContent.demoHeading}
              </h2>
              <p className="max-w-lg text-sm leading-relaxed text-[var(--color-muted)] sm:text-base md:text-base">
                {heroContent.demoDescription}
              </p>
            </motion.div>

            {/* Chat Demo */}
            <DemoChatBox />
          </div>
        </motion.div>
}