import { carousel2v1 } from '@stories/builder/data/combs/carousel.builder';
import { hero1v1 } from '@stories/builder/data/combs/hero.builder';
import {
  showcase1v1Default,
  showcase2v1_default,
  showcase3v2_default,
  showcase3v6_default,
  showcase4v1_default,
} from '@stories/builder/data/combs/showcase.builder';

import { shuffle } from '@stories/builder/data/combs/masonry.builder';
import { text, videoBg } from '@stories/builder/data/combs/base.builder';

export const home_v1 = {
  title: '首页 v1',
  body: [
    { ...hero1v1?.content },
    { ...showcase1v1Default?.content },
    { ...showcase3v2_default?.content },
    {
      ...showcase4v1_default?.content,
      bg: { classes: 'bg-fill-width bg-shadow' },
    },
    { ...carousel2v1?.content },
    { ...showcase2v1_default?.content },
    { ...videoBg?.content },
    { ...showcase3v6_default?.content },
    { ...shuffle?.content },
    { ...text?.content },
  ],
};
