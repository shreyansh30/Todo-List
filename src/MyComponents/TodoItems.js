import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItems = ({ todos, onDelete }) => {
  return (
    <>
      <div>
        <h4>{todos.title}</h4>
        <p>{todos.desc}</p>
        <Button variant="outlined" startIcon={<DeleteIcon />} color="error" onClick={() => onDelete(todos)}
          sx={{
            borderColor: 'error.main',
            color: 'error.main',
            '&:hover': {
              backgroundColor: 'error.main',
              borderColor: 'error.main'
            }
          }}
        >
          Delete
        </Button>
      </div>
      <hr />
    </>
  )
}

export default TodoItems
