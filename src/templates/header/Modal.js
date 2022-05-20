import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import { BsFacebook, BsApple } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

import styled from 'styled-components';
const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;

`;

const ModalWrapper = styled.div`
  width: 400px;
  height: 542px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;

  .modal_footer {
     height: 0px;
    margin: 6px 0 6px;
    text-align: center;
}
.modal_footer a {
     color:  #19a463;
}
/* .modal_end {
     text-align: center;
} */
`;
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  gap: 10px;
  width: 100%;

  button {
    padding: 10px 0px;
    width: 350px;
    background: #141414;
    color: #fff;
    border: none;
    border-radius: 5px;
    display: grid;
     grid-template-columns: 1fr 6fr;
     align-items: center;
  }
.modal_fb {
     background: #4267b2;
     border: #4267b2; 
}
span *{
     display: inline;
}
  h3 {
       font-size: 24px;
       font-weight: 600;
       line-height: 4;
  }
.modal_light {
     height: 14px;
    margin: 6px 0 6px;
    text-align: center;
    border-bottom: 1px solid #e4e5e7; 
    width: 350px;
     
}
.modal_light .modal_or {
     font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    text-transform: uppercase;
    padding: 0 8px;
    background-color: #fff;
    color: #62646a; 
}

.modal_form {
     padding-bottom: 16px;
    /* position: relative; */
}
.modal_form input {
     display: block;
    font-size: 16px;
    line-height: 24px;
    outline: #4267b2;
    width: 100%;
    height: 40px;
    border: 1px solid gray;
    padding: 0 15px;
}
.modal_button {
    display: block;
    background: #19a463;
}

`;
const Modal = ({ showModal, setShowModal }) => {

     const modalRef = useRef();
     const animation = useSpring({
          config: {
               duration: 250
          },
          opacity: showModal ? 1 : 0,
          transform: showModal ? `translateY(0%)` : `translateY(-100%)`
     });

     const closeModal = e => {
          if (modalRef.current === e.target) {
               setShowModal(false);
          }
     };

     const keyPress = useCallback(
          e => {
               if (e.key === 'Escape' && showModal) {
                    setShowModal(false);
                    console.log('I pressed');
               }
          },
          [setShowModal, showModal]
     );

     useEffect(
          () => {
               document.addEventListener('keydown', keyPress);
               return () => document.removeEventListener('keydown', keyPress);
          },
          [keyPress]
     );
     return (
          <>
               {showModal ? (
                    <Background onClick={closeModal} ref={modalRef}>
                         <animated.div style={animation}>
                              <ModalWrapper showModal={showModal}>
                                   <ModalContent>
                                        <h3>Sign In to Fiverr</h3>
                                        <button className='modal_fb'>
                                             <span> <BsFacebook /></span>
                                             <p>Continue with Facebook</p>
                                        </button>
                                        <button className='modal_gg'>
                                             <span><FcGoogle /></span>
                                             <p>Continue with Google</p>
                                        </button>
                                        <button className='modal_ap'>
                                             <span><BsApple /></span>
                                             <p>Continue with Apple</p>
                                        </button>
                                        <div className='modal_light'>

                                             <span className='modal_or'>OR</span>
                                        </div>
                                        <form action="">
                                             <div className='modal_form'>
                                                  <input type="text" placeholder='Email' />
                                             </div>
                                             <div className='modal_form'>
                                                  <input type="text" placeholder='Password' />
                                             </div>
                                             <button className='modal_button'>Continue</button>
                                        </form>
                                   </ModalContent>
                                   <div className='modal_footer'>
                                        <p className='modal_end'>Not a member yet? <a href="#/">Join now</a></p>
                                   </div>
                              </ModalWrapper>
                         </animated.div>
                    </Background>
               ) : null}
          </>
     );
};
export default Modal;