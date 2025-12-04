import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass";
  size?: "sm" | "md" | "lg" | "xl" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      // OBLITERATED bg-slate-900 and replaced with theme colors (acumen-primary/secondary)
      primary: "bg-acumen-primary text-white hover:bg-acumen-secondary shadow-lg hover:shadow-acumen-primary/50",
      secondary:
        "bg-[hsl(277,72%,26%)] text-white hover:bg-[hsl(277,72%,22%)] shadow-lg",
      outline: "border-2 border-slate-200 bg-transparent text-slate-700 hover:border-slate-400", // Fixed hover class
      ghost: "hover:bg-slate-100 text-slate-600 hover:text-slate-900",
      glass:
        "backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs rounded-full",
      md: "h-11 px-6 text-sm rounded-full",
      lg: "h-12 px-8 text-base rounded-full",
      xl: "h-14 px-10 text-lg rounded-full",
      icon: "h-10 w-10 rounded-full p-2",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-semibold transition-all",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };