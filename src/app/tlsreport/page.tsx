export default function TLSReportsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a2540] to-[#00b4d8] text-gray-100">
      <div className="flex flex-col items-center justify-center h-screen px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          TLS Reports Page
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-6">
          Monitor and analyze Transport Layer Security (TLS) connections for your email domains.
          Gain insights into secure message delivery, detect misconfigurations, and ensure compliance
          with modern email security standards using SMTP TLS Reporting (TLS-RPT).
        </p>
        <ul className="text-gray-200 list-disc list-inside text-left max-w-xl mb-8">
          <li>View daily TLS handshake success/failure reports</li>
          <li>Track downgrade or certificate mismatch issues</li>
          <li>Get notified about potential misconfigurations</li>
        </ul>
        <a
          href="#"
          className="bg-gray-200 text-[#0a2540] px-6 py-3 rounded-md font-medium hover:bg-gray-300 transition"
        >
          View Reports
        </a>
      </div>
    </main>
  );
}
