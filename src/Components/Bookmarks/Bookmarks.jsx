import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3">
            <div className="bg-[#6047EC1a] p-6 mb-6 rounded-xl text-center border-2 border-[#6047EC]">
                <h3 className="text-2xl font-bold text-[#6047EC]">Spent time on read : {readingTime} min</h3>
            </div>
            <div className="p-7 bg-[#1111110d] rounded-xl">
                <h3 className="font-bold text-2xl">Bookmarked Blogs : {bookmarks.length}</h3>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark
                        key={idx}
                        bookmark={bookmark}
                    ></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}
export default Bookmarks;