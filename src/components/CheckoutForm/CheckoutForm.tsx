import { CardCvcElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState<null | string>();
    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const cardElement = elements.getElement(CardNumberElement);
        const cvcElement = elements.getElement(CardCvcElement);
        const expiryElement = elements.getElement(CardExpiryElement);

        if (!cardElement || !cvcElement || !expiryElement) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]**********************', error);
            if (error.type === "validation_error") {
                setErrorMessage(error.message)
            }

        } else {
            setErrorMessage('')
            console.log('[PaymentMethod]>>>>>>>>>>>>>>>>>>>>>>>', paymentMethod);
        }
    };

    return (

        <div className="max-w-[30rem] px-10 py-5 shadow-lg my-10 mx-auto">
            <div>
                <h3 className="text-3xl text-gray-800 capitalize font-bold">Add billing Information</h3>
                <p className="text-gray-400 pt-1">This info will be used for payment related to product development.</p>
            </div>
            <form className="m-0" onSubmit={handleSubmit}>
                <label className="font-semibold capitalize text-gray-700 text-sm">
                    Card Number <span className="text-red-500">*</span>
                    <CardNumberElement


                        options={

                            {
                                placeholder: '0000 0000 0000 0000',
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': {
                                            color: '#86868D',
                                        },
                                    },
                                    invalid: {
                                        color: '#9e2146',
                                    },
                                },
                            }}
                    />
                </label>


                <div className="flex h-[100px] justify-between gap-2 w-full">


                    <div className="w-1/2">
                        <label className="font-semibold capitalize text-gray-700 text-sm">
                            Expiry date <span className="text-red-500">*</span>
                            <CardExpiryElement
                                options={{
                                    style: {
                                        base: {
                                            fontSize: '16px',
                                            color: '#424770',
                                            '::placeholder': {
                                                color: '#86868D',
                                            },
                                        },
                                        invalid: {
                                            color: '#9e2146',
                                        },
                                    },
                                }}
                            />
                        </label>
                    </div>

                    <div className="w-1/2">
                        <label className="font-semibold capitalize text-gray-700 text-sm">
                            CVC <span className="text-red-500">*</span>
                            <CardCvcElement
                                options={{
                                    style: {
                                        base: {
                                            fontSize: '16px',
                                            color: '#424770',
                                            '::placeholder': {
                                                color: '#86868D',
                                            },
                                        },
                                        invalid: {
                                            color: '#9e2146',
                                        },
                                    },
                                }}
                            />
                        </label>
                    </div>


                </div>

                <div>
                    <p className="text-xs text-red-500">
                        {errorMessage ? errorMessage : ''}
                    </p>

                </div>


                <button type="submit" className='bg-blue-500 text-white w-full hover:bg-blue-600 my-7' disabled={!stripe}>
                    Register as a company
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm