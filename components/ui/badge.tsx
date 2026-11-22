import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 h-7 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-teal",
  {
    variants: {
      variant: {
        default:
          "border-teal/15 bg-seafoam text-teal",
        secondary:
          "border-transparent bg-seafoam/60 text-ink",
        outline: "text-ink border-teal/20",
        coral: "border-transparent bg-coral/15 text-coral font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
