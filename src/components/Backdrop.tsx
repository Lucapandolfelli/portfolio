import React from "react"

type Props = {
  showModal: React.Dispatch<React.SetStateAction<boolean>>,
  children: React.ReactNode
}

export default function Backdrop({ showModal, children }: Props) {
  return (
    <div className="bg-black/70 fixed top-0 left-0 w-full h-screen z-50 flex justify-center items-center" onClick={() => showModal(false)}>
      { children }
    </div>
  )
}