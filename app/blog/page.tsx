import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { PostItemsCard } from "@/components/post-item-card";
import { QueryPagination } from "@/components/query-pagination";
import { sortPosts } from "@/lib/utils";

const POSTS_PER_PAGE = 4;

interface BlogPageProps {
    searchParams: {
        page?: string;
    };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
    const currentPage = Number(searchParams.page) || 1;
    const sortedPosts = sortPosts(posts.filter((post) => post.published));
    const totalPage = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

    const displayPosts = sortedPosts.slice(
        POSTS_PER_PAGE * (currentPage - 1),
        POSTS_PER_PAGE * currentPage
    );
    return (
        <div className="container max-w-4xl py-6 lg:py-10">
            <hr className="mt-8" />
            {displayPosts?.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-[auto,1fr] gap-4">
                    {displayPosts.map((post, index) => {
                        const { slug, date, title, description } = post;
                        if (index === 0) {
                            return (
                                <div key={index} className="md:col-span-3">
                                    <PostItemsCard
                                        slug={slug}
                                        date={date}
                                        title={title}
                                        description={description?.slice(0, 50)}
                                    />
                                </div>
                            );
                        }
                        return (
                            <div key={index} className="md:col-span-1">
                                <PostItemsCard
                                    slug={slug}
                                    date={date}
                                    title={title}
                                    description={description?.slice(0, 50)}
                                />
                            </div>
                        );
                    })}
                </div>
            ) : (
                <p>Nothing to see here yet</p>
            )}

            <QueryPagination
                totalPages={totalPage}
                className="justify-end mt-4"
            />
        </div>
    );
}
