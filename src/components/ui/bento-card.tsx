"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  icon?: ReactNode;
}

export function BentoCard({ 
  children, 
  className, 
  title,
  subtitle,
  icon 
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "group relative flex flex-col rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-all duration-300 p-6",
        className
      )}
    >
      {(title || icon) && (
        <div className="flex items-center gap-2 mb-4">
          {icon && (
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
              {icon}
            </div>
          )}
          {title && (
            <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 uppercase tracking-wide">
              {title}
            </h3>
          )}
        </div>
      )}
      <div className="flex-1">
        {children}
      </div>
    </motion.div>
  );
}
