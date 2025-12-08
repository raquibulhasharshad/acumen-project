import {Navbar} from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
// import { Sun } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <section className='min-h-screen bg-acumen-secondary/10 text-acumen-light/90 px-6 py-20'>
        <div className='max-w-4xl mx-auto'>
          <div className='flex flex-col items-center mb-8'>
            {/* <Sun
            className='text-yellow-300 mr-3 animate-spin'
            style={{ animationDuration: "8s" }}
          /> */}
            <h1 className='text-4xl font-bold text-acumen-secondary text-center'>
              🔐 Privacy Policy for The Acumen Arc
            </h1>
          </div>

          <p className='text-sm mb-4 text-acumen-secondary/100 opacity-80'>
            <strong>Update Date:</strong> 17-07-2025
            <br />
            <strong>Operated by:</strong> Fowlat Technologies Pvt. Ltd.
          </p>
          <p className='mb-6'>
            <strong>Trademark: The Acumen Arc</strong> is a registered trademark
            of Fowlat Technologies Pvt. Ltd.
            <br />
            <strong>Contact Emails:</strong> sales@theacumenarc.com |
            bde@theacumenarc.com
          </p>

          <div className='space-y-6 text-base leading-7'>
            <p>
              <strong>1. Overview</strong>
              <br />
              At The Acumen Arc, we are committed to protecting your privacy. This
              policy explains how we collect, use, and safeguard your
              information when you visit <strong>theacumenarc.com</strong> or use
              our services related to solar plant monitoring, WhatsApp alerts,
              and automated reports.
            </p>

            <p>
              <strong>2. Information We Collect</strong>
            </p>
            <ul className='list-disc ml-5 mt-2'>
              <li>
                <strong>Personal Info:</strong> Name, email address, company
                details submitted via forms or support queries
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type,
                device details, and usage analytics
              </li>
              <li>
                <strong>Service Data:</strong> Solar plant metrics, alert
                configurations, and report history (for registered users)
              </li>
            </ul>

            <p>
              <strong>3. How We Use Your Information</strong>
              <br />
              We use your data to:
              <ul className='list-disc ml-5 mt-2'>
                <li>Provide dashboard access and deliver real-time alerts</li>
                <li>
                  Send daily, weekly, or monthly Excel performance reports
                </li>
                <li>Communicate system updates and respond to inquiries</li>
                <li>Improve service reliability, security, and performance</li>
                <li>Comply with legal requirements or protect our rights</li>
              </ul>
            </p>

            <p>
              <strong>4. Data Storage & Security</strong>
              <ul className='list-disc ml-5 mt-2'>
                <li>
                  Data is stored on secure servers with restricted access.
                </li>
                <li>
                  MongoDB and other encrypted databases may be used to store
                  plant data.
                </li>
                <li>
                  We apply commercially reasonable safeguards to prevent
                  unauthorized access or data breaches.
                </li>
              </ul>
            </p>

            <p>
              <strong>5. Sharing & Disclosure</strong>
              <br />
              We do <strong>not</strong> sell your data. We may share it only
              when:
              <ul className='list-disc ml-5 mt-2'>
                <li>
                  Using third-party services (e.g., WhatsApp API or email
                  providers) strictly for service delivery
                </li>
                <li>Legally required or to enforce policy violations</li>
                <li>Supporting analytics or system troubleshooting</li>
              </ul>
            </p>

            <p>
              <strong>6. Cookies & Tracking</strong>
              <br />
              Our website may use cookies to:
              <ul className='list-disc ml-5 mt-2'>
                <li>Track user behavior for system optimization</li>
                <li>Store user preferences for personalized experiences</li>
              </ul>
              You can disable cookies in your browser settings at any time.
            </p>

            <p>
              <strong>7. Your Rights</strong>
              <br />
              You may:
              <ul className='list-disc ml-5 mt-2'>
                <li>Request access to your data</li>
                <li>Ask us to correct or delete personal information</li>
                <li>Withdraw consent to certain data uses</li>
              </ul>
              Please contact us at sales@theacumenarc.com, or bde@theacumenarc.com
              for privacy-related requests.
            </p>

            <p>
              <strong>8. Third-Party Links</strong>
              <br />
              We may link to external tools (e.g., analytics dashboards or solar
              APIs). We are not responsible for their privacy policies—please
              review them separately.
            </p>

            <p>
              <strong>9. Children's Privacy</strong>
              <br />
              The Acumen Arc does not knowingly collect data from individuals under
              13 years of age.
            </p>

            <p>
              <strong>10. Updates to This Policy</strong>
              <br />
              This policy may be updated from time to time. Major updates will
              be announced on our site with a revised effective date.
            </p>

            <p>
              <strong>11. Corporate Entity Disclosure</strong>
              <br />
              The Acumen Arc is developed, operated, and maintained by{" "}
              <strong>Fowlat Technologies Pvt. Ltd.</strong>, a private limited
              company incorporated in Delhi under the Companies Act, 2013. All
              rights related to “The Acumen Arc,” including data ownership, platform
              usage, and intellectual property, are retained by Fowlat
              Technologies Pvt. Ltd.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
