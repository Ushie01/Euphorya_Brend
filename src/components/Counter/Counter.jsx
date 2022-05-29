
// import React from 'react'

// function Counter({ postData, onDelete, onIncrement, onDecrement }) {
//     const getBadgeClasses = () => {
//         let classes = "badge m-2 badge-";
//         classes += postData.count === 0 ? "primary" : "warning";
//         return classes;
//     }

//     const formatCount = () => {
//         // const { value } = this.props.counter;
//         return value === 0 ? "Zero" : value;
//     }
    

//       /**********Sanity Fetch************/
//   const [postData, setPost] = useState(null);
//     useEffect(() => {
//         sanityClient.fetch(`*[_type == "post"]{
//             _id, title, slug, strike, span, mainImage{
//                 asset->{_id,url}
//             },alt
//         }`)
//             .then((data) => setPost(data))
//             .catch(console.error);
//     }, []); 
  
  
//   /***********Calling Counter*********/

//       const handleIncrement = counter => {
//         const counters = [postData];
//         const index = counters.indexOf(counter);
//         counters[index] = { ...counter };
//         counters[index].value++;
//         setPost({ counters });
//     };
  
//       const handleDecrement = counter => {
//         const counters = [postData];
//         const index = counters.indexOf(counter);
//         counters[index] = { ...counter };
//         counters[index].value++;
//         setPost({ counters });
//     };
  
//     const handleDelete = (counterId) => {
//     setPost(postData.filter(c => c.id !== counterId))
//   }
//         return (
//             <div>
//                 <span className={getBadgeClasses()}>{formatCount()}</span>
//                 <button onClick={() => onIncrement(postData)} className="btn btn-secondary btn-sm"> + </button>
//                 <button onClick={() => onDecrement(postData)}
//                     className="btn btn-secondary btn-sm m-2"
//                     disabled={postData.span === 0 ? "disabled" : ""}> - </button>
//                 <button onClick={() => onDelete(postData.id)} className="btn btn-danger btn-sm "> X </button>
//             </div>
//     );
    
    
// }

// export default Counter
