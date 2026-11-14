import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "default" | "narrow" | "readable";
  className?: string;
}

/**
 * Standardized Container Primitive
 * Rule 3: One container. All page content sits in a single container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8.
 * Long-form text blocks additionally cap at max-w-3xl for readable line length.
 */
export function Container({
  children,
  size = "default",
  className = "",
  ...props
}: ContainerProps) {
  const sizeClasses = {
    default: "max-w-7xl",
    readable: "max-w-3xl",
    narrow: "max-w-2xl",
  }[size];

  return (
    <div
      className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

