import React from "react";
import Resume1 from "../assets/Resume1.pdf";

function Resume() {
  return (
    <main className="container mx-auto max-width">
        <section>
      <iframe
        src={Resume1}
        title="PDF Viewer"
        width="100%"
        height="800px"
        style={{ border: 'none' }}
        >
        Your browser does not support PDFs.
        </iframe>
        </section>
    </main>
  );
}

export default Resume;