import { Meta, Story } from '@storybook/react';
import { dummyHeroIllustration } from '../helpers/dummy';
import { IHeroIllustrationProps } from '../types/components';
import { HeroIllustration } from './hero-illustration';

export default {
  title: 'Components/Heroes/Illustration',
  component: HeroIllustration,
  argTypes: {
    title: {
      name: 'Title',
    },
    description: {
      name: 'Description',
    },
    image: {
      name: 'Illustration',
    },
    flipped: {
      name: 'Flip Orientation',
    },
    link: {
      name: 'Link',
    },
  },
} as Meta;

const Template: Story<IHeroIllustrationProps> = args => (
  <>
    <HeroIllustration {...args} />
    <HeroIllustration {...args} flipped={false} />
    <HeroIllustration {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = dummyHeroIllustration;
