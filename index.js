const express = require('express')
const { Sequelize, DataTypes } = require('sequelize')
const Task = require('./models/task')

const app = express()
const sequelize = new Sequelize({ dialect: 'sqlite', storage: './task-list.db' })
const tasks = Task(sequelize, DataTypes)

app.use(express.json())

app.get('/tasks', (req, res) => {
  res.json({ action: 'Listing tasks' })
})

app.post('/tasks', (req, res) => {
  const body = req.body

  res.json(body)
})

app.get('/tasks/:id', (req, res) => {
  const taskId = req.params.id

  res.send({ action: 'Showing task', taskId: taskId })
})

app.put('/tasks/:id', (req, res) => {
  const taskId = req.params.id

  res.send({ action: 'Updating task', taskId: taskId })
})

app.delete('/tasks/:id', (req, res) => {
  const taskId = req.params.id

  res.send({ action: 'Deleting task', taskId: taskId })
})

app.listen(3000, () => {
  console.log('Iniciando o ExpressJS na porta 3000')
})