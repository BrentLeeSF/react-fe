import { fetchProductsList } from '../../services/products.service';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { Counter } from '../counter';
import { Product } from '../../interfaces/Product';
import './homepage.css';

const HomePage = (props: any) => {

    /**
     * https://stackoverflow.com/questions/58159108/react-get-state-from-redux-store-within-useeffect
    const user = useSelector(state => state.user);
    useEffect(() => { 
        // do stuff     
    }, [user]);*/

    useEffect(()=>{
        props.fetchAllProducts()
    });

    const productList = props && props.productsList && props.productsList.data.map((product: Product, index: number) => (
        <li key={index}>
            <div className="product">
                <div>{product.title}</div>
                <div><Counter index={index} /></div>
            </div>
        </li>
    ));
    return (
        <div className="HomePage">
            <div className="productTitle">
                <h2>Test this home page!</h2>
            </div>
            <div className="productList">
                {productList}
            </div>
        </div>
    );
    /*return props && props.productsList && props.productsList.loading?(
      
        <h2>Loading...</h2>
        ):props && props.productsList && props.productsList.error?
        (
            <h2>{props.productsList.error}</h2>
        ):(
            <div>
                <h2>Image List & && & </h2>
                {
                    props.productsList && props.productsList.data &&
                    props.productsList.data.map((item: any) =>
                        <div>
                            <h1>{item}</h1>
                        </div>
                    )
                }
            </div>
        )*/
}

const mapStateToProps = (state: any) => {
    return {
        productsList: state.productsList
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return{
        fetchAllProducts:() => dispatch(fetchProductsList())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
