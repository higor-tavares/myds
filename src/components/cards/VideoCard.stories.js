import VideoCard  from './VideoCard';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Cards/VideoCard',
  component: VideoCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export const Primary = {
    args: {
        title: "Video Title",
        info: "116 views",
        tumbnail: "https://picsum.photos/200",
        description: "Awesome VideoCard component"
    }
};
