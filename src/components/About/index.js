import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px 24px 80px 24px;
  @media (max-width: 768px) {
    padding: 40px 20px 60px 20px;
  }
`

const Inner = styled.div`
  width: 100%;
  max-width: 820px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`

const Label = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.primary + '44'};
  }
`

const LeadPara = styled.p`
  font-size: 22px;
  font-weight: 400;
  line-height: 1.75;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const Para = styled.p`
  font-size: 17px;
  font-weight: 400;
  line-height: 1.85;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const Highlight = styled.span`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
`

const ClosingBlock = styled.div`
  border-left: 3px solid ${({ theme }) => theme.primary};
  padding: 16px 24px;
  background: ${({ theme }) => theme.primary + '0d'};
  border-radius: 0 8px 8px 0;
`

const ClosingText = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.75;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const About = () => {
  return (
    <Container>
      <Inner>
        <Label>My Story</Label>

        <LeadPara>
          My path into ML didn't begin with a textbook. It began with a question —
          what if the same care I put into building user interfaces could go into
          the <Highlight>models behind them</Highlight>?
        </LeadPara>

        <Para>
          I started as a software engineer shipping React frontends, but kept getting
          pulled toward the math underneath. That pull led to an{' '}
          <Highlight>IEEE-published paper on hybrid ARIMA/LSTM stockmarket price forecasting</Highlight>,
          <Highlight>graph neural network for drug discovery</Highlight>, and{' '}
          <Highlight>two LLM-powered apps running in production today</Highlight>.
        </Para>

        <Para>
          Now I'm focused on the full arc — model development, NLP pipelines, and the
          unglamorous-but-essential <Highlight>MLOps</Highlight> that gets a notebook
          from "works on my machine" to an endpoint someone actually depends on.
        </Para>

        <ClosingBlock>
          <ClosingText>
            The best ML engineers I admire are part-scientist, part-shipper.
            I'm trying to be both.
          </ClosingText>
        </ClosingBlock>
      </Inner>
    </Container>
  )
}

export default About
