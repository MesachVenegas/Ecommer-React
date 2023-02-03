import { filterByCategoryThunk, getProductsThunk } from "../../store/slices/products.slice";
import { useDispatch } from "react-redux";
import './sidebar.css'

const SideBarFilter = ({ categories }) => {
    const dispatch = useDispatch();

    return (
        <>
            <ul className="categories list-group d-flex p-4">
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
        </>
    );
};

export default SideBarFilter;