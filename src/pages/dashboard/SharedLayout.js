import { Button, Collapse } from '@mui/material'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/system'
import React, { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import BigSidebar from '../../components/BigSidebar'
import NavBar from '../../components/NavBar'
import SmallSidebar from '../../components/SmallSidebar'
import { useAppContext } from '../../context/appContext'

const SharedLayout = () => {
  const useWindowSize = () => {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    })

    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== 'undefined') {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          })
        }

        // Add event listener
        window.addEventListener('resize', handleResize)

        // Call handler right away so state gets updated with initial window size
        handleResize()

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize)
      }
    }, []) // Empty array ensures that effect is only run on mount
    return windowSize
  }

  const size = useWindowSize()
  const { showSidebar } = useAppContext()

  return (
    <>
      {' '}
      {size.width < 600 ? <SmallSidebar /> : null}
      <Box sx={{ display: 'flex' }}>
        <Box display={{ xs: 'none', sm: 'block' }}>
          <Collapse orientation='horizontal' in={showSidebar} collapsedSize={0}>
            <BigSidebar />
          </Collapse>
        </Box>

        <Box
          display={{ xs: 'span', sm: 'block' }}
          sx={{ width: '100%', background: '#f5f5f5' }}
        >
          <NavBar></NavBar>
          <Outlet />
        </Box>
      </Box>
    </>
  )
}
export default SharedLayout
