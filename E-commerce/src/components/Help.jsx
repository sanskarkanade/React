import React from "react";

const Help = () => {
  return (
    <div className="p-6 pt-32 sm:pt-18 mb-28">
      <h2 className="text-2xl font-bold mb-4">Help & Support</h2>

      <section className="mb-6">
        <h3 className="text-lg font-semibold">Frequently Asked Questions</h3>
        <ul className="list-disc pl-6">
          <li><strong>How do I place an order?</strong> Browse products, add them to your cart, and proceed to checkout.</li>
          <li><strong>What payment methods are accepted?</strong> Credit/debit cards, UPI, PayPal, and COD.</li>
          <li><strong>How can I track my order?</strong> You'll receive a tracking link via email.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-semibold">Contact Support</h3>
        <p>📞 Call us: +91 9876543210</p>
        <p>📧 Email: support@eshanybazzar.com</p>
      </section>

      <section>
        <h3 className="text-lg font-semibold">Troubleshooting Guide</h3>
        <p><strong>Issue: Payment failed</strong> - Check card details and try again.</p>
        <p><strong>Issue: Order not received</strong> - Track your order using the provided link.</p>
      </section>
    </div>
  );
};

export default Help;
