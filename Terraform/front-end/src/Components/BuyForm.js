import React, {useRef} from 'react'
import '../css/styles.css'

const BuyForm 
=({name,
   firstName,
   lastName,
   address,
   zip,
   city,
   email,
   phone,
   shipAddress,
   HandleChange,
   handleSubmit,
   diffAddress,
   checked, 
   isRadioSelected,
   key}) =>{
    const ref = useRef('address');

    const Radio = React.memo(function Radio({
        diffAddress,
        HandleChange, 
        id, 
        checked
      }) {
        console.log("rendering", diffAddress);
        
        
        return (
            <input
              key={key + "address"}
              name="address"
              type="radio"
              value={diffAddress }
              checked={ checked }
              // onChange={(e)=>HandleChange(e)}
              onClick={(e)=> HandleChange(e)}
              id={id}
              ref={ref}
            />
        
        );
      });

    return(<>   
                <div id='payment-form'>
                <form onSubmit={handleSubmit} className="d-flex flex-column" >
                <span className="d-flex flex-row mx-auto mt-2">
                    <label className="fw-bolder text-black mt-3">Is Shipping address different than billing Address?</label>
                    <Radio key={checked + "componentAddress"} 
                      className="mx-auto" 
                      id={"radioAddressId"} 
                      diffAddress={diffAddress} 
                      checked={checked} 
                      HandleChange={HandleChange}
                      isRadioSelected={isRadioSelected} />
                    </span>
                    { checked &&
                    <label className='fw-bolder text-warning mx-auto fs-4'>
                        Ship Address:
                        <input id="shipAddress" type="text" onChange={(e)=>HandleChange(e)} />
                    </label> 
                    }
                    <label className="mx-auto text-warning fw-bolder fs-4">
                        First Name:
                        <input key="firstName" id="fName" type="text" value={firstName} onChange={HandleChange} />
                    </label>
                    <label className="mx-auto text-warning fw-bolder fs-4">
                        Last Name:
                        <input key="lastName" id="lName" type="text" value={lastName} onChange={HandleChange} />
                    </label>
                    <label className="mx-auto text-warning fw-bolder fs-4">
                        Address:
                        <input key="address" id="address" type="text" value={address} onChange={HandleChange} />
                    </label>
                    <label className="mx-auto text-warning fw-bolder fs-4">
                        Zip:
                        <input key="zip" id="zip" type="text" value={zip} onChange={HandleChange} />
                    </label>
                    {/* */}
                    <label className="mx-auto text-warning fw-bolder fs-4">
                        Phone:
                        <input key="phone" id="phone" type="text" value={phone} onChange={HandleChange} />
                    </label>
                    <label className="mx-auto text-warning fw-bolder fs-4">
                        Email:
                        <input key="email" id="email" type="text" value={email} onChange={HandleChange} />
                    </label>
                    {/* */}
                    <label className="mx-auto text-warning fw-bolder fs-4">
                        City:
                        <input key="city" id="city" type="text" value={city} onChange={HandleChange} />
                    </label>
                   
                        <input type="submit" value="Submit" />
                </form>
                  </div>
           </>)

}

export default BuyForm;