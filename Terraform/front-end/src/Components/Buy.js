import {useState} from 'react';
import { CreditCard, PaymentForm } from 'react-square-web-payments-sdk';
import styles from '../styles/home.css';

const Buy =()=>{
    const [amount, updateAmount] = useState(0.0);
    const [address, updateAddress] = useState('');
    const [billAddress, updateBillAddress] = useState('');
    return(<>
             <div className='mx-auto' id='payment-form'>
             <div className={styles.container} id='card-container'>
            <PaymentForm
              applicationId="sandbox-sq0idb-cF1vDO6CFrkF71S4OZIrgg"
              cardTokenizeResponseReceived={(EAAAEOjvC4vYb7nODttcQwnsXX_XFXtqDCwgkaZ2jkPw0zTfXGL_V1W2eKJFUFE_, verifiedBuyer) => {
              console.log('token:', EAAAEOjvC4vYb7nODttcQwnsXX_XFXtqDCwgkaZ2jkPw0zTfXGL_V1W2eKJFUFE_);
              console.log('verifiedBuyer:', verifiedBuyer);
            }}

            createVerificationDetails={() => ({
              amount: '1.00',
              /* collected from the buyer */
              billingContact: {
                addressLines: ['123 Main Street', 'Apartment 1'],
                familyName: 'Doe',
                givenName: 'John',
                countryCode: 'GB',
                city: 'London',
              },
              currencyCode: 'GBP',
              intent: 'CHARGE',
            })}
            
            locationId='LQXA6DKWDYTD9'
      >
      </PaymentForm>
     <CreditCard />
    </div>
             </div>
           </>)
}

export default Buy;