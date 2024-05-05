interface TooltipProps {
    text: string;
    href: string;
    icon: React.ForwardRefExoticComponent<
        IconProps & React.RefAttributes<SVGSVGElement>
    >;
}
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { IconProps } from "@radix-ui/react-icons/dist/types";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export function ToolTip({ text, href, icon }: TooltipProps) {
    return (
        <Link href={href} className="px-5" target="_blank">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <Button className="p-9" variant="ghost" >
                            {/* Apply Tailwind classes directly to the icon */}
                            {React.createElement(icon, { className: 'h-9 w-9' })}
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{text}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </Link>
    );
}