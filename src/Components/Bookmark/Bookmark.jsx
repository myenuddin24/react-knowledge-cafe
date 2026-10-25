import PropTypes from "prop-types";


const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-white rounded-lg p-5 mt-4">
            <h4 className="text-lg font-semibold">{title}</h4>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}
export default Bookmark;