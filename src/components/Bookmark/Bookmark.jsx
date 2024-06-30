import Bookmarks from "../bookmarks/Bookmarks";



const Bookmark = ({name, totalPrice, credit}) => {
     
    return (
        <div className="md:w-1/3 ml-12">
            <h1>Selected Course: {name.length}</h1>
            <div>
                <h1>Reading Time: {credit}</h1>
            </div>
            <div>
                {
                    name.map(bookmark => <Bookmarks bookmark={bookmark}></Bookmarks>)
                }
            
            </div>
            <div className="mt-4">
                <h1>Total Price: {totalPrice}</h1>
                    
                
            </div>
        </div>
    );
};

export default Bookmark;