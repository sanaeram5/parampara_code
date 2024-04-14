import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #4caf50;
  color: #fff;
  text-align: center;
  padding: 20px 0;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SocialIcons = styled.div`
  display: flex;
`;

const SocialLink = styled.a`
  color: #fff;
  margin-right: 10px;
  text-decoration: none;

  &:hover {
    color: #ffd700;
  }
`;

const FooterText = styled.p`
  margin: 0;
`;

export function Footer() {
  return (
    <FooterContainer>
      <ContentWrapper>
        <SocialIcons>
        Copyright 2024. All Rights Reserved.
        </SocialIcons>
        <FooterText>
          <SocialLink href="#"><i className="fab fa-twitter"></i></SocialLink>
          <SocialLink href="#"><i className="fab fa-facebook"></i></SocialLink>
          <SocialLink href="#"><i className="fab fa-linkedin"></i></SocialLink>
          <SocialLink href="#"><i className="fab fa-instagram"></i></SocialLink>
          <SocialLink href="#"><i className="fab fa-whatsapp"></i></SocialLink>
        </FooterText>
      </ContentWrapper>
    </FooterContainer>
  );
};
