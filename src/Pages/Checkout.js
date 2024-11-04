import React, {useState} from "react";
import img from "../img/img.jpg"

function Checkout() {

    const [isChecked, setIsChecked] = useState(false);
    const [error, setError] = useState('');

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        setError(''); // Xóa thông báo lỗi khi checkbox được tick
    };

    const handlePurchase = () => {
        if (!isChecked) {
            setError('You must agree to all terms and conditions to proceed with the purchase');
        } else {
            // Xử lý logic mua hàng ở đây
            alert('You have successfully made the purchase!');
        }
    };

    return (
        <div className="Home-bg font">
            <div className="Buy-box-checkout-1">
                <div className="content-checkout d-flex flex-row">
                    <img className="checkout-img" src={img}></img>
                    <p className="checkout-name">Limbo</p>
                    <p className="checkout-price">9.99$</p>
                    <hr className="checkout-hr-1"></hr>
                </div>
                <div>
                    <div className="content-checkout-2">
                        <p>Subtotal: 9.99$</p>
                        <p>Tax: 0</p>
                        <hr className="checkout-hr-total"></hr>
                        <p>Total: 9.99$</p>
                    </div>
                    <hr className="checkout-hr-2"></hr>
                </div>
                <div>
                    <p>Option:<span className="text1"></span> None, this purchase is for your own account</p>
                    <p>Paymet menthod:<span className="text"></span> e-wallet</p>
                    <hr className="checkout-hr-2"></hr>
                </div>
                <div className="content-checkout-3">
                    <div>
                <input 
                    type="checkbox" 
                    checked={isChecked} 
                    onChange={handleCheckboxChange} 
                />
                <label>i argee to the terms of the PlayDead agreement</label>
                </div>
            <br />
            <button className="complete-checkout" onClick={handlePurchase}>purchase</button>
            
        </div>
        {error && <p className="check-out-checkbox-alect text-danger">{error}</p>}
            </div>
        </div>
    );
}
export default Checkout;