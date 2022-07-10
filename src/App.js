import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getProductsDetails } from './helpers/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import Slider from './components/Slider'
import New from './pages/New/New'
import Home from './pages/Home/Home'
import SliderTwo from './pages/Home/SliderTwo'
import CarouselProduct from './components/CarouselProduct';
import UserViews from './pages/Home/UserViews.jsx'
import Cart from './components/Counter/Cart'
import About from './pages/About'
import Footer from './components/Footer'
import LoginForm from './pages/Contact';
import PostDetail from './components/PostDetails/PostDetails'
import Signup from './pages/auth/Signup.jsx'
import Signin from './pages/auth/Signin.jsx'
import Signout from './pages/auth/Signout';
import Admin from './components/admin/Admin';
import Orderlist from './components/admin/Orderlist/Orderlist';
import Productslist from './components/admin/ProductUser/Productslist'
import Userlist from './components/admin/Userlist/Userlist';
import EditUser from './components/admin/Userlist/EditUser';
import EditProducts from './components/admin/ProductUser/EditProducts'
import CreateProducts from './components/admin/ProductUser/CreateProducts';
import Pagination from './components/Pagination';
import UserInfo from './pages/auth/UserInfo';
import Payment from './pages/auth/Payment';
import Categories from './pages/New/Categories';



const App = () => {
  //PAGINATION
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const products = await getProductsDetails();
      setData(products)
    }
    fetchData()
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = data.products?.slice(indexOfFirstPost, indexOfLastPost)     
  // paginate func
  const paginate = (pageNumber) => setCurrentPage(pageNumber);



  return (
    <> 
        <NavBar />
            <Routes>
                <Route path='/' element={<> <CarouselProduct /> <Home /> <SliderTwo /> <UserViews /> </> } />
                <Route path='/PostDetail/:_id' element={<> <PostDetail /> </>} />
                <Route path='/New' element={<><New 
                       data={data}
                       currentPost={currentPost} /> <Pagination 
                       postsPerPage={postsPerPage} 
                       totalPosts={data.products?.length} 
                       paginate={paginate} /> </> }/>
                <Route path='/Brand/:category' element={<Categories />}/>
                <Route path='/page/:number' element={<New />}/>
                <Route path='/About' element={ <About /> } />
                <Route path='/Contact' element={ <LoginForm /> } />  
                <Route path='/Admin/Orderlist' element={<Orderlist />} />
                <Route path='/Admin/Productslist' element={<><Productslist 
                       currentPost={currentPost}/> <Pagination 
                       postsPerPage={postsPerPage} 
                       totalPosts={data.products?.length} 
                       paginate={paginate}/></>} />
                <Route path='/UserInfo' element={<UserInfo />}/>
                <Route path='/Payment' element={<Payment />}/>
                <Route path='/Admin/ProductsList/EditProducts/:_id' element={<EditProducts />}/>
                <Route path='/Admin/ProductsList/CreateProducts' element={<CreateProducts />}/>      
                <Route path='/Admin/Userlist/EditUser/:id' element={<EditUser />}/>
                <Route path='/Admin/Userlist' element={<Userlist />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Signup" element={<Signup />}/>   
                <Route path="/Signin" element={<Signin />} />   
                <Route path="/Signout" element={<Signout/>} />  
            </Routes> 
        <Footer />
    </>
  );
}

export default App

/**********Sanity Fetch************/
  
  // const [postData, setPost] = useState(null);
  //   useEffect(() => {
  //       sanityClient.fetch(`*[_type == "post"]{
  //           _id, title, slug, strike, span, mainImage{
  //               asset->{_id,url}
  //           },alt
  //       }`)
  //         .then((data) => setPost(data))
  //         .catch(console.error);

  //   }, []); 