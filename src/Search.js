import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function Search(props) {

    
    //  console.log(props.search)
    return (
        <InputGroup className="mb-3">
            <Form.Control onChange={(e) => {props.setSearch(e.target.value)}}
                placeholder="Search"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
            />
        </InputGroup>
    )
}



export default Search;

