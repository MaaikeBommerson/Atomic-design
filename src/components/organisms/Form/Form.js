import PropTypes from 'prop-types'

import FormGroup from '../../molecules/Formgroup'
import ButtonBar from '../../molecules/Buttonbar'

const Form = (props) => {


    return(
        <div ClassName="Form">
            <FormGroup label={'username'} type={'text'}
                    padding={20} color={'#C00'} width={200} />
            <FormGroup label={'Password'} type={'password'}
                    padding={20} color={'#C00'} width={200} />
            <ButtonBar />
        </div>
    )
}

export default Form