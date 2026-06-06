import React from 'react'
import styled from 'styled-components'
import { Bio } from '../../data/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0 16px;
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  padding: 0 0 80px 0;
  gap: 12px;
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

const CalendlyCard = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.card};
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  overflow: hidden;
  margin-top: 28px;
`

const CalendlyFrame = styled.iframe`
  width: 100%;
  min-height: 660px;
  border: none;
  display: block;
`

const Contact = () => {
  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Book a 30-min call — pick a time that works for you.</Desc>
        <CalendlyCard>
          <CalendlyFrame
            src={`${Bio.calendly}?embed_type=inline&hide_event_type_details=1&hide_gdpr_banner=1`}
            title="Schedule a call with Hisana"
          />
        </CalendlyCard>
      </Wrapper>
    </Container>
  )
}

export default Contact
