import { cn } from "@/lib/utils"

export const GridBackgorund = () => {
    return <div
        className={cn(
          "absolute inset-0 pointer-events-none z-0",
          "bg-size-[40px_40px]",
          "bg-[linear-gradient(to_right,rgba(101,62,193,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(101,62,193,0.12)_1px,transparent_1px)]",
          "dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]",
          "mask-[radial-gradient(ellipse_at_center,black_60%,transparent_100%)]"
        )}
      />
}