"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { formatDate } from "@/utils/formatDate";
import { cn } from "@/utils/cn";

export const BlogCard = ({
  title,
  href,
  badges,
  description,
  iconUrl,
  readTime = "5 mins",
  publishedAt,
}) => {
  return (
    <Link href={href || "#"} className="block cursor-pointer">
      <Card className="flex bg-background  py-4 border-none ">
        <div className="flex-none">
          <Avatar className="h-12 w-12 m-auto rounded-lg bg-muted-foreground border-2">
            <AvatarImage
              src={!iconUrl || "/images/profile.jpg"}
              alt={title}
              className="object-contain"
            />
            <AvatarFallback>{title[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow  items-center flex-col group">
          <CardHeader className="py-0 px-6">
            <div className="flex items-center justify-between  text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none md:text-base text-sm">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1 ml-auto">
                    {/* {badges?.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))} */}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100"
                  )}
                />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {readTime} read
              </div>
            </div>
            {publishedAt && (
              <div className="font-sans text-xs text-muted-foreground my-1">
                {formatDate(publishedAt)}
              </div>
            )}
            {description && (
              <div className="font-sans text-xs md:text-sm mr-10 text-slate-500">
                {description}
              </div>
            )}
          </CardHeader>
        </div>
      </Card>
    </Link>
  );
};
