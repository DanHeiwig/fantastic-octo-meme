import React from 'react';
import { Footer } from '../Footer/Footer';

export function Disclaimers() {
  return (
    <div className="space-y-4 mt-6">
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
        <p className="text-sm text-amber-800">
          <strong>Note:</strong> MILPER Messages expire 365 days from issuance. Always verify current guidance with message proponents after expiration.
        </p>
      </div>
      
      <div className="bg-gray-100 p-4 rounded text-xs leading-relaxed text-gray-700">
        <h3 className="font-bold mb-2">System Usage Notice</h3>
        <p className="mb-2">
          The use of this US government or USG interest computer system constitutes consent for authorized monitoring at all times. This is a USG interest computer system. This system and related equipment are intended for the commercial communication, transmission, processing and storage of official USG and other authorized information only.
        </p>
        <p className="mb-2">
          This USG interest computer system is subject to monitoring at all times to ensure proper functioning of equipment and systems, including security systems and devices, and to prevent, detect and deter violations of status and security regulations and other unauthorized use of the system.
        </p>
        <p className="mb-2">
          Communications using or data stored on this system are not private, are subject to routine monitoring and interception and searching and search and may be disclosed or used for any authorized purpose if monitoring of This USG interest computer system reveals possible evidence of violation of criminal status.
        </p>
        <p className="mb-2">
          This evidence and any other related information, including identification information about the user, may be provided to law enforcement officials if monitoring, if monitoring of this USG interest, computer system reveals violations of security regulations or other unauthorized use that information and other related information, including identification information about the user, may be used appropriate administrative or disciplinary action.
        </p>
      </div>

      <Footer />
    </div>
  );
}