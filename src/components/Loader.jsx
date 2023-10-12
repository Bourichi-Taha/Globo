import React, {  useLayoutEffect } from 'react'
import '../assets/css/loader.scss';
import logo from '../assets/images/logo/golobo.png';

const Loader = () => {
    useLayoutEffect(()=>{
        let logoSpans = document.querySelectorAll('.introLoad__logo-header__logo');
        let intro = document.querySelector('.introLoad');
        const HandleLoading = ()=>{
            setTimeout(() => {
                logoSpans.forEach((logo,index)=>{
                    setTimeout(() => {
                        logo.classList.add('active');
                    }, (index+1)*400);
                });

                setTimeout(() => {
                    logoSpans.forEach((logo,index)=>{
                        setTimeout(() => {
                            logo.classList.remove('active');
                            logo.classList.add('fade');
                        }, (index+1)*50);
                    });
                }, 2000);

                setTimeout(() => {
                    intro.style.top = '-100vh';

                }, 2300);
            });
        }
        HandleLoading()
    },[])
  return (
    <div className="introLoad">
        <div className="introLoad__logo-header">
            <img src={logo} alt="logo" className="introLoad__logo-header__logo" />
            <span className="introLoad__logo-header__logo">GLO</span><span className="introLoad__logo-header__logo">BO</span>
        </div>
    </div>
  )
}

export default Loader