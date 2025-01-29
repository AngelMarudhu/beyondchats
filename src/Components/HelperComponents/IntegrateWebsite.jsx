import React, { useState } from 'react';

const IntegrateWebsite = () => {
  const [showCopySuccess, setShowCopySuccess] = useState(false);

  const handleCopyCode = () => {
    const code = `<script>
    // Chatbot Integration Code
    (function() {
        var script = document.createElement('script');
        script.src = 'https://your-chatbot-url.com/widget.js';
        script.async = true;
        document.head.appendChild(script);
    })();
</script>`;
    navigator.clipboard.writeText(code);
    setShowCopySuccess(true);
    //// limited time to show the success message
    setTimeout(() => setShowCopySuccess(false), 2000);
  };

  const handleEmail = () => {
    const subject = 'Chatbot Integration';
    const body = 'hey there, i want to integrate my website with your chatbot';

    const mailtoLink = `mailto:developer@example.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="integration-website-container">
      <div className="integration-website-content">
        <h2>Choose Integration Method</h2>
        <div>
          <pre className="code-block">
            {`<script>
    // Chatbot Integration Code
    (function() {
        var script = document.createElement('script');
        script.src = 'https://your-chatbot-url.com/widget.js';
        script.async = true;
        document.head.appendChild(script);
        })();
        </script>`}
          </pre>
          <div className="integration-container-top-buttons">
            <button
              className="commonButton"
              onClick={handleCopyCode}
            >{`${showCopySuccess ? 'Copied✔️' : 'Copy Text'}`}</button>
            <button className="commonButton" onClick={handleEmail}>
              Send Email 📩
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrateWebsite;
