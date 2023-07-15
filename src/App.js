import './App.css';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Toggle from './Toggle';
import {useState,useEffect} from 'react'
import Search from './Search';
import Button from 'react-bootstrap/Button';
        
function App() {

 //const baseURL = "https://dummyjson.com/users?limit=0";
  

 const [users,setUsers] = useState([])
 const [isUser,setIsUser] = useState(true)
 const [page,setPage] = useState(0);
 const [products,setProducts] = useState([])
 const [search,setSearch] = useState('')

 const baseURL = `https://dummyjson.com/users?limit=10&skip=${page}`
 const baseURL_p = `https://dummyjson.com/products?limit=10&skip=${page}`
  useEffect(() => {
   getUserData(search)
  }, [page,search]);
  
  useEffect(() => {
    getProdData(search)
   }, [page,search]);




  const getUserData = (search) => {

    axios.get(baseURL).then((response) => {
      let data = response.data.users
      if(search !== '')
      data = data.filter(x => (x.firstName.toLowerCase()+" "+x.lastName.toLowerCase()).includes(search.toLowerCase()))
      setUsers(data);
    });
    
  }

  const getProdData = (search) => {

    axios.get(baseURL_p).then((response) => {
      let data = response.data.products
      if(search !== '')
      data = data.filter(x => x.title.toLowerCase().includes(search.toLowerCase()))
      setProducts(data);
    });
    
  }
  



 console.log(users);

 console.log(typeof users)
 
 //console.log(products)

 const columns = [
  {
    dataField: 'id',
    text: 'User ID',
    sort:true
  }
  ,{
    dataField: 'firstName',
    text: 'First Name',
    sort: true,
  },

  {
    dataField: 'lastName',
    text: 'Last Name'
  },
  
{
  dataField: 'email',
  text: 'Email',
  sort:true
}
];



const columns_p = [{
  dataField: 'id',
  text: 'Product ID',
  sort:true
}, 
{
  dataField: 'title',
  text: 'Title',
  sort:true,
},{
  dataField: 'brand',
  text: 'Brand',
  sort: true,
},
{
  dataField: 'price',
  text: 'Price',
  sort: true,
}];


  return (
    <div className="App">
      <Search search={search} setSearch={setSearch}/>
      <Toggle isUser={isUser} setIsUser={setIsUser}/>
      <div className='table-container'>
      {isUser ? 
      <BootstrapTable keyField="id" data={users} columns={columns} striped hover condensed></BootstrapTable> :
      <BootstrapTable keyField="id" data={products} columns={columns_p} striped hover condensed></BootstrapTable>
      }
      {
        page === 0 ? null : <Button variant="primary" onClick={() => {setPage(page-10)}}>BACK</Button>
      }
      {
        page === 90 ? null : <Button variant="primary" onClick={() => {setPage(page+10)}}>NEXT</Button>
      
      }
      </div>
      
    </div>
  );
}

export default App;
