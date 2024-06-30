const Bookmarks = ({bookmark}) => {
    const {course_name} = bookmark;
    return (
        <div>
            <small>{course_name}</small>
            <br />
            <hr />
           
        </div>
        
        
    );
};

export default Bookmarks;