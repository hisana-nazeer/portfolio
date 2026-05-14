import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    width: 300px;
    border-radius: 10px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    padding: 16px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: all 0.3s ease-in-out;
    border: 0.1px solid #854CE6;
    &:hover {
        box-shadow: 0px 0px 20px rgba(133, 76, 230, 0.3);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px) {
        width: 280px;
        padding: 12px 14px;
    }
`

const Top = styled.div`
    display: flex;
    gap: 12px;
    align-items: flex-start;
`

const Image = styled.img`
    height: 48px;
    width: 48px;
    object-fit: contain;
    border-radius: 8px;
    background-color: #000;
    padding: 4px;
    flex-shrink: 0;
    @media only screen and (max-width: 768px) {
        height: 40px;
        width: 40px;
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`

const Title = styled.div`
    font-size: 15px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    @media only screen and (max-width: 768px) {
        font-size: 13px;
    }
`

const Issuer = styled.div`
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px) {
        font-size: 11px;
    }
`

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + '99'};
`

const Description = styled.div`
    font-size: 13px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + '99'};
    line-height: 1.5;
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`

const StatusBadge = styled.span`
    display: inline-block;
    font-size: 11px;
    font-weight: 600;
    color: #f0a500;
    background: rgba(240, 165, 0, 0.12);
    border: 1px solid rgba(240, 165, 0, 0.4);
    border-radius: 20px;
    padding: 2px 10px;
    margin-top: 4px;
    width: fit-content;
`

const CertificationCard = ({ certification }) => {
    return (
        <Card>
            <Top>
                <Image src={certification.img} alt={certification.title} />
                <Info>
                    <Title>{certification.title}</Title>
                    <Issuer>{certification.issuer}</Issuer>
                    <Date>{certification.date}</Date>
                    {certification.status && <StatusBadge>Preparing</StatusBadge>}
                </Info>
            </Top>
            <Description>{certification.desc}</Description>
        </Card>
    )
}

export default CertificationCard
