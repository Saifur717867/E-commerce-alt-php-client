import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
// import axios from "axios";
// import { useEffect, useState } from "react";

const MainLayout = () => {

    // const [pixelCode, setPixelCode] = useState('');

    // useEffect(() => {
    //     // Fetch the Pixel code from the server
    //     const fetchPixelCode = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:5000/api/pixel');
    //             if (response.data) {
    //                 setPixelCode(response.data.code);
    //                 insertPixelCodeIntoHead(response.data.code);
    //             }
    //         } catch (error) {
    //             console.error('Error fetching the Pixel code', error);
    //         }
    //     };
    //     fetchPixelCode();
    // }, []);

    // useEffect(() => {
    //     if (pixelCode) {
    //         insertPixelCodeIntoHead(pixelCode);
    //     }
    // }, [pixelCode]);

    // const insertPixelCodeIntoHead = (code) => {
    //     // Remove existing Pixel scripts if any
    //     const existingScripts = document.querySelectorAll('script[data-pixel], noscript[data-pixel]');
    //     existingScripts.forEach(script => script.remove());

    //     const script = document.createElement('script');
    //     script.setAttribute('data-pixel', 'true');
    //     script.innerHTML = `
    //   !function(f,b,e,v,n,t,s)
    //   {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    //   n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    //   if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    //   n.queue=[];t=b.createElement(e);t.async=!0;
    //   t.src=v;s=b.getElementsByTagName(e)[0];
    //   s.parentNode.insertBefore(t,s)}(window, document,'script',
    //   'https://connect.facebook.net/en_US/fbevents.js');
    //   fbq('init', '${code}');
    //   fbq('track', 'PageView');
    // `;
    //     document.head.appendChild(script);

    //     const noScript = document.createElement('noscript');
    //     noScript.setAttribute('data-pixel', 'true');
    //     noScript.innerHTML = `
    //   <img height="1" width="1" style="display:none"
    //   src="https://www.facebook.com/tr?id=${code}&ev=PageView&noscript=1"
    //   />
    // `;
    //     document.head.appendChild(noScript);
    // };


    const location = useLocation();
    const noHeaderAndFooter = location.pathname.includes('login') || location.pathname.includes('signUp')

    return (
        <div>
            {noHeaderAndFooter || <Header></Header>}
            <Outlet></Outlet>
            {noHeaderAndFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;