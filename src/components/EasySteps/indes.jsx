import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import React from 'react';


import './index.css';

const EasySteps = () => {
    const AccordionItemm = ({ header, number, ...rest }) => {

        return (
            <AccordionItem
                {...rest}
                header={
                    <div className='accordionItem-block'>
                        <span className='accordionItem-block__cicle'>{number}</span>
                        {header}
                        {/* <img src={arrow} alt="Chevron Down" /> */}
                        <div></div>
                    </div>
                }
                className={'styles.item'}
                buttonProps={{
                    className: ({ isEnter }) =>
                        `${`${isEnter ? 'red' : 'blue'}`}`
                }}
                contentProps={{ className: 'styles.itemContent' }}
                panelProps={{ className: 'itemText' }}
            />
        )
    };

    return (
        <section className='easySteps'>
            <h2 className='easySteps__title'>
                All you need to do
                is <span>3 easy steps</span>.
            </h2>
            <Accordion >
                <AccordionItemm header='Install Clario' number='1' initialEntered>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </AccordionItemm>

                <AccordionItemm header="Set up your protection" number='2'>
                    Quisque eget luctus mi, vehicula mollis lorem.
                </AccordionItemm>

                <AccordionItemm header="Enjoy spy-free life" number='3'>
                    Suspendisse massa risus, pretium id interdum in.
                </AccordionItemm>
            </Accordion>
        </section>
    )
}


export default EasySteps;