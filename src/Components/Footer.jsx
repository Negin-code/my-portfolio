import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { HiOutlineClipboardCopy, HiOutlineClipboardCheck } from 'react-icons/hi';
import React, { useState } from 'react';

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = 'iamneginasem@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer >
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 bg-[#493B32] lg:col-start-2 md:col-start-2 col-start-1 bg-[#493B32] text-[#FFF7F2] py-15 px-10 lg:px-0">
        <div className="col-span-4 md:col-span-4 lg:col-span-5 lg:col-start-2 text-left">
          <h2 className="mb-5 font-tan text-2xl md:text-3xl lg:text-4xl">Let's Work Together</h2>
          <p className="col-span-5 col-start-1 text-left mb-10 leading-8 font-open text-lg ">
            I'm always excited to team up with visionary organizations or simply chat about design ideas. Want to brainstorm ideas together? I'd love to chat! Feel free to reach out at{' '}
            {/* Enhanced Email Section */}
            <span className="inline-flex items-center gap-2 align-middle">
              <a 
                href={`mailto:${email}`}
                className="relative inline-flex items-center gap-2 px-3 py-1 bg-[#FFF7F2]/10 hover:bg-[#FFF7F2]/20 rounded-full border border-[#FFF7F2]/30 hover:border-[#FFF7F2]/50 transition-all duration-300"
              >
                <FaEnvelope className="text-xs" />
                <span className="font-medium">{email}</span>
              </a>
              
              <button
                onClick={handleCopyEmail}
                className="relative p-1.5 bg-[#FFF7F2]/10 hover:bg-[#FFF7F2]/20 rounded-full border border-[#FFF7F2]/30 hover:border-[#FFF7F2]/50 transition-all duration-300 group"
                aria-label="Copy email to clipboard"
              >
                {copied ? (
                  <HiOutlineClipboardCheck className="text-sm text-[#90EE90]" />
                ) : (
                  <HiOutlineClipboardCopy className="text-sm" />
                )}
                
                {/* Tooltip */}
                <span className={`absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-[#FFF7F2] text-[#493B32] rounded whitespace-nowrap transition-all duration-200 pointer-events-none ${
                  copied ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
                }`}>
                  {copied ? 'Copied!' : 'Copy email'}
                </span>
              </button>
            </span>
          </p>
        </div>
        
        <div className="col-span-4 md:col-span-2 lg:col-span-2 lg:col-start-10 flex justify-evenly items-end pr-0 mr-0">
          <a 
            href="https://github.com/Negin-code" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-120"
            aria-label="GitHub"
          >
            <FaGithub size={32} />
          </a>
          <a 
            href={`mailto:${email}`}
            className="transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-120"
            aria-label="Email"
          >
            <FaEnvelope size={32} />
          </a>
          <a 
            href="https://www.linkedin.com/in/neginasem/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-120"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={32} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 