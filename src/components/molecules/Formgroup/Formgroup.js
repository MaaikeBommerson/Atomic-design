import PropTypes from 'prop-types'

import Label from "../Label"
import Input from "../Input"

const FormGroup = ({ label, type, padding, color, width }) => {

    const changeHandler = (e) => {
            alert(e.target.value)
    }

    return(
        <div className="FormGroup">
            <Label label={ label } color={color} />
            <Input type={ type } 
                   placeholder={ label }
                   padding={ padding }
                   width={ width }
                   onChange={ changeHandler }/>
        </div>
    )

}

FormGroup.propTypes = {    
    label: PropTypes.string,
    type: PropTypes.oneOf(["text", "number", "email", "url", "password"]),
    color: PropTypes.oneOf(["black", "muted"]),
    padding: PropTypes.oneOf(["small", "medium", "large"]),
    width: PropTypes.number,
}

export default FormGroup