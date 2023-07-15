import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

function Toggle(props) {
  
  return (

    <ToggleButtonGroup type="radio" name="options" defaultValue={props.isUser} onChange={() => props.setIsUser(!props.isUser)}>
        {/* {console.log(props.isUser)} */}
        <ToggleButton variant="success" id="tbg-radio-1" value={true}>
          Users
        </ToggleButton>
        <ToggleButton variant="success" id="tbg-radio-2" value={false}>
          Products
        </ToggleButton>
      </ToggleButtonGroup>
  );

}

export default Toggle;