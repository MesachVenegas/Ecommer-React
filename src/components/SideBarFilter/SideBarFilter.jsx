import { useDispatch } from "react-redux";
import { filterByCategoryThunk, getProductsThunk } from "../../store/slices/products.slice";

const SideBarFilter = ({ categories }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <ul className="categories list-group p-4">
            <small>Filter by Category</small>
                <li
                    className="list-group-item"
                    onClick={() => dispatch(getProductsThunk())}
                    style={{ cursor: 'pointer' }}
                >
                    All
                </li>
                {
                    categories.map(category => (
                        <li
                            className="list-group-item"
                            key={category.id}
                            onClick={() => dispatch(filterByCategoryThunk(category.id))}
                            style={{ cursor: 'pointer' }}
                        >
                            {category.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default SideBarFilter;