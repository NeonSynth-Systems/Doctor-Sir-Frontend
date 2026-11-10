import React from 'react'

const HomePreloader = () => {
  return (
    <div className="fixed inset-0 z-99999 flex flex-col items-center justify-center bg-emerald-950">

      {/* Logo or website name */}
      <h1 className="text-3xl font-bold text-white tracking-wide">
        Doctor Sir
      </h1>

      <p className="mt-2 text-sm text-blue-200">
        Biology Learning Platform
      </p>

      {/* Loading animation */}
      <div className="mt-10 h-12 w-12 rounded-full border-4 border-blue-300/20 border-t-blue-400 animate-spin" />

      <p className="mt-5 text-sm text-white/70 animate-pulse">
        Loading your experience...
      </p>

    </div>
  )
}

export default HomePreloader