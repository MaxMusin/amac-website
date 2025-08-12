import React from 'react';
import ReactMarkdown from 'react-markdown';
import { cn } from '@/utils';

interface MarkdownTextProps {
  children: string;
  className?: string;
  variant?: 'default' | 'muted';
  size?: 'sm' | 'base' | 'lg' | 'xl';
}

const MarkdownText = ({ 
  children,   
  className, 
  variant = 'default',
  size = 'base'
}: MarkdownTextProps) => {
  // Convert single newlines to double spaces + newline (markdown line break syntax)
  // Keep double newlines as paragraph breaks
  const processedContent = children
    .replace(/\\n\\n/g, '\n\n') // Convert escaped double newlines to real paragraph breaks
    .replace(/\\n/g, '  \n') // Convert escaped single newlines to markdown line breaks
    .replace(/(?<!\n)\n(?!\n)/g, '  \n'); // Single newlines become line breaks (two spaces + newline)
  

  
  const variantStyles = {
    default: 'text-secondary',
    muted: 'text-muted-foreground'
  };

  const variantHeadingStyles = {
    default: 'text-muted',
    muted: 'text-muted-foreground'
  };

  const sizeStyles = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  return (
    <div 
      className={cn(
        'prose max-w-none',
        variantStyles[variant],
        sizeStyles[size],
        variant === 'muted' ? 'prose-invert' : '',
        className
      )}
    >
      <ReactMarkdown
        components={{
          p: function ParagraphComponent({ children }) {
            return (
              <p className={cn(variantStyles[variant], sizeStyles[size], 'mb-4')}>
                {children}
              </p>
            );
          },
          br: () => <br className="leading-relaxed" />,
          h1: ({ children }) => (
            <h1 className={cn(
              'text-3xl font-bold mb-4 mt-6',
              variantHeadingStyles[variant]
            )}>
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className={cn(
              'text-2xl font-medium mb-4 mt-6',
              variantHeadingStyles[variant]
            )}>
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className={cn(
              'text-xl font-medium mb-4',
              variantHeadingStyles[variant]
            )}>
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className={cn(
              'text-lg font-semibold mb-2 mt-3',
              variantHeadingStyles[variant]
            )}>
              {children}
            </h4>
          ),
          strong: ({ children }) => (
            <strong className={cn(
              'font-semibold',
              variant === 'muted' ? 'text-white' :
              'text-foreground'
            )}>
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className={cn(
              'italic',
              variant === 'muted' ? 'text-white/90' : 'text-foreground/80'
            )}>
              {children}
            </em>
          ),
          ul: ({ children }) => (
            <ul className={cn(
              'list-disc ml-6 mb-4 space-y-1',
              '[&_ul]:list-[circle] [&_ul]:ml-4 [&_ul]:mb-0 [&_ul]:mt-0',
              '[&_ul_ul]:list-[square] [&_ul_ul]:ml-4 [&_ul_ul]:mb-0 [&_ul_ul]:mt-0',
              variantStyles[variant]
            )}>
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className={cn(
              'list-decimal ml-6 mb-4 mt-2 space-y-1',
              '[&_ol]:list-[lower-alpha] [&_ol]:ml-4 [&_ol]:mb-0 [&_ol]:mt-0',
              '[&_ol_ol]:list-[lower-roman] [&_ol_ol]:ml-4 [&_ol_ol]:mb-0 [&_ol_ol]:mt-0',
              variantStyles[variant]
            )}>
              {children}
            </ol>
          ),
          li: ({ children }) => {
            // Process children to remove paragraph wrappers
            const processedChildren = React.Children.map(children, (child) => {
              // If child is a paragraph element, unwrap it
              if (React.isValidElement(child) && typeof child.type === 'function' && child.type.name === 'ParagraphComponent') {
                return (child as React.ReactElement<{ children: React.ReactNode }>).props.children;
              }
              return child;
            });
            
            return (
              <li className={cn('mb-1', variantStyles[variant])}>
                {processedChildren}
              </li>
            );
          }
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownText;
