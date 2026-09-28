import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/layout/legal-page";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How ZetuTech LLC and AssignNet collect, use, share, and protect personal data, including Verified Scholar identity data, integrity scanning, and payment routing.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      summary="This policy explains what personal data ZetuTech LLC collects, why we collect it, who we share it with, and the rights you have over it."
    >
      <LegalSection number={1} title="Who We Are">
        <p>
          ZetuTech LLC (&ldquo;<strong>ZetuTech</strong>,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
          or &ldquo;our&rdquo;) is a New Jersey limited liability company headquartered in{" "}
          {company.location}. ZetuTech builds and operates software platforms, including{" "}
          <strong>AssignNet</strong>, a multi-sided marketplace that matches clients with vetted
          academic and technical specialists.
        </p>
        <p>
          This Privacy Policy applies to this website, to AssignNet, and to any other ZetuTech
          service that links to it (together, the &ldquo;<strong>Services</strong>&rdquo;). ZetuTech
          is the controller of the personal data described here unless we state otherwise.
        </p>
      </LegalSection>

      <LegalSection number={2} title="Information We Collect">
        <h3>Information you provide</h3>
        <ul>
          <li>
            <strong>Account data:</strong> name, email address, password (stored only as a salted
            hash), country, time zone, and preferred language.
          </li>
          <li>
            <strong>Profile data:</strong> areas of expertise, education history, work samples,
            biography, and profile photo.
          </li>
          <li>
            <strong>Engagement data:</strong> task descriptions, bids, messages, milestone
            submissions, deliverables, reviews, and dispute records.
          </li>
          <li>
            <strong>Support data:</strong> anything you send us when you contact support or
            respond to a survey.
          </li>
        </ul>

        <h3>Information collected automatically</h3>
        <ul>
          <li>
            <strong>Device and log data:</strong> IP address, browser type, operating system,
            referring URLs, pages viewed, and timestamps.
          </li>
          <li>
            <strong>Security telemetry:</strong> sign-in events, session identifiers, and signals
            used to detect account takeover, duplicate accounts, and fraud.
          </li>
          <li>
            <strong>Cookies:</strong> strictly necessary cookies for authentication and security,
            and, where permitted, analytics cookies that measure product usage. You can control
            non-essential cookies through your browser settings.
          </li>
        </ul>
      </LegalSection>

      <LegalSection number={3} title="Verified Scholar Onboarding">
        <p>
          Specialists who apply for <strong>Verified Scholar</strong> status go through an
          identity and credential verification process before they can bid on tasks. As part of
          that process we may collect:
        </p>
        <ul>
          <li>A government-issued photo identification document.</li>
          <li>A live selfie or short video used to match you to that document.</li>
          <li>
            Academic or professional credentials, such as degree certificates, transcripts,
            institutional email addresses, or professional licenses.
          </li>
          <li>Results of skills assessments completed on the platform.</li>
        </ul>
        <p>
          We use this information only to confirm that you are a real, unique person, that your
          stated qualifications are genuine, and to prevent fraud and duplicate accounts.
          Biometric comparisons are performed by our identity verification provider. We do not use
          them for any other purpose, and we do not sell them.
        </p>
        <p>
          Raw identity documents and biometric templates are deleted, or instructed to be deleted
          by our provider, within <strong>30 days</strong> of a verification decision. We keep only
          the verification outcome, the date, and the document type and country. Credential records
          are kept for as long as your Verified Scholar status is active.
        </p>
      </LegalSection>

      <LegalSection number={4} title="Integrity Scanning">
        <p>
          Every deliverable submitted through AssignNet passes through our Triple-Gate integrity
          process. As part of that process, deliverables are sent to{" "}
          <strong>Copyleaks</strong>, a third-party content-integrity service, which checks them
          for plagiarism and for AI-generated content.
        </p>
        <ul>
          <li>
            We send Copyleaks the text of the submitted deliverable plus a submission identifier.
            We do not send your name, email address, or identity documents.
          </li>
          <li>
            We configure scans so that submitted content is <strong>not</strong> added to any
            shared or public comparison repository, wherever the service allows that setting.
          </li>
          <li>
            Scan reports, including similarity scores and flagged passages, are stored with the
            engagement record. They are visible to the specialist, the client, and ZetuTech staff
            handling reviews or disputes.
          </li>
        </ul>
        <p>
          Copyleaks processes this content under its own privacy terms and its agreement with us.
          We encourage you to read the Copyleaks privacy policy.
        </p>
      </LegalSection>

      <LegalSection number={5} title="Payments and Financial Routing Data">
        <p>
          ZetuTech does not store full payment card numbers or bank account credentials. Payments,
          escrowed funds, and payouts are processed by regulated third-party providers, including{" "}
          <strong>Stripe</strong> and <strong>Paystack</strong>, depending on your region.
        </p>
        <ul>
          <li>
            These providers collect your payment details directly. They may also collect the
            identity and tax information needed to meet know-your-customer (KYC), anti-money
            laundering, and sanctions obligations.
          </li>
          <li>
            From these providers we receive limited information, such as a tokenized payment
            method reference, the last four digits of a card or account, payout status, transaction
            amounts, and dates.
          </li>
          <li>
            We keep transaction records for as long as tax, accounting, and legal requirements
            demand, which is generally seven years.
          </li>
        </ul>
        <p>
          Each provider handles your information under its own privacy policy. See the Stripe
          and Paystack privacy policies for details.
        </p>
      </LegalSection>

      <LegalSection number={6} title="How We Use Information">
        <ul>
          <li>To create and secure accounts and to provide the Services.</li>
          <li>To match clients with specialists and run bidding, milestones, and reviews.</li>
          <li>To verify identity and credentials and to enforce our integrity standards.</li>
          <li>To process payments, hold funds in escrow, and release payouts.</li>
          <li>To detect, investigate, and prevent fraud, abuse, and security incidents.</li>
          <li>To resolve disputes and enforce our Terms of Service.</li>
          <li>To send service messages and, with your consent where required, product updates.</li>
          <li>To analyze usage and improve the Services.</li>
          <li>To comply with legal obligations and respond to lawful requests.</li>
        </ul>
        <p>
          Where the law requires a legal basis for processing, we rely on performance of our
          contract with you, our legitimate interest in running a secure and trustworthy
          marketplace, compliance with legal obligations, and, where applicable, your consent.
        </p>
      </LegalSection>

      <LegalSection number={7} title="How We Share Information">
        <p>We do not sell your personal data or share it for cross-context behavioral advertising.</p>
        <p>We share personal data only with the following recipients:</p>
        <ul>
          <li>
            <strong>Other users,</strong> but only as needed for an engagement: for example, a
            client sees a specialist&rsquo;s profile, verification badge, bids, and deliverables.
          </li>
          <li>
            <strong>Service providers</strong> acting on our behalf, including cloud hosting
            (Amazon Web Services), identity verification, Copyleaks, Stripe, Paystack, email
            delivery, and customer support tools. All are bound by confidentiality and data
            protection terms.
          </li>
          <li>
            <strong>Authorities and other parties</strong> when the law requires it, or when
            necessary to protect the rights, property, or safety of ZetuTech, our users, or the
            public.
          </li>
          <li>
            <strong>A successor entity</strong> in a merger, acquisition, financing, or sale of
            assets, subject to this Privacy Policy.
          </li>
        </ul>
      </LegalSection>

      <LegalSection number={8} title="Data Retention">
        <p>
          We keep personal data only for as long as we need it for the purposes described in this
          policy, unless the law requires or permits a longer period. Account and profile data is
          deleted or anonymized within 90 days of account closure. The exceptions are records we
          must keep for legal, tax, fraud-prevention, or dispute-resolution purposes, and the
          shorter retention periods for identity data described in Section 3.
        </p>
      </LegalSection>

      <LegalSection number={9} title="Security">
        <p>We protect personal data with administrative, technical, and physical safeguards, including:</p>
        <ul>
          <li>Encryption in transit (TLS) and at rest.</li>
          <li>Access controls based on least privilege.</li>
          <li>Audit logging.</li>
          <li>Regular security review.</li>
        </ul>
        <p>
          No system is perfectly secure. If a breach affects your personal data, we will notify
          you and the relevant regulators as applicable law requires.
        </p>
      </LegalSection>

      <LegalSection number={10} title="Your Rights and Choices">
        <p>
          Depending on where you live, you may have the right to:
        </p>
        <ul>
          <li>Access, correct, or delete your personal data.</li>
          <li>Receive a portable copy of your personal data.</li>
          <li>Object to or restrict certain processing.</li>
          <li>Opt out of targeted advertising, the sale of personal data, or certain profiling.</li>
          <li>Withdraw consent where we rely on it.</li>
        </ul>
        <p>
          <strong>New Jersey residents</strong> have these rights under the New Jersey Data Privacy
          Act. Residents of other U.S. states have similar rights under their state laws. Users in
          the European Economic Area, the United Kingdom, Kenya, Nigeria, and other jurisdictions
          may have rights under their local data protection laws.
        </p>
        <p>
          To exercise a right, email{" "}
          <a href={`mailto:${company.legalEmail}`}>{company.legalEmail}</a>. We will verify your
          request and respond within the time the law requires. If we deny your request, you may
          appeal by replying to our decision. We will not discriminate against you for exercising
          your rights.
        </p>
      </LegalSection>

      <LegalSection number={11} title="International Transfers">
        <p>
          ZetuTech is based in the United States, and our primary infrastructure is hosted there.
          If you use the Services from outside the United States, your information will be
          transferred to, and processed in, the United States and other countries where our
          service providers operate. Where required, we use appropriate safeguards for these
          transfers, such as standard contractual clauses.
        </p>
      </LegalSection>

      <LegalSection number={12} title="Eligibility">
        <p>
          The Services are intended for users who are at least <strong>18 years old</strong>. We do
          not knowingly collect personal data from anyone under 18. If we learn that we have done
          so, we will delete the data promptly.
        </p>
      </LegalSection>

      <LegalSection number={13} title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. If we make material changes, we
          will notify you by email or through the Services before the changes take effect, and we
          will update the effective date above.
        </p>
      </LegalSection>

      <LegalSection number={14} title="Contact Us">
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
