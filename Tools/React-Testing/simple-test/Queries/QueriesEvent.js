import React, { useState } from 'react';

const QueriesEvent = () => {
  const [isParagraphVisible, setIsParagraphVisible] = useState(false);

  return (
    <>
      <button onClick={() => setIsParagraphVisible(true)}>Show paragraph</button>
      {isParagraphVisible ? <p>A paragraph</p> : null}
    </>
  )
};

export default QueriesEvent;