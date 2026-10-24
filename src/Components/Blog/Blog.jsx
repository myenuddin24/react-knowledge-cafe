import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";


const Blog = ({ blog, handleAddToBookmark }) => {
    return (
        <div className="card mb-10">
            <figure>
                <img
                    className="rounded-xl h-100 w-full"
                    src={blog.cover}
                    alt={`cover picture of the title: ${blog.title}`} />
            </figure>
            <div className="card-body py-8 space-y-4">
                <div className="flex justify-between items-center">
                    <div className="flex gap-6 items-center">
                        <img
                            className="rounded-full w-16"
                            src={blog.author_img}
                            alt={`${blog.author}'s image`}
                        />
                        <div>
                            <h3 className="text-xl font-bold">{blog.author}</h3>
                            <p className="text-[#11111199] font-semibold">{blog.posted_date}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-[#11111199] text-lg font-medium">{blog.reading_time} min read</p>
                        <button
                            onClick={handleAddToBookmark}
                            className="text-[#11111199] text-xl"
                        > <CiBookmark></CiBookmark> </button>
                    </div>
                </div>
                <h2 className="card-title text-4xl font-bold">{blog.title}</h2>
                <p>
                    {
                        blog.hashtags.map((hash, idx) => <span
                            key={idx}
                        >
                            <a href="#" className="mr-3 text-[#11111199] text-lg font-medium">#{hash}</a>
                        </span>)
                    }
                </p>
                <div className="card-actions justify-start">
                    <button className="btn text-[#6047EC] text-lg font-semibold underline">Mark as read</button>
                </div>
            </div>
            <hr className="text-[#11111126]" />
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired
}

export default Blog;