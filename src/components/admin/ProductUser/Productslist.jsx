import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteProductsDetails } from '../../../helpers/api';
import { getProductsDetails } from '../../../helpers/api';
import Loader from '../../Loader'

function Productslist({currentPost}) {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const products = await getProductsDetails();
      setData(products)
    }
    fetchData()
  }, []); 
  

  if(!data) return <Loader />

  
  const deleteProducts = async (_id) => {
    if (window.confirm('Are you sure?')) {
        await deleteProductsDetails(_id)
        window.location = "/Admin/Productslist";
    }
  }


  return (
    <div>
      <div className='container'>
        <div className='row ttable'>
          <header>
            <h1>Product</h1>
            <Link to={`/Admin/ProductsList/CreateProducts`}>
            <button>
              <span className='fa fa-cross'></span>
              Create Product
            </button>
            </Link>
          </header>
        </div>
        <hr />
        <div className='container'>
        <div className='row' style={{overflowX: "auto"}}>
          <table >
            <thead>
              <tr>
                <th>ID</th>
                <th>IMAGE</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
              {currentPost && currentPost.map((post, index) => (
            <tbody key={index}>
              <tr>
                <td>{post._id}</td>
                <th><img src={`http://store-betta.herokuapp.com${post.image}`} alt={post.image} className="imageProductOne"/></th>
                <td>{post.name}</td>
                <td>{post.price}</td>
                <td>{post.category}</td>
                <td>{post.brand}</td>
                <td>  
                  <Link to={`/Admin/ProductsList/EditProducts/${post._id}`} key={post._id}>
                  <button>
                    <i className="fas fa-edit"></i>
                  </button>
                  </Link>
                </td>
                <td>
                  <button>
                    <i className="fa fa-times" 
                       onClick={() => { deleteProducts(post._id) }}>
                    </i>
                  </button>
                </td>
              </tr>
            </tbody>
              ))}
          </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productslist
