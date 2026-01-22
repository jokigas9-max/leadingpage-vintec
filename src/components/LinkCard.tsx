import React from 'react';
import { LinkItem } from '../types';
import { ShopeeIcon, LynkIcon, WhatsappIcon } from './Icons';

interface LinkCardProps {
  link: LinkItem;
}

const LinkCard: React.FC<LinkCardProps> = ({ link }) => {
  const getVariantClasses = () => {
    const base = 'border-2 shadow-lg';
    const darkBase = 'dark:bg-white dark:text-slate-950 dark:hover:bg-slate-50 dark:active:bg-slate-100 dark:border-slate-200 dark:border-2';
    
    switch (link.variant) {
      case 'orange':
        return `${base} bg-orange-500 text-white border-orange-400 hover:bg-orange-600 active:bg-orange-700 ${darkBase} dark:border-orange-400/40 dark:shadow-orange-500/40`;
      case 'green':
        return `${base} bg-emerald-500 text-white border-emerald-400 hover:bg-emerald-600 active:bg-emerald-700 ${darkBase} dark:border-emerald-400/40 dark:shadow-emerald-500/40`;
      case 'light-green':
        return `${base} bg-[#25D366] text-white border-[#20bd5a] hover:bg-[#20bd5a] active:bg-[#1da850] ${darkBase} dark:border-green-400/40 dark:shadow-green-500/40`;
      case 'light-blue':
        return `${base} bg-sky-500 text-white border-sky-400 hover:bg-sky-600 active:bg-sky-700 ${darkBase} dark:border-sky-400/40 dark:shadow-sky-500/40`;
      default:
        return `${base} bg-white text-slate-800 border-slate-200 hover:border-blue-300 dark:bg-slate-800 dark:text-white dark:border-slate-700`;
    }
  };

  const getCodeColorClass = () => {
    // Keeping the brightness from previous request but adjusting for thinner weight
    return 'text-white/45 dark:text-sky-400/80 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] dark:drop-shadow-[0_0_12px_rgba(56,189,248,0.5)]';
  };

  const codeSnippets = [
    "const ai = new GenAI();",
    "await model.generate();",
    "fn transform(data) => {",
    "return response.json();",
    "<div>{children}</div>",
    "interface Profile {",
    "  name: string;",
    "  active: boolean;",
    "}",
    "npm install @vintec/ai",
    "git commit -m 'feat: ml'",
    "while(learning) { ... }",
    "01101011 01100101",
    "export default App;",
    "import { useEffect } from 'react';",
    "const [state, setState] = useState();"
  ];

  const CodeBackground = () => (
    <div className={`absolute inset-0 z-0 opacity-100 transition-opacity duration-500 overflow-hidden pointer-events-none code-animation-overlay select-none`}>
      <div className={`flex flex-col gap-1 text-[10px] font-light font-mono whitespace-nowrap leading-tight animate-scroll-code ${getCodeColorClass()}`}>
        {[...Array(3)].map((_, i) => (
          <React.Fragment key={i}>
            {codeSnippets.map((snippet, idx) => (
              <div key={idx} className={`${idx % 2 === 0 ? 'pl-4' : 'pl-10'}`}>
                {snippet}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`relative w-full ${link.highlighted ? 'highlight-glow' : ''}`}>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          group relative w-full flex items-center justify-center p-4 rounded-2xl
          transition-all duration-300 ease-out transform overflow-hidden
          shadow-lg active-hold-glow
          
          /* Hover State */
          hover:scale-[1.015] hover:-translate-y-0.5 hover:brightness-105
          
          /* Hold/Active State */
          active:scale-[0.97] active:translate-y-0.5 active:brightness-95
          active:duration-100
          
          ${getVariantClasses()}
        `}
      >
        <CodeBackground />

        <div className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
        </div>

        <div className="absolute inset-0 z-10 rounded-2xl bg-indigo-900/0 group-active:bg-indigo-900/5 transition-colors duration-200 pointer-events-none"></div>

        <div className="absolute inset-0 z-10 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        
        <div className="relative flex items-center gap-4 z-20 transition-transform duration-200 group-hover:scale-[1.02] group-active:scale-[0.98]">
          {link.icon && (
            <div className="w-6 h-6 shrink-0 flex items-center justify-center filter drop-shadow-sm transition-transform duration-200 group-hover:scale-110 group-active:scale-95">
              {renderIcon(link.icon)}
            </div>
          )}
          
          <span className="font-extrabold text-base md:text-lg tracking-tight text-center select-none drop-shadow-sm">
            {link.title}
          </span>
        </div>
        
        <div className="absolute right-6 z-20 flex items-center justify-center h-full">
          <span className={`
            transition-all duration-300 transform translate-x-2 
            opacity-0 group-hover:opacity-100 group-hover:translate-x-0
          `}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </a>
    </div>
  );
};

const renderIcon = (icon?: string) => {
  switch (icon) {
    case 'shopee': return <ShopeeIcon />;
    case 'lynkid': return <LynkIcon />;
    case 'whatsapp': return <WhatsappIcon />;
    default: return null;
  }
};

export default LinkCard;