'use client'

import React, { useState, useEffect, useCallback, useMemo } from 'react'

import Banner from './Banner'
import TabNavigation from './TabNavigation'
import EmptyState from './EmptyState'
import GrantCard from './GrantCard'
import PublicationCard from './PublicationCard'

interface Grant {
  id: string
  title: string
  donor: string
  amount: string
  deadline: string
  category: string
  description: string
}

interface Publication {
  id: string
  title: string
  authors: string[]
  institution: string
  publicationDate: string
  category: string
  abstract: string
}

const ResourceSharing: React.FC = () => {
  const [tabValue, setTabValue] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [filteredGrants, setFilteredGrants] = useState<Grant[]>([])
  const [filteredPublications, setFilteredPublications] = useState<Publication[]>([])

  const grants: Grant[] = useMemo(
    () => [
      {
        id: '1',
        title: 'Innovation in Agriculture Technology',
        donor: 'Uganda Agriculture Foundation',
        amount: 'UGX 180,000,000',
        deadline: '2025-03-01',
        category: 'Agriculture',
        description:
          'Funding for innovative agricultural technology solutions to improve crop yields and sustainability in Uganda.'
      },
      {
        id: '2',
        title: 'Digital Healthcare Solutions',
        donor: 'Health Innovation Fund',
        amount: 'UGX 270,000,000',
        deadline: '2025-04-15',
        category: 'Healthcare',
        description:
          'Supporting digital innovations in healthcare delivery to improve access to quality healthcare services in rural areas.'
      },
      {
        id: '3',
        title: 'Renewable Energy Projects',
        donor: 'Uganda Green Energy Initiative',
        amount: 'UGX 360,000,000',
        deadline: '2025-05-30',
        category: 'Energy',
        description:
          'Grants for projects focusing on renewable energy solutions to promote sustainable development in Uganda.'
      }
    ],
    []
  )

  const publications: Publication[] = useMemo(
    () => [
      {
        id: '1',
        title: 'Impact of Technology on Small Scale Farming in Uganda',
        authors: ['John Doe', 'Jane Smith'],
        institution: 'Makerere University',
        publicationDate: '2024-12-01',
        category: 'Agriculture',
        abstract:
          'This research examines the impact of modern technology adoption on small-scale farming practices and productivity in Uganda.'
      },
      {
        id: '2',
        title: 'Digital Financial Services in Rural Uganda',
        authors: ['Alice Johnson', 'Bob Wilson'],
        institution: 'Uganda Technology Institute',
        publicationDate: '2024-11-15',
        category: 'Finance',
        abstract:
          'Analysis of digital financial services adoption and its impact on financial inclusion in rural Uganda.'
      },
      {
        id: '3',
        title: 'Sustainable Urban Planning for Kampala',
        authors: ['Eva Namuli', 'David Ochieng'],
        institution: 'Uganda Management Institute',
        publicationDate: '2025-01-10',
        category: 'Urban Planning',
        abstract:
          'A comprehensive study on sustainable urban planning strategies for the rapidly growing city of Kampala.'
      }
    ],
    []
  )

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
    setSearchQuery('')
  }

  const handleSearch = useCallback(() => {
    setIsLoading(true)

    if (tabValue === 0) {
      setFilteredGrants(
        grants.filter(
          grant =>
            grant.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            grant.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            grant.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    } else {
      setFilteredPublications(
        publications.filter(
          publication =>
            publication.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            publication.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
            publication.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            publication.authors.some(author => author.toLowerCase().includes(searchQuery.toLowerCase()))
        )
      )
    }

    setIsLoading(false)
  }, [searchQuery, tabValue, grants, publications])

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      handleSearch()
    }, 300)

    return () => clearTimeout(debounceTimer)
  }, [searchQuery, tabValue, handleSearch])

  useEffect(() => {
    setFilteredGrants(grants)
    setFilteredPublications(publications)
  }, [grants, publications])

  return (
    <div className='min-h-screen bg-background'>
      <Banner searchQuery={searchQuery} setSearchQuery={setSearchQuery} isLoading={isLoading} />

      <TabNavigation value={tabValue} onChange={handleTabChange} />

      <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {tabValue === 0 ? (
            filteredGrants.length > 0 ? (
              filteredGrants.map(grant => <GrantCard key={grant.id} {...grant} />)
            ) : (
              <EmptyState message='No grant opportunities found matching your search.' />
            )
          ) : filteredPublications.length > 0 ? (
            filteredPublications.map(publication => <PublicationCard key={publication.id} {...publication} />)
          ) : (
            <EmptyState message='No research publications found matching your search.' />
          )}
        </div>
      </div>
    </div>
  )
}

export default ResourceSharing
