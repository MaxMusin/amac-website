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
    .replace(/\n\n/g, '\n\n') // Keep paragraph breaks
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
          p: ({ children }) => (
            <p className={cn(variantStyles[variant], sizeStyles[size], 'mb-6')}>
              {children}
            </p>
          ),
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
              'text-2xl font-bold mb-3 mt-5',
              variantHeadingStyles[variant]
            )}>
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className={cn(
              'text-2xl font-medium mb-4',
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
              'list-disc list-inside space-y-1 my-4',
              variantStyles[variant]
            )}>
              {children}
            </ul>
          ),
          li: ({ children }) => (
            <li className={cn('mb-1', variantStyles[variant])}>
              {children}
            </li>
          )
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownText;
