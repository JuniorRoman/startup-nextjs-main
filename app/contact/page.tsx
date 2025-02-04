import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact"
        description="Jeśli masz jakieś pytania, sugestie lub potrzebujesz pomocy, skorzystaj z dogodnych dla siebie metod kontaktu."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
