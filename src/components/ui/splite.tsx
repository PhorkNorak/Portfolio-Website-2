'use client'

import React, { useEffect, useRef, useState } from 'react'
const Loading = () => (
  <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
    <div className="h-10 w-10 rounded-full border-2 border-gray-300 border-t-blue-500 animate-spin" />
  </div>
)

interface SplineSceneProps {
  scene: string
  className?: string
  lazy?: boolean
  idleDelayMs?: number
  minWidthToMount?: number
}

export function SplineScene({ scene, className, lazy = true, idleDelayMs = 800, minWidthToMount = 768 }: SplineSceneProps) {
  const [shouldMount, setShouldMount] = useState(!lazy)
  const [disabled, setDisabled] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!lazy) return

    // Respect reduced motion preference
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setDisabled(true)
      return
    }

    // Skip on small screens
    if (typeof window !== 'undefined' && window.innerWidth < minWidthToMount) return

    let timeoutId: number | undefined
    let observer: IntersectionObserver | undefined

    const onVisible = () => {
      // Mount after the browser is idle or after a small delay
      type RequestIdleCallback = (
        callback: (deadline: { didTimeout: boolean; timeRemaining: () => number }) => void,
        opts?: { timeout: number }
      ) => number
      const ric = (window as unknown as { requestIdleCallback?: RequestIdleCallback }).requestIdleCallback
      if (typeof ric === 'function') {
        ric(() => setShouldMount(true), { timeout: idleDelayMs })
      } else {
        timeoutId = window.setTimeout(() => setShouldMount(true), idleDelayMs)
      }
      // Dynamically import the web component when we decide to mount
      import('@splinetool/viewer').catch(() => {})
    }

    if (containerRef.current && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          onVisible()
          if (observer) {
            observer.disconnect()
          }
        }
      }, { root: null, threshold: 0.1 })

      observer.observe(containerRef.current)
    } else {
      // Fallback: mount after delay
      timeoutId = window.setTimeout(() => setShouldMount(true), idleDelayMs)
    }

    return () => {
      if (observer) observer.disconnect()
      if (timeoutId) window.clearTimeout(timeoutId)
    }
  }, [lazy, idleDelayMs, minWidthToMount])

  // Ensure the web component is registered when we decide to mount (covers non-lazy too)
  useEffect(() => {
    if (shouldMount) {
      import('@splinetool/viewer').catch(() => {})
    }
  }, [shouldMount])

  return (
    <div ref={containerRef} className={className}>
      {shouldMount ? (
        React.createElement('spline-viewer', {
          url: scene,
          loading: 'lazy',
          className: 'w-full h-full'
        })
      ) : disabled ? (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800" />
      ) : (
        <Loading />
      )}
    </div>
  )
}
