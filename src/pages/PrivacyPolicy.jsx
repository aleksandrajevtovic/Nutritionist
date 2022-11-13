import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import { motion as m } from "framer-motion";

const PrivacyPolicy = (props) => {
  const { cartItems } = props;
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <Topbar />
      <Navbar countCartItems={cartItems.length} />
      <section className="narrow">
        <h1 className="main-title">PRIVACY POLICY</h1>
        <div className="narrow__body">
          <p>
            This Privacy Policy describes how www.mylahfit.com collects, uses,
            and discloses your Personal Information when you visit or make a
            purchase from the Site.
          </p>
          <p>Collecting Personal Information</p>
          <p>
            When you visit the Site, we collect certain information about your
            device, your interaction with the Site, and information necessary to
            process your purchases. We may also collect additional information
            if you contact us for customer support. In this Privacy Policy, we
            refer to any information that can uniquely identify an individual
            (including the information below) as “Personal Information”. See the
            list below for more information about what Personal Information we
            collect and why.
          </p>
          <p>
            {" "}
            <u>Device information</u>
          </p>
          <ul>
            <li>
              <strong>Examples of Personal Information collected:</strong>{" "}
              version of web browser, IP address, time zone, cookie information,
              what sites or products you view, search terms, and how you
              interact with the Site.
            </li>
            <li>
              <strong>Purpose of collection:</strong> to load the Site
              accurately for you, and to perform analytics on Site usage to
              optimize our Site.
            </li>
            <li>
              <strong>Source of collection:</strong> Collected automatically
              when you access our Site using cookies, log files, web beacons,
              tags, or pixels.
            </li>
            <li>
              <strong>Disclosure for a business purpose:</strong> shared with
              our processor Shopify.
            </li>
          </ul>

          <p>
            {" "}
            <u>Order information</u>
          </p>
          <ul>
            <li>
              <strong>Examples of Personal Information collected:</strong> name,
              billing address, shipping address, payment information (including
              credit card numbers), email address, and phone number.
            </li>
            <li>
              <strong>Purpose of collection:</strong> to provide products or
              services to you to fulfill our contract, to process your payment
              information, arrange for shipping, and provide you with invoices
              and/or order confirmations, communicate with you, screen our
              orders for potential risk or fraud, and when in line with the
              preferences you have shared with us, provide you with information
              or advertising relating to our products or services.
            </li>
            <li>
              <strong>Source of collection:</strong> collected from you.
            </li>
            <li>
              <strong>Disclosure for a business purpose:</strong> shared with
              our processor Shopify&nbsp;
            </li>
          </ul>

          <p>
            <u>Customer support information</u>
          </p>
          <ul>
            <li>
              <strong>Examples of Personal Information collected:</strong>&nbsp;
            </li>
            <li>
              <strong>Purpose of collection:</strong> to provide customer
              support.
            </li>
            <li>
              <strong>Source of collection:</strong> collected from you.
            </li>
            <li>
              <strong>Disclosure for a business purpose:</strong>
            </li>
          </ul>

          <h2 style={{ marginTop: "3rem" }}>Minors</h2>
          <p>
            The Site is not intended for individuals under the age of 18. We do
            not intentionally collect Personal Information from children. If you
            are the parent or guardian and believe your child has provided us
            with Personal Information, please contact us at the address below to
            request deletion.
          </p>
          <h2>Sharing Personal Information</h2>
          <p>
            We share your Personal Information with service providers to help us
            provide our services and fulfill our contracts with you, as
            described above. For example:
          </p>
          <ul>
            <li>
              We may share your Personal Information to comply with applicable
              laws and regulations, to respond to a subpoena, search warrant or
              other lawful request for information we receive, or to otherwise
              protect our rights.
            </li>
          </ul>
          <h2 style={{ marginTop: "2rem" }}>Behavioural Advertising </h2>
          <p>
            As described above, we use your Personal Information to provide you
            with targeted advertisements or marketing communications we believe
            may be of interest to you. For example:
          </p>

          <ul>
            <li>
              We use Google Analytics to help us understand how our customers
              use the Site. You can read more about how Google uses your
              Personal Information here:{" "}
              <a
                href="https://policies.google.com/privacy?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                https://policies.google.com/privacy?hl=en
              </a>
              .You can also opt-out of Google Analytics here:{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noreferrer"
              >
                https://tools.google.com/dlpage/gaoptout
              </a>
              .
            </li>
            <li>
              &nbsp;We share information about your use of the Site, your
              purchases, and your interaction with our ads on other websites
              with our advertising partners. We collect and share some of this
              information directly with our advertising partners, and in some
              cases through the use of cookies or other similar technologies
              (which you may consent to, depending on your location).
            </li>
          </ul>

          <p style={{ marginTop: "2rem" }}>
            For more information about how targeted advertising works, you can
            visit the Network Advertising Initiative’s (“NAI”) educational page
            at{" "}
            <a
              href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work"
              target="_blank"
              rel="noreferrer"
            >
              http://www.networkadvertising.org/
              understanding-online-advertising/how-does-it-work
            </a>
            .
          </p>
          <h2>Using Personal Information</h2>
          <p>
            We use your personal Information to provide our services to you,
            which includes: offering products for sale, processing payments,
            shipping and fulfillment of your order, and keeping you up to date
            on new products, services, and offers.
          </p>
          <h2>Lawful basis</h2>
          <p>
            Pursuant to the General Data Protection Regulation (“GDPR”), if you
            are a resident of the European Economic Area (“EEA”), we process
            your personal information under the following lawful bases:
          </p>

          <ul>
            <li>Your consent;</li>
            <li>The performance of the contract between you and the Site;</li>
            <li>Compliance with our legal obligations;</li>
            <li>To protect your vital interests;</li>
            <li>To perform a task carried out in the public interest;</li>
            <li>
              For our legitimate interests, which do not override your
              fundamental rights and freedoms.
            </li>
          </ul>
          <h2 style={{ marginTop: "2rem" }}>Retention</h2>
          <p>
            When you place an order through the Site, we will retain your
            Personal Information for our records unless and until you ask us to
            erase this information. For more information on your right of
            erasure, please see the ‘Your rights’ section below.
          </p>
          <h2>Automatic decision-making</h2>
          <p>
            If you are a resident of the EEA, you have the right to object to
            processing based solely on automated decision-making (which includes
            profiling), when that decision-making has a legal effect on you or
            otherwise significantly affects you.
          </p>
          <p>
            We <i>[DO/DO NOT]</i> engage in fully automated decision-making that
            has a legal or otherwise significant effect using customer data.
          </p>

          <p>
            Services that include elements of automated decision-making include:
          </p>
          <ul>
            <li>
              Temporary denylist of IP addresses associated with repeated failed
              transactions. This denylist persists for a small number of hours.
            </li>
            <li>
              Temporary denylist of credit cards associated with denylisted IP
              addresses. This denylist persists for a small number of days.
            </li>
          </ul>
          <h2 style={{ marginTop: "2rem" }}>Your rights</h2>
          <h2>GDPR</h2>
          <p>
            If you are a resident of the EEA, you have the right to access the
            Personal Information we hold about you, to port it to a new service,
            and to ask that your Personal Information be corrected, updated, or
            erased. If you would like to exercise these rights, please contact
            us through the contact information below&nbsp;
          </p>
          <p>
            Your Personal Information will be initially processed in Ireland and
            then will be transferred outside of Europe for storage and further
            processing, including to Canada and the United States. For more
            information on how data transfers comply with the GDPR, see
            Shopify’s GDPR Whitepaper:{" "}
            <a
              href="https://help.shopify.com/en/manual/your-account/privacy/GDPR"
              target="_blank"
              rel="noreferrer"
            >
              https://help.shopify.com/en/ manual/your-account/privacy/GDPR
            </a>
            .
          </p>
          <h2>CCPA</h2>
          <p>
            If you are a resident of California, you have the right to access
            the Personal Information we hold about you (also known as the ‘Right
            to Know’), to port it to a new service, and to ask that your
            Personal Information be corrected, updated, or erased. If you would
            like to exercise these rights, please contact us through the contact
            information below&nbsp;
          </p>
          <p>
            If you would like to designate an authorized agent to submit these
            requests on your behalf, please contact us at the address below.
          </p>
          <h2>Cookies</h2>
          <p>
            A cookie is a small amount of information that’s downloaded to your
            computer or device when you visit our Site. We use a number of
            different cookies, including functional, performance, advertising,
            and social media or content cookies. Cookies make your browsing
            experience better by allowing the website to remember your actions
            and preferences (such as login and region selection). This means you
            don’t have to re-enter this information each time you return to the
            site or browse from one page to another. Cookies also provide
            information on how people use the website, for instance, whether
            it’s their first time visiting or if they are frequent visitor.
          </p>
          <p>
            We use the following cookies to optimize your experience on our Site
            and to provide our services.
          </p>
          <h2>Contact</h2>
          <p>
            For more information about our privacy practices, if you have
            questions, or if you would like to make a complaint, please contact
            us by e-mail at [email address] or by mail using the details
            provided below:
          </p>
          <p>Prinzregentenstrasse, 81675 Munich, Germany</p>
        </div>
      </section>
      <Footer />
    </m.div>
  );
};

export default PrivacyPolicy;
