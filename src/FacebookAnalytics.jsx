import React, { useState } from 'react';

const Dashboard = () => {
    const [pixelCode, setPixelCode] = useState('');

    const handleInputChange = (event) => {
        setPixelCode(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (pixelCode) {
            insertPixelCodeIntoHead(pixelCode);
        }
    };

    const insertPixelCodeIntoHead = (code) => {
        const script = document.createElement('script');
        script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${code}');
      fbq('track', 'PageView');
    `;
        document.head.appendChild(script);

        const noScript = document.createElement('noscript');
        noScript.innerHTML = `
      <img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=${code}&ev=PageView&noscript=1"
      />
    `;
        document.head.appendChild(noScript);
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Facebook Pixel Code:
                    <input type="text" value={pixelCode} onChange={handleInputChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Dashboard;


// const FacebookAnalytics = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default FacebookAnalytics;