import { MDXRemote } from 'next-mdx-remote/rsc'
import fronrMatter from 'front-matter'
import "../post.css";
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Privacy Policy for Insta Follow Studio',
  description: 'Privacy Policy for Insta Follow Studio',
}


export default async function Page({ params }: { params: { slug: string } }) {
  return (
    <>
          <h1>Privacy Policy for Instagram Follow Studio</h1>
          <p className="text-sm text-center">Last updated: 2024-01-24</p>

          <h2>Introduction</h2>
          <p>At Instagram Follow Studio, we are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.</p>

          <h2>What Information Do We Collect?</h2>
          <p>In Short: We only collect information that you provide to us.</p>
          <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services.</p>

          <h2>How Do We Use Your Information?</h2>
          <p>In Short: We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.</p>
          <p>We use personal information collected via our extension for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>

          <h2>Will Your Information Be Shared With Anyone?</h2>
          <p>In Short: We only share information with your consent, to comply with laws, to protect your rights, or to fulfill business obligations.</p>

          <h2>How Long Do We Keep Your Information?</h2>
          <p>In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy policy unless otherwise required by law.</p>

          <h2>How Do We Keep Your Information Safe?</h2>
          <p>In Short: We aim to protect your personal information through a system of organizational and technical security measures.</p>

          <h2>Do We Collect Information From Minors?</h2>
          <p>In Short: We do not knowingly collect data from or market to children under 18 years of age.</p>

          <h2>Your Privacy Rights</h2>
          <p>In Short: You may review, change, or terminate your account at any time.</p>

          <h2>Updates To This Policy</h2>
          <p>In Short: Yes, we will update this policy as necessary to stay compliant with relevant laws.</p>
          <p>If you have questions or comments about this policy, you may contact us.</p>
    </>
  );
}