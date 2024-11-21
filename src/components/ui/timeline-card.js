import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function TimeLineCard({
  title,
  role,
  description,
  dates,
  location,
  image,
  links,
  archive,
}) {
  return (
    <li className="relative ml-10 py-4 font-poppins">
      <div className="absolute -left-16 top-2 flex items-center justify-center  rounded-full">
        <Avatar className="border h-12 w-12 m-auto">
          <AvatarImage src={image} alt={title} className="object-contain" />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {dates && (
          <time className="text-xs text-muted-foreground">{dates}</time>
        )}
        <h2 className="font-semibold leading-none">{title}</h2>
        {role && (
          <Badge
            variant="secondary"
            className="w-fit text-xs font-light py-1  mt-0.5"
          >
            {role}
          </Badge>
        )}
        {location && (
          <p className="text-sm text-muted-foreground">{location}</p>
        )}
        {description && (
          <span className="prose dark:prose-invert text-sm text-muted-foreground ">
            {description}
          </span>
        )}
      </div>
      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) =>
            archive ? (
              <Badge
                variant="destructive"
                key={idx}
                className="flex gap-2 px-2 py-0.5 text-[10px] bg-red-700"
              >
                {link.icon}
                {link.title}
              </Badge>
            ) : (
              <Link href={link.href} key={idx} target="_blank">
                <Badge key={idx} title={link.title} className="flex gap-2">
                  {link.icon}
                  {link.title}
                </Badge>
              </Link>
            )
          )}
        </div>
      )}
    </li>
  );
}
