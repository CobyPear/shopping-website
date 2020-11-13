import React, { useState } from 'react'
import { Form, Button, InputGroup, Dropdown, DropdownButton } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CustomMenu from '../components/CustomMenu'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'


const ShippingScreen = ({ history }) => {
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const statesAbbr = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'VI', 'WA', 'WV', 'WI', 'WY']
    const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', ' North Dakota', 'Northern Mariana Is', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', ' Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Virgin Islands', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [state, setState] = useState(shippingAddress.state)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)
    const [value, setValue] = useState('')

    const dispatch = useDispatch()

    const submitHandler = e => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, state, postalCode, country }))
        history.push('/payment')
    }
    return (
        <FormContainer>
            <CheckoutSteps step1 step2 />
            <h1>Shipping</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='address'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter address'
                        defaultValue={address}
                        required
                        onChange={e => setAddress(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='city'>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter city'
                        defaultValue={city}
                        required
                        onChange={e => setCity(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <InputGroup mb={3}>
                    <DropdownButton
                        as={InputGroup.Prepend}
                        variant='secondary'
                        title='State'
                        id='input-group-dropdown'
                        className='state-dropdown'>
                        <CustomMenu
                            value={value}
                            setValue={setValue}>
                            {statesAbbr.map((x, i) => {
                                return <Dropdown.Item
                                    as={'option'}
                                    className='state'
                                    key={x}
                                    value={x}
                                    onClick={e => setState(e.target.value)}>
                                    {states[i]}
                                </Dropdown.Item>
                            })}
                        </CustomMenu>
                    </DropdownButton>
                    <Form.Control
                        type='text'
                        placeholder={state ? state : 'Enter state'}
                        value={state}
                        required
                        onChange={e => setState(e.target.value)}>
                    </Form.Control>
                </InputGroup>


                <Form.Group controlId='postalCode'>
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter postal code'
                        defaultValue={postalCode}
                        required
                        onChange={e => setPostalCode(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='country'>
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter country'
                        defaultValue={country}
                        required
                        onChange={e => setCountry(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button
                    type='submit'
                    variant='primary'
                    onClick={submitHandler}>
                    Continue
                    </Button>
            </Form>
        </FormContainer >
    )
}

export default ShippingScreen
