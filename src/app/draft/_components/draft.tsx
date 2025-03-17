'use client'
import React, { useState } from 'react'
import { disableDraftMode, enableDraftMode } from '../_actions/enableDraftMode'

const Draft = () => {
  const [newTitle, setNewTitle] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [draftTitle, setDraftTitle] = useState('')

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value)
  }

  const handlePreview = async () => {
    const isEnabledDraftMode = await enableDraftMode()
    if (isEnabledDraftMode) {
      setDraftTitle(newTitle)
      setShowModal(true)
    } else {
      alert('DrafMode 활성화 실패')
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const handleSave = async () => {
    // 서버에 제목 업데이트
    await disableDraftMode()
    alert('제목이 서버에 업데이트 되었습니다.')
    setShowModal(false)
  }

  return (
    <div>
      <input
        type="text"
        value={newTitle}
        onChange={handleTitleChange}
        placeholder="새로운 상품 제목"
      />
      <button onClick={handlePreview}>미리보기</button>

      {/* 드래프트 상태 미리보기 모달 */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>수정된 제목 미리보기</h2>
            <p>{draftTitle}</p>
            <div className="flex gap-x-2 [&>button]:border-2 [&>button]:p-1">
              <button onClick={closeModal}>취소</button>
              <button onClick={handleSave}>저장</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Draft
