"use client"
// Import modules and components
import { usePathname, useSearchParams } from "next/navigation";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationPrevious,
    PaginationNext,
} from "./ui/pagination";
// Create Pagination propms
interface QueryPaginationProps {
    totalPages: number;
    className?: string;
}
// Create component
export function QueryPagination({
    totalPages,
    className,
}: QueryPaginationProps) {
    // Search Params and current pathname
    const pathname = usePathname();
    const searchParams = useSearchParams();
    // Current page, prev page and next page 
    const currentPage = Number(searchParams.get("page")) || 1;
    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;
    // This function returns the pathname to a new pagination
    const createPageURL = (pageNumber: number | string) => {
        // Create a new a new pathname to not overwrite current one
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());
        // Returns new path to pagiantion
        return `${pathname}?${params.toString()}`;
    };

    return (
        <Pagination className={className}>
            <PaginationContent>
                {/** Renders prevous page button only if current we are not in the first page */}
                {prevPage >= 1 ? (
                    <PaginationItem>
                        <PaginationPrevious href={createPageURL(prevPage)} />
                    </PaginationItem>
                ) : null}
                {/** Calculates the page number of the the pagination and dsiplays it */}
                {Array(totalPages)
                    .fill("")
                    .map((_, index) => (
                        <PaginationItem
                            className="hidden sm:inline-block"
                            key={`page-button-${index}`}
                        >
                            <PaginationLink
                                isActive={currentPage === index + 1}
                                href={createPageURL(index + 1)}
                            >
                                {index + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                {/** Display next page button if the total pages is greater then the next page val */}
                {nextPage <= totalPages ? (
                    <PaginationItem>
                        <PaginationNext href={createPageURL(nextPage)} />
                    </PaginationItem>
                ) : null}
            </PaginationContent>
        </Pagination>
    );
}
