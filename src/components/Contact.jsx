import React, { useState } from 'react'
import "../assets/css/contact.css"
import { Checkbox, FormControlLabel, MenuItem, Select, TextField } from '@mui/material'
import { Link } from 'react-router-dom'


const Contact = () => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [country, setCountry] = useState("")
    const [company, setCompany] = useState("")
    const [reason, setReason] = useState("None")
    const [message, setMessage] = useState("")
    const [check1, setCheck1] = useState(true)
    const [check2, setCheck2] = useState(true)
    return (
        <div id='contact' className="contact-container">
            <h2 className="ac-sub-heading"><span>Contact</span></h2>
            <div className="cc-main">
                <h1 className="ccm-title">Like to find out more information on Globo?</h1>
                <p className="ccm-desc">Please fill in the form below and we will get in touch with you shortly.</p>
                <div className="ccm-form">
                    <div className="ccm-form-row">
                        <TextField required label={"First Name"} className='ccm-fr-item' value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                        <TextField required label={"Last Name"} className='ccm-fr-item' value={lastname} onChange={(e) => setLastname(e.target.value)} />
                    </div>
                    <div className="ccm-form-row">
                        <TextField label={"Phone"} className='ccm-fr-item' value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <TextField required label={"Email"} className='ccm-fr-item' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="ccm-form-row">
                        <TextField label={"Country"} className='ccm-fr-item' value={country} onChange={(e) => setCountry(e.target.value)} />
                        <TextField label={"Company"} className='ccm-fr-item' value={company} onChange={(e) => setCompany(e.target.value)} />
                    </div>
                    <div className="ccm-form-row">
                        <Select
                            className='ccm-fr-item'
                            required
                            value={reason} onChange={(e) => setReason(e.target.value)}
                        >
                            <MenuItem value={"None"}>I am contacting you because:</MenuItem>
                            <MenuItem value={10}>I would like to work for Globo.</MenuItem>
                            <MenuItem value={20}>I am interested in Globo services and solutions.</MenuItem>
                            <MenuItem value={30}>Other (Please specify your request below)</MenuItem>
                        </Select>

                    </div>
                    <div className="ccm-form-row">
                        <TextField value={message} onChange={(e) => setMessage(e.target.value)} required multiline maxRows={4} minRows={4} label={"Message"} className='ccm-fr-item full' />
                    </div>
                    <div className="ccm-form-row">
                        <FormControlLabel control={<Checkbox checked={check1} onChange={(e) => setCheck1(e.target.checked)} />}  />
                        <span>
                            I would like to receive relevant updates from Globo via e-mail and agree to commercial processing of my data.
                        </span>
                    </div>
                    <div className="ccm-form-row" style={{gap:0}}>
                        <FormControlLabel style={{marginRight:0}} checked control={<Checkbox checked={check2} onChange={(e) => setCheck2(e.target.checked)} />} />
                        <span>
                            I accept <Link to={"/data-protection"}>the Data Protection Policy.</Link> You can revoke your privacy consent and stop receiving our updates at any time by notifying us via all known communication channels.*
                        </span>
                    </div>
                    <button onClick={() => { }} className="nc-right-button ccm"><span>Let's Talk</span></button>

                </div>
            </div>
        </div>
    )
}

export default Contact