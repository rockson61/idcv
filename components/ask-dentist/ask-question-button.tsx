import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'

interface AskQuestionButtonProps {
  className?: string
  size?: 'default' | 'sm' | 'lg'
  variant?: 'default' | 'outline'
}

export function AskQuestionButton({ 
  className = '', 
  size = 'lg',
  variant = 'default'
}: AskQuestionButtonProps) {
  return (
    <Link href="/ask-the-dentist/submit">
      <Button
        size={size}
        variant={variant}
        className={`${variant === 'default' 
          ? 'bg-white hover:bg-gray-100 text-teal-600' 
          : 'border-white text-white hover:bg-white hover:text-teal-600'
        } ${className}`}
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        Ask a Question
      </Button>
    </Link>
  )
}
