import React from 'react'
import styled from 'styled-components'
import { currentlyLearning } from '../../data/constants'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 60px 0px;
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
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

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 28px;
  width: 100%;
`

const Card = styled.div`
  width: 100%;
  max-width: 560px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  padding: 24px 28px;
  background-color: ${({ theme }) => theme.card};
  border: 0.1px solid #306EE8;
  display: flex;
  align-items: flex-start;
  gap: 20px;
`

const Logo = styled.img`
  height: 50px;
  width: 50px;
  object-fit: contain;
  border-radius: 8px;
  background-color: #000;
  padding: 4px;
  margin-top: 4px;
`

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const CardTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`

const CardIssuer = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
`

const StatusBadge = styled.span`
  display: inline-block;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 0.2) 0%, hsla(294, 100%, 50%, 0.2) 100%);
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  padding: 3px 12px;
  font-size: 12px;
  font-weight: 600;
  width: fit-content;
`

const CardDesc = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 'cc'};
  margin-top: 4px;
  line-height: 1.5;
`

const LifelongLearner = () => {
  return (
    <Container id="learning">
      <Wrapper>
        <Title>Lifelong Learner</Title>
        <Desc>Always growing — here's what I'm currently studying.</Desc>
        <CardList>
          {currentlyLearning.map((item) => (
            <Card key={item.id}>
              <Logo src={item.image} alt={item.title} />
              <CardBody>
                <CardTitle>{item.title}</CardTitle>
                <CardIssuer>{item.issuer}</CardIssuer>
                <StatusBadge>{item.status}</StatusBadge>
                <CardDesc>{item.desc}</CardDesc>
              </CardBody>
            </Card>
          ))}
        </CardList>
      </Wrapper>
    </Container>
  )
}

export default LifelongLearner
