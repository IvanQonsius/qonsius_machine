'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Head from 'next/head';

export default function LegalDisclaimer() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState('terms'); // Default tab is 'terms'

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  return (
    <>
      <Head>
        <title>Legal Information - Qonsius</title>
      </Head>

      <div className="relative min-h-screen font-['Helvetica_Neue']">
      
        {/* Main Content */}
        <div className="bg-gray-200 py-16 flex justify-center items-center">
          <div className="max-w-4xl w-full p-8">
            {/* Tab Navigation */}
            <div className="mb-6">
              <ul className="flex justify-center border-b">
                <li className="mr-1">
                  <button
                    className={`py-2 px-4 ${activeTab === 'terms' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'} hover:text-blue-500`}
                    onClick={() => setActiveTab('terms')}
                  >
                    Terms & Conditions
                  </button>
                </li>
                <li className="mr-1">
                  <button
                    className={`py-2 px-4 ${activeTab === 'privacy' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'} hover:text-blue-500`}
                    onClick={() => setActiveTab('privacy')}
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    className={`py-2 px-4 ${activeTab === 'cookies' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'} hover:text-blue-500`}
                    onClick={() => setActiveTab('cookies')}
                  >
                    Cookies Policy
                  </button>
                </li>
              </ul>
            </div>

            {/* Tab Content */}
            <div>
              {activeTab === 'terms' && (
                <div className="space-y-4">
                  <h1 className="text-2xl font-bold mb-4 text-black">Terms & Conditions</h1>
                  <p className="text-base text-black">
                    Any access to www.qonsius.com (“Website”) implies the acceptance of the terms and conditions stated herein with the same validity and effectiveness as any written and signed contract.
                  </p>
                  <p className="text-base text-black">
                    The observance and compliance with the obligations provided herein shall be enforceable to any person accessing, browsing, or utilizing the Website. If you do not agree with these terms and conditions, do not access, browse nor utilize any page of this Website.
                  </p>

                  <h2 className="text-lg font-bold text-black mt-4">1/ COMPANY INFORMATION</h2>
                  <p className="text-base text-black">
                    Owner: QONSIUS CAPITAL, S. L., (hereinafter, “QONSIUS”) <br />
                    Registered office: Dublin 1, Local 5, Europolis Las Rozas, 28232, Madrid, Spain. <br />
                    Tax identification number: B-88183447 <br />
                    Public Registry: Registro Mercantil de Madrid, Tomo 35679, Folio 194, Hoja M-641219. <br />
                    Telephone number: +34 910 530 783 <br />
                    E-mail: hello@qonsius.com
                  </p>

                  <h2 className="text-lg font-bold text-black mt-4">2/ SUBJECT AND APPLICATION SCOPE</h2>
                  <p className="text-base text-black">
                    The current terms and conditions regulate the access, browse, and utilization of the Website. QONSIUS reserves the right to modify the presentation, configuration, and contents of such Website, as well as the conditions required for access and/or utilization. The mere access or utilization of the Website once such modifications have been implemented implies user consent to those amendments.
                  </p>

                  <h2 className="text-lg font-bold text-black mt-4">3/ INTELLECTUAL PROPERTY RIGHTS</h2>
                  <p className="text-base text-black">
                    QONSIUS is the owner or, where applicable, licensee of the intellectual property rights of the Website, as well as all intellectual property rights derived from the information, materials, and contents therein. No access, browsing, or utilization of the Website shall be considered as QONSIUS’s full or partial refusal, transfer, or license of said rights.
                  </p>

                  <h2 className="text-lg font-bold text-black mt-4">4/ THIRD PARTY WEBSITES</h2>
                  <p className="text-base text-black">
                    In the event that links to other websites are displayed on the Website, QONSIUS informs that these links are directly managed by third parties. QONSIUS does not have the necessary means to gain prior knowledge, control, or approval of the information, contents, products, or services facilitated by these other websites.
                  </p>

                  <h2 className="text-lg font-bold text-black mt-4">5/ WEBSITE USE TERMS AND CONDITIONS</h2>
                  <p className="text-base text-black">
                    Access to and/or utilization of the Website for illegal, unauthorized, or commercial purposes is strictly forbidden. Users are responsible for any legal consequences of Website misuse. This includes, but is not limited to, actions like website hacking, unauthorized access, or the transmission of viruses.
                  </p>

                  <h2 className="text-lg font-bold text-black mt-4">6/ RESPONSIBILITIES AND GUARANTEES</h2>
                  <p className="text-base text-black">
                    QONSIUS cannot guarantee the reliability, usefulness, or veracity of the information and/or services of the Website. In no case will QONSIUS be liable for damages caused by the use of the Website.
                  </p>

                  <h2 className="text-lg font-bold text-black mt-4">7/ PRIVACY POLICY AND COOKIES</h2>
                  <p className="text-base text-black">
                    In compliance with applicable legislation on personal data protection, any personal data provided by the user will be processed according to our Privacy Policy. Users can exercise their corresponding rights as per the policy.
                  </p>

                  <h2 className="text-lg font-bold text-black mt-4">8/ APPLICABLE LAW AND COMPETENT JURISDICTION</h2>
                  <p className="text-base text-black">
                    These terms and conditions shall be governed by Spanish Law. Any disputes arising from the interpretation or execution of this Legal Notice shall be subject to the Courts of Madrid.
                  </p>
                </div>
              )}

              {activeTab === 'privacy' && (
                <div className="space-y-4">
                  <h1 className="text-2xl font-bold mb-4 text-black">Privacy Policy</h1>
                  <h2 className="text-lg font-bold text-black mt-4">1/ IDENTIFICATION</h2>
                  <p className="text-base text-black">
                    Company name: QONSIUS CAPITAL, S. L., (hereinafter, “QONSIUS”) <br />
                    Registered office: Dublin 1, Local 5, Europolis Las Rozas, 28232, Madrid, Spain. <br />
                    Tax identification number: B-88183447 <br />
                    Public Registry: Registro Mercantil de Madrid, Tomo 35679, Folio 194, Hoja M-641219. <br />
                    Telephone number: +34 910 530 783 <br />
                    E-mail: hello@qonsius.com
                  </p>

                  <h2 className="text-lg font-bold text-black mt-4">2/ INFORMATION AND CONSENT</h2>
                  <p className="text-base text-black">
                    By accepting this Privacy Policy, the User is informed and gives its specific, informed and free consent to the processing of personal data given through the Contact Web Form.
                  </p>

                  <h2 className="text-lg font-bold text-black mt-4">3/ MANDATORY DATA</h2>
                  <p className="text-base text-black">
                    Requested data are necessary to fulfill the purpose of the processing unless otherwise indicated. Therefore, the provision of this data is mandatory, meaning that in case these data are not provided QONSIUS will not be able to perform the requested service.
                  </p>

                  <h2 className="text-lg font-bold text-black mt-4">4/ FOR WHAT PURPOSE WILL QONSIUS PROCESS THE PERSONAL DATA OF THE USER AND FOR HOW LONG?</h2>
                  <p className="text-base text-black">
                    The personal data of the User will be processed for the following purposes:
                  </p>
                  <ul className="list-disc list-inside text-base text-black">
                    <li>To manage the contact and information requests made by the User through the channels available on the website.</li>
                    <li>To manage petitions from Users.</li>
                    <li>To analyze how users, use the website as well as their preferences and behavior.</li>
                  </ul>
                  <p className="text-base text-black">
                    The provided personal data shall be stored for a period upon the receipt date.
                  </p>

                  <h2 className="text-lg font-bold text-black mt-4">5/ WHAT PERSONAL DATA WILL QONSIUS PROCESS?</h2>
                  <p className="text-base text-black">
                    QONSIUS will process the following categories of data:
                  </p>
                  <ul className="list-disc list-inside text-base text-black">
                    <li>Contact data: email and phone number</li>
                    <li>Other data: data concerning navigation on the website</li>
                  </ul>

                  <h2 className="text-lg font-bold text-black mt-4">6/ WHICH LEGAL GROUNDS SUPPORT THE PROCESSING?</h2>
                  <p className="text-base text-black">
                   Lawfulness of processing is based on the consent given by the data subject.
                  </p>

                  <h2 className="text-lg font-bold text-black mt-4">7/ USER WARRANTIES</h2>
                  <p className="text-base text-black">
                    The User:
                  </p>
                  <ul className="list-disc list-inside text-base text-black">
                    <li>Warrants to be over 18 years old and warrants that the provided data are truthful, accurate and updated.</li>
                    <li>
                      For these purposes, the User assumes liability for the truthfulness of the data and undertakes to keep them up to date.
                    </li>
                    <li>
                      Warrants to have informed third parties whose data were submitted of the content of this document. Likewise, guarantees that
                      such third party has authorized the processing of his or her data to QONSIUS for the aforementioned purpose.
                    </li>
                    <li>
                      Shall be liable for any false or inaccurate information that he or she may provide to QONSIUS, included, in particular, all
                      damages caused to QONSIUS or third parties.
                    </li>
                  </ul>

                  <h2 className="text-lg font-bold text-black mt-4">8/ RIGHTS OF THE USER</h2>
                  <p className="text-base text-black">
                    The User may request, addressing QONSIUS in the aforementioned postal or email address and attaching a copy of his or her
                    identification document, at any moment and free of charge, to:
                  </p>
                  <ul className="list-disc list-inside text-base text-black">
                    <li>Withdraw his or her consent.</li>
                    <li>Obtain confirmation as to whether or not personal data are being processed by QONSIUS.</li>
                    <li>Access to his or her personal data.</li>
                    <li>Rectify inaccurate or uncomplete personal data.</li>
                    <li>
                      The erasure of his or her personal data where, among others, data are no longer necessary for the purposes for which they were
                      collected.
                    </li>
                    <li>Obtain from QONSIUS the restriction of processing where applicable.</li>
                    <li>Data portability.</li>
                    <li>
                      File a complaint before the Spanish Data Protection Authority, at C/ Jorge Juan 6, 28001 - Madrid (Spain) if he or she
                      considers that QONSIUS has violated his or her rights concerning data protection laws and regulations.
                    </li>
                  </ul>

                  <h2 className="text-lg font-bold text-black mt-4">9/ SECURITY MEASURES</h2>
                  <p className="text-base text-black">
                    QONSIUS shall process the personal data of the User in a manner that is absolutely confidential. For these purposes, QONSIUS
                    will implement the technical and organizational measures necessary to guarantee the security of personal data and to avoid
                    alteration, loss and non-authorised processing or access, in view of the state of the art, the very nature of the data and the
                    risks to the rights and freedoms of data subjects.
                  </p>

                </div>
              )}

              {activeTab === 'cookies' && (
                <div className="space-y-4">
                <h1 className="text-2xl font-bold mb-4 text-black">Cookies Policy</h1>
                <p className="text-base text-black">
                  This Cookie Policy is part of the Legal Notice and the Privacy Policy of the website <a href="http://www.qonsius.com" className="text-blue-500 underline">http://www.qonsius.com</a> ("Website"). The access and navigation on the Website, 
                  or the use of its services, implies acceptance of the terms and conditions contained herein along with the 
                  Legal Notice and the Privacy Policy. QONSIUS CAPITAL, S.L., (“QONSIUS”) it is the owner of the Website and it 
                  is located at Dublin 1, Local 5, Europolis Las Rozas, 28232, Madrid, Spain, with N.I.F. B-88183447. In this regard, 
                  QONSIUS informs you that it uses small pieces of data (“Cookies”) to help customize your user experience. 
                  We may update our Cookie Policy to reflect any changes in technology or data protection legislation. 
                  Any updates or changes that may affect how we use cookies or how you as a user can manage cookies will appear 
                  on this page.
                </p>
              
                <h2 className="text-lg font-bold text-black mt-4">1/ WHAT IS A COOKIE?</h2>
                <p className="text-lg text-black">
                  Cookies are files that contain small amounts of data that are downloaded into the user's device and stored 
                  in the user´s browser. Its main purpose is to recognize the user each time he/she accesses the Website and 
                  they also allow to improve navigation and user experience.
                </p>
                <p className="text-lg text-black">
                  Cookies are essential for a safe and efficient site navigation and help to identify and solve possible errors.
                </p>
              
                <h2 className="text-lg font-bold text-black mt-4">2/ TYPES OF COOKIES</h2>
                <p className="text-lg text-black">
                  This website uses its own and third-party Cookies. We use two types of cookies:
                </p>
                <ul className="list-disc pl-6 text-lg text-black">
                  <li>
                    <strong>Session cookies:</strong> temporary cookies that are stored in your computer for a specific time, until 
                    you close your browser.
                  </li>
                  <li>
                    <strong>Persistent cookies:</strong> stay on your device after you have visited our Website.
                  </li>
                </ul>
                <p className="text-lg text-black">The Cookies used in this Website are:</p>
              
                <h3 className="text-lg font-semibold mt-4 text-black">Cookies "strictly necessary"</h3>
                <p className="text-lg text-black">
                  Cookies considered essential for browsing the Website, as they facilitate the user features or tools, 
                  such as identifying the session, accessing restricted access parts, remembering, among others. Without 
                  these Cookies, the mentioned functions would be disabled.
                </p>
              
                <h3 className="text-lg font-semibold mt-4 text-black">Behavior cookies</h3>
                <p className="text-lg text-black">
                  These are Cookies that gather information related to user's browsing uses, such as visited pages or error 
                  messages with the purpose of improving Website navigation based on the information collected by these Cookies.
                </p>
                <p className="text-lg text-black">
                  The information collected by these Cookies is anonymous and cannot identify the user personally and therefore 
                  they are exclusively used for the proper functioning of the Website.
                </p>
              
                <h3 className="text-lg font-semibold mt-4 text-black">Functionality cookies</h3>
                <p className="text-lg text-black">
                  Cookies that allow the Website to remember the decisions that the user makes, for example: Data about user's 
                  geographical location will be collected to ensure that we offer the proper Website features in the corresponding 
                  region. They also collect, among others, the user name, language, and browser type in order to provide a 
                  personalized service.
                </p>
                <p className="text-lg text-black">
                  The information collected by these Cookies is anonymous and cannot identify the user.
                </p>
              
                <h3 className="text-lg font-semibold mt-4 text-black">Advertising cookies</h3>
                <p className="text-lg text-black">
                  Cookies that are used by advertising operators with QONSIUS´ permission. They collect information about the 
                  preferences and choices of the user when browsing websites. They are aimed for advertising to show the user 
                  customized ads on other websites.
                </p>
              
                <h2 className="text-lg font-bold text-black mt-4">3/ SUMMARY TABLE OF COOKIES USED BY THIS WEBSITE</h2>
                <table class="table-auto w-full border-collapse border border-black">
                  <thead>
                    <tr>
                      <th class="border border-black px-4 py-2 text-left text-black font-sans text-base">Cookies</th>
                      <th class="border border-black px-4 py-2 text-left text-black font-sans text-base">Purpose</th>
                      <th class="border border-black px-4 py-2 text-left text-black font-sans text-base">Information</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border border-black px-4 py-2 text-black font-sans text-base">_ga</td>
                      <td class="border border-black px-4 py-2 text-black font-sans text-base">Google analytics</td>
                      <td class="border border-black px-4 py-2 text-black font-sans text-base">It belongs to Google Analytics and expires in two years time. It is used to generate statistical data about how the visitor uses the website</td>
                    </tr>
                    <tr>
                      <td class="border border-black px-4 py-2 text-black font-sans text-base">_gat</td>
                      <td class="border border-black px-4 py-2 text-black font-sans text-base">Google analytics</td>
                      <td class="border border-black px-4 py-2 text-black font-sans text-base">It belongs to Google Analytics and controls the number of requests</td>
                    </tr>
                    <tr>
                      <td class="border border-black px-4 py-2 text-black font-sans text-base">_gid</td>
                      <td class="border border-black px-4 py-2 text-black font-sans text-base">Google analytics</td>
                      <td class="border border-black px-4 py-2 text-black font-sans text-base">It belongs to Google Analytics and it registers a unique identification used to generate statistical data on how visitors use the website</td>
                    </tr>
                    <tr>
                      <td class="border border-black px-4 py-2 text-black font-sans text-base">Instagram</td>
                      <td class="border border-black px-4 py-2 text-black font-sans text-base">Instagram</td>
                      <td class="border border-black px-4 py-2 text-black font-sans text-base">This cookie is used to allow access to the social network Instagram</td>
                    </tr>
                    
                  </tbody>
                </table>

                <h2 className="text-lg font-bold text-black mt-4">4/ HOW TO CONTROL AND DELETE COOKIES</h2>
                <p className="text-lg text-black">
                  In compliance with applicable law, QONSIUS provides with information on how users can configure their browser 
                  to control privacy and security in relation to Cookies. Information and links to official sites are provided 
                  so that each user can decide whether or not to accept the use of Cookies.
                </p>
                <p className="text-lg text-black">
                  In this regard, it is possible to block cookies using the browser's configuration tools and notifications may 
                  be set when a server wants to store a cookie:
                </p>
              
                <ul className="list-disc pl-6 text-lg text-black">
                  <li>
                    If you use <strong>Microsoft Internet Explorer</strong>, you will find the option in the menu <br /> Tools &gt; Internet 
                    Options &gt; Privacy &gt; Configuration. To learn more visit <a href="http://windows.microsoft.com/es-es/windows-vista/block-or-allow-Cookies" className="text-blue-500 underline">
                      this page
                    </a> and 
                    <a href="http://windows.microsoft.com/es-es/windows7/how-to-manage-Cookies-in-internet-explorer-9" className="text-blue-500 underline"> this page
                    </a>.
                  </li>
                  <li>
                    If you use <strong>Firefox</strong>, you will find the option in the menu Tools &gt; Options &gt; Privacy &gt; Cookies.<br />  
                    To learn more, visit <a href="http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-Cookies-que-los-sitios" className="text-blue-500 underline">
                      this page
                    </a>.
                  </li>
                  <li>
                    If you use <strong>Chrome</strong>, in the Options &gt; Advanced options &gt; Privacy section.<br />  To learn more visit
                    <a href="https://support.google.com/accounts/answer/61416?hl=en" className="text-blue-500 underline"> this page
                    </a>.
                  </li>
                  <li>
                    If you use <strong>Opera</strong>, in the Security and Privacy option, you can configure the browser. <br /> 
                    To learn more, visit <a href="http://help.opera.com/Windows/11.50/es-ES/cookies.html" className="text-blue-500 underline">
                      this page
                    </a>.
                  </li>
                  <li>
                    If you use <strong>Safari</strong> you will find the option in the Preferences / Privacy menu. <br /> More information at <a href="http://support.apple.com/kb/HT1677?viewlocale=en_US" className="text-blue-500 underline">
                      this page
                    </a>.
                  </li>
                </ul>
              </div>
              
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
