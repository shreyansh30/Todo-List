import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';

const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [showForm, setShowForm] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank!")
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
            setShowForm(false); // Hide the form after submit
        }
    }

    return (
        <div className='container'>
            <h3 className='my-4'>MyTodo List</h3>
            {!showForm && (
                <Button
                    variant="contained"
                    color="success"
                    startIcon={<AddIcon />}
                    onClick={() => setShowForm(true)}
                    sx={{
                        borderColor: 'success.main',
                        color: '#fff',
                        backgroundColor: 'success.main',
                        '&:hover': {
                            backgroundColor: 'success.dark',
                            borderColor: 'success.main',
                            color: '#fff'
                        }
                    }}
                >
                    Add Todo
                </Button>
            )}
            {showForm && (
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Todo Title</label>
                        <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Description</label>
                        <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                    </div>
                    <Button
                        variant="outlined"
                        color="success"
                        type="submit"
                        startIcon={<CheckIcon />}
                        sx={{
                            borderColor: 'success.main',
                            color: 'success.main',
                            '&:hover': {
                                backgroundColor: 'success.main',
                                borderColor: 'success.main',
                                color: '#fff'
                            }
                        }}
                    >
                        Submit
                    </Button>
                    <Button
                        variant="text"
                        color="error"
                        onClick={() => setShowForm(false)}
                        sx={{ ml: 1 }}
                    >
                        Cancel
                    </Button>
                </form>
            )}
        </div>
    )
}

export default AddTodo