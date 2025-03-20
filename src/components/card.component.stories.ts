import { StoryFn, Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import './card.component';

export default {
    title: 'Components/Card',
    component: 'app-card',
    argTypes: {
        heading: { control: 'text' },
        description: { control: 'text' },
        ctaText: { control: 'text' },
        secondaryCtaText: { control: 'text' },
        additionalInfo: { control: 'text' },
        hasMedia: { control: 'boolean' },
        isFavorite: { control: 'boolean' },
    },
} as Meta;

interface CardProps {
    heading: string;
    description: string;
    ctaText: string;
    secondaryCtaText: string;
    additionalInfo: string;
    hasMedia: boolean;
    isFavorite: boolean;
}

const Template: StoryFn<CardProps> = ({ heading, description, ctaText, secondaryCtaText, additionalInfo, hasMedia, isFavorite }) => html`
  <app-card
    .heading=${heading}
    .description=${description}
    .ctaText=${ctaText}
    .secondaryCtaText=${secondaryCtaText}
    .additionalInfo=${additionalInfo}
    .hasMedia=${hasMedia}
    .isFavorite=${isFavorite}
  ></app-card>
`;

export const Default = Template.bind({});
Default.args = {
    heading: 'Card Heading',
    description: 'This is a description of the card.',
    ctaText: 'Primary CTA',
    secondaryCtaText: 'Secondary CTA',
    additionalInfo: 'Additional information here.',
    hasMedia: false,
    isFavorite: false,
};

export const WithMedia = Template.bind({});
WithMedia.args = {
    ...Default.args,
    hasMedia: true,
};

export const Favorite = Template.bind({});
Favorite.args = {
    ...Default.args,
    isFavorite: true,
};