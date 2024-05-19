import { MDXRemote } from "next-mdx-remote/rsc";
import fronrMatter from "front-matter";
import "../post.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy for Insta Follow Studio",
  description: "Privacy Policy for Insta Follow Studio",
};

export default async function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <h1>Terms of Use for Instagram Follow Studio</h1>
      <p className="text-sm text-center">Last updated: 2024-01-24</p>

      <h2>1. Introduction</h2>
      <p>
        Welcome to Instagram Follow Studio! These Terms of Use govern your use
        of Instagram Follow Studio and provide information about the Instagram
        Follow Studio Service, outlined below.
      </p>

      <h2>2. The Instagram Follow Studio Service</h2>
      <p>
        We agree to provide you with the Instagram Follow Studio Service. The
        Service includes all of the Instagram Follow Studio products, features,
        applications, services, technologies, and software that we provide to
        advance Instagram Follow Studio's mission.
      </p>

      <h2>3. Your Commitments</h2>
      <p>
        In return for our commitment to provide the Service, we require you to
        make the below commitments to us.
      </p>

      <h3>3.1 Who Can Use Instagram Follow Studio</h3>
      <p>You must be at least 13 years old to use Instagram Follow Studio.</p>

      <h3>3.2 What You Can't Do</h3>
      <p>
        You can't do anything unlawful, misleading, or fraudulent or for an
        illegal or unauthorized purpose.
      </p>

      <h2>4. Permissions You Give to Us</h2>
      <p>
        As part of our agreement, you also give us permissions that we need to
        provide the Service.
      </p>

      <h2>5. Additional Rights We Retain</h2>
      <p>
        If you select a username or similar identifier for your account, we may
        change it if we believe it is appropriate or necessary.
      </p>

      <h2>6. Disputes</h2>
      <p>
        We try to provide clear rules so that we can limit or hopefully avoid
        disputes between you and us.
      </p>

      <h2>7. Updating our Terms</h2>
      <p>
        We may change our Service and policies, and we may need to make changes
        to these Terms so that they accurately reflect our Service and policies.
      </p>

      <h2>8. Other</h2>
      <p>
        These Terms make up the entire agreement between you and Instagram
        Follow Studio regarding your use of our Service.
      </p>
    </>
  );
}
