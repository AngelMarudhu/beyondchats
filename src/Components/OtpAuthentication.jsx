import React, { useState } from 'react';
import "../Css/OtpAuth.css"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { loginSuccess } from '../Redux/LoginSlice';
import { ToastContainer, toast } from 'react-toastify';


const OtpAuthentication = ({ userDetails }) => {
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // console.log(userDetails)
    const handleOtpChange = (e) => {
        if (isNaN(e.target.value)) {
            return
        }
        setOtp(e.target.value);
    };
    const handleSubmit = async () => {
        let { name, email, password, uid, photo } = userDetails;
        if (otp.length !== 6) {
            toast.error('Please Enter 6 Digit OTP', {
                autoClose: 1500,
            });
            return;
        }
        setLoading(true);

        if (otp === "123456") {
            setTimeout(() => {
                dispatch(loginSuccess({ uid, name, email, photo }));
                navigate("/home")
            }, 2000);

            toast.success('OTP Verified Successfully!', {
                autoClose: 1500,
            })
        } else {
            toast.error('Invalid OTP', {
                autoClose: 1500,
            });
        }
    };

    return (
        <div className="otp-auth-container">
            <ToastContainer />
            <h4>Otp Sent to {userDetails.email} Default Otp 123456</h4>
            <div className="otp-input-container">
                <input
                    type="text"
                    maxLength="6"
                    value={otp}
                    onChange={handleOtpChange}
                    placeholder="Enter OTP"
                    className="otp-input"
                />
            </div>
            <button
                className="submit-btn"
                onClick={handleSubmit}
                disabled={loading}
            >
                {loading ? 'Verifying...' : 'Verify OTP'}
            </button>
        </div>
    );
};

export default OtpAuthentication;
