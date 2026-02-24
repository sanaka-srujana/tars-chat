import { useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'

export function useGlobalTypingIndicators(currentUserId: string) {
  // Use a single query to get all typing indicators for all conversations
  const typingByConversation = useQuery(api.typing.getAllTypingIndicators, { userId: currentUserId }) || {}
  return typingByConversation
}
