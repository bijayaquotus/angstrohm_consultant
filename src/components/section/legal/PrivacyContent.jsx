import React from 'react';

export default function PrivacyContent() {
  return (
    <section className="bg-white max-w-4xl mx-auto px-6 py-14 text-slate-700">
      <div className="space-y-1 mb-6">
        <p className="font-bold text-slate-900">Privacy Policy</p>
        <p>Effective Date: 4.8.2023</p>
      </div>

      <p className="mb-8 leading-relaxed">
        Welcome to the website of Angstrohm Consulting Sdn Bhd ("we," "us," or
        "our"). We are committed to protecting your privacy and ensuring the
        security of your personal information. This privacy policy outlines
        how we collect, use, disclose, and store your information when you
        interact with our website. By accessing or using our website, you
        consent to the practices described in this policy.
      </p>

      <div className="space-y-8">
        <div>
          <h2 className="font-bold text-slate-900 mb-3">1. Information We Collect</h2>
          <p className="mb-4 leading-relaxed">
            1.1. Personal Information: We may collect personal information
            that you provide to us voluntarily, such as your name, email
            address, phone number, company name, and any other information
            you choose to provide when filling out contact forms or
            subscribing to our newsletters.
          </p>
          <p className="leading-relaxed">
            1.2. Automatically Collected Information: When you visit our
            website, we may automatically collect certain information about
            your device and browsing activity, including your IP address,
            browser type, operating system, referring URLs, and other usage
            data.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-slate-900 mb-3">2. Use of Information</h2>
          <p className="mb-3 leading-relaxed">
            2.1. We will use the personal information you provide to:
          </p>
          <ul className="list-none space-y-1 mb-4">
            <li>– Respond to your inquiries, provide services, and fulfill your requests.</li>
            <li>– Send you newsletters and updates about our company and services (you can opt-out at any time).</li>
            <li>– Improve our website, services, and customer experience.</li>
            <li>– Analyze and monitor usage patterns and trends.</li>
          </ul>
          <p className="mb-3 leading-relaxed">
            2.2. We may use automatically collected information for various
            purposes, including:
          </p>
          <ul className="list-none space-y-1">
            <li>– Website analytics and performance monitoring.</li>
            <li>– Identifying and preventing security risks.</li>
            <li>– Customizing your user experience.</li>
            <li>– Tailoring our marketing and advertising efforts.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-slate-900 mb-3">3. Sharing of Information</h2>
          <p className="mb-4 leading-relaxed">
            3.1. We will not sell, trade, or rent your personal information
            to third parties without your explicit consent.
          </p>
          <p className="mb-4 leading-relaxed">
            3.2. We may share your information with trusted third-party
            service providers who assist us in operating our website and
            providing our services. These third parties are obligated to
            maintain the confidentiality and security of your information.
          </p>
          <p className="leading-relaxed">
            3.3. We may disclose your information if required by law or to
            protect our rights, property, or safety, or the rights,
            property, or safety of others.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-slate-900 mb-3">4. Cookies and Similar Technologies</h2>
          <p className="mb-4 leading-relaxed">
            4.1. We use cookies and similar tracking technologies to collect
            information about your browsing behavior and preferences.
            Cookies are small data files stored on your device that help
            improve website functionality and analyze usage patterns.
          </p>
          <p className="leading-relaxed">
            4.2. By using our website, you consent to the use of cookies. You
            can adjust your browser settings to refuse cookies or alert you
            when cookies are being sent. However, some features of our
            website may not function properly without cookies.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-slate-900 mb-3">5. Data Security</h2>
          <p className="leading-relaxed">
            5.1. We take appropriate measures to protect your personal
            information from unauthorized access, disclosure, alteration, or
            destruction.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-slate-900 mb-3">6. Links to Third-Party Websites</h2>
          <p className="leading-relaxed">
            6.1. Our website may contain links to third-party websites. We
            are not responsible for the privacy practices or content of
            these websites. Please review the privacy policies of these
            third-party sites before providing any personal information.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-slate-900 mb-3">7. Children's Privacy</h2>
          <p className="leading-relaxed">
            7.1. Our website is not intended for children under the age of
            16. We do not knowingly collect personal information from
            children. If you believe we have inadvertently collected
            personal information from a child, please contact us
            immediately, and we will take steps to delete the information.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-slate-900 mb-3">8. Your Rights</h2>
          <p className="leading-relaxed">
            8.1. You have the right to access, correct, update, or delete
            your personal information. To exercise any of these rights,
            please contact us using the information provided in section 10.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-slate-900 mb-3">9. Changes to this Privacy Policy</h2>
          <p className="leading-relaxed">
            9.1. We may update this privacy policy periodically to reflect
            changes in our practices or for other operational, legal, or
            regulatory reasons. The "Last Updated" date at the beginning of
            the policy will indicate the latest revision.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-slate-900 mb-3">10. Contact Us</h2>
          <p className="leading-relaxed">
            If you have any questions or concerns about this privacy policy
            or our data practices, please contact us at:{' '}
            <a
              href="mailto:hola@angstrohmconsulting.com"
              className="text-[#c8264f] hover:underline"
            >
              hola@angstrohmconsulting.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}