import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-item">
            <div className="accordion-header" onClick={toggleAccordion}>
                <div className="accordion-title">{title}</div>
                <div className={`accordion-icon ${isOpen ? 'open' : ''}`}>&#9660;</div>
            </div>
            {isOpen && <div className="accordion-content">{content}</div>}
        </div>
    );
};

const Accordion = () => {
    const accordionItems = [
        { title: 'Section 1', content: 'Content for section 1' },
        { title: 'Section 2', content: 'Content for section 2' },
        // Add more items as needed
    ];

    return (
        <div className="accordion">
            {accordionItems.map((item, index) => (
                <AccordionItem key={index} title={item.title} content={item.content} />
            ))}
        </div>
    );
};

export default Accordion;
