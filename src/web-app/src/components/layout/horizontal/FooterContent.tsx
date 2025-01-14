'use client'

// Third-party Imports
import classnames from 'classnames'

// Util Imports
import { horizontalLayoutClasses } from '@layouts/utils/layoutClasses'

const FooterContent = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className={classnames(
        horizontalLayoutClasses.footerContent,
        'flex items-center justify-center flex-wrap gap-4 px-4 py-1'
      )}
    >
      <p className='text-sm text-gray-600 text-center'>
        &copy; {currentYear} <span className='text-primary font-semibold'>InnoLink</span> | Powered by{' '}
        <span className='font-semibold'>STI Innovation Hub</span>
        <br />
        All rights reserved.
      </p>
    </footer>
  )
}

export default FooterContent
