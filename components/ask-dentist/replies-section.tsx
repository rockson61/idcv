'use client'

import { Reply } from '@/lib/types/ask-dentist'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ThumbsUp, ThumbsDown, Reply as ReplyIcon, User, Calendar, MessageCircle } from 'lucide-react'
import { useState } from 'react'

interface RepliesSectionProps {
  replies?: Reply[]
  questionId: string
}

export function RepliesSection({ replies, questionId }: RepliesSectionProps) {
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, number>>({})
  const [showReplyForm, setShowReplyForm] = useState(false)

  // Ensure replies is always an array
  const safeReplies = replies || []

  const handleVote = (replyId: string, isHelpful: boolean) => {
    setHelpfulVotes(prev => ({
      ...prev,
      [replyId]: (prev[replyId] || 0) + (isHelpful ? 1 : -1)
    }))
  }

  const groupedReplies = safeReplies.reduce((acc, reply) => {
    if (reply.parentId) {
      if (!acc[reply.parentId]) {
        acc[reply.parentId] = []
      }
      acc[reply.parentId].push(reply)
    } else {
      acc[reply.id] = [reply]
    }
    return acc
  }, {} as Record<string, Reply[]>)

  const topLevelReplies = safeReplies.filter(reply => !reply.parentId)

  if (topLevelReplies.length === 0) {
    return (
      <ModernCard className="p-6">
        <ModernCardHeader>
          <ModernCardTitle className="text-lg">Conversation</ModernCardTitle>
        </ModernCardHeader>
        <ModernCardContent>
          <div className="text-center py-8">
            <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">No replies yet. Be the first to join the conversation!</p>
            <Button 
              onClick={() => setShowReplyForm(true)}
              className="bg-teal-600 hover:bg-teal-700"
            >
              <ReplyIcon className="w-4 h-4 mr-2" />
              Add Reply
            </Button>
          </div>
        </ModernCardContent>
      </ModernCard>
    )
  }

  return (
    <ModernCard className="p-6">
      <ModernCardHeader>
        <div className="flex items-center justify-between">
          <ModernCardTitle className="text-lg">
            Conversation ({safeReplies.length} replies)
          </ModernCardTitle>
          <Button 
            onClick={() => setShowReplyForm(true)}
            className="bg-teal-600 hover:bg-teal-700"
          >
            <ReplyIcon className="w-4 h-4 mr-2" />
            Add Reply
          </Button>
        </div>
      </ModernCardHeader>
      <ModernCardContent>
        <div className="space-y-6">
          {topLevelReplies.map((reply) => (
            <div key={reply.id} className="space-y-4">
              {/* Main Reply */}
              <div className="border-l-4 border-teal-200 pl-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600 font-bold text-sm">
                      {reply.authorType === 'dentist' ? 'DR' : reply.author.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-semibold text-gray-900">{reply.author}</span>
                      <Badge 
                        variant={reply.authorType === 'dentist' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {reply.authorType === 'dentist' ? 'Dentist' : 'Patient'}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        {new Date(reply.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-3">{reply.content}</p>
                    <div className="flex items-center space-x-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleVote(reply.id, true)}
                        className="text-gray-600 hover:text-teal-600"
                      >
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        {reply.helpfulVotes + (helpfulVotes[reply.id] || 0)}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleVote(reply.id, false)}
                        className="text-gray-600 hover:text-red-600"
                      >
                        <ThumbsDown className="w-4 h-4 mr-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nested Replies */}
              {groupedReplies[reply.id] && groupedReplies[reply.id].length > 0 && (
                <div className="ml-8 space-y-3">
                  {groupedReplies[reply.id].map((nestedReply) => (
                    <div key={nestedReply.id} className="border-l-2 border-gray-200 pl-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-gray-600 font-bold text-xs">
                            {nestedReply.authorType === 'dentist' ? 'DR' : nestedReply.author.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-medium text-gray-900 text-sm">{nestedReply.author}</span>
                            <Badge 
                              variant={nestedReply.authorType === 'dentist' ? 'default' : 'secondary'}
                              className="text-xs"
                            >
                              {nestedReply.authorType === 'dentist' ? 'Dentist' : 'Patient'}
                            </Badge>
                            <span className="text-xs text-gray-500">
                              {new Date(nestedReply.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed mb-2">{nestedReply.content}</p>
                          <div className="flex items-center space-x-3">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleVote(nestedReply.id, true)}
                              className="text-gray-600 hover:text-teal-600 text-xs"
                            >
                              <ThumbsUp className="w-3 h-3 mr-1" />
                              {nestedReply.helpfulVotes + (helpfulVotes[nestedReply.id] || 0)}
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleVote(nestedReply.id, false)}
                              className="text-gray-600 hover:text-red-600 text-xs"
                            >
                              <ThumbsDown className="w-3 h-3 mr-1" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Reply Form */}
        {showReplyForm && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">Add Your Reply</h4>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg resize-none"
              rows={4}
              placeholder="Share your experience or ask a follow-up question..."
            />
            <div className="flex justify-end space-x-2 mt-3">
              <Button
                variant="outline"
                onClick={() => setShowReplyForm(false)}
              >
                Cancel
              </Button>
              <Button className="bg-teal-600 hover:bg-teal-700">
                Post Reply
              </Button>
            </div>
          </div>
        )}
      </ModernCardContent>
    </ModernCard>
  )
}
