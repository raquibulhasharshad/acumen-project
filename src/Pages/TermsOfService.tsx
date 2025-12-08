import Footer from "@/components/Footer";
import {Navbar} from "@/components/Navbar";
import React from "react";


// Assuming this component sits in the pages/ directory or is used within app/page.tsx
const TermsOfService = () => {
    return (
        <>
            <Navbar />
            {/* FIX 1: Changed background to a lighter shade of acumen-secondary (acumen-secondary/10) and main text to a shade of acumen-light (acumen-light/90) */}
            <section className='min-h-screen bg-acumen-secondary/10 text-acumen-light/90 px-6 py-20'>
                <div className='max-w-4xl mx-auto'>

                    {/* FIX 2: Centering the Headline */}
                    <div className='flex flex-col items-center mb-8'>
                        {/* FIX 3: Changed headline color for contrast (text-acumen-secondary) and increased size for prominence */}
                        <h1 className='text-5xl font-serif font-bold text-acumen-secondary text-center'>
                            ⚖️ Terms of Use
                        </h1>
                    </div>

                    {/* Adjusted text colors for readability on a lighter background */}
                    <p className='text-sm mb-4 text-acumen-primary opacity-90'>
                        <strong>Update Date:</strong> 17-07-2025
                        <br />
                        <strong>Operated By:</strong> Fowlat Technologies Pvt. Ltd.
                    </p>
                    <p className='mb-6 text-acumen-secondary'>
                        <strong>Trademark Notice:</strong> The Acumen Arc is a registered
                        trademark and digital product developed by{" "}
                        <strong>Fowlat Technologies Pvt. Ltd.</strong>, a company
                        incorporated in Delhi under the Companies Act, 2013.
                    </p>

                    {/* All section text changed to shades of purple(acumen-secondary) for contrast */}
                    <div className='space-y-6 text-base leading-7 text-acumen-secondary opacity/90'>
                        <p>
                            <strong className="text-acumen-secondary">1. Acceptance of Terms</strong>
                            <br />
                            By accessing or using <strong>theacumenarc.com</strong>, you agree
                            to be bound by these Terms of Use, applicable laws, and
                            regulations. If you do not agree with any part of these terms, you
                            are prohibited from using this website or its services.
                        </p>

                        <p>
                            <strong className="text-acumen-secondary">2. Corporate Identity and Purpose</strong>
                            <br />
                            This website, <strong>The Acumen Arc</strong>, is owned and operated by{" "}
                            <strong>Fowlat Technologies Pvt. Ltd.</strong>, whose primary
                            business activities include:
                            {/* List text uses the lightest palette shade for contrast */}
                            <ul className='list-disc ml-5 mt-2 text-palette-Pastel-Lavender'>
                                <li>
                                    Construction and maintenance of power, telecommunication, and
                                    transmission lines
                                </li>
                                <li>
                                    Sourcing, developing, and deploying monitoring systems and
                                    infrastructure services
                                </li>
                                <li>
                                    Research-driven technology integration for energy and solar
                                    analytics
                                </li>
                            </ul>
                            These services fall under the scope described in Clause 3 of
                            Fowlat Technologies' MOA.
                        </p>

                        <p>
                            <strong className="text-acumen-secondary">3. Use License</strong>
                            <br />
                            You are granted a limited, non-exclusive, and non-transferable
                            license to access and view content for personal, non-commercial
                            use. You may not:
                            <ul className='list-disc ml-5 mt-2 text-palette-Pastel-Lavender'>
                                <li>Modify or copy any materials</li>
                                <li>
                                    Use content for commercial redistribution or public display
                                </li>
                                <li>
                                    Reverse-engineer or replicate platform functions or dashboards
                                </li>
                                <li>Remove trademarks or copyright notices</li>
                                <li>
                                    Mirror content from theacumenarc.com elsewhere without
                                    permission
                                </li>
                            </ul>
                            This license is revoked upon breach and may be terminated at the
                            company's discretion.
                        </p>

                        <p>
                            <strong className="text-acumen-secondary">4. Account Security and Passwords</strong>
                            <br />
                            You agree to maintain the confidentiality of your login
                            credentials. Sharing credentials or unauthorized access to RMS
                            services is strictly prohibited.
                            <br />
                            <ul className='list-disc ml-5 mt-2 text-palette-Pastel-Lavender'>
                                <li>
                                    Fowlat Technologies is not liable for data loss or service
                                    misuse from compromised passwords.
                                </li>
                                <li>
                                    Password requirements may be updated without prior notice.
                                </li>
                            </ul>
                        </p>

                        <p>
                            <strong className="text-acumen-secondary">5. Feature Availability</strong>
                            <br />
                            The Acumen Arc may introduce, modify, or remove features such as
                            real-time alerts, Excel report exports, or WhatsApp integrations.
                            Use of any new feature signifies agreement to updated terms
                            relating to that feature.
                        </p>

                        <p>
                            <strong className="text-acumen-secondary">6. Intellectual Property</strong>
                            <br />
                            All dashboards, reports, software scripts, templates, data
                            visualizations, and backend services are proprietary to{" "}
                            <strong>Fowlat Technologies Pvt. Ltd.</strong> Users are not
                            permitted to reuse, recompile, or distribute these elements
                            without written authorization.
                        </p>

                        <p>
                            <strong className="text-acumen-secondary">7. Service Disclaimer</strong>
                            <br />
                            The content and services on <strong>theacumenarc.com</strong> are
                            provided “as is.” We do not warrant:
                            <ul className='list-disc ml-5 mt-2 text-palette-Pastel-Lavender'>
                                <li>Accuracy or timeliness of solar performance data</li>
                                <li>Error-free transmission of alerts or reports</li>
                                <li>Compatibility with all device configurations</li>
                                <li>Specific energy-saving outcomes</li>
                            </ul>
                            All warranties—express or implied—are disclaimed.
                        </p>

                        <p>
                            <strong className="text-acumen-secondary">8. Limitation of Liability</strong>
                            <br />
                            Fowlat Technologies Pvt. Ltd. shall not be held liable for:
                            <ul className='list-disc ml-5 mt-2 text-palette-Pastel-Lavender'>
                                <li>System downtime or delayed notifications</li>
                                <li>Loss of data, profits, or commercial opportunity</li>
                                <li>
                                    Errors in third-party integrations (e.g., Excel, WhatsApp)
                                </li>
                            </ul>
                            These limitations apply even if advised of potential issues.
                        </p>

                        <p>
                            <strong className="text-acumen-secondary">9. Third-Party Links</strong>
                            <br />
                            We may link to external services or tools, including cloud
                            storage, messaging APIs, or energy platforms. These links do not
                            imply endorsement, and we are not responsible for the content or
                            privacy policies of external sites.
                        </p>

                        <p>
                            <strong className="text-acumen-secondary">10. Governing Law</strong>
                            <br />
                            This agreement is governed by the laws of{" "}
                            <strong>Delhi, India</strong>. Users agree to submit to the
                            exclusive jurisdiction of courts located in Delhi for any legal
                            proceedings related to these terms.
                        </p>

                        <p>
                            <strong className="text-acumen-secondary">11. Corporate Disclosure</strong>
                            <br />
                            The Acumen Arc is a platform created and operated in accordance with
                            the Memorandum of Association of{" "}
                            <strong>Fowlat Technologies Pvt. Ltd.</strong>, under Clause 3
                            objects including monitoring systems, technology partnerships, and
                            scalable infrastructure development.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default TermsOfService;