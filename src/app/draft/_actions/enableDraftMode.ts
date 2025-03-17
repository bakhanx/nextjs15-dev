'use server'
import { draftMode } from 'next/headers'

export const enableDraftMode = async () => {
  const { isEnabled } = await draftMode()
  ;(await draftMode()).enable()
  return isEnabled
}
export const disableDraftMode = async () => {
  ;(await draftMode()).disable()
}
