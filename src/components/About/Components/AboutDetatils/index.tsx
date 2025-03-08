import React from 'react';
import { DetatilsContainer, TechsContainer, Title, Description, Tech } from './styles';

interface IAboutDetailsProps {
    title: string;
    description : string;
    techs?: {
        name : string;
        icon : React.ReactNode;
    }[];
}

const AboutDetatis = ({ title, description, techs }: IAboutDetailsProps) => {
    return (
        <DetatilsContainer>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <TechsContainer>
                {techs && techs.map((tech, index) => {
                    return (
                        <Tech key={index} >
                            {tech.icon}
                            <div>
                                <p>{tech.name}</p>
                            </div>
                        </Tech>
                    );
                })}
            </TechsContainer>
        </DetatilsContainer>
    );
};

export default AboutDetatis;