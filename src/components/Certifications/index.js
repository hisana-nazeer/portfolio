import React from 'react'
import styled from 'styled-components'
import { certifications } from '../../data/constants'
import CertificationCard from '../Cards/CertificationCard'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 20px 0px 60px 0px;
    }
`

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`

const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`

const CardGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
    margin-top: 20px;
    padding: 0 16px;
`

const Certifications = () => {
    return (
        <Container id="certifications">
            <Wrapper>
                <Title>Certifications</Title>
                <Desc>
                    Professional certifications I've earned to validate and deepen my technical expertise.
                </Desc>
                <CardGrid>
                    {certifications.map((certification) => (
                        <CertificationCard key={certification.id} certification={certification} />
                    ))}
                </CardGrid>
            </Wrapper>
        </Container>
    )
}

export default Certifications
