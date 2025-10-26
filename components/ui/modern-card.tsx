import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

interface ModernCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined' | 'glass';
  hover?: boolean;
}

const ModernCard = forwardRef<HTMLDivElement, ModernCardProps>(
  ({ className, variant = 'default', hover = false, ...props }, ref) => {
    const variants = {
      default: 'bg-white border border-neutral-200 shadow-sm',
      elevated: 'bg-white border border-neutral-200 shadow-lg',
      outlined: 'bg-transparent border border-neutral-200',
      glass: 'bg-white/80 backdrop-blur-lg border border-white/20 shadow-lg',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl transition-all duration-300',
          variants[variant],
          hover && 'hover:shadow-xl hover:-translate-y-1',
          className
        )}
        {...props}
      />
    );
  }
);

ModernCard.displayName = 'ModernCard';

interface ModernCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const ModernCardHeader = forwardRef<HTMLDivElement, ModernCardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    />
  )
);

ModernCardHeader.displayName = 'ModernCardHeader';

interface ModernCardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const ModernCardTitle = forwardRef<HTMLParagraphElement, ModernCardTitleProps>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-xl font-semibold leading-none tracking-tight text-neutral-900', className)}
      {...props}
    />
  )
);

ModernCardTitle.displayName = 'ModernCardTitle';

interface ModernCardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const ModernCardDescription = forwardRef<HTMLParagraphElement, ModernCardDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-neutral-600', className)}
      {...props}
    />
  )
);

ModernCardDescription.displayName = 'ModernCardDescription';

interface ModernCardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const ModernCardContent = forwardRef<HTMLDivElement, ModernCardContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  )
);

ModernCardContent.displayName = 'ModernCardContent';

interface ModernCardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const ModernCardFooter = forwardRef<HTMLDivElement, ModernCardFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center p-6 pt-0', className)}
      {...props}
    />
  )
);

ModernCardFooter.displayName = 'ModernCardFooter';

export {
  ModernCard,
  ModernCardHeader,
  ModernCardFooter,
  ModernCardTitle,
  ModernCardDescription,
  ModernCardContent,
};
