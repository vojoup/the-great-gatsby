import React from 'react';
import { graphql } from 'gatsby';

import './styles.css';
import './resets.css';

export default ({ data, transition }) => (
  <div>
    <div
      style={transition && transition.style}
      dangerouslySetInnerHTML={{ __html: data.slide.html }}
    />
  </div>
);

export const query = graphql`
  query SlideQuery($index: Int!) {
    slide(index: { eq: $index }) {
      html
      index
    }
  }
`;
