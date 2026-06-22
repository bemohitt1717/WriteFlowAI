import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../utils/path";
import DemoChatBox from "./components/demoChatBox/chatBox";
import { motion } from "framer-motion";
import { LeftContent } from "./components/LeftContent";
import { RightContent } from "./components/RightContent";
import { cn } from "@/lib/utils";

const HeroPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="theme-section relative flex w-full flex-col overflow-hidden lg:flex-row md:pt-26 min-h-200">
        {/* Custom Themed Grid Background Overlay */}
        <div
          className={cn(
            "absolute inset-0 pointer-events-none",
            "bg-size-[40px_40px]",
            "bg-[linear-gradient(to_right,rgba(101,62,193,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(101,62,193,0.07)_1px,transparent_1px)]",
            "dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]",
            "mask-[radial-gradient(ellipse_at_center,black_30%,transparent_80%)]",
          )}
        />

        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 -top-24 h-110 w-110 rounded-full bg-primary/10 blur-3xl"
        />

        {/* Left Content Section */}
        <LeftContent />

        {/* Right Content Section - Chat Demo */}
        <RightContent />
      </div>
    </>
  );
};

export default HeroPage;
