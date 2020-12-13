import React from 'react';
import { Button, Icon } from 'antd';

function NoResultFoundComponent({ searchParam }) {
  return (
    <div
      clasName="card-elevation"
      style={{ background: 'white', padding: '20px 10px' }}
    >
      <div className="no-record-found" />
      <br />
      <div style={{ textAlign: 'center' }}>
        <div
          dangerouslySetInnerHTML={{
            __html: `Oops... there's no blogs found here. Come back later.`,
          }}
        />
      </div>
    </div>
  );
}

export default NoResultFoundComponent;
