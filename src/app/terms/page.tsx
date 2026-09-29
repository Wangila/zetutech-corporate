import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/layout/legal-page";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms that govern use of the ZetuTech LLC website, and how consulting and talent engagements are contracted.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      summary="These terms govern your use of the ZetuTech LLC website. Consulting, delivery, and talent engagements are covered by separate written agreements."
    >
      <LegalSection number={1} title="Agreement to These Terms">
        <p>
          These Terms of Use (the &ldquo;<strong>Terms</strong>&rdquo;) govern your access to and use of{" "}
          <strong>zetutech.com</strong> (the &ldquo;<strong>Site</strong>&rdquo;), operated by ZetuTech
          LLC, a New Jersey limited liability company (&ldquo;<strong>ZetuTech</strong>,&rdquo;
          &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By using the Site, you agree to these
          Terms. If you do not agree, please do not use the Site. Our{" "}
          <Link href="/privacy">Privacy Policy</Link> explains how we handle personal information.
        </p>
      </LegalSection>

      <LegalSection number={2} title="Information Only; No Professional Relationship">
        <p>
          Content on the Site, including descriptions of services, reference architectures, and
          articles, is for general information. It is not professional advice for your specific
          situation, and you should not rely on it as such.
        </p>
        <p>
          Using the Site, submitting the contact form, or booking an introductory call does{" "}
          <strong>not</strong> create a client, consulting, or employment relationship with ZetuTech. A
          relationship begins only when both parties sign a written agreement.
        </p>
      </LegalSection>

      <LegalSection number={3} title="Engagements and Talent Services">
        <p>
          All consulting, architecture, delivery, and fractional services are governed by a signed
          master services agreement and statement of work. Contract staffing and direct-hire placements
          are governed by a signed staffing or placement agreement. If there is any conflict between
          those agreements and these Terms, the signed agreement controls.
        </p>
        <p>
          Descriptions of engagement models, timelines, and deliverables on the Site are illustrative.
          Scope, pricing, and terms are confirmed only in a signed agreement.
        </p>
      </LegalSection>

      <LegalSection number={4} title="Information You Send Us">
        <p>
          Please do not send confidential or proprietary information through the contact form or in an
          unsolicited email. Until a non-disclosure agreement or services agreement is in place, we
          cannot treat enquiries as confidential, although we will handle them in line with our Privacy
          Policy. If you need to share sensitive details, ask us for an NDA first.
        </p>
        <p>You agree that the information you give us is accurate and that you have the right to share it.</p>
      </LegalSection>

      <LegalSection number={5} title="Acceptable Use">
        <p>You agree not to:</p>
        <ul>
          <li>Use the Site in violation of any law or the rights of others.</li>
          <li>Send spam, malware, or automated submissions through the contact form.</li>
          <li>Attempt to gain unauthorized access to, disrupt, or overload the Site or its infrastructure.</li>
          <li>Scrape or copy the Site&rsquo;s content at scale without our written permission.</li>
          <li>Impersonate any person or misrepresent your affiliation with an organization.</li>
        </ul>
      </LegalSection>

      <LegalSection number={6} title="Intellectual Property">
        <p>
          The Site and its content, including text, diagrams, graphics, and the ZetuTech and AssignNet
          names and marks, are owned by ZetuTech or its licensors and protected by law. You may view and
          share pages from the Site for your own non-commercial purposes, with attribution. Any other use
          requires our written permission. Photographs are used under their respective licenses.
        </p>
      </LegalSection>

      <LegalSection number={7} title="Third-Party Links and Products">
        <p>
          The Site may link to third-party websites and to separate ZetuTech products such as AssignNet.
          Those sites and products are governed by their own terms and privacy policies. We are not
          responsible for third-party content or practices.
        </p>
      </LegalSection>

      <LegalSection number={8} title="Disclaimers">
        <p>
          THE SITE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE.&rdquo; TO THE FULLEST EXTENT
          PERMITTED BY LAW, ZETUTECH DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT
          THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS.
        </p>
      </LegalSection>

      <LegalSection number={9} title="Limitation of Liability">
        <p>
          TO THE FULLEST EXTENT PERMITTED BY LAW, ZETUTECH WILL NOT BE LIABLE FOR ANY INDIRECT,
          INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR
          GOODWILL, ARISING FROM YOUR USE OF THE SITE. OUR TOTAL LIABILITY FOR ANY CLAIM ARISING FROM
          THE SITE WILL NOT EXCEED ONE HUNDRED U.S. DOLLARS (US$100). THIS SECTION DOES NOT LIMIT
          LIABILITY UNDER A SIGNED SERVICES OR PLACEMENT AGREEMENT, WHICH IS GOVERNED BY THAT AGREEMENT.
        </p>
      </LegalSection>

      <LegalSection number={10} title="Indemnification">
        <p>
          You agree to indemnify and hold harmless ZetuTech and its members, employees, and agents from
          claims, losses, and expenses, including reasonable attorneys&rsquo; fees, arising from your
          misuse of the Site or your breach of these Terms.
        </p>
      </LegalSection>

      <LegalSection number={11} title="Governing Law and Venue">
        <p>
          These Terms and any dispute arising from them or from your use of the Site are governed by the
          laws of the <strong>State of New Jersey</strong>, without regard to its conflict-of-laws rules.
          Any legal action must be brought exclusively in the state courts located in Somerset County,
          New Jersey, or the United States District Court for the District of New Jersey, and you
          consent to the personal jurisdiction of those courts.
        </p>
      </LegalSection>

      <LegalSection number={12} title="Changes to These Terms">
        <p>
          We may update these Terms from time to time by posting a revised version here with a new
          effective date. Your continued use of the Site after that date means you accept the updated
          Terms.
        </p>
      </LegalSection>

      <LegalSection number={13} title="General">
        <p>
          If any provision of these Terms is found unenforceable, the rest remains in effect. Our failure
          to enforce a provision is not a waiver. These Terms, together with the Privacy Policy, are the
          entire agreement between you and ZetuTech about your use of the Site.
        </p>
      </LegalSection>

      <LegalSection number={14} title="Contact">
        <p>
          ZetuTech LLC
          <br />
          {company.location}, United States
          <br />
          <a href={`mailto:${company.legalEmail}`}>{company.legalEmail}</a>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
