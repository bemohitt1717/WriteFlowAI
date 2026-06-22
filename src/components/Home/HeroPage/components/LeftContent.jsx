import { useNavigate } from "react-router-dom";
import {containerVariants, itemVariants, heroContent} from "../data/heroData"
import { PATHS } from "../../../../utils/path";
import { motion } from "framer-motion";


export const LeftContent = () => {
    const navigate = useNavigate();
    return <div className="leftContent w-full lg:w-1/2 flex justify-center items-center px-6 sm:px-8 md:px-10 lg:px-16 py-16 sm:py-20 md:py-16 lg:py-20 min-h-screen lg:min-h-[calc(100vh-80px)]">
          <motion.div
            className="flex flex-col gap-8 sm:gap-10 md:gap-10 lg:gap-8 max-w-xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Hero Heading - Fade + Upward Motion */}
            <motion.h1
              className="text-4xl font-bold leading-tight tracking-tight text-[var(--color-text)] sm:text-5xl md:text-5xl lg:text-5xl"
              variants={itemVariants}
            >
              {heroContent.heading.split(" ai")[0]}
           <span className="text-[var(--color-accent)]"> ai</span>
            
            </motion.h1>

            {/* Description Text */}
            <motion.p
              className="max-w-lg text-lg leading-relaxed text-[var(--color-muted)] sm:text-xl md:text-xl lg:text-lg"
              variants={itemVariants}
            >
              {heroContent.description}
            </motion.p>

            {/* CTA Section */}
            <motion.div
              className="flex flex-col gap-6 sm:gap-8 md:gap-6 lg:gap-6 pt-4 md:pt-6"
              variants={itemVariants}
            >
              {/* CTA Button - Hover Scale */}
              <button
                onClick={() => {
                  navigate(PATHS.DASHBOARD);
                }}
                className="theme-button-primary cursor-pointer w-full rounded-lg px-8 py-4 text-lg font-semibold transition-colors duration-150 sm:w-auto sm:py-5 sm:text-xl md:text-lg"
              >
                {heroContent.ctaButton}
              </button>

              {/* Assurance Text */}
              <motion.p
                className="text-base font-medium text-[var(--color-muted)] sm:text-lg md:text-base"
                variants={itemVariants}
              >
                {heroContent.assurance}
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
}