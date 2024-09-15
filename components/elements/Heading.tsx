import React from "react";

interface HeadingType {
  title: string;
  className?: string;
}

export const Heading: React.FC<HeadingType> = ({ title, className }) => {
  return <span className={className}>{title}</span>
}
