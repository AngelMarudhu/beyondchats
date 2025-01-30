import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 1, y: 0 }}
      className="integration-website-container"
    >
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
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="commonButton"
              onClick={handleCopyCode}
            >{`${showCopySuccess ? 'Copied✔️' : 'Copy Text'}`}</motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="commonButton"
              onClick={handleEmail}
            >
              Send Email 📩
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IntegrateWebsite;
