import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { Formik } from 'formik'
import * as Yup from "yup";
import axios from 'axios';
import { toast } from '@pheralb/toast';

function ToDoTask() {

    const [taskDetails, setTaskDetails] = useState({
        taskTitle: '',
        taskDecription: ''
    })
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        GetRecentTasks();
    }, [])

    function handleChange(e) {
        const target = e.target;
        const value = target.value;

        setTaskDetails({
            ...taskDetails,
            [e.target.name]: value
        })
    }

    function AddTask() {
        const taskModel = {
            taskTitle: taskDetails.taskTitle,
            taskDecription: taskDetails.taskDecription
        }

        axios.post('http://localhost:8000/api/task/createtask', taskModel).then((res) => {
            if (res.data > 0) {
                toast.success({
                    text: "Task added successfully !"
                })
                GetRecentTasks();
                ClearData();
            }

        })
    }

    function ClearData() {
        setTaskDetails({
            ...taskDetails,
            taskTitle: '',
            taskDecription: ''
        })
    }

    function GetRecentTasks() {
        axios.get('http://localhost:8000/api/task/getrecenttask').then((res) => {
            if (res.data.length > 0) {
                setTaskList(res.data)
            } else {
                setTaskList([])
            }
        })
    }

    function FinishTask(taskID) {
        axios.put(`http://localhost:8000/api/task/finishtask/${taskID}`).then((res) => {
            if (res.data.changedRows == 1) {
                toast.success({
                    text: "Task completed successfully !"
                })
                GetRecentTasks();
            }
        })
    }

    return (
        <Box sx={{ padding: '50px', height: '100vh' }}>
            <Grid container spacing={0}>
                <Grid size={{ md: 6, xs: 12 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: { md: 'calc(100vh - 100px)', xs: 'auto' }, borderRight: { md: '2px solid black', xs: 'none' }, borderBottom: { xs: '1px solid black', md: 'none' }, paddingBottom: { md: 'none', xs: '20px' } }}>
                    <Box sx={{ textAlign: 'start', width: '90%', height: { md: '400px', xs: 'auto' }, borderRadius: '20px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', padding: '15px' }}>
                        <Typography sx={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>
                            Add a task
                        </Typography>
                        <Formik
                            initialValues={{
                                taskTitle: taskDetails.taskTitle,
                                taskDecription: taskDetails.taskDecription,
                            }}

                            validationSchema={
                                Yup.object().shape({
                                    taskTitle: Yup.string().required('Task title is required'),
                                    taskDecription: Yup.string().required('Task description is required'),
                                })
                            }
                            onSubmit={() => AddTask()}
                            enableReinitialize
                        >
                            {({
                                errors,
                                handleBlur,
                                handleSubmit,
                                touched
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <Grid container spacing={2}>
                                        <Grid size={{ md: 12, xs: 12 }}>
                                            <TextField
                                                fullWidth
                                                error={Boolean(touched.taskTitle && errors.taskTitle)}
                                                helperText={touched.taskTitle && errors.taskTitle}
                                                name='taskTitle'
                                                value={taskDetails.taskTitle}
                                                id='taskTitle'
                                                onChange={(e) => handleChange(e)}
                                                variant="outlined"
                                                size="small"
                                                type='text'
                                                placeholder='Task Title'
                                            />
                                        </Grid>
                                        <Grid size={{ md: 12, xs: 12 }}>
                                            <TextField
                                                fullWidth
                                                multiline
                                                minRows={5}
                                                error={Boolean(touched.taskDecription && errors.taskDecription)}
                                                helperText={touched.taskDecription && errors.taskDecription}
                                                name='taskDecription'
                                                value={taskDetails.taskDecription}
                                                id='taskDecription'
                                                onChange={(e) => handleChange(e)}
                                                variant="outlined"
                                                size="small"
                                                type='text'
                                                placeholder='Task Description'
                                                inputProps={{
                                                    style: {
                                                        maxHeight: "150px",
                                                        overflowY: "auto"
                                                    }
                                                }}
                                                sx={{
                                                    "& .MuiInputBase-inputMultiline": {
                                                        overflowY: "auto !important"
                                                    }
                                                }}
                                            />
                                        </Grid>
                                        <Grid size={{ md: 12, xs: 12 }} sx={{ display: 'flex', justifyContent: 'end' }}>
                                            <Button
                                                variant="contained"
                                                type='submit'
                                                sx={{ width: { md: '200px', xs: '100px' }, textTransform: 'none' }}
                                            >
                                                Add
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            )}
                        </Formik>

                    </Box>
                </Grid>
                <Grid size={{ md: 6, xs: 12 }} sx={{ display: 'flex', justifyContent: 'center', paddingTop: { md: 'none', xs: '20px' } }}>
                    <Box sx={{ width: { md: '90%', xs: '100%' }, display: 'flex', justifyContent: 'center', flexDirection: 'column' }} >
                        {taskList.map((data, index) => (
                            <Box key={index} sx={{ background: '#EEEEEE', borderRadius: '5px', marginBottom: '10px', padding: '10px' }}>
                                <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>{data.TaskTitle}</Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            fontSize: '13px',
                                            paddingRight: '5px',
                                            maxHeight: '60px', // limit visible height
                                            overflowY: 'auto', // add vertical scrollbar when text overflows
                                            wordBreak: 'break-word', // break long words
                                            flex: 1, // take available space
                                        }}
                                    >
                                        <Typography sx={{ fontSize: '12px', fontFamily: 'Raleway, sans-serif', fontWeight: '500' }}>
                                            {data.TaskDescription}
                                        </Typography>

                                    </Box>
                                    <Button variant="outlined" size="small" sx={{ marginLeft: '10px', textTransform: 'none' }} onClick={() => FinishTask(data.TaskID)}>
                                        Done
                                    </Button>
                                </Box>
                            </Box>
                        ))}

                    </Box>
                </Grid>
            </Grid>
        </Box >
    )
}

export default ToDoTask