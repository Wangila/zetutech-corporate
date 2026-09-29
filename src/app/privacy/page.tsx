import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/layout/legal-page";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How ZetuTech LLC collects, uses, shares, and protects personal information from website visitors, prospective clients, and engineering candidates.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      summary="This policy explains what personal information ZetuTech LLC collects through this website and in the course of our consulting and talent services, why we collect it, and the choices you have."
    >
      <LegalSection number={1} title="Who We Are">
        <p>
          ZetuTech LLC (&ldquo;<strong>ZetuTech</strong>,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
          or &ldquo;our&rdquo;) is a New Jersey limited liability company based in {company.location}.
          We provide software architecture and advisory services, engineering delivery, and
          engineering talent (contract and direct-hire) to businesses.
        </p>
        <p>
          This policy applies to <strong>zetutech.com</strong> (the &ldquo;<strong>Site</strong>&rdquo;)
          and to personal information we handle when you contact us, become a client, or apply to
          work with us as an engineer. Client project data processed during an engagement is governed
          by the written agreement with that client, not by this policy. Separate products operated by
          ZetuTech, such as AssignNet, have their own privacy policies.
        </p>
      </LegalSection>

      <LegalSection number={2} title="Information We Collect">
        <h3>Information you give us</h3>
        <ul>
          <li>
            <strong>Enquiries:</strong> when you use our contact form or email us, we receive your
            name, email address, company, the service you&rsquo;re interested in, optional budget and
            timeline, and your message.
          </li>
          <li>
            <strong>Client relationships:</strong> business contact details for the people we work
            with, plus the correspondence, contracts, and invoices needed to run an engagement.
          </li>
          <li>
            <strong>Engineering candidates:</strong> if you apply to join our talent network, we may
            collect your CV or résumé, work history, skills, assessment results, interview notes,
            location, rate expectations, references, and work-authorization status.
          </li>
        </ul>

        <h3>Information collected automatically</h3>
        <ul>
          <li>
            <strong>Analytics:</strong> we use Vercel Web Analytics to understand how the Site is used
            in aggregate, such as page views, referring sites, and device type. It does not use
            cookies and does not build a profile of you across other websites.
          </li>
          <li>
            <strong>Server logs:</strong> our hosting provider records technical data such as IP
            address, browser type, and request times to deliver the Site and protect it from abuse.
          </li>
        </ul>
        <p>
          <strong>Cookies:</strong> the Site does not set advertising or tracking cookies.
        </p>
      </LegalSection>

      <LegalSection number={3} title="How We Use Information">
        <ul>
          <li>To respond to your enquiry and schedule conversations.</li>
          <li>To scope, propose, deliver, and invoice consulting and talent engagements.</li>
          <li>To evaluate candidates and match engineers with suitable client roles.</li>
          <li>To operate, secure, and improve the Site.</li>
          <li>To meet legal, tax, and accounting obligations and to enforce our agreements.</li>
        </ul>
        <p>
          We do not sell personal information, share it for targeted advertising, or use it to make
          decisions about you based solely on automated processing.
        </p>
      </LegalSection>

      <LegalSection number={4} title="How We Share Information">
        <p>We share personal information only as follows:</p>
        <ul>
          <li>
            <strong>Service providers</strong> who help us run the business, under contracts that
            restrict how they use your information. These include Vercel (Site hosting and analytics),
            Resend (delivery of contact-form emails), and our email, scheduling, and accounting
            providers.
          </li>
          <li>
            <strong>Clients, for candidates:</strong> we share a candidate&rsquo;s profile with a
            prospective client only for a specific role, and we tell candidates before we do so.
          </li>
          <li>
            <strong>Legal and safety reasons:</strong> where required by law, or to protect the rights,
            property, or safety of ZetuTech, our clients, or others.
          </li>
          <li>
            <strong>Business transfers:</strong> to a successor in a merger, acquisition, or sale of
            assets, subject to this policy.
          </li>
        </ul>
      </LegalSection>

      <LegalSection number={5} title="Data Retention">
        <ul>
          <li>Enquiries that don&rsquo;t lead to an engagement are kept for up to 24 months.</li>
          <li>
            Client records are kept for the duration of the relationship and afterwards for as long as
            tax and legal requirements demand, generally seven years.
          </li>
          <li>
            Candidate information is kept for up to 24 months after our last contact, unless you ask us
            to delete it sooner or you are placed with a client.
          </li>
        </ul>
      </LegalSection>

      <LegalSection number={6} title="Security">
        <p>
          We use reasonable administrative, technical, and physical safeguards, including encryption in
          transit, access controls, and reputable providers with strong security programs. No system is
          perfectly secure, and we will notify you and regulators of a breach where the law requires.
        </p>
      </LegalSection>

      <LegalSection number={7} title="Your Rights">
        <p>Depending on where you live, you may have the right to:</p>
        <ul>
          <li>Access, correct, or delete your personal information.</li>
          <li>Receive a copy of your information in a portable format.</li>
          <li>Object to or restrict certain processing.</li>
          <li>Opt out of the sale of personal information or targeted advertising (we do neither).</li>
          <li>Withdraw consent where we rely on it.</li>
        </ul>
        <p>
          <strong>New Jersey residents</strong> have these rights under the New Jersey Data Privacy
          Act, and residents of other U.S. states may have similar rights under their state laws.
          <strong> Candidates in Kenya</strong> have rights under the Kenya Data Protection Act, 2019.
        </p>
        <p>
          To make a request, email <a href={`mailto:${company.legalEmail}`}>{company.legalEmail}</a>.
          We will verify your request and respond within the time the law requires. If we decline your
          request, you may appeal by replying to our decision. We will not discriminate against you for
          exercising your rights.
        </p>
      </LegalSection>

      <LegalSection number={8} title="International Transfers">
        <p>
          ZetuTech is based in the United States and works with engineers in the United States and
          Kenya. Your information may be processed in either country and wherever our service providers
          operate. Where required, we use appropriate safeguards, such as contractual protections, for
          these transfers.
        </p>
      </LegalSection>

      <LegalSection number={9} title="Children">
        <p>
          The Site is intended for businesses and professionals and is not directed to anyone under 18.
          We do not knowingly collect personal information from children.
        </p>
      </LegalSection>

      <LegalSection number={10} title="Changes to This Policy">
        <p>
          We may update this policy from time to time. We will post the updated version here with a new
          effective date, and where changes are material we will take reasonable steps to let you know.
        </p>
      </LegalSection>

      <LegalSection number={11} title="Contact Us">
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
