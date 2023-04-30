"use client";
import { Button, Steps, theme } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Owner from './Owner';
import Hospital from './Hospital';
import Verifier from './Verifiers';
import Dapp from './Dapp';
import NoServer from './NoServer';

export default function Demo() {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [server, setServer] = useState("");
  const steps = [
    {
      title: 'Authorize',
      content: <Owner />,
    },
    {
      title: 'Data Provider',
      content: <Hospital />,
    },
    {
      title: 'Data Analysis',
      content: <Dapp />,
    },
    {
      title: 'Verify',
      content: <Verifier />,
    },
  ];

  useEffect(() => {
    // reset
    axios
        .get('http://localhost:3000/reset_accounts', {
            headers: {
                "Content-Type": "application/json",
                from: "owner",
            },
        })
        .then((res) => {
            setServer('true')
        })
        .catch(function (error) {
            setServer('false')
        })
}, [])

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleReset = () => {
    window.location.reload();
  }

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    margin: 16,
    height: '80%',
  };
  return (
    <div>
      {server == 'true' &&
      <div>
        <Steps current={current} items={items} style={{ margin: 25, width: '95%' }}/>
        <div style={contentStyle}>{steps[current].content}</div>
        <div style={{ margin: 20 }}>
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={handleReset}>
              Reset
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: 10 }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    }
    {server == 'false' &&
      <NoServer />
    }
    </div>
  )
}
