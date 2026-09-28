import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/layout/legal-page";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing use of ZetuTech LLC services and the AssignNet marketplace, including the Zero-AI Policy, Triple-Gate verification, task micro-contracts, and Escrowed Review.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      summary="These terms form a binding agreement between you and ZetuTech LLC. Please read them carefully. They explain how AssignNet works, what we expect from every participant, and how disputes are resolved."
    >
      <LegalSection number={1} title="Agreement to Terms">
        <p>
          These Terms of Service (the &ldquo;<strong>Terms</strong>&rdquo;) govern your access to
          and use of the websites, applications, and services operated by ZetuTech LLC, a New
          Jersey limited liability company (&ldquo;<strong>ZetuTech</strong>,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;), including the <strong>AssignNet</strong> marketplace (together, the
          &ldquo;<strong>Services</strong>&rdquo;).
        </p>
        <p>
          You accept these Terms by creating an account or using the Services. If you do not
          agree, do not use the Services. Our <Link href="/privacy">Privacy Policy</Link> is part
          of these Terms and explains how we handle personal data.
        </p>
      </LegalSection>

      <LegalSection number={2} title="Eligibility and Accounts">
        <ul>
          <li>You must be at least 18 years old and able to form a binding contract.</li>
          <li>
            You must give accurate information and keep it up to date. Each person may hold only
            one account, unless we expressly authorize otherwise.
          </li>
          <li>
            You are responsible for keeping your credentials confidential and for all activity
            under your account. Tell us immediately about any unauthorized use.
          </li>
          <li>
            If you use the Services on behalf of an organization, you confirm that you have the
            authority to bind that organization to these Terms.
          </li>
        </ul>
      </LegalSection>

      <LegalSection number={3} title="The AssignNet Marketplace">
        <p>
          AssignNet is a venue where clients (&ldquo;<strong>Clients</strong>&rdquo;) post tasks
          and verified specialists (&ldquo;<strong>Verified Scholars</strong>&rdquo;) bid to
          perform them. ZetuTech provides the platform, the verification and integrity
          infrastructure, and the payment workflow.
        </p>
        <p>
          Unless we expressly say otherwise, ZetuTech is not a party to the engagements between
          Clients and Verified Scholars. Verified Scholars are independent contractors, not
          employees or agents of ZetuTech. We do not guarantee any particular outcome, grade, or
          result from an engagement.
        </p>
      </LegalSection>

      <LegalSection number={4} title="Zero-AI Policy">
        <p>
          AssignNet exists to deliver <strong>verifiable human execution</strong>. Every
          deliverable must be the original work of the Verified Scholar who accepted the task.
        </p>
        <ul>
          <li>
            Verified Scholars may not use generative AI tools to produce, paraphrase, or
            substantially rewrite any part of a deliverable. This covers large language models and
            AI writing, coding, or image generators.
          </li>
          <li>
            Ordinary tools that do not generate substantive content are allowed. Examples include
            spell-checkers, reference managers, compilers, calculators, and search engines, unless
            the task specification forbids them.
          </li>
          <li>
            A Client may not ask a Verified Scholar to use generative AI. Any such request is a
            breach of these Terms.
          </li>
        </ul>
        <p>
          Violations may lead to any of the following:
        </p>
        <ul>
          <li>Rejection of the deliverable.</li>
          <li>Forfeiture of the escrowed payment for that task.</li>
          <li>Loss of Verified Scholar status.</li>
          <li>Permanent removal from the Services.</li>
        </ul>
      </LegalSection>

      <LegalSection number={5} title="Triple-Gate Verification Standards">
        <p>Participation in AssignNet depends on passing three verification gates:</p>
        <ul>
          <li>
            <strong>Gate 1: Identity.</strong> Verified Scholars must complete identity
            verification, including a government ID check and a liveness check. This confirms that
            each account belongs to one real, unique person.
          </li>
          <li>
            <strong>Gate 2: Competence.</strong> Verified Scholars must provide evidence of their
            credentials and may be required to pass skills assessments before they can bid in a
            given subject area.
          </li>
          <li>
            <strong>Gate 3: Deliverable Integrity.</strong> Every submission goes through
            automated, asynchronous integrity scanning for plagiarism and AI-generated content. It
            is also checked for structural variance against the task specification. A submission
            that fails this gate cannot move to review until the failure is fixed.
          </li>
        </ul>
        <p>
          We may update these standards, re-verify existing accounts, or suspend bidding
          privileges while a verification is pending. Passing a gate is not an endorsement or
          guarantee by ZetuTech of any user&rsquo;s work.
        </p>
      </LegalSection>

      <LegalSection number={6} title="Task Bidding and Micro-Contracts">
        <p>
          When a Client accepts a Verified Scholar&rsquo;s bid, the two form a binding agreement
          for that task (a &ldquo;<strong>Micro-Contract</strong>&rdquo;). The Micro-Contract
          consists of:
        </p>
        <ul>
          <li>The task specification.</li>
          <li>The accepted bid, including price, milestones, and deadlines.</li>
          <li>Any written amendments both parties agree to on the platform.</li>
          <li>These Terms.</li>
        </ul>
        <ul>
          <li>
            A bid is a firm offer. It stays open until the Client accepts it, the Scholar withdraws
            it before acceptance, or it expires.
          </li>
          <li>
            Once a bid is accepted, both parties must perform in good faith. Changes to scope,
            price, or deadlines take effect only when both parties accept them on the platform.
          </li>
          <li>
            If a Verified Scholar abandons a task or repeatedly misses deadlines, the Client may
            cancel the Micro-Contract. The Scholar&rsquo;s standing may be affected. Any escrowed
            funds for undelivered milestones are returned to the Client.
          </li>
          <li>
            Clients and Verified Scholars must communicate and transact only through AssignNet for
            any engagement that began on the platform. Taking payment for such an engagement
            outside the platform is prohibited.
          </li>
        </ul>
      </LegalSection>

      <LegalSection number={7} title="Escrowed Review and Payments">
        <p>
          All engagements are funded in advance and settled through our Escrowed Review process:
        </p>
        <ul>
          <li>
            <strong>Funding.</strong> When a Micro-Contract is formed, the Client funds the first
            milestone, or the whole task. The funds are held by our third-party payment processors
            (such as Stripe or Paystack) until they are released or refunded.
          </li>
          <li>
            <strong>Submission.</strong> The Verified Scholar submits the deliverable. It must
            pass Gate 3 before it can be reviewed.
          </li>
          <li>
            <strong>Review Window.</strong> The Client has <strong>five (5) calendar days</strong>{" "}
            to accept the deliverable, ask for revisions within the agreed scope, or open a dispute.
            If the Client takes no action within that window, the deliverable is accepted
            automatically.
          </li>
          <li>
            <strong>Release.</strong> When the deliverable is accepted, the escrowed funds, minus
            applicable platform fees, are released to the Verified Scholar.
          </li>
          <li>
            <strong>Disputes.</strong> Disputed funds stay in escrow while ZetuTech reviews the
            Micro-Contract, the platform messages, and the integrity reports. We will release,
            refund, or split the funds. Our decision is final as far as platform funds are
            concerned.
          </li>
        </ul>
        <p>
          ZetuTech is not a bank or a licensed escrow agent. &ldquo;Escrow&rdquo; describes how
          funds are held by our payment processors pending release. Platform fees are shown before
          you commit to a transaction. You are responsible for any taxes that apply to amounts you
          pay or receive.
        </p>
      </LegalSection>

      <LegalSection number={8} title="Academic Integrity and Acceptable Use">
        <p>
          You are responsible for making sure that your use of the Services complies with the
          honor code, academic integrity policy, or employment rules of any institution you belong
          to. You may not use the Services to submit someone else&rsquo;s work as your own where
          that is prohibited. You also agree not to:
        </p>
        <ul>
          <li>Break any law, or infringe any intellectual property or privacy right.</li>
          <li>Impersonate anyone or misrepresent your identity, credentials, or affiliation.</li>
          <li>Manipulate reviews, bids, or ratings, or create duplicate or fake accounts.</li>
          <li>
            Try to evade, reverse engineer, or interfere with integrity scanning, verification,
            or security controls.
          </li>
          <li>Upload malware or scrape the Services without our written permission.</li>
          <li>Harass, threaten, or discriminate against other users.</li>
        </ul>
      </LegalSection>

      <LegalSection number={9} title="Intellectual Property">
        <p>
          <strong>Deliverables.</strong> Unless the Micro-Contract says otherwise, ownership of a
          deliverable transfers to the Client when the escrowed funds for it are released in
          full. Until then, the Verified Scholar keeps ownership.
        </p>
        <p>
          <strong>Your content.</strong> You grant ZetuTech a non-exclusive, worldwide,
          royalty-free license to host, process, scan, and display content you submit. This license
          covers only what we need to operate, secure, and improve the Services, including sending
          deliverables to integrity-scanning providers.
        </p>
        <p>
          <strong>Our platform.</strong> ZetuTech and its licensors own the Services, including
          all software, design, trademarks, and the AssignNet name. These rights are protected by
          law. These Terms do not grant you any rights in them except the limited right to use the
          Services.
        </p>
      </LegalSection>

      <LegalSection number={10} title="Suspension and Termination">
        <p>
          You may close your account at any time once your open Micro-Contracts are settled. We
          may suspend or end your access, withhold release of disputed funds, or remove content if
          we reasonably believe you have broken these Terms or created risk or legal exposure for
          ZetuTech or other users.
        </p>
        <p>
          Sections that by their nature should survive termination will survive it. These include
          payment obligations, intellectual property, disclaimers, limitation of liability,
          indemnification, and governing law.
        </p>
      </LegalSection>

      <LegalSection number={11} title="Disclaimers">
        <p>
          THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE.&rdquo; TO THE
          FULLEST EXTENT PERMITTED BY LAW, ZETUTECH DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED,
          INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          INTEGRITY SCANS AND VERIFICATION CHECKS ARE RISK-REDUCTION MEASURES, NOT GUARANTEES.
          ZETUTECH DOES NOT WARRANT THAT ANY DELIVERABLE IS ERROR-FREE OR FIT FOR YOUR PURPOSE.
        </p>
      </LegalSection>

      <LegalSection number={12} title="Limitation of Liability">
        <p>
          TO THE FULLEST EXTENT PERMITTED BY LAW, ZETUTECH WILL NOT BE LIABLE FOR ANY INDIRECT,
          INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS,
          DATA, OR GOODWILL. ZETUTECH&rsquo;S TOTAL LIABILITY FOR ANY CLAIM ARISING FROM THE
          SERVICES WILL NOT EXCEED THE GREATER OF (A) THE PLATFORM FEES YOU PAID ZETUTECH IN THE
          TWELVE (12) MONTHS BEFORE THE CLAIM, OR (B) ONE HUNDRED U.S. DOLLARS (US$100).
        </p>
      </LegalSection>

      <LegalSection number={13} title="Indemnification">
        <p>
          You agree to defend, indemnify, and hold harmless ZetuTech and its members, officers,
          employees, and agents from any claims, losses, and expenses, including reasonable
          attorneys&rsquo; fees, arising from:
        </p>
        <ul>
          <li>Your use of the Services.</li>
          <li>Your content or deliverables.</li>
          <li>Your breach of these Terms.</li>
          <li>Your violation of any law or third-party right.</li>
        </ul>
      </LegalSection>

      <LegalSection number={14} title="Governing Law and Venue">
        <p>
          These Terms, and any dispute arising from them or from the Services, are governed by
          the laws of the <strong>State of New Jersey</strong>, without regard to its
          conflict-of-laws rules. Applicable U.S. federal law also applies.
        </p>
        <p>
          You and ZetuTech agree that any legal action will be brought exclusively in one of two
          venues:
        </p>
        <ul>
          <li>The state courts located in Somerset County, New Jersey.</li>
          <li>The United States District Court for the District of New Jersey.</li>
        </ul>
        <p>
          Both parties consent to the personal jurisdiction of those courts. Either party may
          still seek injunctive relief in any court of competent jurisdiction to protect its
          intellectual property or confidential information.
        </p>
        <p>
          Before filing any claim, each party agrees to try to resolve the dispute informally for
          at least thirty (30) days after written notice.
        </p>
      </LegalSection>

      <LegalSection number={15} title="Changes to These Terms">
        <p>
          We may change these Terms from time to time. If we make material changes, we will give
          at least fifteen (15) days&rsquo; notice by email or through the Services before they
          take effect. Continuing to use the Services after that means you accept the updated
          Terms. Micro-Contracts formed before a change remain governed by the Terms in effect
          when they were formed.
        </p>
      </LegalSection>

      <LegalSection number={16} title="Miscellaneous">
        <p>
          These Terms and the Privacy Policy are the entire agreement between you and ZetuTech
          about the Services. The following also apply:
        </p>
        <ul>
          <li>If any provision is found unenforceable, the rest of these Terms stays in effect.</li>
          <li>If we do not enforce a provision, we have not waived it.</li>
          <li>You may not assign these Terms without our consent.</li>
          <li>We may assign these Terms in connection with a merger, acquisition, or sale of assets.</li>
        </ul>
      </LegalSection>

      <LegalSection number={17} title="Contact">
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
