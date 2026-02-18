'use client';

import { useState } from 'react';
import styles from './CodeBlock.module.css';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = 'c' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className={styles.codeBlock}>
      <div className={styles.codeHeader}>
        <span className={styles.language}>{language}</span>
        <button 
          className={`${styles.copyButton} ${copied ? styles.copied : ''}`}
          onClick={copyToClipboard}
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <span className={styles.icon}>✓</span>
              Copied!
            </>
          ) : (
            <>
              <span className={styles.icon}>📋</span>
              Copy
            </>
          )}
        </button>
      </div>
      <pre><code>{code}</code></pre>
    </div>
  );
}
