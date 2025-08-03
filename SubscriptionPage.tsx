import React from 'react';

const SubscriptionPage: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Subscribe to Moses & Martin Movie Library</h2>
      <p>Choose a subscription plan and unlock free movie downloads!</p>
      <ul>
        <li>1 Month – 20,000 UGX (3 Free Movies)</li>
        <li>2 Months – 50,000 UGX (6 Free Movies)</li>
        <li>6 Months – 60,000 UGX (8 Free Movies)</li>
        <li>12 Months – 150,000 UGX (10 Free Movies)</li>
      </ul>
      <button onClick={() => alert("Payment simulation coming soon!")}>Pay with Mobile Money</button>
    </div>
  );
};

export default SubscriptionPage;