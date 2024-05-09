import payImg from '../../assets/images/payment-gateway.png';

const PaymentImage = () => {
    return (
        <div className='bg-blue-300 w-full'>
            <img src={payImg} alt="" />
        </div>
    );
};

export default PaymentImage;