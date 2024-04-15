import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    CardTitle,
    CardDescription,
} from "./ui/card";

interface PostItemsCardProps {
    slug: string;
    title: string;
    description?: string;
    date: string;
    image?: string
}

export function PostItemsCard({
    slug,
    title,
    description,
    date,
    image,
}: PostItemsCardProps) {
    return (
        <Link href={slug}>
            <Card className="flex flex-col h-full overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                {image && (
                    <div className="relative w-full h-48">
                        <Image
                            src={image}
                            alt="Descriptive text for the image"
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                )}
                <CardContent className="flex flex-col justify-between p-4 leading-normal">
                    <CardHeader>
                        <CardTitle className="text-lg md:text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                            {title}
                        </CardTitle>
                    </CardHeader>
                    <CardDescription className="text-sm md:text-base text-gray-700 overflow-hidden line-clamp-3">
                        {description}
                    </CardDescription>
                    <CardFooter className="mt-4 pt-2 border-t border-gray-200">
                        <time
                            dateTime={date}
                            className="text-xs md:text-sm text-gray-500"
                        >
                            {formatDate(date)}
                        </time>
                    </CardFooter>
                </CardContent>
            </Card>
        </Link>
    );
}
