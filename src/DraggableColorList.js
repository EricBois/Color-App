import React from 'react';
import DraggableColorBox from './DraggableColorBox';
import { SortableContainer } from 'react-sortable-hoc';

const DraggableColorList = SortableContainer(({ colors, handleDelete }) => {
  return (
    <div style={{ height: '100%' }}>
      {colors.map((color, i) => (
        <DraggableColorBox
          index={i}
          key={color.color}
          color={color.color}
          name={color.name}
          handleClick={() => handleDelete(color.name)}
        />
      ))}
    </div>
  );
});

export default DraggableColorList;
