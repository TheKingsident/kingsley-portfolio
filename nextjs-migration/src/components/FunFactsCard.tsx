import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import CardBackground from './CardBackground';

interface FunFactsCardProps {
  icon: IconDefinition;
  title: string;
  description: string;
}

const FunFactsCard: React.FC<FunFactsCardProps> = ({ icon, title, description }) => {
  return (
    <CardBackground className="h-full">
      <div className="text-center">
        <FontAwesomeIcon 
          icon={icon} 
          className="text-3xl text-orange-500 mb-3" 
        />
        <h4 className="text-lg font-semibold text-black mb-2">
          {title}
        </h4>
        <p className="text-gray-500 text-sm leading-relaxed">
          &ldquo;{description}&rdquo;
        </p>
      </div>
    </CardBackground>
  );
};

export default FunFactsCard;