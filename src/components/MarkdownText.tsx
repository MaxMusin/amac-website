import ReactMarkdown from 'react-markdown';
import { cn } from '@/utils';

interface MarkdownTextProps {
  children: string;
  className?: string;
  variant?: 'default' | 'light' | 'dark' | 'muted';
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
    default: 'text-foreground',
    light: 'text-white',
    dark: 'text-black',
    muted: 'text-white/80'
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
        variant === 'light' || variant === 'muted' ? 'prose-invert' : '',
        className
      )}
    >
      <ReactMarkdown
        components={{
          p: ({ children }) => (
            <p className={cn(variantStyles[variant], sizeStyles[size], 'mb-4')}>
              {children}
            </p>
          ),
          br: () => <br className="leading-relaxed" />,
          strong: ({ children }) => (
            <strong className={cn(
              'font-semibold',
              variant === 'light' ? 'text-white' : 
              variant === 'muted' ? 'text-white' :
              variant === 'dark' ? 'text-black' : 'text-foreground'
            )}>
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className={cn(
              'italic',
              variant === 'light' ? 'text-white/90' : 
              variant === 'muted' ? 'text-white/90' :
              variant === 'dark' ? 'text-black/80' : 'text-foreground/80'
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
