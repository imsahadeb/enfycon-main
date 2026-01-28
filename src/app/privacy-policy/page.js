import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import { constructMetadata } from "@/libs/seo";
import FullScreenHero from "@/components/sections/hero/FullScreenHero";
import Link from "next/link";
import { footerData } from "@/data/footerData";

export const metadata = constructMetadata({
    title: "Privacy Policy - enfycon",
    description: "Privacy Policy for enfycon sites and services.",
});

export default function PrivacyPolicy() {
    return (
        <div>
            <BackToTop />
            <Header />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <HeaderSpace />
                        <FullScreenHero
                            title={"Privacy Policy"}
                            text={"Your privacy is important to us. Learn how we collect, use, and protect your information."}
                            breadcrums={[{ name: "Privacy Policy", path: "/privacy-policy" }]}
                            image={"/images/bg/service-banner.jpg"}
                        />

                        <section className="privacy-content section-gap">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="privacy-text-wrapper">
                                            <p className="mb-4">
                                                This privacy policy (“Privacy Policy”) applies to the website you are currently viewing, as well as any other website, owned or operated by or for enfycon (“enfycon”) to which you may link from this website (collectively, the “enfycon sites”), and informs you about the type of information that may be collected and used by the enfycon sites. By visiting or using any of the enfycon sites, you consent to all collection of personal information, personal data, and other information/data (“Information”), as well as the uses described in this Privacy Policy.
                                            </p>

                                            <h3 className="mt-5 mb-3">1. Collection of Information</h3>
                                            <p className="mb-3">
                                                <strong>A. Purpose.</strong> Users can access certain features of the enfycon sites without disclosing Information. Users may be required to register for an account in order to access certain content/portions of the enfycon sites.
                                            </p>
                                            <p className="mb-3">
                                                <strong>B. Information Sought During Registration.</strong> The enfycon sites may ask you to enter, or may collect in other ways, Information including without limitation your name, phone number, email address, geographic location, age or age range, other demographic (personal) information/data, and browser history (Internet sites visited).
                                            </p>
                                            <p className="mb-3">
                                                <strong>C. Information Sought During Website Sweepstakes or Contests.</strong> When the enfycon sites offer sweepstakes or contests, Information may be collected with the primary purpose of notifying you if you win the sweepstakes or contest, but such Information may be used for the other purposes described in this Privacy Policy.
                                            </p>
                                            <p className="mb-3">
                                                <strong>D. Automatically Collected Information.</strong> Information concerning the computer hardware and software you are using when you visit the enfycon sites may be collected automatically. This information may include: the IP address, browser type, domain names, access times, and referring website addresses. enfycon uses this information primarily to maintain the quality of its service and to provide general statistics about website visitors, but may use the information for any other purpose described in this Privacy Policy.
                                            </p>
                                            <p className="mb-3">
                                                <strong>E. Storage and Transfer of Personally Identifiable Information.</strong> enfycon may store and process Information in the United States of America or any other country in which enfycon or its affiliates, subsidiaries, or agents—domestic or foreign—maintain facilities. By using the enfycon sites, you consent to any such transfer of Information outside of the country where you reside, where you are a citizen, and/or where you access the enfycon Site(s).
                                            </p>

                                            <h3 className="mt-5 mb-3">2. Use and Sharing of Information</h3>
                                            <p className="mb-3">
                                                <strong>A.</strong> enfycon collects and uses Information in part to operate the web sites and provide its online and electronic services. The collection of certain Information enables enfycon to send you any newsletter(s), mailings, offers or other matters you may request. Certain information concerning your geographical location may be used to provide regionalized information to enfycon’s customers or other third parties. When you voluntarily enter a sweepstakes or contest, enfycon may request your email address and other Information in order to contact you in the event you are a winner of the sweepstakes or contest or for other uses. enfycon reserves the right to share Information with its affiliates, subsidiaries and third parties for reasonable business purposes without additional permission other than the permission you have granted under the terms of this Privacy Policy.
                                            </p>
                                            <p className="mb-3">
                                                <strong>B.</strong> enfycon sometimes engages other persons/companies to provide services on enfycon’s behalf, such as sending newsletters, providing customer service, and performing statistical analysis of enfycon’s services. enfycon will generally provide those entities only such Information as is needed to provide enfycon with such services, and enfycon will generally prohibit such entities from using such Information for other purposes, but in certain instances may do so if commercially reasonable.
                                            </p>
                                            <p className="mb-3">
                                                <strong>C.</strong> enfycon also reserves the right to disclose Information, without notice, if required to do so by law or in the good faith belief that such action is necessary to: (a) comply with the requirements of law, the orders of a courts or agencies, and/or other legal process; (b) protect the rights or property of enfycon or others; and/or (c) protect the personal safety of users any of the enfycon sites or other persons.
                                            </p>
                                            <p className="mb-3">
                                                <strong>D.</strong> The enfycon sites sometimes provide hyper-links to third party sites. enfycon encourages you to review the privacy statements of web sites you choose to visit via hyper-links on the enfycon sites so that you can understand how those web sites collect, use and share Information. enfycon is not responsible for the content, privacy policies, acts or omissions of third-party web sites and their owners/administrators.
                                            </p>
                                            <p className="mb-3">
                                                <strong>E.</strong> The enfycon sites sometimes provide links to send email messages to enfycon Site administrators for your convenience, in which case your e-mail address may be used to reply to your inquiry or for other business purposes. For example, enfycon may track the pages on the enfycon sites that you visit in part to determine which areas of the site are the most popular or of interest to you. This Information may be used to deliver customized content and advertising when behavior indicates an interested in a particular subject area, or for other commercially reasonable business purposes.
                                            </p>

                                            <h3 className="mt-5 mb-3">3. Information from Other Sources</h3>
                                            <p className="mb-3">
                                                enfycon sometimes supplements the Information it receives with Information from other sources. Such outside Information includes such things as: (a) updated delivery and address information, including from carriers or other third parties, which Information enables enfycon to correct its records and deliver services or purchases, or future communication, more easily; (b) account Information; (c) purchase or redemption Information; (d) page-view Information, including from some merchants with whom enfycon operates co-branded businesses or for which enfycon provides technical, fulfillment, advertising, or other services; (e) search term and search result Information from searches that may have been conducted through Internet search engines/features; (f) search results and links, including paid listings (such as Sponsored Links from Google); and (g) credit history Information from credit bureaus, which we may use to help prevent and detect fraud and to offer certain credit or financial services or other commercially reasonable business purposes.
                                            </p>

                                            <h3 className="mt-5 mb-3">4. Information Security</h3>
                                            <p className="mb-3">
                                                The enfycon sites may require you to use a password selected by you. Passwords shall not be shared and must be kept confidential. You are responsible for all activities that occur through the use of your password, including unauthorized use, and for promptly notifying enfycon of any unauthorized use and any other breach of security with respect to the enfycon sites. enfycon, in its sole and absolute discretion, may at any time terminate or otherwise restrict access to and use of the enfycon sites, including without limitation if enfycon should suspect unauthorized use of a password or any other breach of security. If you share a computer with anyone, you should always log out of the website before leaving it to prevent access to your information from subsequent users of that computer.
                                            </p>

                                            <h3 className="mt-5 mb-3">5. Use of Cookies</h3>
                                            <p className="mb-3">
                                                <strong>A.</strong> The enfycon sites use cookies to help enfycon make your online experience more individualized. A cookie is a text file that is placed in storage on your computer. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and are read by the web server in the domain that issued the cookie to you.
                                            </p>
                                            <p className="mb-3">
                                                <strong>B.</strong> Cookies are used for convenience and to save you time when you again visit the enfycon sites. The purpose of cookies is to tell the web server that you have returned to a specific page, so that, for example, when you visit the page again your experience can be personalized. Most web browsers automatically accept cookies but give you the ability to change settings to decline cookies. Accepting cookies may permit you to be logged on the site automatically, and if you decline cookies, you may not be able to sign on automatically or experience the interactive features of the site or other sites you visit, and you may experience technical problems receiving current information from such sites if cookies are disabled.
                                            </p>
                                            <p className="mb-3">
                                                <strong>C.</strong> enfycon currently uses AdWords remarketing to market our sites across the web. enfycon places a cookie on your computer via the browser and third party software accesses these cookies and may serve an ad to you through your browser for a third party site. You may opt out of this ad service on Google’s opt out page.
                                            </p>

                                            <h3 className="mt-5 mb-3">6. Use of Web Beacons</h3>
                                            <p className="mb-3">
                                                enfycon’s website pages may contain electronic images known as web beacons, also referred to as single-pixel gifs, that permit enfycon to count the number of users who have visited those pages and allow collection of other website statistics, such as the popularity of certain content, verification of system and server integrity, etc. Web beacons are not intended to give enfycon access to your personal Information, but instead to compile aggregated statistical data concerning the use of the enfycon sites. Web beacons collect limited types of information which may include a cookie number, the time and date of a page view, and a description of the page on which the web beacon resides.
                                            </p>

                                            <h3 className="mt-5 mb-3">7. Blogs</h3>
                                            <p className="mb-3">
                                                Any personally identifiable information or personally sensitive data that you disclose through any blogs that may be hosted on the enfycon sites may be collected and used by others. You should assume that any personal information you provide at any blogs on the enfycon sites will become public.
                                            </p>

                                            <h3 className="mt-5 mb-3">8. Children</h3>
                                            <p className="mb-3">
                                                If you are under 18, you must have your parent or legal guardian access and use the enfycon sites for you. If you want to purchase any goods or services that may be offered at an enfycon Site, such purchase(s) must be made by your parent or legal guardian on your behalf.
                                            </p>

                                            <h3 className="mt-5 mb-3">9. Limitation of Liability and Limited Guarantee</h3>
                                            <p className="mb-3">
                                                The enfycon sites may contain errors or problems and are provided “as is.” enfycon disclaims all warranties, expressed or implied, in connection with the enfycon sites, including the implied warranties of merchantability and fitness. If a enfycon Site fails to perform in accordance with the representations made by enfycon through its corporate offices, enfycon will use commercially reasonable efforts to correct the failure. It is expressly agreed that your exclusive remedy, and enfycon’s aggregate liability, whether in contract, tort or otherwise, in connection with the enfycon sites shall not exceed one hundred dollars ($100.00). enfycon shall in no event be responsible for any incidental, consequential or punitive damages in connection with the enfycon sites (including, but not limited to, lost profits, business interruption, loss of business information or other pecuniary loss) regardless of whether such liability is based on breach of contract, tort (including negligence), strict liability, breach of warranties, failure of essential purpose, or otherwise, and even if enfycon has been advised of the possibility of such damages.
                                            </p>

                                            <h3 className="mt-5 mb-3">10. Contact Information</h3>
                                            <p className="mb-3">
                                                enfycon welcomes feedback regarding this Privacy Policy. If at any time you believe that an enfycon Site has not adhered to this Privacy Policy, please contact enfycon and we will use all commercially reasonable efforts to promptly investigate and correct any problems. Email should be sent to <a href="mailto:privacy@enfycon.com">privacy@enfycon.com</a>.
                                            </p>

                                            <div className="bg-light p-4 rounded mt-5">
                                                <h3 className="mb-3">California Privacy Rights and Choices</h3>
                                                <p className="mb-3">The CCPA provides California residents with specific rights regarding their Personal Information. Your CCPA rights include the following:</p>

                                                <h5 className="mt-4 mb-2">Right to Access</h5>
                                                <p className="mb-2">You have the right to request that we disclose certain information to you about our collection and use of your Personal Information over the past 12 months, which includes:</p>
                                                <ul className="mb-3 list-style-type-disc ps-3">
                                                    <li>The categories of Personal Information we collected about you;</li>
                                                    <li>The categories of sources for the Personal Information we collected about you;</li>
                                                    <li>Our business or commercial purpose for collecting or selling that Personal Information;</li>
                                                    <li>The categories of third parties with whom we share that Personal Information;</li>
                                                    <li>The specific pieces of Personal Information we collected about you (also called a data portability request);</li>
                                                    <li>If we sold or disclosed your Personal Information for a business purpose, two separate lists disclosing:
                                                        <ul className="list-style-type-circle ps-3 mt-1">
                                                            <li>Sales, identifying the Personal Information categories that each category of recipient purchased; and</li>
                                                            <li>Disclosures for a business purpose, identifying the Personal Information categories that each category of recipient obtained.</li>
                                                        </ul>
                                                    </li>
                                                </ul>

                                                <h5 className="mt-4 mb-2">Right to Data Portability</h5>
                                                <p className="mb-3">You have the right to request a copy of your Personal Information in a portable, readily usable format to be transmitted to another entity without hindrance.</p>

                                                <h5 className="mt-4 mb-2">Right to Correct Inaccurate Information</h5>
                                                <p className="mb-3">You have the right to request that we correct any inaccurate Personal Information we maintain.</p>

                                                <h5 className="mt-4 mb-2">Right to Deletion</h5>
                                                <p className="mb-3">You have the right to request that we delete any Personal Information we collected from you and retained, subject to certain exceptions.</p>

                                                <h5 className="mt-4 mb-2">Right to Be Free from Discrimination</h5>
                                                <p className="mb-3">You have the right not to be discriminated against by us for exercising your rights under the CCPA. Unless permitted by the CCPA, we will not:</p>
                                                <ul className="mb-3 list-style-type-disc ps-3">
                                                    <li>Denying goods or services to you;</li>
                                                    <li>Charge different prices or rates for goods or services, including through the use of discounts or other benefits or imposing penalties;</li>
                                                    <li>Provide a different level or quality of goods or services;</li>
                                                    <li>Suggest that you will receive a different price or rate for goods or services or a different level or quality of goods or services or</li>
                                                    <li>Retaliate against an employee, applicant for employment, or independent contractor, as defined in the CCPA, for exercising their rights under this title.</li>
                                                </ul>

                                                <h5 className="mt-4 mb-2">Additional California Privacy Rights</h5>
                                                <p className="mb-3">
                                                    California’s “Shine the Light” law permits California resident users to request certain information regarding our disclosure of Personal Information to third parties for their direct marketing purposes. Please see the “Contact Information” section below to make such a request.
                                                </p>

                                                <h5 className="mt-4 mb-2">Verifiable Consumer Requests and Opting Out</h5>
                                                <p className="mb-3">In addition to the CCPA, many jurisdictions in the United States have enacted comprehensive data privacy laws that include resident consumer rights. To exercise your rights under such laws, please submit a verifiable consumer request by contacting us with the information below.</p>
                                                <p className="mb-3">Only you, or someone legally authorized to act on your behalf, may make a verifiable consumer request related to your Personal Information. You may only make a verifiable consumer request for access or data portability twice within a 12-month period. The verifiable consumer request must:</p>
                                                <ul className="mb-3 list-style-type-disc ps-3">
                                                    <li>Provide sufficient information that allows us to reasonably verify that you are the person about whom we collected Personal Information or an authorized representative.</li>
                                                    <li>Describe your request with sufficient detail, allowing us to understand, evaluate, and respond appropriately.</li>
                                                </ul>
                                                <p className="mb-3">We cannot respond to your request or provide you with Personal Information if we cannot verify your identity or authority to make the request and confirm that the Personal Information relates to you.</p>
                                                <p className="mb-3">Making a verifiable consumer request does not require creating an account with us. However, we consider requests made through your password-protected account sufficiently verified when the request relates to Personal Information associated with that specific account.</p>
                                                <p className="mb-3">We will only use Personal Information provided in a verifiable consumer request to verify the requestor’s identity or authority to make the request.</p>
                                                <p className="mb-3">Please be aware that certain data privacy laws may limit your exercise of these rights under certain circumstances.</p>

                                                <h5 className="mt-4 mb-2">Deletion Request Rights</h5>
                                                <p className="mb-3">You have the right to request that we delete any of your Personal Information that we collected from you and retained, subject to certain exceptions. Once we receive and confirm your verifiable consumer request, we will delete (and direct our service providers to delete) your Personal Information from our records unless an exception applies.</p>
                                                <p className="mb-3">We may deny your deletion request if retaining the information is necessary for us or our service provider(s) to do the following:</p>
                                                <ul className="mb-3 list-style-type-disc ps-3">
                                                    <li>Complete the transaction for which we collected the Personal Information, provide a good or service that you requested, take actions reasonably anticipated within the context of our ongoing business relationship with you, fulfill the terms of a written warranty or product recall conducted in accordance with federal law, or otherwise perform our contract with you.</li>
                                                    <li>Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or prosecute those responsible for such activities.</li>
                                                    <li>Debug products to identify and repair errors that impair existing intended functionality.</li>
                                                    <li>Exercise free speech, ensure the right of another consumer to exercise their free speech rights or exercise another right provided for by law.</li>
                                                    <li>Comply with the California Electronic Communications Privacy Act (Cal. Penal Code § 1546 et. seq.) or similar laws.</li>
                                                    <li>Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws when the information’s deletion may likely render impossible or seriously impair the research’s achievement if you previously provided informed consent.</li>
                                                    <li>Enable solely internal uses that are reasonably aligned with consumer expectations based on your relationship with us.</li>
                                                    <li>Comply with a legal obligation.</li>
                                                    <li>Make other internal and lawful uses of that information that are compatible with the context in which you provided it.</li>
                                                </ul>

                                                <h5 className="mt-4 mb-2">Response Timing and Format</h5>
                                                <p className="mb-3">We endeavor to respond to a verifiable consumer request within forty-five (45) days of its receipt. If we require more time (up to an additional 45 days), we will inform you of the reason and extension period in writing.</p>
                                                <p className="mb-3">If you have an account with us, we will deliver our written response to that account. If you do not have an account with us, we will deliver our written response by mail or electronically at your option.</p>
                                                <p className="mb-3">Any disclosures we provide will only cover the 12 months preceding the receipt of the verifiable consumer request. Our response will also explain why we cannot comply with a request, if applicable. For data portability requests, we will select a format to provide your Personal Information that is readily useable and should allow you to transmit the information from one entity to another entity without hindrance.</p>
                                                <p className="mb-3">We only charge a fee to process or respond to your verifiable consumer request if it is excessive, repetitive, or manifestly unfounded. If we determine that the request warrants a fee, we will tell you why we made that decision and provide you with a cost estimate before completing your request.</p>
                                            </div>

                                            <h3 className="mt-5 mb-3">Opting Out of enfycon Communications</h3>
                                            <p className="mb-3">
                                                If you would like to opt out of receiving emails or other communications directly from us, you may do so by following any instructions in the email or other communication or by contacting us at the contact information listed below. Please note that although you may opt out of update messages and/or direct marketing communications, we reserve the right to email you administrative notices regarding the Website, as permitted under the CAN-SPAM Act. Opting out of our communications or modifying, updating, or deleting your Personal Information will not result in modifying, updating, or deleting any Personal Information that may reside in backup or disaster-recovery storage.
                                            </p>

                                            <h3 className="mt-5 mb-3">Updating Your Information</h3>
                                            <p className="mb-3">
                                                If you are a user who has a registered account with the Services, you can review and change some of your Personal Information by logging into the Services and visiting your account details page or contacting us at the information below.
                                            </p>

                                            <h3 className="mt-5 mb-3">Changes to Our Privacy Policy</h3>
                                            <p className="mb-3">
                                                It is our policy to post any changes we make to our Privacy Policy on this page. If we make material changes to how we treat our users’ Personal Information, we will notify you by providing notice in advance of such change by highlighting the change on our Website and by direct notification upon login. The date the Privacy Policy was last revised is identified at the top of the page. You are responsible for ensuring we have an up-to-date, active, and deliverable email address for you and for periodically visiting our Website and this Privacy Policy to check for any changes.
                                            </p>

                                            <h3 className="mt-5 mb-3">Contact Information</h3>
                                            <p className="mb-3">
                                                To ask questions or comment about this Privacy Policy and our privacy practices, contact us at:
                                            </p>
                                            <ul className="mb-4 ps-3">
                                                <li><strong>By email:</strong> <a href={`mailto:${footerData.contactInfo.email}`}>{footerData.contactInfo.email}</a></li>
                                                <li><strong>By phone:</strong> {footerData.contactInfo.phone}</li>
                                                <li><strong>By mail:</strong> ATTN: Compliance Manager, enfycon, {footerData.contactInfo.address}</li>
                                            </ul>

                                            <h3 className="mt-5 mb-3">Revisions to the Policy</h3>
                                            <p className="mb-3">
                                                If we change this privacy policy we will post any updates here for your review. If we change material terms in this Policy, we will provide notice of the revised policy for 30 days on the home page at <a href="https://www.enfycon.com">www.enfycon.com</a> with a link back to this page.
                                            </p>
                                            <p className="mb-3">
                                                <strong>This Policy is effective as of 07/01/2019</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                    <Footer2 />
                </div>
            </div>

            <ClientWrapper />
        </div>
    );
}
