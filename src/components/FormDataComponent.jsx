import React from 'react'

function FormDataComponent() {

    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [mobile, setMobile] = React.useState('');
    const [email, setEmail] = React.useState('');

    function clearData() {
        setName('');
        setPassword('');
        setMobile('');
        setEmail('');
    }
    return (
        <>
            <h2>FormDataComponent</h2>     

                <label htmlFor="name">Name:  </label>
                <input type="text" id="name" name="name" value={name}
                    onChange={event => setName(event.target.value)} placeholder='Ener your name here' />
                <br /><br />

                <label htmlFor="name">Password: </label>
                <input type="password" id="password" name="password" value={password}
                    onChange={event => setPassword(event.target.value)} placeholder='Ener your password here' />
                <br /><br />

                <label htmlFor="name">Mobile: </label>
                <input type="tel" id="mobile" name="mobile" value={mobile}
                    onChange={event => setMobile(event.target.value)} placeholder='Ener your Mobile here' />
                <br /><br />

                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" value={email}
                    onChange={event => setEmail(event.target.value)} placeholder='Ener your email here' />
                <br /><br />
  <button type="button">Show</button>
    <button onClick={clearData}>rest</button>

            <h2>{name}</h2>
            <h2>{password}</h2>
            <h2>{mobile}</h2>   
            <h2>{email}</h2>
            

            

           


        </>
    )
}

export default FormDataComponent;