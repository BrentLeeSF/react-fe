import { fetchImageList } from '../redux/actions/action';
import { connect } from 'react-redux';
import { useEffect } from 'react';

const HomePage = (props: any) => {

    useEffect(()=>{
        props.fetchimages()
    });

    const productList = props && props.imglist && props.imglist.data.map((product: any, index: number) => (
        <li key={index}>
          <div className="product">
            {product.title}
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
    /*return props && props.imglist && props.imglist.loading?(
      
        <h2>Loading...</h2>
        ):props && props.imglist && props.imglist.error?
        (
            <h2>{props.imglist.error}</h2>
        ):(
            <div>
                <h2>Image List & && & </h2>
                {
                    props.imglist && props.imglist.data &&
                    props.imglist.data.map((item: any) =>
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
        imglist: state.imglist
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return{
        fetchimages:() => dispatch(fetchImageList())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
