import express from 'express'
import cors from 'cors'
import tripRoutes from './routes/trips.js'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">✈️ OnTheFly API</h1>')
})

app.use('/trips', tripRoutes)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`)
})

const router = express.Router()

router.get('/', TripsController.getTrips)
router.get('/:id', TripsController.getTrip)
router.post('/', TripsController.createTrip)
router.delete('/:id', TripsController.deleteTrip)
router.patch('/:id', TripsController.updateTrip)

export default router

