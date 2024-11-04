import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
    const [fullName, setFullName] = useState("");
    const [Email, setEmail] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [CVV, setCVV] = useState("");
    const [error, setError] = useState("");
    const [EmailError, setEmailError] = useState("");
    const [CVVError, setCVVError] = useState("");

    const navigate = useNavigate();

    const emailInputRef = useRef(null);
    const cardNumberInputRef = useRef(null);
    const cvvInputRef = useRef(null);

    // Hàm xử lý nhấn phím Enter
    const handleKeyDown = (event, nextInputRef, validationFunc) => {
        if (event.key === 'Enter') {
            if (validationFunc) {
                event.preventDefault(); // Ngăn chặn hành vi mặc định
                if (validationFunc()) {
                    // Nếu dữ liệu đúng, xóa lỗi
                    if (validationFunc === validateEmail) {
                        setEmailError("");
                    } else if (validationFunc === validateCVV) {
                        setCVVError("");
                    }
                    // Chuyển đến trường nhập liệu tiếp theo
                    if (nextInputRef.current) {
                        nextInputRef.current.focus();
                    }
                }
            } else if (nextInputRef.current) {
                // Nếu không cần xác thực, chỉ chuyển đến trường tiếp theo
                nextInputRef.current.focus();
            }
        }
    };

    const validateEmail = () => {
        const EmailPattern = /^[a-zA-Z0-9]+@gmail\.com$/;
        if (!EmailPattern.test(Email)) {
            setEmailError("Please enter the correct Email form.");
            return false;
        }
        return true;
    };

    const validateCVV = () => {
        const CVVPattern = /^[0-9]{3}$/;
        if (!CVVPattern.test(CVV)) {
            setCVVError("Please enter the correct CVV form.");
            return false;
        }
        return true;
    };

    const handleSave = () => {
        let hasError = false;

        if (!fullName || !Email || !cardNumber || !CVV) {
            setError("Some fields are required.");
            hasError = true;
        } else {
            setError("");
        }

        if (!validateEmail()) hasError = true;
        if (!validateCVV()) hasError = true;

        if (!hasError) {
            navigate("/Checkout");
        }
    };

    return (
        <div className="Home-bg">
            <div className="Buy-box-checkout">
                <div className="Buy-box-arlect">
                    {error && <div className="font infomation-error text-danger">{error}</div>}
                </div>
                {/* Name */}
                <div className="form-field">
                    <input
                        type="text"
                        className="form-input"
                        placeholder=" "
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, emailInputRef)} // Chuyển sang trường Email
                        autoFocus
                    />
                    <label htmlFor="Name" className="form-label">Name</label>
                </div>
                {/* Email */}
                <div>
                <div className="form-field">
                    <input
                        type="text"
                        className="form-input"
                        placeholder=" "
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, cardNumberInputRef, validateEmail)} // Kiểm tra Email
                        ref={emailInputRef}
                    />
                    <label htmlFor="Email" className="form-label">Email</label>
                </div>
                {EmailError && <div className="font infomation-error text-danger">{EmailError}</div>}
                </div>
                {/* Card Number */}
                <div className="form-field">
                    <input
                        type="text"
                        className="form-input"
                        placeholder=" "
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, cvvInputRef)} // Không cần xác thực cho Card Number
                        ref={cardNumberInputRef}
                    />
                    <label htmlFor="Card Number" className="form-label">Card Number</label>
                </div>
                {/* CVV */}
                <div>
                <div className="form-field">
                    <input
                        type="text"
                        className="form-input CVV"
                        placeholder=" "
                        value={CVV}
                        onChange={(e) => setCVV(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                if (!validateCVV()) {
                                    e.preventDefault(); // Ngăn chặn nếu có lỗi
                                } else {
                                    handleSave(); // Gọi handleSave nếu không có lỗi
                                }
                            } else {
                                handleKeyDown(e, null, validateCVV); // Kiểm tra CVV
                            }
                        }}
                        ref={cvvInputRef}
                    />
                    <label htmlFor="CVV" className="form-label">CVV</label>
                </div>
                {CVVError && <div className="font infomation-error text-danger">{CVVError}</div>}
                </div>
                <button className="complete-checkout" onClick={handleSave}>Complete</button>
            </div>
        </div>
    );
}

export default Checkout;
