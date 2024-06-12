import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { IconProps } from "@radix-ui/react-icons/dist/types";

import Link from "next/link";
import React from "react";

interface TooltipProps {
    className?: string;
    text: string;
    href: string;
    icon: React.ForwardRefExoticComponent<
        IconProps & React.RefAttributes<SVGSVGElement>
    >;
}

export function ToolTip({ text, href, icon }: TooltipProps) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Link href={href} className="p-9" target="_blank">
                        {React.createElement(icon, { className: "h-9 w-9" })}
                    </Link>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{text}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
